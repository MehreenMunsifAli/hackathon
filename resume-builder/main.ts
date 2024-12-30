declare const html2pdf: any;


const form = document.getElementById('resume-form') as HTMLFormElement;
const generatedSection = document.getElementById('resume') as HTMLElement;
const resume = document.getElementById('resume-output') as HTMLElement;
const resumePhoto = document.getElementById("resumePhoto") as HTMLImageElement;
const resumeName = document.getElementById("resumeName") as HTMLHeadingElement;
const resumeEmail = document.getElementById("resumeEmail") as HTMLParagraphElement;
const resumePhone = document.getElementById("resumePhone") as HTMLParagraphElement;
const resumeEducation = document.getElementById("resumeEducation") as HTMLUListElement;
const resumeExperience = document.getElementById("resumeExperience") as HTMLUListElement;
const resumeSkills = document.getElementById("resumeSkills") as HTMLUListElement;
const resumeCertifications = document.getElementById("resumeCertifications") as HTMLUListElement;
const editBtn = document.getElementById("editBtn") as HTMLButtonElement;
// const backBtn = document.getElementById("backBtn") as HTMLButtonElement;
const shareLinkBtn = document.getElementById("shareLinkBtn") as HTMLButtonElement;
const downloadBtn = document.getElementById("downloadBtn") as HTMLButtonElement;
const container = document.getElementById("container") as HTMLElement;
const generateBtn = document.getElementById("generateBtn") as HTMLButtonElement;
//contact input error handling
const contact_details = document.getElementById('contact-details') as HTMLInputElement;
const contactEror = document.getElementById('contact-error') as HTMLSpanElement;

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
            <input type="text" class="position" name="position" placeholder="Position">
        </label>
        <label>Company
            <input type="text" class="company" name="company" placeholder="Company">
        </label>
        <label>Duration
            <input type="number" class="duration" name="duration" placeholder="Duration">
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
form.addEventListener('submit', async (e: Event) => {
    e.preventDefault();

    //user input for personal info
    const name = (document.getElementById('name') as HTMLInputElement).value;
    const contact = (document.getElementById('contact-details') as HTMLInputElement).value;
    const email = (document.getElementById('email') as HTMLInputElement).value;

    //photo handling
    const pictureInput = document.getElementById('picture') as HTMLInputElement;

    const pictureFile = pictureInput.files ? pictureInput.files[0] : null;

    let photoBase64 = '';

    if(pictureFile){
        photoBase64 = await fileToBase64(pictureFile);

        localStorage.setItem("resumePhoto", photoBase64);

        resumePhoto.src = photoBase64;

    } else {
        resumePhoto.style.display = 'none';
    }

    console.log("Picture stored locally");

    //user input for education
    const education: string[] = [];
    document.querySelectorAll('.education-entry').forEach((entry) => {
        const degreeInput = entry.querySelector('.degree') as HTMLInputElement;
        const instituteInput = entry.querySelector('.institute') as HTMLInputElement;
        const yearInput = entry.querySelector('.year') as HTMLInputElement;

        const degree = degreeInput ? degreeInput.value : '';
        const institute = instituteInput ? instituteInput.value : '';
        const year = yearInput ? yearInput.value : '';

        if (degree !== '' && institute !== '' && year !== ''){
            education.push(`${degree} from ${institute} | ${year}`);
        }
    })

    //user input for experience
    const experiences: string[] = [];
    document.querySelectorAll('.experience-entry').forEach((entry) => {
        const positionInput = entry.querySelector('.position') as HTMLInputElement;
        const companyInput = entry.querySelector('.company') as HTMLInputElement;
        const durationInput = entry.querySelector('.duration') as HTMLInputElement;
    
        const position = positionInput ? positionInput.value : '';
        const company = companyInput ? companyInput.value : '';
        const duration = durationInput ? durationInput.value : '';
        
        if(position !== '' && company !== '' && duration !== ''){
            experiences.push(`${position} at ${company} | ${duration}`);
        }
        
    })

    console.log("experiences added");


    //user input for skills
    const skills: string[] = [];
    document.querySelectorAll('.skills-entry').forEach((entry) => {
        const skillInput = entry.querySelector('input[name="skills"]') as HTMLInputElement;
        const skill = skillInput ? skillInput.value : '';

        if (skill !== '') {
            skills.push(`${skill}`);
        }
        
    })

    console.log("skills added");


    //user input for certifications
    const certifications: string[] = [];
    document.querySelectorAll('.certifications-entry').forEach((entry) => {
        const certificationInput = entry.querySelector('input[name="certifications"]') as HTMLInputElement;
        const certInstituteInput = entry.querySelector('input[name="cert-institute"]') as HTMLInputElement;
        const certYearInput = entry.querySelector('input[name="cert-year"]') as HTMLInputElement;
    
        const certification = certificationInput ? certificationInput.value : '';
        const cert_institute = certInstituteInput ? certInstituteInput.value : 'noe';
        const cert_year = certYearInput ? certYearInput.value : '';
    
        if (certification !== '' && cert_institute !== '' && cert_year !== ''){
            certifications.push(`${certification} | ${cert_institute} | ${cert_year}`);
        }
        
    })

    console.log("cert added");

    //helper function to populate list elements
    const populateList = (listElement: HTMLUListElement, items: string[]) => {
        listElement.innerHTML = ''; // clear existing list items

        //add new list items
        items.forEach(item => {
            const li = document.createElement("li");
            li.textContent = item;
            listElement.appendChild(li)
        })

    }

    
    document.querySelector('.container')?.classList.add('hidden');
    // generatedSection.classList.remove('hidden');
    const computedGeneratedSection = window.getComputedStyle(generatedSection);
        if(computedGeneratedSection.display === 'none'){
            generatedSection.style.display = 'block';
    }

    contact_details.addEventListener('input', () => {
        if (contact_details.validity.patternMismatch){
            contactEror.style.display = 'block';
        } else {
            contactEror.style.display = 'none';
        }
    })
    

    // //resume output
    resumeName.textContent = name;
    resumeEmail.textContent = `Email: ${email}`;
    resumePhone.textContent = `Mobile: ${contact}`;
    console.log("contact added");
    populateList(resumeEducation, education);
    console.log("education populated");

    // experience population
    if(experiences.length > 0){
        populateList(resumeExperience, experiences);
        console.log("experience populated");
    } else {
        const profExperienceHeading = document.getElementById("prof-experience") as HTMLDivElement;
        profExperienceHeading.classList.add('hidden');
        console.log('experiences hidden');
    }    
        
    // skills population
    if (skills.length > 0) {
        populateList(resumeSkills, skills);
        console.log('skills addeddd');
    } else {
        const skillsHeading = document.getElementById('prof-skills') as HTMLDivElement;
        skillsHeading.classList.add('hidden');
        console.log("skills removeddd");
    }

    // certifications population
    if (certifications.length > 0) {
        populateList(resumeCertifications, certifications);
        console.log("cert addeddd");
    } else {
        const certificationsHeading = document.getElementById('prof-certifications') as HTMLDivElement;
        certificationsHeading.classList.add('hidden');
        console.log("cert removeddd");
    }
    

    //destructure
    const [degree, institute, year] = education;
    const [position, company, duration] = experiences;
    const [certificate, cert_institute, cert_year] = certifications;
    const queryParams = new URLSearchParams({
        name: name,
        email: email,
        contact: contact,
        degree: degree,
        institute: institute,
        year: year,
        position: position,
        company: company,
        duration: duration,
        skill: skills.join(","),
        cetificate: certificate,
        certificate_institute: cert_institute,
        certificate_year: cert_year,
    })

    const uniqueURL = `${window.location.origin}?${queryParams.toString()}`;
    shareLinkBtn.addEventListener('click', () => {
        navigator.clipboard.writeText(uniqueURL)
        .then(()=> {
            alert("Link of your resume copied");
        })
        .catch(err => {
            alert("Failed to copy the link");
        })
    });

    window.history.replaceState(null, '', `?${queryParams.toString()}`)

   
    // makeEditable();
})

