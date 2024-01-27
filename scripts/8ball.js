let submitBtn = document.getElementById('submitBtn');
let output = document.getElementById('output');

async function magicEight(question){
    const promise = await fetch(`https://jallforone.azurewebsites.net/Eight/magicEight/` + question);
    const data = await promise.text();
    return data;
}
magicEight();

submitBtn.addEventListener('click', async() => {
    output.textContent = await magicEight();
    output.className = 'font-nova text-center px-3 py-10 text-white';
});