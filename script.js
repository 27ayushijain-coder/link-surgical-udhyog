/**
 * Link Surgical Udhyog - Core Application Script
 * Firm: Link Surgical Udhyog (Ratwai Village, Gwalior district, Madhya Pradesh)
 * Established: 2020 | Sole Proprietorship
 * GSTIN: 23AHHPJ8138Q1ZT
 * Products: Absorbent Bleached Surgical Cotton Rolls & Diya Cotton Wicks
 */

// ============================================================================
// 1. BUSINESS CONFIGURATION & FORMSPREE ENDPOINT
// ============================================================================
const FACTORY_CONFIG = {
  phone: "9425112345",
  formattedPhone: "+91 94251 12345",
  whatsappNumber: "919425112345",
  email: "linksurgicaludhyog@gmail.com",
  gstNumber: "23AHHPJ8138Q1ZT",
  address: "Ratwai Village, Gwalior District, Madhya Pradesh - 474005, India"
};

/**
 * FORMSPREE ENDPOINT CONFIGURATION
 * ----------------------------------------------------------------------------
 * 1. Create a free form at https://formspree.io
 * 2. Copy your form URL (e.g. "https://formspree.io/f/mqkvnzyz")
 * 3. Replace the placeholder string below with your actual Formspree endpoint URL:
 */
const FORMSPREE_ENDPOINT = "[PASTE YOUR FORMSPREE ENDPOINT HERE]";

// ============================================================================
// 2. DOM CONTENT LOADED INITIALIZATION
// ============================================================================
document.addEventListener("DOMContentLoaded", function () {
  initMobileDrawer();
  initEnquiryForm();
  initFormFromUrlParams();
});

// ============================================================================
// 3. ACCESSIBLE MOBILE NAVIGATION DRAWER
// ============================================================================
function initMobileDrawer() {
  const toggleBtn = document.getElementById("hamburgerBtn");
  const drawer = document.getElementById("mobileDrawer");

  if (!toggleBtn || !drawer) return;

  // Toggle drawer on button click
  toggleBtn.addEventListener("click", function (e) {
    e.stopPropagation();
    const isOpen = drawer.classList.toggle("open");
    toggleBtn.setAttribute("aria-expanded", isOpen ? "true" : "false");
  });

  // Close drawer when clicking outside
  document.addEventListener("click", function (e) {
    if (drawer.classList.contains("open") && !drawer.contains(e.target) && !toggleBtn.contains(e.target)) {
      drawer.classList.remove("open");
      toggleBtn.setAttribute("aria-expanded", "false");
    }
  });

  // Close drawer on Escape key for keyboard accessibility
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape" && drawer.classList.contains("open")) {
      drawer.classList.remove("open");
      toggleBtn.setAttribute("aria-expanded", "false");
      toggleBtn.focus();
    }
  });

  // Close drawer when clicking any link inside it
  const drawerLinks = drawer.querySelectorAll("a");
  drawerLinks.forEach(function (link) {
    link.addEventListener("click", function () {
      drawer.classList.remove("open");
      toggleBtn.setAttribute("aria-expanded", "false");
    });
  });
}

