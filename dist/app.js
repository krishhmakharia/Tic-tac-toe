let boxes=document.querySelectorAll(".box");
let reset=document.querySelector("#reset");
let msg_box=document.querySelector("#msg-container");
let msg=document.querySelector("#msg");
let new_game=document.querySelector("#new-btn");
let turnO=false;
const winning_conditions=[[0,3,6],[1,4,7],[2,5,8],[0,1,2],[3,4,5],[6,7,8],[0,4,8],[2,4,6]];
boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        // console.log("box clicked");
        // box.style.backgroundColor="Black";
        if(turnO){
            box.innerText="O";
            turnO=false;
        }
        else{
            box.innerText="X";
            turnO=true;
        }
        box.classList.add("disabled");
        checkWinner();
    });
});
const disableBoxes=()=>{
    for(let box of boxes){
        box.classList.add("disabled");
    }
}
const enableBoxes=()=>{
    for(let box of boxes){
        box.classList.remove("disabled");
    }
}
const newGame=()=>{
    turnO=false;
    enableBoxes();
    for(let box of boxes){
        box.innerText="";
    }
    msg_box.classList.add("hidden");
}
const showWinner=(winner)=>{
    msg.innerText=`🎊 Congratulations, ${winner} won the game 🎊`;
    msg_box.classList.remove("hidden");
}

let checkWinner =() =>{
    let pos_1_value;
    let pos_2_value;
    let pos_3_value;
    for(let pos of winning_conditions){
        pos_1_value=boxes[pos[0]].innerText;
        pos_2_value=boxes[pos[1]].innerText;
        pos_3_value=boxes[pos[2]].innerText;

        if(pos_1_value!="" && pos_2_value!="" && pos_3_value!=""){
            if(pos_1_value===pos_2_value && pos_2_value===pos_3_value){
                showWinner(pos_1_value);
                disableBoxes();
            }
        }
    }
    
}
reset.addEventListener("click",newGame);
new_game.addEventListener("click",newGame);