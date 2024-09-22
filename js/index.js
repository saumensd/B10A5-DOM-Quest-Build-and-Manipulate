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
