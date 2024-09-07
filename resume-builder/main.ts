const toggleExperienceButton = document.getElementById('toggle-experience') as HTMLButtonElement;
const experienceSection = document.getElementById('experience') as HTMLElement;

const toggleCertificationsButton = document.getElementById('toggle-certifications') as HTMLButtonElement;
const certificationsSection = document.getElementById('certifications') as HTMLElement;

toggleExperienceButton.addEventListener('click', () => {
    if (experienceSection.style.display === 'none') {
        experienceSection.style.display = 'block';
    } else {
        experienceSection.style.display = 'none';
    }
});

toggleCertificationsButton.addEventListener('click', () => {
if (certificationsSection.style.display === 'none') {
    certificationsSection.style.display = 'block';
} else {
    certificationsSection.style.display = 'none';
}
});