// const makeEditable = () => {

// }

//helper func to convert file to base64 to make the url short
function fileToBase64(file: File): Promise<string> {
    return new Promise((res, rej) => {
        const reader = new FileReader()
        reader.onloadend = () => res(reader.result as string)

        reader.onerror = rej;
        reader.readAsDataURL(file);
    })
}

const toggleExperienceButton = document.getElementById('toggle-experience') as HTMLButtonElement;
toggleExperienceButton.addEventListener('click', () => {
    const currentDisplay = window.getComputedStyle(experienceSection).display;
    if (currentDisplay === 'block'){
        experienceSection.style.display = 'none';
        toggleExperienceButton.innerText = 'Show Experience';
    } else {
        experienceSection.style.display = 'block';
        toggleExperienceButton.innerText = 'Hide Experience';
    }
});

const toggleCertificationsButton = document.getElementById('toggle-certifications') as HTMLButtonElement;
toggleCertificationsButton.addEventListener('click', () => {
    const currentDisplay = window.getComputedStyle(certificationsSection).display;
    if(currentDisplay === 'block'){
        certificationsSection.style.display = 'none';
        toggleCertificationsButton.innerText = 'Show Certifications';
    } else {
        certificationsSection.style.display = 'block';
        toggleCertificationsButton.innerText = 'Hide Certifications';
    }
});


