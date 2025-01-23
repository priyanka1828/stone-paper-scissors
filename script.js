let userS=document.querySelector("#user-score");
let compS=document.querySelector("#comp-score");
let msg=document.querySelector("#msg");
let choices=document.querySelectorAll(".option");
let options=["stone",'paper',"scissors"];
let userChoice;
let compChoice;
let answer;
let userScore=0;
let compScore=0;

choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        userChoice=choice.getAttribute("id");
        console.log("User = ",userChoice);
        compChoice=options[getCompChoice()];
        console.log("Comp = ",compChoice);
        playGame(userChoice,compChoice);
        console.log("\n");
    });
});

const getCompChoice=()=>{
    let math=Math.floor(Math.random()*3);
    return math;
}

const playGame=(user,comp)=>{
    if(user===comp){
        console.log("It's a draw");
        msg.style.backgroundColor="black";
        msg.innerText=`It's a draw!`;
    }
    else{
        if(user===options[0]){
            answer=(comp===options[2])?true:false;
        }
        else if(user===options[1]){
            answer=(comp===options[0])?true:false;
        }
        else{
            answer=(comp===options[1])?true:false;
        }
    winner(answer,user,comp);
    }
}

const winner=(answer,user,comp)=>{
    if(answer){
        userScore++;
        msg.style.backgroundColor="green";
        msg.innerText=`You won! ${user} beats ${comp}`;
        userS.innerText=userScore;
        console.log(`You won! ${user} beats ${comp}`);
    }
    else{
        compScore++;
        msg.style.backgroundColor="red";
        msg.innerText=`You lost! ${comp} beats ${user}`;
        compS.innerText=compScore;
        console.log(`You lost! ${comp} beats ${user}`);
    }
}