// ============================================================================
// 4. BUSINESS ENQUIRY FORM VALIDATION & FORMSPREE SUBMISSION (contact-us.html)
// ============================================================================
function initEnquiryForm() {
  const form = document.getElementById("enquiryForm");
  if (!form) return;

  // Form field elements
  const fullNameInput = document.getElementById("fullName");
  const businessNameInput = document.getElementById("businessName");
  const mobileNumberInput = document.getElementById("mobileNumber");
  const emailAddressInput = document.getElementById("emailAddress");
  const productInterestSelect = document.getElementById("productInterest");
  const orderQuantityInput = document.getElementById("orderQuantity");
  const messageTextarea = document.getElementById("message");

  // Actions & UI elements
  const submitBtn = document.getElementById("submitEnquiryBtn");
  const btnSpinner = document.getElementById("btnSpinner");
  const btnSubmitText = document.getElementById("btnSubmitText");
  const btnSubmitIcon = document.getElementById("btnSubmitIcon");
  const formAlertBox = document.getElementById("formAlertBox");
  const directWhatsAppBtn = document.getElementById("directWhatsAppBtn");

  // Success view elements
  const formSuccessView = document.getElementById("formSuccessView");
  const successDetailText = document.getElementById("successDetailText");
  const successWaBtn = document.getElementById("successWaBtn");
  const resetEnquiryBtn = document.getElementById("resetEnquiryBtn");

  let isSubmitting = false;

  // --------------------------------------------------------------------------
  // Validation Rules
  // --------------------------------------------------------------------------
  function validateFullName(val) {
    const trimmed = (val || "").trim();
    if (!trimmed) {
      return "Please enter your full name.";
    }
    if (trimmed.length < 2) {
      return "Full name must be at least 2 characters long.";
    }
    return null;
  }

  function validateBusinessName(val) {
    const trimmed = (val || "").trim();
    if (!trimmed) {
      return "Please enter your business or shop name.";
    }
    if (trimmed.length < 2) {
      return "Business name must be at least 2 characters long.";
    }
    return null;
  }

  function cleanMobileNumber(val) {
    let clean = (val || "").trim().replace(/[\s\-\(\)\.]/g, "");
    if (clean.startsWith("+91")) clean = clean.slice(3);
    if (clean.startsWith("91") && clean.length === 12) clean = clean.slice(2);
    if (clean.startsWith("0") && clean.length === 11) clean = clean.slice(1);
    return clean;
  }

  function validateMobileNumber(val) {
    const rawTrimmed = (val || "").trim();
    if (!rawTrimmed) {
      return "Please enter your 10-digit mobile number.";
    }
    const clean = cleanMobileNumber(rawTrimmed);
    if (!/^\d+$/.test(clean)) {
      return "Mobile number must contain digits only.";
    }
    if (clean.length !== 10) {
      return `Mobile number must be exactly 10 digits (currently ${clean.length} digits).`;
    }
    if (!/^[6-9]/.test(clean)) {
      return "Please enter a valid Indian mobile number starting with 6, 7, 8, or 9.";
    }
    return null;
  }

  function validateEmailAddress(val) {
    const trimmed = (val || "").trim();
    if (!trimmed) {
      return null; // Email is optional
    }
    // Standard RFC-compliant email regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[a-zA-Z]{2,}$/;
    if (!emailRegex.test(trimmed)) {
      return "Please enter a valid email address (e.g. name@example.com) or leave blank.";
    }
    return null;
  }

  function validateProductInterest(val) {
    const trimmed = (val || "").trim();
    if (!trimmed) {
      return "Please select a product of interest from the dropdown.";
    }
    const allowed = ["Surgical Cotton Rolls", "Cotton Wicks", "Both Products"];
    if (!allowed.includes(trimmed)) {
      return "Please select a valid product option.";
    }
    return null;
  }

  function validateOrderQuantity(val) {
    const trimmed = (val || "").trim();
    if (!trimmed) {
      return "Please specify your approximate order quantity (e.g. 100 rolls, 500 packets, or 5 bags).";
    }
    return null;
  }

  function validateMessage(val) {
    const trimmed = (val || "").trim();
    if (trimmed.length > 2000) {
      return "Message cannot exceed 2000 characters.";
    }
    return null; // Message is optional
  }

  // --------------------------------------------------------------------------
  // Error Display & Live Correction Handlers
  // --------------------------------------------------------------------------
  function setFieldError(inputEl, errorElId, errorMsg) {
    const groupEl = inputEl.closest(".form-group");
    const errorEl = document.getElementById(errorElId);

    if (errorMsg) {
      if (groupEl) groupEl.classList.add("has-error");
      inputEl.setAttribute("aria-invalid", "true");
      if (errorEl) {
        errorEl.textContent = errorMsg;
        errorEl.style.display = "block";
      }
    } else {
      if (groupEl) groupEl.classList.remove("has-error");
      inputEl.setAttribute("aria-invalid", "false");
      if (errorEl) {
        errorEl.textContent = "";
        errorEl.style.display = "none";
      }
    }
  }

  function clearFieldError(inputEl, errorElId) {
    setFieldError(inputEl, errorElId, null);
  }

  function showGlobalAlert(message, type) {
    if (!formAlertBox) return;
    formAlertBox.textContent = message;
    formAlertBox.className = "form-alert-box " + (type === "error" ? "alert-error" : "alert-success");
    formAlertBox.style.display = "block";
    formAlertBox.scrollIntoView({ behavior: "smooth", block: "center" });
  }

  function hideGlobalAlert() {
    if (!formAlertBox) return;
    formAlertBox.textContent = "";
    formAlertBox.style.display = "none";
  }

  // Live validation on user typing / selecting (removes error as soon as corrected)
  if (fullNameInput) {
    fullNameInput.addEventListener("input", function () {
      if (fullNameInput.getAttribute("aria-invalid") === "true") {
        setFieldError(fullNameInput, "fullNameError", validateFullName(fullNameInput.value));
      }
    });
  }

  if (businessNameInput) {
    businessNameInput.addEventListener("input", function () {
      if (businessNameInput.getAttribute("aria-invalid") === "true") {
        setFieldError(businessNameInput, "businessNameError", validateBusinessName(businessNameInput.value));
      }
    });
  }

  if (mobileNumberInput) {
    mobileNumberInput.addEventListener("input", function () {
      if (mobileNumberInput.getAttribute("aria-invalid") === "true") {
        setFieldError(mobileNumberInput, "mobileNumberError", validateMobileNumber(mobileNumberInput.value));
      }
    });
  }

  if (emailAddressInput) {
    emailAddressInput.addEventListener("input", function () {
      if (emailAddressInput.getAttribute("aria-invalid") === "true") {
        setFieldError(emailAddressInput, "emailAddressError", validateEmailAddress(emailAddressInput.value));
      }
    });
  }

  if (productInterestSelect) {
    productInterestSelect.addEventListener("change", function () {
      setFieldError(productInterestSelect, "productInterestError", validateProductInterest(productInterestSelect.value));
    });
  }

  if (orderQuantityInput) {
    orderQuantityInput.addEventListener("input", function () {
      if (orderQuantityInput.getAttribute("aria-invalid") === "true") {
        setFieldError(orderQuantityInput, "orderQuantityError", validateOrderQuantity(orderQuantityInput.value));
      }
    });
  }

  if (messageTextarea) {
    messageTextarea.addEventListener("input", function () {
      if (messageTextarea.getAttribute("aria-invalid") === "true") {
        setFieldError(messageTextarea, "messageError", validateMessage(messageTextarea.value));
      }
    });
  }

  // --------------------------------------------------------------------------
  // Form Submit Handler (Fetch API + Accessible States)
  // --------------------------------------------------------------------------
  form.addEventListener("submit", async function (event) {
    event.preventDefault();

    if (isSubmitting) return; // Prevent duplicate submissions

    hideGlobalAlert();

    // Validate all fields
    const fullNameErr = validateFullName(fullNameInput.value);
    const businessNameErr = validateBusinessName(businessNameInput.value);
    const mobileNumberErr = validateMobileNumber(mobileNumberInput.value);
    const emailAddressErr = validateEmailAddress(emailAddressInput.value);
    const productInterestErr = validateProductInterest(productInterestSelect.value);
    const orderQuantityErr = validateOrderQuantity(orderQuantityInput.value);
    const messageErr = validateMessage(messageTextarea.value);

    // Apply errors to UI
    setFieldError(fullNameInput, "fullNameError", fullNameErr);
    setFieldError(businessNameInput, "businessNameError", businessNameErr);
    setFieldError(mobileNumberInput, "mobileNumberError", mobileNumberErr);
    setFieldError(emailAddressInput, "emailAddressError", emailAddressErr);
    setFieldError(productInterestSelect, "productInterestError", productInterestErr);
    setFieldError(orderQuantityInput, "orderQuantityError", orderQuantityErr);
    setFieldError(messageTextarea, "messageError", messageErr);

    // Check if any errors exist
    const hasErrors = Boolean(
      fullNameErr ||
      businessNameErr ||
      mobileNumberErr ||
      emailAddressErr ||
      productInterestErr ||
      orderQuantityErr ||
      messageErr
    );

    if (hasErrors) {
      // Focus the first invalid field for screen reader and keyboard accessibility
      const errorMap = [
        { err: fullNameErr, el: fullNameInput },
        { err: businessNameErr, el: businessNameInput },
        { err: mobileNumberErr, el: mobileNumberInput },
        { err: emailAddressErr, el: emailAddressInput },
        { err: productInterestErr, el: productInterestSelect },
        { err: orderQuantityErr, el: orderQuantityInput },
        { err: messageErr, el: messageTextarea }
      ];

      const firstInvalid = errorMap.find(item => item.err);
      if (firstInvalid && firstInvalid.el) {
        firstInvalid.el.focus();
        firstInvalid.el.scrollIntoView({ behavior: "smooth", block: "center" });
      }
      return; // Stop submission
    }

    // Prepare payload
    const cleanMobile = cleanMobileNumber(mobileNumberInput.value);
    const payload = {
      name: fullNameInput.value.trim(),
      business: businessNameInput.value.trim(),
      mobile: cleanMobile,
      email: emailAddressInput.value.trim() || "Not provided",
      product: productInterestSelect.value,
      quantity: orderQuantityInput.value.trim(),
      message: messageTextarea.value.trim() || "None",
      submittedAt: new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" }),
      _subject: `New Wholesale Price Enquiry from ${businessNameInput.value.trim()} (${fullNameInput.value.trim()})`
    };

    // Update button to submitting loading state
    isSubmitting = true;
    submitBtn.disabled = true;
    if (btnSpinner) btnSpinner.style.display = "inline-block";
    if (btnSubmitIcon) btnSubmitIcon.style.display = "none";
    if (btnSubmitText) btnSubmitText.textContent = "Submitting Enquiry...";

    // Check if endpoint is still unconfigured placeholder
    if (
      FORMSPREE_ENDPOINT.includes("YOUR_FORM_ID") ||
      FORMSPREE_ENDPOINT.includes("PASTE YOUR FORMSPREE") ||
      !FORMSPREE_ENDPOINT.startsWith("http")
    ) {
      // Graceful notification explaining placeholder configuration
      showGlobalAlert(
        "Notice: The form endpoint in script.js is currently set to the placeholder ('" +
        FORMSPREE_ENDPOINT +
        "'). To receive submissions directly to your email, please paste your actual Formspree URL into the FORMSPREE_ENDPOINT constant in script.js. In the meantime, you can send your enquiry immediately using the WhatsApp button below.",
        "error"
      );

      // Restore button state
      isSubmitting = false;
      submitBtn.disabled = false;
      if (btnSpinner) btnSpinner.style.display = "none";
      if (btnSubmitIcon) btnSubmitIcon.style.display = "inline";
      if (btnSubmitText) btnSubmitText.textContent = "Submit Price Quote Enquiry";
      return;
    }

    // Submit via Fetch API
    try {
      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify(payload)
      });

      if (response.ok) {
        // Successful submission (HTTP 200/201)
        form.reset();

        // Clear all field error states
        [fullNameInput, businessNameInput, mobileNumberInput, emailAddressInput, productInterestSelect, orderQuantityInput, messageTextarea].forEach(el => {
          if (el) {
            const group = el.closest(".form-group");
            if (group) group.classList.remove("has-error");
            el.setAttribute("aria-invalid", "false");
          }
        });

        // Hide form, show success message
        form.style.display = "none";
        if (formSuccessView) {
          formSuccessView.style.display = "block";
          formSuccessView.setAttribute("tabindex", "-1");
          formSuccessView.focus();
        }

        // Populate personalized success details safely
        if (successDetailText) {
          successDetailText.innerHTML = `Thank you <strong>${escapeHtml(payload.name)}</strong> (${escapeHtml(payload.business)}). Your price quote inquiry for <strong>${escapeHtml(payload.product)}</strong> (Quantity: <strong>${escapeHtml(payload.quantity)}</strong>) has been submitted successfully. Our factory supervisor at Ratwai, Gwalior will contact you at <strong>${escapeHtml(payload.mobile)}</strong> with factory-direct rates.`;
        }

        // Configure WhatsApp instant follow-up button on success view
        if (successWaBtn) {
          const waText =
            `*New Price Quote Enquiry via Website*\n\n` +
            `*Buyer Name:* ${payload.name}\n` +
            `*Business Name:* ${payload.business}\n` +
            `*Mobile Number:* ${payload.mobile}\n` +
            (payload.email !== "Not provided" ? `*Email:* ${payload.email}\n` : "") +
            `*Product of Interest:* ${payload.product}\n` +
            `*Order Quantity:* ${payload.quantity}\n` +
            (payload.message !== "None" ? `*Notes:* ${payload.message}\n` : "") +
            `\n_(Submitted via Link Surgical Udhyog Contact Form)_`;

          successWaBtn.href = `https://wa.me/${FACTORY_CONFIG.whatsappNumber}?text=${encodeURIComponent(waText)}`;
        }
      } else {
        // Server returned an error (e.g. HTTP 400, 422, 500)
        let errorMsg = "Unable to process your enquiry. Please check your details and try again.";
        try {
          const errData = await response.json();
          if (errData && errData.errors && errData.errors.length > 0) {
            errorMsg = errData.errors.map(e => e.message).join(", ");
          } else if (errData && errData.error) {
            errorMsg = errData.error;
          }
        } catch (_) {}

        showGlobalAlert(`Submission failed (${response.status}): ${errorMsg}. Please try again or contact us directly at +91 ${FACTORY_CONFIG.phone}.`, "error");
      }
    } catch (networkError) {
      // Network disconnect or offline
      showGlobalAlert(
        "Network connection error: Could not reach the submission server. Please check your internet connection or contact our factory directly on WhatsApp / Phone (+91 " +
        FACTORY_CONFIG.phone +
        ").",
        "error"
      );
    } finally {
      // Restore submit button state
      isSubmitting = false;
      submitBtn.disabled = false;
      if (btnSpinner) btnSpinner.style.display = "none";
      if (btnSubmitIcon) btnSubmitIcon.style.display = "inline";
      if (btnSubmitText) btnSubmitText.textContent = "Submit Price Quote Enquiry";
    }
  });

  // --------------------------------------------------------------------------
  // Reset Form Handler (Submit Another Quote)
  // --------------------------------------------------------------------------
  if (resetEnquiryBtn) {
    resetEnquiryBtn.addEventListener("click", function () {
      form.reset();
      hideGlobalAlert();

      // Clear all errors
      [fullNameInput, businessNameInput, mobileNumberInput, emailAddressInput, productInterestSelect, orderQuantityInput, messageTextarea].forEach(el => {
        if (el) {
          const group = el.closest(".form-group");
          if (group) group.classList.remove("has-error");
          el.setAttribute("aria-invalid", "false");
        }
      });

      if (formSuccessView) formSuccessView.style.display = "none";
      form.style.display = "block";

      if (fullNameInput) {
        fullNameInput.focus();
        fullNameInput.scrollIntoView({ behavior: "smooth", block: "center" });
      }
    });
  }

  // --------------------------------------------------------------------------
  // Direct WhatsApp Button from Form
  // --------------------------------------------------------------------------
  if (directWhatsAppBtn) {
    directWhatsAppBtn.addEventListener("click", function () {
      const name = fullNameInput ? fullNameInput.value.trim() : "";
      const business = businessNameInput ? businessNameInput.value.trim() : "";
      const phone = mobileNumberInput ? mobileNumberInput.value.trim() : "";
      const product = productInterestSelect ? productInterestSelect.value : "";
      const quantity = orderQuantityInput ? orderQuantityInput.value.trim() : "";
      const message = messageTextarea ? messageTextarea.value.trim() : "";

      let waMsg = `Namaste Link Surgical Udhyog,\nI would like to request factory wholesale rates:`;
      if (product) waMsg += `\n- Product: ${product}`;
      if (quantity) waMsg += `\n- Quantity: ${quantity}`;
      if (name) waMsg += `\n- Buyer: ${name}`;
      if (business) waMsg += `\n- Business: ${business}`;
      if (phone) waMsg += `\n- Mobile: ${phone}`;
      if (message) waMsg += `\n- Notes: ${message}`;
      waMsg += `\n\n_(Factory direct enquiry from website)_`;

      const waUrl = `https://wa.me/${FACTORY_CONFIG.whatsappNumber}?text=${encodeURIComponent(waMsg)}`;
      window.open(waUrl, "_blank", "noopener,noreferrer");
    });
  }
}

