function getInputFieldValueById(id){
    const inputValue = document.getElementById(id).value;
    const inputNumber = parseInt(inputValue);
    return inputNumber;
}


function getTextFieldValueById(id){
    const textValue = document.getElementById(id).innerText;
    const textNumber = parseFloat(textValue);
    return textNumber;
}


// function  updateTotalDonationAmount(myDonatedAmount, allDonation) {
//     const totalDonationAmount = myDonatedAmount + allDonation;
//     return totalDonationAmount;
// }

// function updateTotalDonationAmount(amount1, amount2) {
//     const totalDonationAmount = amount1 + amount2;
//     document.getElementById('donation-ammount').innerText = totalDonationAmount;
//     return totalDonationAmount;
// }

// function removeMyDonationAmountFromMyAmmount(amount1, amount2) {
//     const totalDonationAmount = amount1 - amount2;
//     document.getElementById('donation-ammount').innerText = totalDonationAmount;
//     return totalDonationAmount;
// }

function updateTotalDonationAmount(amount1, amount2, elementId) {
    const totalDonationAmount = amount1 + amount2;
    document.getElementById(elementId).innerText = totalDonationAmount;
    return totalDonationAmount;
}

function updateTotalDonationAmount2(amount1, amount2, elementId) {
    const totalDonationAmount = amount1 - amount2;
    document.getElementById(elementId).innerText = totalDonationAmount;
    return totalDonationAmount;
}

document.getElementById('input1').value = '';



function clearInputField(inputId) {
    const inputField = document.getElementById(inputId);
    inputField.value = '';
    return inputField.value;
}

//time
function updateDonationTime(donationTimeSpanId) {
    const now = new Date().toLocaleString();
    document.getElementById(donationTimeSpanId).textContent = now;
}