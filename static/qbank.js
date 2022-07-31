const question=document.querySelector("#question");
const btn=document.querySelector(".btnnext");
var op1=document.querySelector(".op-1");
var op2=document.querySelector(".op-2");
var op3=document.querySelector(".op-3");
var op4=document.querySelector(".op-4");


var allque=[
    {
        num:2,
        question:"2. What does CSS stands for?",
        answer:"HYper markup language",
        options:[
            "HYper markup language ",
            "Hype text markup language",
            "Hyper text makeup language",
            "Hyper text markup languoge"
        ]
    },

    {
        num:2,
        question:"2. What does CSS stands for?",
        answer:"HYper markup language",
        options:[
            "Hyper text markp language",
            "Hype text markup language",
            "Hyper text makeup language",
            "Hyper text markup languoge"
        ]
    },
    {
        num:2,
        question:"3. Whic tag is used for paragrapgh in Html?",
        answer:"HYper markup language",
        options:[
            "h1 tag",
            "b tag",
            "p tag",
            "i tag"
        ]
    },
    {
        num:3,
        question:"4. Identify wrong tag used below?",
        answer:"HYper markup language",
        options:[
            "span tag",
            " 'p' tag ",
            "h7 tag",
            "div tag"
        ]
    },
    {
        num:4,
        question:"5. How is image tag used in HTMl?",
        answer:"HYper markup language",
        options:[
            "To make a new images",
            "To add images ",
            "To remove images",
            "to align images"
        ]
    },
    {
        num:5,
        question:"6. Why Media Queries are used in Html?",
        answer:"HYper markup language",
        options:[
            "To make website dynamic",
            "to make website beautiful",
            "to make website Responsive",
            "to make website  adaptive"
        ]
    },
    {
        num:6,
        question:"7. What is use of <span> tag in Html?",
        answer:"HYper markup language",
        options:[
            "To align item one after one vertically",
            "To align item at the corner of page",
            "to align item one after one horizontally",
            "None of above"
        ]
    },
    {
        num:7,
        question:"8 What is use of Javascript",
        answer:"HYper markup language",
        options:[
            "To make interface of webpages dynamic",
            "To make webpages adaptive",
            "To make webpages responsive",
            "Make webpages beautiful"
        ]
    },
    {
        num:7,
        question:"9 What is use of css",
        answer:"HYper markup language",
        options:[
            "To add dynamic  behaviour",
            "To Beautify webpages",
            "To Make webpages responsive",
            "None of above"
        ]
    },
    {
        num:8,
        question:"10 What does css stands for",
        answer:"HYper markup language",
        options:[
            " Cascading Style shoo",
            "Cascading style sheetbook",
            "Cascading style sheet",
            "Cascading style shoot"
        ]
    },
    {
        num:9,
        question:"11 Who has develped Html?",
        answer:"HYper markup language",
        options:[
            "Tim Berners-Lee",
            "John nicholas",
            "Bejerne Stroutup",
            "Elon Musk"
        ]
    },
    {
        num:10,
        question:"12 One of the below is new feature in Html5?",
        answer:"HYper markup language",
        options:[
            "Media Queires",
            "Caching",
            "New input types ",
            " none of above"
        ]
    }


]
var que_index=0;
function nextindex(){
    que_index++;
    question.innerHTML=allque[que_index].question;
    op1.innerHTML=allque[que_index].options[0];
    op2.innerHTML=allque[que_index].options[1];
    op3.innerHTML=allque[que_index].options[2];
    op4.innerHTML=allque[que_index].options[3];
    if(que_index=="11"){
        alert("Hurrah! GAme Completed.");
    }
}
btn.addEventListener("click",nextindex);














