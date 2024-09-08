var form = document.getElementById('resume-form');
var resume = document.getElementById('resume-output');
//contact input error handling
var contact_details = document.getElementById('contact-details');
var contactEror = document.getElementById('contact-error');
contact_details.addEventListener('input', function () {
    if (contact_details.validity.patternMismatch) {
        contactEror.style.display = 'block';
    }
    else {
        contactEror.style.display = 'none';
    }
});
//add more func for experience, skills, and certifications
var addExperienceBtn = document.getElementById('add-experience');
var experienceSection = document.getElementById('experience');
addExperienceBtn.addEventListener('click', function (e) {
    e.preventDefault();
    var experienceEntry = document.createElement('div');
    experienceEntry.classList.add('experience-entry');
    experienceEntry.innerHTML = "\n       <label>\n            Position\n            <input type=\"text\" name=\"position\" placeholder=\"Position\">\n        </label>\n        <label>Company\n            <input type=\"text\" name=\"company\" placeholder=\"Company\">\n        </label>\n        <label>Duration\n            <input type=\"number\" name=\"duration\" placeholder=\"Duration\">\n        </label>\n    ";
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
form.addEventListener('submit', function (e) {
    e.preventDefault();
    //user input for personal info
    var name = document.getElementById('name').value;
    var contact = document.getElementById('contact-details').value;
    var email = document.getElementById('email').value;
    //user input for education
    var degree = document.getElementById('degree').value;
    var institute = document.getElementById('institute').value;
    var year = document.getElementById('year').value;
    //user input for experience
    var experiences = [];
    document.querySelectorAll('.experience-entry').forEach(function (entry) {
        var positionInput = entry.querySelector('input[name="position"]');
        var companyInput = entry.querySelector('input[name="company"]');
        var durationInput = entry.querySelector('input[name="duration"]');
        var position = positionInput ? positionInput.value : '';
        var company = companyInput ? companyInput.value : '';
        var duration = durationInput ? durationInput.value : '';
        experiences.push("".concat(position, " | ").concat(company, " | ").concat(duration));
    });
    //user input for skills
    var skills = [];
    document.querySelectorAll('.skills-entry').forEach(function (entry) {
        var skillInput = entry.querySelector('input[name="skills"]');
        var skill = skillInput ? skillInput.value : '';
        skills.push("".concat(skill));
    });
    //user input for certifications
    var certifications = [];
    document.querySelectorAll('.certifications-entry').forEach(function (entry) {
        var certificationInput = entry.querySelector('input[name="certifications"]');
        var certInstituteInput = entry.querySelector('input[name="cert-institute"]');
        var certYearInput = entry.querySelector('input[name="cert-year"]');
        var certification = certificationInput ? certificationInput.value : '';
        var cert_institute = certInstituteInput ? certInstituteInput.value : '';
        var cert_year = certYearInput ? certYearInput.value : '';
        certifications.push("".concat(certification, " | ").concat(cert_institute, " | ").concat(cert_year));
    });
    //resume output
    resume.innerHTML = "\n        <h1>".concat(name, "</h1>\n        <p>Contact Details: ").concat(contact, " | Email: ").concat(email, "</p>\n        <h2>Education</h2>\n        <p>").concat(degree, " | ").concat(institute, " | ").concat(year, "</p>\n        <h2>Professional Experience</h2>\n        <ul>\n            ").concat(experiences.map(function (exp) { return "<li>".concat(exp, "</li>"); }).join(''), "\n        </ul>\n        <h2>Skills</h2>\n        <ul>\n            ").concat(skills.map(function (skill) { return "<li>".concat(skill, "</li>"); }).join(''), "\n        </ul>\n        <h2>Certifications</h2>\n        <ul>\n            ").concat(certifications.map(function (cert) { return "<li>".concat(cert, "</li>"); }).join(''), "\n        </ul>\n    ");
});
var toggleExperienceButton = document.getElementById('toggle-experience');
toggleExperienceButton.addEventListener('click', function () {
    experienceSection.style.display = experienceSection.style.display === 'none' ? 'block' : 'none';
});
var toggleCertificationsButton = document.getElementById('toggle-certifications');
toggleCertificationsButton.addEventListener('click', function () {
    certificationsSection.style.display = certificationsSection.style.display === 'none' ? 'block' : 'none';
});
