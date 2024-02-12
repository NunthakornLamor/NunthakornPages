function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);

    if (section) {
      // Using scrollIntoView for smooth scrolling
      section.scrollIntoView({ behavior: 'smooth' });

      // If you prefer to use scrollTo without smooth scrolling:
      // window.scrollTo({ top: section.offsetTop, behavior: 'smooth' });
    }
  }

function redirectTo(page) {
    window.location.href = page;
}