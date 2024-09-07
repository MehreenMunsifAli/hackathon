var toggleExperienceButton = document.getElementById('toggle-experience');
var experienceSection = document.getElementById('experience');
var toggleCertificationsButton = document.getElementById('toggle-certifications');
var certificationsSection = document.getElementById('certifications');
toggleExperienceButton.addEventListener('click', function () {
    if (experienceSection.style.display === 'none') {
        experienceSection.style.display = 'block';
    }
    else {
        experienceSection.style.display = 'none';
    }
});
toggleCertificationsButton.addEventListener('click', function () {
    if (certificationsSection.style.display === 'none') {
        certificationsSection.style.display = 'block';
    }
    else {
        certificationsSection.style.display = 'none';
    }
});
