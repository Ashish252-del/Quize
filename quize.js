const quize = [
    {
        question: "Which type of JavaScript language is ___ ",
        a: "Object - Oriented",
        b: "Object - Based",
        c: "Assembly - language",
        d: "High- level",
        ans: "ans1"
    },
    {
        question: "what is full form of css ",
        a: "Cascading style sheets",
        b: "Cascading style sheep",
        c: "Cartoon style sheet",
        d: "Cascadijng super sheet",
        ans: "ans1"
    },
    {
        question: "what is full form of HTTP ",
        a: "Hyper tranfer product",
        b: "Hey tranfer protocal",
        c: "Hyper test protocall",
        d: "Hypertext transfer protocol",
        ans: "ans4"
    }
];
const question = document.querySelector('.question');
const option1 = document.querySelector('#option1');
const option2 = document.querySelector('#option2');
const option3 = document.querySelector('#option3');
const option4 = document.querySelector('#option4');
const submit = document.querySelector('#submit');
const answers = document.getElementsByClassName("answer");
const showScore = document.getElementById("showScore")
console.log(answers);
let questoncount = 0;
let score = 0;
function loadQuestion  ()  {
    const questionList = quize[questoncount];
    question.innerText = questionList.question;
    option1.innerText = questionList.a;
    option2.innerText = questionList.b;
    option3.innerText = questionList.c;
    option4.innerText = questionList.d;
     
}
loadQuestion();
function getCheckedAnswer (){
    let answer;
    for (let i = 0; i < 4; i++ ) {
        if (answers[i].checked==true) {
            answer = answers[i].id;
        }
       
    }; console.log(answer);
     return answer;
}
function deselectAll() {
    for (let i = 0; i < 4; i++)
        answers[i].checked = false;
}
submit.addEventListener('click', function ()  {
    const checkedAnswer = getCheckedAnswer();
    if (checkedAnswer == quize[questoncount].ans) {
        score++;  
    }
    questoncount++;
    deselectAll();
    if (questoncount < quize.length) {
        loadQuestion();
    }
    else {
        showScore.innerHTML = ` <h1>Your score is ${score}/${quize.length}</h1>
        <button class="btn" onclick="location.reload()"> Play again </button>`;
        showScore.classList.remove('scoreArea');
    }
})