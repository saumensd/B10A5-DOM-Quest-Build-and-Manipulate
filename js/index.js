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
    const inputMoney1 = document.getElementById('input1');
    const inputMoney1Value = inputMoney1.value;
    const inputMoney1ValueParseInt = parseInt(inputMoney1Value);
    if(inputMoney1ValueParseInt <1 || isNaN(inputMoney1ValueParseInt)){
        alert('Enter a valid Number');
        inputMoney1.value = '';
    }
    else{
        const myAmmount = document.getElementById('my-ammount');
        const myAmmountInnerText = myAmmount.innerText;
        const myAmmountInnerTextParseInt = parseInt(myAmmountInnerText)
    
        const donationAmount = document.getElementById('donation-ammount');
        const donationAmountInnerText = donationAmount.innerText;
        const donationAmountInnerTextParseInt = parseInt(donationAmountInnerText);
    
        const totalDonationAmount =  donationAmountInnerTextParseInt + inputMoney1ValueParseInt ;
        donationAmount.innerText = totalDonationAmount;
    
        const removeMyDonationAmountFromMyAmmount = myAmmountInnerTextParseInt - inputMoney1ValueParseInt;
        myAmmount.innerText = removeMyDonationAmountFromMyAmmount;
    
        inputMoney1.value = '';
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
