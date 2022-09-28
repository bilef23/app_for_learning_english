let counter=0;
var array=["dog","cat","pig","bear","wolf","fox","horse","donkey","goat",
    "duck","turkey","chicken","cow","monkey","turtle"];

const cards=document.querySelectorAll('.card_inner');

function flipCard(){

    this.classList.add('flip');

    let flag=true;
    for(let i=0;i<array.length;i++){
        if(array[i]===this.getAttribute('id')){
            array.splice(i,1)
            flag=false;
            counter++;
        }
        console.log(this.getAttribute('id'));
    }

    console.log(counter);
    if(counter===6){
        console.log("Okay");
        page.style.visibility="hidden";
        question.style.display="block";
        window.scrollTo(0,0);

    }
    if(counter===15){
        page.style.visibility="hidden";
        finalQuiz.style.display="block";
        console.log("ok e");
        window.scrollTo(0,0);
    }

}
//If yes we'have remembered button clicked
function  yesEvent(){
    quiz.style.display="block";
    question.style.display="none"
}
//If no we havent't remembered button clicked
function  noEvent(){
    window.location.reload();
    question.style.display="none"
}
//if start quiz button clicked
function startQuiz(){
    if(counter===6){

        showQuestions(0);
    }
    quiz.style.display="none";

    finalQuiz.style.display="none";
    first.style.display="block";
    queCounter(1);
    startTimer(15);
    if(counter===15){
        showQuestionsFinal(0);

    }
}
// if turn back button clicked
function turnBack(){
    page.style.visibility="visible";
    quiz.style.display="none";
    finalQuiz.style.display="none";
}
//if when finished back to course button clicked
function BackToCourse(){
    page.style.visibility="visible";
    end.style.display="none";
    if(counter===15){
        page.style.pointerEvents="none";
    }

}
// if submit button clicked
function submit(){
    page.style.visibility="hidden";
    first.style.display="none";
    end.style.display="block";

    total();
}



let questions=[
    {
        numb:1,
        question:"Преведи на македонски: dog",
        answer:"Куче",
        options:["Мачка",
            "Куче",
            "Мечка",
            "Прасе",
        ]
    },
    {
        numb:2,
        question:"Преведи на англиски: мечка",
        answer:"Bear",
        options:["Wolf",
            "Pig",
            "Bear",
            "Cat",
        ]
    },
    {
        numb:3,
        question:"Преведи на македонски: лисица",
        answer:"Fox",
        options:["Pig",
            "Wolf",
            "Cat",
            "Fox",
        ]
    }
];

const finalQuiz=document.querySelector(".Finalquiz");
const optionList=document.querySelector(".optionList");
const end=document.querySelector(".results");
cards.forEach(cards=>cards.addEventListener('click',flipCard));
var page=document.querySelector('.AlmostWholePage');
const quiz=document.querySelector(".quiz");
const question=document.querySelector(".questionKnowledge");
const first=document.getElementById("firstQuest");
const timeCount=document.querySelector(".timer .timerSec");
let que_count=0;
let que_numb=1;
let counterT;
let numberOfCorrect=0;
const nextBtn=document.querySelector(".nextQuestion");
function showQuestions(index){
    const quest_text=document.querySelector(".questionQuiz");

    let que_tag='<span>'+questions[index].numb+ ". " + questions[index].question +'</span>';
    let option_tag='<div class="option">'+questions[index].options[0] +'<span></span></div>'
        +'<div class="option">'+questions[index].options[1] +'<span></span></div>'
        +'<div class="option">'+questions[index].options[2] +'<span></span></div>'
        +'<div class="option">'+questions[index].options[3] +'<span></span></div>';
    quest_text.innerHTML=que_tag;
    optionList.innerHTML=option_tag;
    const option=optionList.querySelectorAll(".option");
    for(let i=0;i<option.length;i++){
        option[i].setAttribute("onclick","optionsSelected(this)");
    }
}
function showQuestionsFinal(index){
    const quest_text=document.querySelector(".questionQuiz");
    let que_tag='<span>'+questionsFinalQuiz[index].numb+ ". " + questionsFinalQuiz[index].question +'</span>';
    let option_tag='<div class="option">'+questionsFinalQuiz[index].options[0] +'<span></span></div>'
        +'<div class="option">'+questionsFinalQuiz[index].options[1] +'<span></span></div>'
        +'<div class="option">'+questionsFinalQuiz[index].options[2] +'<span></span></div>'
        +'<div class="option">'+questionsFinalQuiz[index].options[3] +'<span></span></div>';
    quest_text.innerHTML=que_tag;
    optionList.innerHTML=option_tag;
    const option=optionList.querySelectorAll(".option");
    for(let i=0;i<option.length;i++){
        option[i].setAttribute("onclick","optionsSelected(this)");
    }
}

