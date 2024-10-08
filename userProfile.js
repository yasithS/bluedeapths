const entries = document.querySelectorAll('.entryBox');
const nextButtons = document.querySelectorAll('.next');
const backButtons = document.querySelectorAll('.back');
const skipButtons = document.querySelectorAll('.skip')
const progressBar = document.getElementById('progress'); 

let currentStep = 0;
let totalsteps = (entries.length - 1);

// Update the progress bar
function updateProgressBar() {
    const progressPercent = ((currentStep) / (totalsteps )) * 100;
    progressBar.style.width = `${progressPercent}%`;
    document.getElementById('progressCount').innerHTML = Math.floor(progressPercent)+"%"; 
}

// Show the current step
function showStep(step) {
    entries.forEach((entry, index) => {
        entry.style.display = (index === step) ? 'block' : 'none';
    });
    displayUserProfile();
    updateProgressBar();
}

function skipStep(step){
    entries.forEach((entry, index) => {
        entry.style.display = (index === step) ? 'block' : 'none';
    });
    displayUserProfile();
}

// Show the initial step
showStep(currentStep);

// Next button click event 
nextButtons.forEach((button, index) => {
    button.addEventListener('click', () => {
        const currentEntryInputs = entries[currentStep].querySelectorAll('.entryInput');
        let allFieldsFilled = true;
        

        currentEntryInputs.forEach(input => {
            if (input.value.trim() === "") {
                allFieldsFilled = false;
            }
        });

        if (!allFieldsFilled) {
            alert('Entry Field Cannot be empty!');
        } else {
            if (currentStep < entries.length - 1) {
                currentStep++;
                showStep(currentStep);
            } else {
                document.getElementById('progressBar').style.display = 'none';
                checkCheckbox();
                document.getElementById('entry12').style.display = 'none';
                
            }
        }
    });
});

// Check the checkbox
function checkCheckbox() {
    document.getElementById('termsGiving').style.display = 'block';
    document.getElementById('results').addEventListener('click', function() {
        var checkbox = document.getElementById('termsCheckbox');
        var warning = document.getElementById('termsWarning');
        if (checkbox.checked) {
            document.getElementById('termsGiving').style.display = 'none';
            displayUserProfile();
        } else {
            warning.style.display = 'block';
        }
    });     
}

// Back button click event for each step
backButtons.forEach((button) => {
    button.addEventListener('click', () => {
        if (currentStep > 0) {
            currentStep--;
            showStep(currentStep);
        }
    });
});

// skip buttons
skipButtons.forEach((button) => {
    button.addEventListener('click', () => {
        if (currentStep < totalsteps) {
            currentStep++;
            skipStep(currentStep);
        }
    });
});

document.getElementById('backButton').addEventListener('click', function(){
    document.getElementById('entry12').style.display = 'block';
})

document.getElementById('save').addEventListener('click', function(){
    alert("Data Saved")
})

// Display the user profile summary
function displayUserProfile() {
    document.getElementById('userName').value = document.getElementById('name').value;
    document.getElementById('userAge').value = document.getElementById('age').value;
    // Handle dropdown select
    const genderSelect = document.getElementById('gender');
    if (genderSelect) {
        document.getElementById('userGender').value = genderSelect.value;
    }
    // Handle radio buttons
    const genderRadios = document.querySelectorAll('input[name="gender"]');
    genderRadios.forEach((radio) => {
        if (radio.checked) {
            document.getElementById('userGender').value = radio.value;
        }
    });
    document.getElementById('userBirth').value = document.getElementById('birth').value;
    document.getElementById('userStudy').value = document.getElementById('study').value;
    document.getElementById('userUniversity').value = document.getElementById('university').value;
    const degreeSelect = document.getElementById('degree');
    if (degreeSelect) {
        document.getElementById('userLevel').value = degreeSelect.value;
    }
    document.getElementById('userId').value = document.getElementById('studentId').value;
    document.getElementById('userPhone').value = document.getElementById('contact').value;
    document.getElementById('userMail').value = document.getElementById('mail').value;
    document.getElementById('userAddressResident').value = document.getElementById('reAddress').value;
    document.getElementById('userAddressMail').value = document.getElementById('meAddress').value;
}