// ============================================================================
// 5. URL QUERY PARAMETER PARSER & QUOTE ROUTING
// ============================================================================
/**
 * Pre-fills the contact form when visitors arrive from product links
 * e.g. contact-us.html?product=Absorbent+Bleached+Cotton&pack=500+gm+Net+Weight
 */
function initFormFromUrlParams() {
  const formEl = document.getElementById("enquiryForm");
  if (!formEl) return;

  const urlParams = new URLSearchParams(window.location.search);
  const paramProduct = (urlParams.get("product") || "").toLowerCase();
  const paramPack = urlParams.get("pack") || "";

  const productSelect = document.getElementById("productInterest");
  const quantityInput = document.getElementById("orderQuantity");
  const messageArea = document.getElementById("message");
  const formCard = document.getElementById("enquiryFormCard");

  if (paramProduct && productSelect) {
    if (paramProduct.includes("cotton roll") || paramProduct.includes("absorbent") || paramProduct.includes("surgical")) {
      productSelect.value = "Surgical Cotton Rolls";
    } else if (paramProduct.includes("wick") || paramProduct.includes("batti") || paramProduct.includes("puja")) {
      productSelect.value = "Cotton Wicks";
    } else if (paramProduct.includes("both")) {
      productSelect.value = "Both Products";
    }

    if (paramPack) {
      if (messageArea && !messageArea.value) {
        messageArea.value = `Required pack size: ${paramPack}.`;
      }
      if (quantityInput && !quantityInput.value) {
        quantityInput.placeholder = `e.g. 100 packs of ${paramPack}`;
      }
    }

    if (formCard) {
      setTimeout(() => {
        formCard.scrollIntoView({ behavior: "smooth", block: "center" });
        formCard.classList.add("highlight-glow");
      }, 300);
    }
  }
}

