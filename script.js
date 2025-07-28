const tabs = document.querySelectorAll(".tab");
const icons = document.querySelectorAll(".icon-links i");
const sections = document.querySelectorAll(".tab-section");

function activateTab(targetId) {
  sections.forEach((sec) => {
    sec.classList.toggle("active", sec.id === targetId);
  });

  tabs.forEach((tab) => {
    tab.classList.toggle("active", tab.dataset.target === targetId);
  });
}

tabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    activateTab(tab.dataset.target);
  });
});

icons.forEach((icon) => {
  icon.addEventListener("click", () => {
    activateTab(icon.dataset.target);
  });
});


// Also handle contact link in work tab
document.querySelectorAll('.contact-link').forEach(btn => {
    btn.addEventListener('click', () => {
      activateTab('contact');
    });
  });
  