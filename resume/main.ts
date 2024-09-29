declare const html2pdf: any;

const form = document.getElementById("resume-form") as HTMLFormElement;
const resumeSection = document.getElementById("resumeSection") as HTMLElement;
const resume = document.getElementById("resume") as HTMLElement;
const resumeName = document.getElementById("resumeName") as HTMLHeadingElement;
const resumeEmail = document.getElementById("resumeEmail") as HTMLParagraphElement;
const resumeContact = document.getElementById("resumeContact") as HTMLParagraphElement;
const resumeEducation = document.getElementById("resumeEducation") as HTMLParagraphElement;
const resumeExperience = document.getElementById("resumeExperience") as HTMLParagraphElement;
const resumeSkills = document.getElementById("resumeSkills") as HTMLParagraphElement;
const resumePhoto = document.getElementById("resumePhoto") as HTMLImageElement;

const downloadBtn = document.getElementById("downloadBtn") as HTMLButtonElement;
const editBtn = document.getElementById("editBtn") as HTMLButtonElement;
const shareBtn = document.getElementById("shareBtn") as HTMLButtonElement;
const backBtn = document.getElementById("backBtn") as HTMLButtonElement;

const contact_number = document.getElementById("contact-number") as HTMLInputElement;
const error = document.getElementById("error") as HTMLSpanElement;

contact_number.addEventListener("input", () => {
    if (contact_number.validity.patternMismatch){
        error.style.display = 'block';
    } else {
        error.style.display = 'none';
    }
})

form.addEventListener("submit", async (e: Event) => {
    e.preventDefault();

    //take data from form inputs
    const name = (document.getElementById("full-name") as HTMLInputElement).value;
    const email = (document.getElementById("email") as HTMLInputElement).value;
    const degree = (document.getElementById("degree") as HTMLInputElement).value;
    const institute = (document.getElementById("institute") as HTMLInputElement).value;
    const experience = (document.getElementById("experience") as HTMLTextAreaElement).value;
    const skills = (document.getElementById("skills") as HTMLTextAreaElement).value;
    const photo = document.getElementById("photo") as HTMLInputElement;

    const photoInput = photo.files ? photo.files[0] : null;

    let base64 = '';

    if (photoInput) {
        base64 = await fileToBase64(photoInput);

        //store in local storage
        localStorage.setItem("resumePhoto", base64);

        resumePhoto.src = base64;
    } else {
        resumePhoto.style.display = 'none';
    }

    document.querySelector(".container")?.classList.add("hidden");
    resumeSection.classList.remove("hidden");

    resumeName.textContent = name;
    resumeEmail.textContent = `Email: ${email}`;
    resumeContact.textContent = `Contact Number: ${contact_number.value}`;
    resumeEducation.textContent = `${degree} from ${institute}`;
    resumeExperience.textContent = experience;
    resumeSkills.textContent = skills;

    const queryParams = new URLSearchParams({
        name: name,
        email: email,
        phone: contact_number.value,
        degree: degree,
        school: institute,
        experience: experience,
        skills: skills,
    })

    const uniqueURL = `${window.location.origin}?${queryParams.toString()}`;
    shareBtn.addEventListener('click', () => {
        navigator.clipboard.writeText(uniqueURL)
        .then(()=> {
            alert("Link of your resume copied");
        })
        .catch(err => {
            alert("Failed to copy the link");
        })
    });

    window.history.replaceState(null, '', `?${queryParams.toString()}`)

})




function fileToBase64(file: File): Promise<string> {
    return new Promise((res, rej) => {
        const reader = new FileReader();

        reader.onloadend = () => res(reader.result as string);
        reader.onerror = rej;
        reader.readAsDataURL(file);
    })
}

editBtn.addEventListener("click", ()=>{
    updateResumeForm();

    document.querySelector(".container")?.classList.remove("hidden");
    resumeSection.classList.add("hidden");

})

function updateResumeForm() {
    const [degree, institute] = resumeEducation.textContent?.split(" from ") || [];
    (document.getElementById("full-name") as HTMLInputElement).value = resumeName.textContent || '';
    (document.getElementById("email") as HTMLInputElement).value = resumeEmail.textContent?.replace('Email: ', '') || '';
    (document.getElementById("contact-number") as HTMLInputElement).value = resumeContact.textContent?.replace('Contact Number: ', '') || '';
    (document.getElementById('degree') as HTMLInputElement).value = degree || '';
    (document.getElementById("institute") as HTMLInputElement).value = institute || '';
    (document.getElementById("experience") as HTMLTextAreaElement).value = resumeExperience.textContent || '';
    (document.getElementById("skills") as HTMLTextAreaElement).value = resumeSkills.textContent || '';
}

downloadBtn.addEventListener("click", () => {
    if (typeof html2pdf === 'undefined'){
        alert("Error: html2pdf library not loaded");
        return;
    }

    const opt = {
        margin: 1,
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

    const name = params.get("full-name") || '';
    const email = params.get("email") || '';
    const contact = params.get("contact-number") || '';
    const degree = params.get("degree") || '';
    const institute = params.get("institute") || '';
    const experience = params.get("experience") || '';
    const skills = params.get("skills") || '';

    if (name || email || contact || degree || institute || experience || skills) {
        //populate resume preview if query params are present
        resumeName.textContent = name;
        resumeEmail.textContent = `Email: ${email}`;
        resumeContact.textContent = `Contact Number: ${contact_number.value}`;
        resumeEducation.textContent = `${degree} from ${institute}`;
        resumeExperience.textContent = experience;
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
resume.style.padding = ' 1% 3%';