/**
 * Triggered by "Request a Quote" buttons across index.html, surgical-cotton-rolls.html & cotton-wicks.html
 */
function requestQuoteFor(productName, packSize) {
  const formEl = document.getElementById("enquiryForm");

  if (formEl) {
    // Already on contact-us.html
    const productSelect = document.getElementById("productInterest");
    const messageArea = document.getElementById("message");
    const formCard = document.getElementById("enquiryFormCard");
    const nameInput = document.getElementById("fullName");

    if (productSelect && productName) {
      const lower = productName.toLowerCase();
      if (lower.includes("cotton roll") || lower.includes("absorbent") || lower.includes("surgical")) {
        productSelect.value = "Surgical Cotton Rolls";
      } else if (lower.includes("wick") || lower.includes("batti")) {
        productSelect.value = "Cotton Wicks";
      }
    }

    if (messageArea && packSize) {
      messageArea.value = `Required pack size: ${packSize}.`;
    }

    if (formCard) {
      formCard.scrollIntoView({ behavior: "smooth", block: "center" });
      formCard.classList.remove("highlight-glow");
      void formCard.offsetWidth; // Force reflow
      formCard.classList.add("highlight-glow");
    }

    if (nameInput) {
      setTimeout(() => nameInput.focus(), 350);
    }
  } else {
    // Navigate from another page
    const targetUrl = `contact-us.html?product=${encodeURIComponent(productName)}&pack=${encodeURIComponent(packSize || "")}`;
    window.location.href = targetUrl;
  }
}

// ============================================================================
// 6. HELPER UTILITIES
// ============================================================================
function escapeHtml(str) {
  if (!str) return "";
  return String(str)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}
