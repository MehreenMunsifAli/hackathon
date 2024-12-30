var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var _this = this;
var form = document.getElementById('resume-form');
var generatedSection = document.getElementById('resume');
var resume = document.getElementById('resume-output');
var resumePhoto = document.getElementById("resumePhoto");
var resumeName = document.getElementById("resumeName");
var resumeEmail = document.getElementById("resumeEmail");
var resumePhone = document.getElementById("resumePhone");
var resumeEducation = document.getElementById("resumeEducation");
var resumeExperience = document.getElementById("resumeExperience");
var resumeSkills = document.getElementById("resumeSkills");
var resumeCertifications = document.getElementById("resumeCertifications");
var editBtn = document.getElementById("editBtn");
// const backBtn = document.getElementById("backBtn") as HTMLButtonElement;
var shareLinkBtn = document.getElementById("shareLinkBtn");
var downloadBtn = document.getElementById("downloadBtn");
var container = document.getElementById("container");
var generateBtn = document.getElementById("generateBtn");
//contact input error handling
var contact_details = document.getElementById('contact-details');
var contactEror = document.getElementById('contact-error');
//add more func for experience, skills, and certifications
var addExperienceBtn = document.getElementById('add-experience');
var experienceSection = document.getElementById('experience');
addExperienceBtn.addEventListener('click', function (e) {
    e.preventDefault();
    var experienceEntry = document.createElement('div');
    experienceEntry.classList.add('experience-entry');
    experienceEntry.innerHTML = "\n       <label>\n            Position\n            <input type=\"text\" class=\"position\" name=\"position\" placeholder=\"Position\">\n        </label>\n        <label>Company\n            <input type=\"text\" class=\"company\" name=\"company\" placeholder=\"Company\">\n        </label>\n        <label>Duration\n            <input type=\"number\" class=\"duration\" name=\"duration\" placeholder=\"Duration\">\n        </label>\n    ";
    experienceSection.appendChild(experienceEntry);
});
var addSkills = document.getElementById('add-skills');
var skillsSection = document.getElementById('skills');
addSkills.addEventListener('click', function (e) {
    e.preventDefault();
    var skillsEntry = document.createElement('div');
    skillsEntry.classList.add('skills-entry');
    skillsEntry.innerHTML = "\n        <label>\n            <input type=\"text\" name=\"skills\" placeholder=\"Add a Skill\"/>\n        </label>\n    ";
    skillsSection.appendChild(skillsEntry);
});
var addCertifictions = document.getElementById('add-certifications');
var certificationsSection = document.getElementById('certifications');
addCertifictions.addEventListener('click', function (e) {
    e.preventDefault();
    var certificationsEntry = document.createElement('div');
    certificationsEntry.classList.add('certifications-entry');
    certificationsEntry.innerHTML = "\n        <label>\n            Certificate\n            <input type=\"text\" name=\"certifications\" placeholder=\"Certificate\">\n        </label>\n        <label>Institute\n            <input type=\"text\" name=\"cert-institute\" placeholder=\"Institute\">\n        </label>\n        <label>Completion Time\n            <input type=\"number\" name=\"cert-year\" placeholder=\"Completion Time\">\n        </label>\n    ";
    certificationsSection.appendChild(certificationsEntry);
});
//form submission and resume generation
form.addEventListener('submit', function (e) { return __awaiter(_this, void 0, void 0, function () {
    var name, contact, email, pictureInput, pictureFile, photoBase64, education, experiences, skills, certifications, populateList, computedGeneratedSection, profExperienceHeading, skillsHeading, certificationsHeading, degree, institute, year, position, company, duration, certificate, cert_institute, cert_year, queryParams, uniqueURL;
    var _a;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                e.preventDefault();
                name = document.getElementById('name').value;
                contact = document.getElementById('contact-details').value;
                email = document.getElementById('email').value;
                pictureInput = document.getElementById('picture');
                pictureFile = pictureInput.files ? pictureInput.files[0] : null;
                photoBase64 = '';
                if (!pictureFile) return [3 /*break*/, 2];
                return [4 /*yield*/, fileToBase64(pictureFile)];
            case 1:
                photoBase64 = _b.sent();
                localStorage.setItem("resumePhoto", photoBase64);
                resumePhoto.src = photoBase64;
                return [3 /*break*/, 3];
            case 2:
                resumePhoto.style.display = 'none';
                _b.label = 3;
            case 3:
                console.log("Picture stored locally");
                education = [];
                document.querySelectorAll('.education-entry').forEach(function (entry) {
                    var degreeInput = entry.querySelector('.degree');
                    var instituteInput = entry.querySelector('.institute');
                    var yearInput = entry.querySelector('.year');
                    var degree = degreeInput ? degreeInput.value : '';
                    var institute = instituteInput ? instituteInput.value : '';
                    var year = yearInput ? yearInput.value : '';
                    if (degree !== '' && institute !== '' && year !== '') {
                        education.push("".concat(degree, " from ").concat(institute, " | ").concat(year));
                    }
                });
                experiences = [];
                document.querySelectorAll('.experience-entry').forEach(function (entry) {
                    var positionInput = entry.querySelector('.position');
                    var companyInput = entry.querySelector('.company');
                    var durationInput = entry.querySelector('.duration');
                    var position = positionInput ? positionInput.value : '';
                    var company = companyInput ? companyInput.value : '';
                    var duration = durationInput ? durationInput.value : '';
                    if (position !== '' && company !== '' && duration !== '') {
                        experiences.push("".concat(position, " at ").concat(company, " | ").concat(duration));
                    }
                });
                console.log("experiences added");
                skills = [];
                document.querySelectorAll('.skills-entry').forEach(function (entry) {
                    var skillInput = entry.querySelector('input[name="skills"]');
                    var skill = skillInput ? skillInput.value : '';
                    if (skill !== '') {
                        skills.push("".concat(skill));
                    }
                });
                console.log("skills added");
                certifications = [];
                document.querySelectorAll('.certifications-entry').forEach(function (entry) {
                    var certificationInput = entry.querySelector('input[name="certifications"]');
                    var certInstituteInput = entry.querySelector('input[name="cert-institute"]');
                    var certYearInput = entry.querySelector('input[name="cert-year"]');
                    var certification = certificationInput ? certificationInput.value : '';
                    var cert_institute = certInstituteInput ? certInstituteInput.value : 'noe';
                    var cert_year = certYearInput ? certYearInput.value : '';
                    if (certification !== '' && cert_institute !== '' && cert_year !== '') {
                        certifications.push("".concat(certification, " | ").concat(cert_institute, " | ").concat(cert_year));
                    }
                });
                console.log("cert added");
                populateList = function (listElement, items) {
                    listElement.innerHTML = ''; // clear existing list items
                    //add new list items
                    items.forEach(function (item) {
                        var li = document.createElement("li");
                        li.textContent = item;
                        listElement.appendChild(li);
                    });
                };
                (_a = document.querySelector('.container')) === null || _a === void 0 ? void 0 : _a.classList.add('hidden');
                computedGeneratedSection = window.getComputedStyle(generatedSection);
                if (computedGeneratedSection.display === 'none') {
                    generatedSection.style.display = 'block';
                }
                contact_details.addEventListener('input', function () {
                    if (contact_details.validity.patternMismatch) {
                        contactEror.style.display = 'block';
                    }
                    else {
                        contactEror.style.display = 'none';
                    }
                });
                // //resume output
                resumeName.textContent = name;
                resumeEmail.textContent = "Email: ".concat(email);
                resumePhone.textContent = "Mobile: ".concat(contact);
                console.log("contact added");
                populateList(resumeEducation, education);
                console.log("education populated");
                // experience population
                if (experiences.length > 0) {
                    populateList(resumeExperience, experiences);
                    console.log("experience populated");
                }
                else {
                    profExperienceHeading = document.getElementById("prof-experience");
                    profExperienceHeading.classList.add('hidden');
                    console.log('experiences hidden');
                }
                // skills population
                if (skills.length > 0) {
                    populateList(resumeSkills, skills);
                    console.log('skills addeddd');
                }
                else {
                    skillsHeading = document.getElementById('prof-skills');
                    skillsHeading.classList.add('hidden');
                    console.log("skills removeddd");
                }
                // certifications population
                if (certifications.length > 0) {
                    populateList(resumeCertifications, certifications);
                    console.log("cert addeddd");
                }
                else {
                    certificationsHeading = document.getElementById('prof-certifications');
                    certificationsHeading.classList.add('hidden');
                    console.log("cert removeddd");
                }
                degree = education[0], institute = education[1], year = education[2];
                position = experiences[0], company = experiences[1], duration = experiences[2];
                certificate = certifications[0], cert_institute = certifications[1], cert_year = certifications[2];
                queryParams = new URLSearchParams({
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
                });
                uniqueURL = "".concat(window.location.origin, "?").concat(queryParams.toString());
                shareLinkBtn.addEventListener('click', function () {
                    navigator.clipboard.writeText(uniqueURL)
                        .then(function () {
                        alert("Link of your resume copied");
                    })
                        .catch(function (err) {
                        alert("Failed to copy the link");
                    });
                });
                window.history.replaceState(null, '', "?".concat(queryParams.toString()));
                return [2 /*return*/];
        }
    });
}); });
// const makeEditable = () => {
// }
//helper func to convert file to base64 to make the url short
function fileToBase64(file) {
    return new Promise(function (res, rej) {
        var reader = new FileReader();
        reader.onloadend = function () { return res(reader.result); };
        reader.onerror = rej;
        reader.readAsDataURL(file);
    });
}
var toggleExperienceButton = document.getElementById('toggle-experience');
toggleExperienceButton.addEventListener('click', function () {
    var currentDisplay = window.getComputedStyle(experienceSection).display;
    if (currentDisplay === 'block') {
        experienceSection.style.display = 'none';
        toggleExperienceButton.innerText = 'Show Experience';
    }
    else {
        experienceSection.style.display = 'block';
        toggleExperienceButton.innerText = 'Hide Experience';
    }
});
var toggleCertificationsButton = document.getElementById('toggle-certifications');
toggleCertificationsButton.addEventListener('click', function () {
    var currentDisplay = window.getComputedStyle(certificationsSection).display;
    if (currentDisplay === 'block') {
        certificationsSection.style.display = 'none';
        toggleCertificationsButton.innerText = 'Show Certifications';
    }
    else {
        certificationsSection.style.display = 'block';
        toggleCertificationsButton.innerText = 'Hide Certifications';
    }
});
editBtn.addEventListener("click", function () {
    var _a;
    updateResumeForm();
    // document.querySelector(".container")?.classList.remove("hidden");
    // generatedSection.classList.add("hidden");
    (_a = document.querySelector('.container')) === null || _a === void 0 ? void 0 : _a.classList.remove('hidden');
    // generatedSection.classList.remove('hidden');
    var computedGeneratedSection = window.getComputedStyle(generatedSection);
    if (computedGeneratedSection.display === 'block') {
        generatedSection.style.display = 'none';
    }
});
function updateResumeForm() {
    var _a, _b, _c, _d, _e;
    var _f = ((_a = resumeEducation.textContent) === null || _a === void 0 ? void 0 : _a.split(" ")) || [], degree = _f[0], institute = _f[1], year = _f[2];
    var _g = ((_b = resumeExperience.textContent) === null || _b === void 0 ? void 0 : _b.split(" ")) || [], position = _g[0], company = _g[1], duration = _g[2];
    var _h = ((_c = resumeCertifications.textContent) === null || _c === void 0 ? void 0 : _c.split(" ")) || [], certification = _h[0], cert_institute = _h[1], cert_year = _h[2];
    document.getElementById("name").value = resumeName.textContent || '';
    document.getElementById("email").value = ((_d = resumeEmail.textContent) === null || _d === void 0 ? void 0 : _d.replace('Email: ', '')) || '';
    document.getElementById("contact-number").value = ((_e = contact_details.textContent) === null || _e === void 0 ? void 0 : _e.replace('Mobile: ', '')) || '';
    document.getElementById('degree').value = degree || '';
    document.getElementById("institute").value = institute || '';
    document.getElementById("year").value = year || '';
    document.getElementById("position").value = position || '';
    document.getElementById("company").value = company || '';
    document.getElementById("duration").value = duration || '';
    document.getElementById("certifications").value = certification || '';
    document.getElementById("cert-institute").value = cert_institute || '';
    document.getElementById("cert-year").value = cert_year || '';
    document.getElementById("skills").value = resumeSkills.textContent || '';
}
//download
downloadBtn.addEventListener("click", function () {
    if (typeof html2pdf === 'undefined') {
        alert("Error: html2pdf library not loaded");
        return;
    }
    var opt = {
        margins: 1,
        filename: 'resume.pdf',
        image: { type: 'jpeg', quality: 1.0 },
        html2canvas: { scale: 2 },
        jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' },
    };
    html2pdf().from(resume).set(opt).save().catch(function (err) {
        console.log('PDF generation error: ', err);
    });
});
window.addEventListener("DOMContentLoaded", function () {
    var _a;
    var params = new URLSearchParams(window.location.search);
    var name = params.get("name") || '';
    var email = params.get("email") || '';
    var contact = params.get("contact") || '';
    var degree = params.get("degree") || '';
    var institute = params.get("institute");
    var year = params.get("year") || '';
    var skills = params.get('skill') || '';
    if (name || email || contact || degree || institute || year || skills) {
        resumeName.textContent = name;
        resumeEmail.textContent = email;
        resumePhone.textContent = contact;
        resumeEducation.textContent = "".concat(degree, " ").concat(institute, " ").concat(year);
        resumeSkills.textContent = skills;
        //retrieve photo from local storage
        var savedPhoto = localStorage.getItem("resumePhoto");
        if (savedPhoto) {
            resumePhoto.src = savedPhoto;
        }
        //hide form and show resume page
        (_a = document.querySelector(".conatiner")) === null || _a === void 0 ? void 0 : _a.classList.add("hidden");
        resume.classList.remove("hidden");
    }
});
resumePhoto.style.borderRadius = '50%';
resumePhoto.style.width = '150px';
resumePhoto.style.height = '150px';
resumePhoto.style.margin = '10px auto';
resumePhoto.style.display = 'block';
resumePhoto.style.objectFit = 'cover';
resume.style.borderRadius = '2%';
resume.style.borderColor = 'white';
resume.style.padding = ' 4% 6%';
