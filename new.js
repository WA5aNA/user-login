import { isValidEmail,isValidMobile } from "./formvalidation.js";
import { addUser, getAllUsers } from './storage.js';

// const submittedUsers = [];
document.addEventListener("DOMContentLoaded", () => {
    const emailInput = document.getElementById('email');
    const mobileInput = document.getElementById('mobile');
    const emailvalid = document.getElementById('emailvalid');
    const mobilenovalid = document.getElementById('mobilenovalid');

    emailInput.addEventListener("keyup", () => {
        if (emailInput.value.trim() === "") {
            emailvalid.innerText = "";
        } else if (!isValidEmail(emailInput.value)) {
            emailvalid.innerText = "Invalid email address";
        } else {
            emailvalid.innerText = "";
        }
    });

    mobileInput.addEventListener("keyup", () => {
        if (mobileInput.value.trim() === "") {
            mobilenovalid.innerText = "";
        } else if (!isValidMobile(mobileInput.value)) {
            mobilenovalid.innerText = "Invalid mobile number";
        } else {
            mobilenovalid.innerText = "";
        }
    });
});


function formSubmit() {
    const title = document.getElementById('title').value
    const firstName = document.getElementById('firstName').value.trim()
    const lastName = document.getElementById('lastName').value.trim()
    const genderInput = document.querySelector('input[name="gender"]:checked');
    const dob = document.getElementById('dob').value
    const email = document.getElementById('email').value
    const mobile = document.getElementById('mobile').value
    const terms = document.getElementById('terms').checked

    const formalert = document.getElementById('formfill')
    const emailvalid = document.getElementById('emailvalid')
    const mobilenovalid = document.getElementById('mobilenovalid')
    const result = document.getElementById('result')

    formalert.innerText = ""
    result.innerHTML = ""

    
    if (!title || !firstName || !lastName || !genderInput || !dob || !email || !mobile || !terms) {
        formalert.innerText = "Please fill in all fields."
        return
    }

    emailvalid.innerText = ""
    mobilenovalid.innerText = ""

    // const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    // const mobilePattern = /^0\d{9}$/;

    // let hasError = false;

    // if (!isValidEmail(email)) {
    //     emailvalid.innerText = "Invalid email address";
    //     hasError = true;
    // }

    // if (!isValidMobile(mobile)) {
    //     mobilenovalid.innerText = "Invalid mobile number";
    //     hasError = true;
    // }

    // if (hasError) {
    //     return;
    // }

    alert("✅ Form submitted successfully!");

//     const formData = {
//     title: title,
//     firstName: firstName,
//     lastName: lastName,
//     gender: genderInput.value,
//     dob: dob,
//     email: email,
//     mobile: mobile
// };

//     submittedUsers.push(formData);

const user = { title, firstName, lastName, gender: genderInput.value, dob, email, mobile };
    addUser(user);

    const users = getAllUsers();


 result.innerHTML = `<div class="alert alert-success mt-4">
        <h5>Submitted Users</h5>
        <ul>
            ${users.map(user => `
                <li>
                <div class="alert alert-success mt-4">
                    <strong>Title:</strong> ${user.title} <br>
                    <strong>Name:</strong> ${user.firstName} ${user.lastName}<br>
                    <strong>Gender:</strong> ${user.gender} <br>
                    <strong>DOB:</strong> ${user.dob}<br>
                    <strong>Email:</strong> ${user.email} <br>
                    <strong>Mobile:</strong> ${user.mobile}<br>
                    </div>
                </li>
            `).join('')}
        </ul>
    </div>
    <br>`;

    document.getElementById('title').value = '';
    document.getElementById('firstName').value = '';
    document.getElementById('lastName').value = '';
    document.querySelectorAll('input[name="gender"]').forEach(input => input.checked = false);
    document.getElementById('dob').value = '';
    document.getElementById('email').value = '';
    document.getElementById('mobile').value = '';
    document.getElementById('terms').checked = false;

}

window.formSubmit = formSubmit;