let tickIcon='<div class="icon tick"><ion-icon name="checkmark"></ion-icon></div>';
let crossIcon='<div class="icon cross"><ion-icon name="close"></ion-icon></div>';
let numberCorrectFinal=0;
function optionsSelected(answer){
    if(counter==6){

        clearInterval(counterT);
        let userAnswer=answer.textContent;
        let correctAnswer=questions[que_count].answer;
        let allOptions=optionList.children.length;
        if(userAnswer==correctAnswer){
            answer.classList.add("correct");
            answer.insertAdjacentHTML("beforeend",tickIcon);
            console.log("Answer is correct");
            numberOfCorrect++;
            console.log(numberOfCorrect);
        }else{
            answer.insertAdjacentHTML("beforeend",crossIcon);
            console.log("Answer is incorrect");
            answer.classList.add("incorrect");
            for(let i=0;i< allOptions;i++){
                if(optionList.children[i].textContent==correctAnswer){
                    optionList.children[i].setAttribute("class","option correct");
                    optionList.children[i].insertAdjacentHTML("beforeend",tickIcon);
                }
            }
        }
        for(let i=0;i<allOptions;i++){
            optionList.children[i].classList.add("disabled");
        }
    }else{
        clearInterval(counterT);
        let userAnswer=answer.textContent;
        let correctAnswer=questionsFinalQuiz[que_count_final].answer;
        let allOptions=optionList.children.length;
        if(userAnswer==correctAnswer){
            answer.classList.add("correct");
            answer.insertAdjacentHTML("beforeend",tickIcon);
            console.log("Answer is correct");
            numberCorrectFinal++;
            console.log("numberCorrectFinal");
        }else{
            answer.insertAdjacentHTML("beforeend",crossIcon);
            console.log("Answer is incorrect");
            answer.classList.add("incorrect");
            for(let i=0;i< allOptions;i++){
                if(optionList.children[i].textContent==correctAnswer){
                    optionList.children[i].setAttribute("class","option correct");
                    optionList.children[i].insertAdjacentHTML("beforeend",tickIcon);
                }
            }
        }
        for(let i=0;i<allOptions;i++){
            optionList.children[i].classList.add("disabled");
        }
    }

    nextBtn.style.display="block";
}
let que_count_final=0;
let que_numb_final=1;
nextBtn.onclick=()=>{
    if(counter===6){
        if(que_count<questions.length) {
            que_count++;
            que_numb++;
            showQuestions(que_count);
            queCounter(que_numb);
            clearInterval(counterT);
            startTimer(15);
        } else{
            console.log("Questions completed");
            submit();
        }
    }else{
        if(que_count_final<questionsFinalQuiz.length) {
            que_count_final++;
            que_numb_final++;
            showQuestionsFinal(que_count_final);
            queCounter(que_numb_final);
            clearInterval(counterT);
            startTimer(15);
        } else{
            console.log("Questions completed");
            submit();
        }
    }



}
function queCounter(index){

    if(counter===6){
        const quest_counter_bottom=document.querySelector(".totalQuestions");
        let totalCountTag='<span><p>'+index+'</p>oд<p>'+ questions.length+'</p> Прашања </span>';
        quest_counter_bottom.innerHTML=totalCountTag;
    }else{
        const quest_counter_bottom=document.querySelector(".totalQuestions");
        let totalCountTag='<span><p>'+index+'</p>oд<p>'+ questionsFinalQuiz.length+'</p> Прашања </span>';
        quest_counter_bottom.innerHTML=totalCountTag;
    }


}
function total(){


    if(counter===6){
        const bottomTotal=document.querySelector(".totalPoints");
        let bottomTag= '<div class="totalPoints"> Честитки на освоените <span>'+numberOfCorrect+'</span> / 3 поени</div>';
        bottomTotal.innerHTML=bottomTag;
    }else{
        const bottomTotal=document.querySelector(".totalPoints");
        let bottomTagFinal='<div class="totalPoints"> Честитки на освоените <span>'+numberCorrectFinal+'</span> / 8 поени</div>';
        bottomTotal.innerHTML=bottomTagFinal;
    }

}
function startTimer(time){
    counterT=setInterval(timer,999);
    function timer(){
        timeCount.textContent=time;
        time--;
        if(time<9){
            let addZero=timeCount.textContent;
            timeCount.textContent="0"+ addZero;
        }
        if(time<0){
            clearInterval(counterT);
            timeCount.textContent="00";
        }
    }
}


    let questionsFinalQuiz=[

    {
        numb:1,
        question:"Преведи на македонски: monkey",
        answer:"Мајмун",
        options:["Магаре",
        "Мајмун",
        "Мечка",
        "Патка",
        ]
    },
    {
        numb:2,
        question:"Преведи на англиски: кокошка",
        answer:"Chicken",
        options:["Donkey",
        "Turkey",
        "Duck",
        "Chicken",
        ]
    },
    {
        numb:3,
        question:"Преведи на македонски: turkey",
        answer:"Мисирка",
        options:["Коњ",
        "Желка",
        "Мисирка",
        "Волк",
        ]
    },
    {
        numb:4,
        question:"Преведи на македонски: cow",
        answer:"Крава",
        options:["Прасе",
        "Коза",
        "Коњ",
        "Крава",
        ]
    },
    {
        numb:5,
        question:"Преведи на англиски: коњ",
        answer:"Horse",
        options:["Horse",
        "Bear",
        "Pig",
        "Goat",
        ]
    },
    {
        numb:6,
        question:"Преведи на англиски: коза",
        answer:"Goat",
        options:["Bear",
        "Wolf",
        "Goat",
        "Turkey",
        ]
    },
    {
        numb:7,
        question:"Преведи на македонски: turtle",
        answer:"Желка",
        options:["Мечка",
        "Крава",
        "Желка",
        "Прасе",
        ]
    },
    {
        numb:8,
        question:"Преведи на англиски: патка",
        answer:"Duck",
        options:["Duck",
        "Dog",
        "Goat",
        "Horse",
        ]
    },

    ];