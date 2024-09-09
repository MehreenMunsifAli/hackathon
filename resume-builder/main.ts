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
            Position
            <input type="text" name="position" placeholder="Position">
        </label>
        <label>Company
            <input type="text" name="company" placeholder="Company">
        </label>
        <label>Duration
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
    certificationsEntry.classList.add('certifications-entry');
    certificationsEntry.innerHTML = `
        <label>
            Certificate
            <input type="text" name="certifications" placeholder="Certificate">
        </label>
        <label>Institute
            <input type="text" name="cert-institute" placeholder="Institute">
        </label>
        <label>Completion Time
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
        const positionInput = entry.querySelector('input[name="position"]') as HTMLInputElement;
        const companyInput = entry.querySelector('input[name="company"]') as HTMLInputElement;
        const durationInput = entry.querySelector('input[name="duration"]') as HTMLInputElement;
    
        const position = positionInput ? positionInput.value : 'none';
        const company = companyInput ? companyInput.value : 'none';
        const duration = durationInput ? durationInput.value : 'none';
    
        experiences.push(`${position} | ${company} | ${duration}`);
    })

    //user input for skills
    const skills: string[] = [];
    document.querySelectorAll('.skills-entry').forEach((entry) => {
        const skillInput = entry.querySelector('input[name="skills"]') as HTMLInputElement;
        const skill = skillInput ? skillInput.value : 'none';
        skills.push(`${skill}`);
    })

    //user input for certifications
    const certifications: string[] = [];
    document.querySelectorAll('.certifications-entry').forEach((entry) => {
        const certificationInput = entry.querySelector('input[name="certifications"]') as HTMLInputElement;
        const certInstituteInput = entry.querySelector('input[name="cert-institute"]') as HTMLInputElement;
        const certYearInput = entry.querySelector('input[name="cert-year"]') as HTMLInputElement;
    
        const certification = certificationInput ? certificationInput.value : 'none';
        const cert_institute = certInstituteInput ? certInstituteInput.value : 'none';
        const cert_year = certYearInput ? certYearInput.value : 'none';
    
        certifications.push(`${certification} | ${cert_institute} | ${cert_year}`);
    })

    const generatedSection = document.getElementById('resume') as HTMLElement;
    const computedStyle = window.getComputedStyle(generatedSection);
        if(computedStyle.display === 'none'){
            generatedSection.style.display = 'block';
    }

    //resume output
    resume.innerHTML = `
        <h1>${name}</h1>
        <p>Contact Details: ${contact} | Email: ${email}</p>
        <hr>
        <h2>Education</h2>
        <p>${degree} | ${institute} | ${year}</p>
        <hr>
        <h2>Professional Experience</h2>
        <ul>
            ${experiences.map(exp => `<li>${exp}</li>`).join('')}
        </ul>
        <hr>
        <h2>Skills</h2>
        <ul>
            ${skills.map(skill => `<li>${skill}</li>`).join('')}
        </ul>
        <hr>
        <h2>Certifications</h2>
        <ul>
            ${certifications.map(cert => `<li>${cert}</li>`).join('')}
        </ul>
    `;
    
})

const toggleExperienceButton = document.getElementById('toggle-experience') as HTMLButtonElement;
toggleExperienceButton.addEventListener('click', () => {
    experienceSection.style.display = experienceSection.style.display === 'none' ? 'block' : 'none';
});

const toggleCertificationsButton = document.getElementById('toggle-certifications') as HTMLButtonElement;
toggleCertificationsButton.addEventListener('click', () => {
    certificationsSection.style.display = certificationsSection.style.display === 'none' ? 'block' : 'none';
});


