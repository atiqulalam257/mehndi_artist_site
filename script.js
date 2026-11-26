(function () {
  "use strict";

  // ---------- Mobile nav toggle ----------
  var navToggle = document.getElementById("navToggle");
  var mainNav = document.getElementById("mainNav");
  if (navToggle && mainNav) {
    navToggle.addEventListener("click", function () {
      var open = mainNav.classList.toggle("is-open");
      navToggle.setAttribute("aria-expanded", open ? "true" : "false");
    });
    mainNav.querySelectorAll("a").forEach(function (a) {
      a.addEventListener("click", function () {
        mainNav.classList.remove("is-open");
        navToggle.setAttribute("aria-expanded", "false");
      });
    });
  }

  // ---------- Gallery: tap pe caption/hover effect ----------
  document.querySelectorAll(".gallery-item").forEach(function (item) {
    item.addEventListener("click", function () {
      document.querySelectorAll(".gallery-item.is-active").forEach(function (other) {
        if (other !== item) other.classList.remove("is-active");
      });
      item.classList.toggle("is-active");
    });
    item.addEventListener("keydown", function (e) {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        item.classList.toggle("is-active");
      }
    });
  });

  // ---------- Helpers ----------
  function showError(el, msg) {
    if (!el) return;
    el.textContent = msg;
    el.hidden = false;
  }
  function clearError(el) {
    if (!el) return;
    el.textContent = "";
    el.hidden = true;
  }
  function setStatus(el, msg) {
    if (!el) return;
    el.textContent = msg;
    el.hidden = false;
  }

  // ---------- Booking form: basic validation + submit ----------
  // Upload/preview ab nahi hai — gallery ki photos assets/images/ se aati hain.
  var bookingForm = document.getElementById("bookingForm");
  if (bookingForm) {
    var bookingStatus = document.getElementById("bookingStatus");
    bookingForm.addEventListener("submit", function (e) {
      e.preventDefault();
      var name = bookingForm.querySelector('[name="name"]');
      var phone = bookingForm.querySelector('[name="phone"]');
      var date = bookingForm.querySelector('[name="date"]');
      var missing = [];
      if (!name || !name.value.trim()) missing.push("naam");
      if (!phone || !/^[0-9+\-\s]{8,15}$/.test(phone.value.trim())) missing.push("sahi phone number");
      if (!date || !date.value) missing.push("tareekh");
      if (missing.length) {
        showError(bookingStatus, "Kripya bharein: " + missing.join(", "));
        return;
      }
      clearError(bookingStatus);
      setStatus(bookingStatus, "Shukriya! Aapki booking request mil gayi hai, jaldi sampark karungi.");
      bookingForm.reset();
    });
  }

})();
