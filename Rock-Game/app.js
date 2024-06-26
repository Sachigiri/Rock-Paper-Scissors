
let userScoreCount=0;
let compScoreCount=0;

const option=document.querySelectorAll(".option");
const genComputerChoice=()=>{
    const choices=["rock","paper","scissors"];
    const randomIdx=Math.floor(Math.random()*3);
    return choices[randomIdx];

}
const msg=document.querySelector("#msg");
const drawGame=()=>{
    msg.innerText="It is a Draw!!";
    msg.style.backgroundColor="purple";
}

const showWinner=(userWin)=>{
if(userWin)
    {
        msg.innerText="You win";
        msg.style.backgroundColor="green";
        userScoreCount++;
    }
    else{
        msg.innerText="You lose";
        msg.style.backgroundColor="red";
        compScoreCount++;
    }
    let userScore=document.querySelector("#user-score");
    let compScore=document.querySelector("#comp-score");
    userScore.innerText=userScoreCount;
    compScore.innerText=compScoreCount;



}
const playGame=(userChoice)=>{
   const compChoice=genComputerChoice();
   if(userChoice==compChoice)
    {
       drawGame();
        

    }
    else{
        let userWin=true;
        if(userChoice=="rock")
            {
             if(compChoice==="paper")
                {
                    userWin=false;
                }
                else
                {
                    userWin=true;
                }
            }
             else if(userChoice=="rock")
                {
                    if(compChoice==="scissors")
                        {
                            userWin=true;
                        }
                        else
                        {
                            userWin=false;
                        }
                }
                else{
                    if(compChoice==="rock")
                        {
                          userWin=false;
                        }
                        else{
                        userWin=true;
                        }
                }
                showWinner(userWin);
    }
    
}
option.forEach((choice) => {
    choice.addEventListener("click", () => {
      const userChoice = choice.getAttribute("id");
      console.log(userChoice);
      playGame(userChoice);
    });
  });