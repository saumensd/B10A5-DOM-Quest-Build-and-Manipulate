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






// DocumentTimeline.getElementById('button2').addEventListener('click',function(){
//     // const donation1 = document.getElementById('donation-ammount');
//     // const allDonation = getTextFieldValueById('donation-ammount');
//     // console.log(allDonation)
//     // const donation2 = document.getElementById('donation-ammount2');
//     // const donation3 = document.getElementById('donation-ammount3');
//     const p = document.createElement('p');
//     p.innerText = `${allDonation} Taka is Donated for famine-2024 at Feni, Bangladesh`;
//     document.getElementById('history-section').appendChild(p);
//     console.log(p);

// })

// const p = document.createElement('p');
// p.innerText = `Added: ${addMoney} Tk. New Balance: ${newBalance}`;
// console.log(p); 

// // should be a common function
// document.getElementById('transaction-container').appendChild(p);
// }
// else{
// alert('Failed to add the money.')
// }

// document.getElementById('button2').addEventListener('click',function(){
//     document.getElementById('main-card-section').classList.add('hidden')
// })



// add to transaction history
// const div = document.createElement('div');
// div.classList.add('bg-yellow-300');
// div.innerHTML = `
//     <h4 class="text-2xl font-bold">Cash Out</h4>
//     <p>${cashOut} withdraw. New Balance ${newBalance}</p>
// `

// document.getElementById('transaction-container').appendChild(div);