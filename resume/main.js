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
var form = document.getElementById("resume-form");
var resumeSection = document.getElementById("resumeSection");
var resume = document.getElementById("resume");
var resumeName = document.getElementById("resumeName");
var resumeEmail = document.getElementById("resumeEmail");
var resumeContact = document.getElementById("resumeContact");
var resumeEducation = document.getElementById("resumeEducation");
var resumeExperience = document.getElementById("resumeExperience");
var resumeSkills = document.getElementById("resumeSkills");
var resumePhoto = document.getElementById("resumePhoto");
var downloadBtn = document.getElementById("downloadBtn");
var editBtn = document.getElementById("editBtn");
var shareBtn = document.getElementById("shareBtn");
var backBtn = document.getElementById("backBtn");
var contact_number = document.getElementById("contact-number");
var error = document.getElementById("error");
contact_number.addEventListener("input", function () {
    if (contact_number.validity.patternMismatch) {
        error.style.display = 'block';
    }
    else {
        error.style.display = 'none';
    }
});
form.addEventListener("submit", function (e) { return __awaiter(_this, void 0, void 0, function () {
    var name, email, degree, institute, experience, skills, photo, photoInput, base64, queryParams, uniqueURL;
    var _a;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                e.preventDefault();
                name = document.getElementById("full-name").value;
                email = document.getElementById("email").value;
                degree = document.getElementById("degree").value;
                institute = document.getElementById("institute").value;
                experience = document.getElementById("experience").value;
                skills = document.getElementById("skills").value;
                photo = document.getElementById("photo");
                photoInput = photo.files ? photo.files[0] : null;
                base64 = '';
                if (!photoInput) return [3 /*break*/, 2];
                return [4 /*yield*/, fileToBase64(photoInput)];
            case 1:
                base64 = _b.sent();
                //store in local storage
                localStorage.setItem("resumePhoto", base64);
                resumePhoto.src = base64;
                return [3 /*break*/, 3];
            case 2:
                resumePhoto.style.display = 'none';
                _b.label = 3;
            case 3:
                (_a = document.querySelector(".container")) === null || _a === void 0 ? void 0 : _a.classList.add("hidden");
                resumeSection.classList.remove("hidden");
                resumeName.textContent = name;
                resumeEmail.textContent = "Email: ".concat(email);
                resumeContact.textContent = "Contact Number: ".concat(contact_number.value);
                resumeEducation.textContent = "".concat(degree, " from ").concat(institute);
                resumeExperience.textContent = experience;
                resumeSkills.textContent = skills;
                queryParams = new URLSearchParams({
                    name: name,
                    email: email,
                    phone: contact_number.value,
                    degree: degree,
                    school: institute,
                    experience: experience,
                    skills: skills,
                });
                uniqueURL = "".concat(window.location.origin, "?").concat(queryParams.toString());
                shareBtn.addEventListener('click', function () {
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
function fileToBase64(file) {
    return new Promise(function (res, rej) {
        var reader = new FileReader();
        reader.onloadend = function () { return res(reader.result); };
        reader.onerror = rej;
        reader.readAsDataURL(file);
    });
}
editBtn.addEventListener("click", function () {
    var _a;
    updateResumeForm();
    (_a = document.querySelector(".container")) === null || _a === void 0 ? void 0 : _a.classList.remove("hidden");
    resumeSection.classList.add("hidden");
});
function updateResumeForm() {
    var _a, _b, _c;
    var _d = ((_a = resumeEducation.textContent) === null || _a === void 0 ? void 0 : _a.split(" from ")) || [], degree = _d[0], institute = _d[1];
    document.getElementById("full-name").value = resumeName.textContent || '';
    document.getElementById("email").value = ((_b = resumeEmail.textContent) === null || _b === void 0 ? void 0 : _b.replace('Email: ', '')) || '';
    document.getElementById("contact-number").value = ((_c = resumeContact.textContent) === null || _c === void 0 ? void 0 : _c.replace('Contact Number: ', '')) || '';
    document.getElementById('degree').value = degree || '';
    document.getElementById("institute").value = institute || '';
    document.getElementById("experience").value = resumeExperience.textContent || '';
    document.getElementById("skills").value = resumeSkills.textContent || '';
}
downloadBtn.addEventListener("click", function () {
    if (typeof html2pdf === 'undefined') {
        alert("Error: html2pdf library not loaded");
        return;
    }
    var opt = {
        margin: 1,
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
    var name = params.get("full-name") || '';
    var email = params.get("email") || '';
    var contact = params.get("contact-number") || '';
    var degree = params.get("degree") || '';
    var institute = params.get("institute") || '';
    var experience = params.get("experience") || '';
    var skills = params.get("skills") || '';
    if (name || email || contact || degree || institute || experience || skills) {
        //populate resume preview if query params are present
        resumeName.textContent = name;
        resumeEmail.textContent = "Email: ".concat(email);
        resumeContact.textContent = "Contact Number: ".concat(contact_number.value);
        resumeEducation.textContent = "".concat(degree, " from ").concat(institute);
        resumeExperience.textContent = experience;
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
resume.style.padding = ' 1% 3%';
