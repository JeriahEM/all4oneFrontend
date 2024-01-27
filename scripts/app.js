// 2 to 4
let numberinput1 = document.getElementById('numberinput1');
let numberinput2 = document.getElementById('numberinput2');
let submitBtn = document.getElementById('submitBtn');
let output = document.getElementById('output');


async function addNum(num, num1){
    const promise = await fetch(`https://jallforone.azurewebsites.net/TwoToFour/PullNum/${num}/${num1}`);
    const data = await promise.text();
    return data;
}
addNum();

submitBtn.addEventListener('click', async () => {
    output.textContent = await addNum(numberinput1.value, numberinput2.value);
    output.className = 'font-nova text-center px-3 py-10 text-white';
});

let nameinput = document.getElementById('nameinput');
let timeinput = document.getElementById('timeinput');

async function helloTime(userName, wakeUp){
    const promise = await fetch(`https://jallforone.azurewebsites.net/nameAndWakeUpTime/PullName/${userName}/${wakeUp}`);
    const data = await promise.text();
    return data;
}
helloTime();

submitBtn.addEventListener('click', async () => {
    output.textContent = await helloTime(nameinput.value, timeinput.value);
    output.className = 'font-nova text-center px-3 py-10 text-white';
});

let glnumberinput1 = document.getElementById('glnumberinput1');
let glnumberinput2 = document.getElementById('glnumberinput2');

async function greatLess(num, num1){
    const promise = await fetch(`https://jallforone.azurewebsites.net/greaterThanLessThan/PullNum1/${num}/${num1}`);
    const data = await promise.text();
    return data;
}
greatLess();

submitBtn.addEventListener('click', async () => {
    output.textContent = await greatLess(glnumberinput1.value, glnumberinput2.value);
    output.className = 'font-nova text-center px-3 py-10 text-white';
});

// 5 to 7

let nameinput1 = document.getElementById('nameinput1');
let nameinput2 = document.getElementById('nameinput2');
let edverbinput = document.getElementById('edverbinput');
let placeinput = document.getElementById('placeinput');
let timeframeinput1 = document.getElementById('timeframeinput1');
let timeframeinput2 = document.getElementById('timeframeinput2');
let timeframeinput3 = document.getElementById('timeframeinput3');
let nouninput1 = document.getElementById('nouninput1');
let nouninput2 = document.getElementById('nouninput2');
let nouninput3 = document.getElementById('nouninput3');
let nouninput4 = document.getElementById('nouninput4');
let verbinput1 = document.getElementById('verbinput1');
let verbinput2 = document.getElementById('verbinput2');
let verbinput3 = document.getElementById('verbinput3');
let adjinput = document.getElementById('adjinput');
let adjlyinput = document.getElementById('adjlyinput');
let foodinput = document.getElementById('foodinput');
let bpinput = document.getElementById('bpinput');
let rsinput = document.getElementById('rsinput');


async function madTake(name, verbWithED, verb, timeFrame, place, adjWithLY, adj, noun, noun1, relationshipStatus, timeFrame1, verb1, noun2, food, bodyPart, noun3, verb2, name1, timeFrame2){
    const promise = await fetch(
    `https://jallforone.azurewebsites.net/Five/mabLib/${name}/${verbWithED}/${verb}/${timeFrame}/${place}/${adjWithLY}/${adj}/${noun}/${noun1}/${relationshipStatus}/${timeFrame1}/${verb1}/${noun2}/${food}/${bodyPart}/${noun3}/${verb2}/${name1}/${timeFrame2}`
    );
    const data = await promise.text();
    return data;
}
madTake();

submitBtn.addEventListener('click', async() => {
    output.textContent = await madLibApi(nameinput1.value, edverbinput.value, verbinput1.value, timeframeinput1.value, placeinput.value, adjlyinput.value, adjinput.value, nouninput1.value, nouninput2.value, rsinput.value, timeframeinput2.value, verbinput2.value, nouninput3.value, foodinput.value, bpinput.value, nouninput4.value, verbinput3.value, nameinput2.value, timeframeinput3.value);
    output.className = 'font-nova text-center px-3 py-6 text-white';
});

let numberinput = document.getElementById('onumberinput');

async function oddEven(userInput){
    const promise = await fetch(`https://jallforone.azurewebsites.net/Six/oddOrEven/` + userInput);
    const data = await promise.text();
    return data;
}
oddEven();

submitBtn.addEventListener('click', async () => {
    output.textContent = await oddEven(onumberinput.value);
    output.className = 'font-nova text-center px-3 py-10 text-white';
});

let sequenceinput = document.getElementById('sequenceinput');

async function reverseIt(userInput){
    const promise = await fetch(`https://jallforone.azurewebsites.net/Seven/reverseIt/` + userInput);
    const data = await promise.text();
    return data;
}
reverseIt();

submitBtn.addEventListener('click', async() => {
    output.textContent = await reverseIt(sequenceinput.value);
    output.className = 'font-nova text-center px-3 py-10 text-white';
});

let sequenceintput = document.getElementById('sequenceintput');

async function reverseInt(userInput){
    const promise = await fetch(`https://jallforone.azurewebsites.net/BSeven/reverseit/` + userInput);
    const data = await promise.text();
    return data;
}
reverseInt();

submitBtn.addEventListener('click', async() => {
    output.textContent = await reverseInt(sequenceintput.value);
    output.className = 'font-nova text-center px-3 py-10 text-white';
});

//8 to 10

async function burger(){
    const promise = await fetch(`https://jallforone.azurewebsites.net/controller/restPickBurg`);
    const data = await promise.text();
    return data;
}
burger();

async function chicken(){
    const promise = await fetch(`https://jallforone.azurewebsites.net/controller/restPickChick`);
    const data = await promise.text();
    return data;
}
chicken();

async function pizza(){
    const promise = await fetch(`https://jallforone.azurewebsites.net/controller/restPickPizza`);
    const data = await promise.text();
    return data;
}
pizza();

submitBtn.addEventListener('click', async () => {
    output.textContent = await summationApi(numberinput1.value, numberinput2.value);
    output.className = 'font-nova text-center px-3 py-10 text-white';
});