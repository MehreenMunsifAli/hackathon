const form = document.getElementById('resume-form') as HTMLFormElement;
const resume = document.getElementById('resume-output') as HTMLElement;

//contact input error handling
const contact_details = document.getElementById('contact-details') as HTMLInputElement;
const contactEror = document.getElementById('contact-error') as HTMLSpanElement;

contact_details.addEventListener('input', () => {
    if (contact_details.validity.patternMismatch){
        contactEror.style.display = 'block';
    } else {
        contactEror.style.display = 'none';
    }
})


//add more func for experience, skills, and certifications
const addExperienceBtn = document.getElementById('add-experience') as HTMLButtonElement;
const experienceSection = document.getElementById('experience') as HTMLElement;

addExperienceBtn.addEventListener('click', (e: Event) => {
    e.preventDefault();
    const experienceEntry = document.createElement('div');
    experienceEntry.classList.add('experience-entry');
    experienceEntry.innerHTML = `
            <label>
                <input type="text" name="experience" placeholder="Position">
                <input type="text" name="company" placeholder="Company">
                <input type="number" name="duration" placeholder="Duration">
        </label>
    `;
    experienceSection.appendChild(experienceEntry)
})

const addSkills = document.getElementById('add-skills') as HTMLButtonElement;
const skillsSection = document.getElementById('skills') as HTMLElement;

addSkills.addEventListener('click', (e: Event) => {
    e.preventDefault();
    const skillsEntry = document.createElement('div');
    skillsEntry.classList.add('skills-entry');
    skillsEntry.innerHTML = `
        <label>
            <input type="text" name="skills" placeholder="Add a Skill"/>
        </label>
    `
    skillsSection.appendChild(skillsEntry);
})

const addCertifictions = document.getElementById('add-certifications') as HTMLButtonElement;
const certificationsSection = document.getElementById('certifications') as HTMLElement;

addCertifictions.addEventListener('click', (e: Event) => {
    e.preventDefault();
    const certificationsEntry = document.createElement('div');
    certificationsEntry.classList.add('skills-entry');
    certificationsEntry.innerHTML = `
        <label>
            <input type="text" name="certifications" placeholder="Certificate">
            <input type="text" name="cert-institute" placeholder="Institute">
            <input type="number" name="cert-year" placeholder="Completion Time">
        </label>
    `
    certificationsSection.appendChild(certificationsEntry);
})

//form submission and resume generation
form.addEventListener('submit', (e: Event) => {
    e.preventDefault();

    //user input for personal info
    const name = (document.getElementById('name') as HTMLInputElement).value;
    const contact = (document.getElementById('contact-details') as HTMLInputElement).value;
    const email = (document.getElementById('email') as HTMLInputElement).value;

    //user input for education
    const degree = (document.getElementById('degree') as HTMLInputElement).value;
    const institute = (document.getElementById('institute') as HTMLInputElement).value;
    const year = (document.getElementById('year') as HTMLInputElement).value;

    //user input for experience
    const experiences: string[] = [];
    document.querySelectorAll('.experience-entry').forEach((entry) => {
        const position = (entry.querySelector('input[name="position"]') as HTMLInputElement).value;
        const company = (entry.querySelector('input[name="company"]') as HTMLInputElement).value;
        const duration = (entry.querySelector('input[name="duration"]') as HTMLInputElement).value;
        experiences.push(`${position} | ${company} | ${duration}`);
    })

    //user input for skills
    const skills: string[] = [];
    document.querySelectorAll('.skills-entry').forEach((entry) => {
        const skill = (entry.querySelector('input[name="skills"]') as HTMLInputElement).value;
        skills.push(`${skill}`);
    })

    //user input for certifications
    const certifications: string[] = [];
    document.querySelectorAll('.certifications-entry').forEach((entry) => {
        const certification = (entry.querySelector('input[name="certifications"]') as HTMLInputElement).value;
        const cert_institute = (entry.querySelector('input[name="cert_institute"]') as HTMLInputElement).value;
        const cert_year = (entry.querySelector('input[name="cert_year"]') as HTMLInputElement).value;
        certifications.push(`${certification} | ${cert_institute} | ${cert_year}`);
    })

    //resume output
    resume.innerHTML = `
        <h1>${name}</h1>
        <p>Contact Details: ${contact} | Email: ${email}</p>
        <h2>Education</h2>
        <p>${degree} | ${institute} | ${year}</p>
        <h2>Experience</h2>
        <ul>
            ${experiences.map(exp => `<li>${exp}</li>`).join(' | ')}
        </ul>
        <h2>Skills</h2>
        <ul>
            ${skills.map(skill => `<li>${skill}</li>`).join(' | ')};
        </ul>
        <h2>Certifications</h2>
        <ul>
            ${certifications.map(certification => `<li>${certification}</li>`).join(' | ')};
        </ul>
    `
})

const toggleExperienceButton = document.getElementById('toggle-experience') as HTMLButtonElement;
// const experienceSection = document.getElementById('experience') as HTMLElement;

const toggleCertificationsButton = document.getElementById('toggle-certifications') as HTMLButtonElement;
// const certificationsSection = document.getElementById('certifications') as HTMLElement;

toggleExperienceButton.addEventListener('click', () => {
    experienceSection.style.display = experienceSection.style.display === 'none' ? 'block' : 'none';
});

toggleCertificationsButton.addEventListener('click', () => {
    certificationsSection.style.display = certificationsSection.style.display === 'none' ? 'block' : 'none';
});