editBtn.addEventListener("click", ()=>{
    updateResumeForm();

    // document.querySelector(".container")?.classList.remove("hidden");
    // generatedSection.classList.add("hidden");

    document.querySelector('.container')?.classList.remove('hidden');
    // generatedSection.classList.remove('hidden');
    const computedGeneratedSection = window.getComputedStyle(generatedSection);
        if(computedGeneratedSection.display === 'block'){
            generatedSection.style.display = 'none';
    }


});

function updateResumeForm() {
    const [degree, institute, year] = resumeEducation.textContent?.split(" ") || [];
    const [position, company, duration] = resumeExperience.textContent?.split(" ") || [];
    const [certification, cert_institute, cert_year] = resumeCertifications.textContent?.split(" ") || [];
    (document.getElementById("name") as HTMLInputElement).value = resumeName.textContent || '';
    (document.getElementById("email") as HTMLInputElement).value = resumeEmail.textContent?.replace('Email: ', '') || '';
    (document.getElementById("contact-number") as HTMLInputElement).value = contact_details.textContent?.replace('Mobile: ', '') || '';
    (document.getElementById('degree') as HTMLInputElement).value = degree || '';
    (document.getElementById("institute") as HTMLInputElement).value = institute || '';
    (document.getElementById("year") as HTMLInputElement).value = year || '';
    (document.getElementById("position") as HTMLInputElement).value = position || '';
    (document.getElementById("company") as HTMLInputElement).value = company || '';
    (document.getElementById("duration") as HTMLInputElement).value = duration || '';
    (document.getElementById("certifications") as HTMLInputElement).value = certification || '';
    (document.getElementById("cert-institute") as HTMLInputElement).value = cert_institute || '';
    (document.getElementById("cert-year") as HTMLInputElement).value = cert_year || '';
    (document.getElementById("skills") as HTMLTextAreaElement).value = resumeSkills.textContent || '';
}

//download
downloadBtn.addEventListener("click", () => {
    if (typeof html2pdf === 'undefined') {
        alert("Error: html2pdf library not loaded");
        return;
    }

    const opt = {
        margins: 1,
        filename: 'resume.pdf',
        image: {type: 'jpeg', quality: 1.0},
        html2canvas: {scale: 2},
        jsPDF: {unit: 'in', format: 'letter', orientation: 'portrait'},
    }

    html2pdf().from(resume).set(opt).save().catch((err: Error) => {
        console.log('PDF generation error: ', err);
    })
});

window.addEventListener("DOMContentLoaded", () => {
    const params = new URLSearchParams(window.location.search);

    const name = params.get("name") || '';
    const email = params.get("email") || '';
    const contact = params.get("contact") || '';
    const degree = params.get("degree") || '';
    const institute = params.get("institute");
    const year = params.get("year") || '';
    const skills = params.get('skill') || '';

    if (name || email || contact || degree || institute || year || skills) {
        resumeName.textContent = name;
        resumeEmail.textContent = email;
        resumePhone.textContent = contact;
        resumeEducation.textContent = `${degree} ${institute} ${year}`;
        resumeSkills.textContent = skills;

        //retrieve photo from local storage
        const savedPhoto = localStorage.getItem("resumePhoto");
        if (savedPhoto) {
            resumePhoto.src = savedPhoto;
        }

        //hide form and show resume page
        document.querySelector(".conatiner")?.classList.add("hidden");
        resume.classList.remove("hidden");
    }
})

resumePhoto.style.borderRadius = '50%';
resumePhoto.style.width = '150px';
resumePhoto.style.height = '150px';
resumePhoto.style.margin = '10px auto';
resumePhoto.style.display = 'block';
resumePhoto.style.objectFit = 'cover';
resume.style.borderRadius = '2%';
resume.style.borderColor = 'white';
resume.style.padding = ' 4% 6%';