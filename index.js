function showSection(sectionId) {
    // Hide all sections
    var sections = document.querySelectorAll('.section');
    sections.forEach(function(section) {
        section.style.display = 'none';
    });

    // Show the selected section
    var activeSection = document.getElementById(sectionId);
    activeSection.style.display = 'block';
}
