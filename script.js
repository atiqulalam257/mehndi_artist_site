(function () {
  "use strict";

  // Portfolio photos are ordered as they appear in assets/images.
  var portfolioImages = [
    "WhatsApp Image 2026-11-27 at 5.56.18 PM.jpeg",
    "WhatsApp Image 2026-11-27 at 5.56.30 PM.jpeg",
    "WhatsApp Image 2026-11-27 at 5.56.31 PM.jpeg",
    "WhatsApp Image 2026-11-27 at 5.57.10 PM.jpeg",
    "WhatsApp Image 2026-11-27 at 5.57.12 PM.jpeg",
    "WhatsApp Image 2026-11-27 at 5.57.13 PM.jpeg",
    "WhatsApp Image 2026-11-27 at 5.57.17 PM.jpeg",
    "WhatsApp Image 2026-11-27 at 5.57.18 PM.jpeg",
    "WhatsApp Image 2026-11-27 at 5.57.58 PM.jpeg",
    "WhatsApp Image 2026-11-27 at 5.57.59 PM (1).jpeg",
    "WhatsApp Image 2026-11-27 at 5.57.59 PM (2).jpeg",
    "WhatsApp Image 2026-11-27 at 5.57.59 PM.jpeg",
    "WhatsApp Image 2026-11-27 at 5.58.01 PM.jpeg",
    "WhatsApp Image 2026-11-27 at 5.58.02 PM.jpeg",
    "WhatsApp Image 2026-11-27 at 5.58.06 PM.jpeg",
    "WhatsApp Image 2026-11-27 at 5.58.08 PM.jpeg",
    "WhatsApp Image 2026-11-27 at 5.58.14 PM.jpeg",
    "WhatsApp Image 2026-11-27 at 5.58.19 PM.jpeg",
    "WhatsApp Image 2026-11-27 at 5.58.51 PM.jpeg",
    "WhatsApp Image 2026-11-27 at 5.58.52 PM (1).jpeg",
    "WhatsApp Image 2026-11-27 at 5.58.52 PM.jpeg",
    "WhatsApp Image 2026-11-27 at 5.58.53 PM (1).jpeg",
    "WhatsApp Image 2026-11-27 at 5.58.53 PM.jpeg",
    "WhatsApp Image 2026-11-27 at 5.58.54 PM (1).jpeg",
    "WhatsApp Image 2026-11-27 at 5.58.54 PM.jpeg",
    "WhatsApp Image 2026-11-27 at 5.58.55 PM (1).jpeg",
    "WhatsApp Image 2026-11-27 at 5.58.55 PM (2).jpeg",
    "WhatsApp Image 2026-11-27 at 5.58.55 PM.jpeg",
    "WhatsApp Image 2026-11-27 at 5.58.56 PM (1).jpeg",
    "WhatsApp Image 2026-11-27 at 5.58.56 PM (2).jpeg",
    "WhatsApp Image 2026-11-27 at 5.58.56 PM.jpeg",
    "WhatsApp Image 2026-11-27 at 5.58.57 PM (1).jpeg",
    "WhatsApp Image 2026-11-27 at 5.58.57 PM.jpeg",
    "WhatsApp Image 2026-11-27 at 5.58.58 PM (1).jpeg",
    "WhatsApp Image 2026-11-27 at 5.58.58 PM (2).jpeg",
    "WhatsApp Image 2026-11-27 at 5.58.58 PM.jpeg",
    "WhatsApp Image 2026-11-27 at 5.58.59 PM (1).jpeg",
    "WhatsApp Image 2026-11-27 at 5.58.59 PM (2).jpeg",
    "WhatsApp Image 2026-11-27 at 5.58.59 PM.jpeg",
    "WhatsApp Image 2026-11-27 at 5.59.00 PM (1).jpeg",
    "WhatsApp Image 2026-11-27 at 5.59.00 PM.jpeg",
    "WhatsApp Image 2026-11-27 at 5.59.01 PM (1).jpeg",
    "WhatsApp Image 2026-11-27 at 5.59.01 PM (2).jpeg",
    "WhatsApp Image 2026-11-27 at 5.59.01 PM.jpeg",
    "WhatsApp Image 2026-11-27 at 5.59.02 PM (1).jpeg",
    "WhatsApp Image 2026-11-27 at 5.59.02 PM.jpeg"
  ];
  var homePageCount = 9;
  var isPortfolioPage = document.body.dataset.page === "portfolio";
  var galleryGrid = document.querySelector(".gallery-grid");

  function makeGalleryItem(filename, index) {
    var figure = document.createElement("figure");
    figure.className = "gallery-item";
    figure.tabIndex = 0;

    var image = document.createElement("img");
    image.className = "gallery-img";
    image.src = "assets/images/" + filename.split("/").map(encodeURIComponent).join("/");
    image.alt = "Mehndi design portfolio photo " + (index + 1);
    image.loading = "lazy";

    var caption = document.createElement("figcaption");
    caption.textContent = "Mehndi Design " + (index + 1);
    figure.append(image, caption);
    return figure;
  }

  if (galleryGrid) {
    var visibleImages = isPortfolioPage ? portfolioImages.slice(homePageCount) : portfolioImages.slice(0, homePageCount);
    galleryGrid.replaceChildren.apply(galleryGrid, visibleImages.map(makeGalleryItem));

    var gallerySection = galleryGrid.closest(".gallery");
    if (gallerySection) {
      var action = document.createElement("div");
      action.className = "gallery-actions";
      var link = document.createElement("a");
      link.className = "btn btn-primary";
      link.href = isPortfolioPage ? "index.html#gallery" : "portfolio.html";
      link.textContent = isPortfolioPage ? "Home par wapas jaayein" : "View All";
      action.appendChild(link);
      galleryGrid.insertAdjacentElement("afterend", action);
    }
  }

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
