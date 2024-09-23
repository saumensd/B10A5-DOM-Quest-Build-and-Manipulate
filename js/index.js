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
    document.getElementById('history-section').classList.add('hidden'); 
    document.getElementById('main-card-section').classList.remove('hidden'); 
});

button2.addEventListener('click', function() {
    resetActiveButtons(); 
    button2.classList.add('bg-green-300'); 
    document.getElementById('main-card-section').classList.add('hidden'); 
    document.getElementById('history-section').classList.remove('hidden'); 
});


//input money
document.getElementById('donation1').addEventListener('click',function(event){
    event.preventDefault();
    const myDonatedAmount = getInputFieldValueById('input1');

    if(myDonatedAmount <1 || isNaN(myDonatedAmount)){
        document.getElementById('my-modal').checked = true;
        return;
    }
    else{
       
        const myMoney = getTextFieldValueById('my-ammount');
        const allDonation = getTextFieldValueById('donation-ammount');
        updateTotalDonationAmount(myDonatedAmount ,allDonation , 'donation-ammount')
        updateTotalDonationAmount2(myMoney ,  myDonatedAmount , 'my-ammount')
        clearInputField('input1');
        document.getElementById('thank-you-modal').checked = true;
        updateDonationTime('live-time'); 

    }
})
//input money2
document.getElementById('donation2').addEventListener('click',function(event){
    event.preventDefault();
    const myDonatedAmount = getInputFieldValueById('input2');

    if(myDonatedAmount <1 || isNaN(myDonatedAmount)){
        document.getElementById('my-modal').checked = true;
        return;
    }
    else{
       
        const myMoney = getTextFieldValueById('my-ammount');
        const allDonation = getTextFieldValueById('donation-ammount2');
        updateTotalDonationAmount(myDonatedAmount ,allDonation , 'donation-ammount2')
        updateTotalDonationAmount2(myMoney ,  myDonatedAmount , 'my-ammount')
        clearInputField('input2');
        document.getElementById('thank-you-modal').checked = true;
        updateDonationTime('live-time2');

    }
})
//input money3
document.getElementById('donation3').addEventListener('click',function(event){
    event.preventDefault();
    const myDonatedAmount = getInputFieldValueById('input3');

    if(myDonatedAmount <1 || isNaN(myDonatedAmount)){
        document.getElementById('my-modal').checked = true;
        return;
    }
    else{
       
        const myMoney = getTextFieldValueById('my-ammount');
        const allDonation = getTextFieldValueById('donation-ammount3');
        updateTotalDonationAmount(myDonatedAmount ,allDonation , 'donation-ammount3')
        updateTotalDonationAmount2(myMoney ,  myDonatedAmount , 'my-ammount')
        clearInputField('input3');
        document.getElementById('thank-you-modal').checked = true;
        updateDonationTime('live-time3'); 

    }
})

//history

document.getElementById('button2').addEventListener('click', function() {

    document.getElementById('taka1').innerText = document.getElementById('donation-ammount').innerText;
    document.getElementById('taka2').innerText = document.getElementById('donation-ammount2').innerText;
    document.getElementById('taka3').innerText = document.getElementById('donation-ammount3').innerText;
    
});



