(function () {
  const burger = document.querySelector("[data-burger]");
  const mobile = document.querySelector("[data-mobile]");

  if (burger && mobile) {
    burger.addEventListener("click", () => {
      mobile.classList.toggle("open");
      burger.setAttribute("aria-expanded", mobile.classList.contains("open") ? "true" : "false");
    });
  }

  // Auto-highlight active nav link based on filename
  const path = window.location.pathname.split("/").pop() || "index.html";
  document.querySelectorAll('a[data-nav]').forEach(a => {
    const href = a.getAttribute("href");
    if (href === path) a.classList.add("active");
  });
})();
