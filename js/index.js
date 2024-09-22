// blog page
document.getElementById('blog-page-button').addEventListener('click', function(){
    window.location.href = '/blog.html';
})
// active donation button
const button1 = document.getElementById('button1');
const button2 = document.getElementById('button2');

function resetActiveButtons() {
    button1.classList.remove('bg-green-300');
    button2.classList.remove('bg-green-300');
}

button1.addEventListener('click', function() {
    resetActiveButtons(); 
    button1.classList.add('bg-green-300'); 
});

button2.addEventListener('click', function() {
    resetActiveButtons(); 
    button2.classList.add('bg-green-300'); 
});

//input money
document.getElementById('donation1').addEventListener('click',function(){
    
    const myDonatedAmount = getInputFieldValueById('input1');

    if(myDonatedAmount <1 || isNaN(myDonatedAmount)){
        alert('Enter a valid Number');
        return;
    }
    else{
       
        const myMoney = getTextFieldValueById('my-ammount');
        const allDonation = getTextFieldValueById('donation-ammount');
        updateTotalDonationAmount(myDonatedAmount ,allDonation , 'donation-ammount')
        updateTotalDonationAmount2(myMoney ,  myDonatedAmount , 'my-ammount')
        clearInputField('input1');
    }

  
})
// document.getElementById('donation1').addEventListener('click',function(){
//     const inputMoney1 = document.getElementById('input1');
//     const inputMoney1Value = inputMoney1.value;
//     const inputMoney1ValueParseInt = parseInt(inputMoney1Value);

//     const myAmmount = document.getElementById('my-ammount');
//     const myAmmountInnerText = myAmmount.innerText;
//     const myAmmountInnerTextParseInt = parseInt(myAmmountInnerText)

//     const donationAmount = document.getElementById('donation-ammount');
//     const donationAmountInnerText = donationAmount.innerText;
//     const donationAmountInnerTextParseInt = parseInt(donationAmountInnerText);

//     const totalDonationAmount =  donationAmountInnerTextParseInt + inputMoney1ValueParseInt ;
//     donationAmount.innerText = totalDonationAmount;

//     const removeMyDonationAmountFromMyAmmount = myAmmountInnerTextParseInt - inputMoney1ValueParseInt;
//     myAmmount.innerText = removeMyDonationAmountFromMyAmmount;

//     inputMoney1.value = '';
// })
