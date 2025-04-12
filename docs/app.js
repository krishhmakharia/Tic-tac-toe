let boxes=document.querySelectorAll(".box");
let reset=document.querySelector("#reset");
let msg_box=document.querySelector("#msg-container");
let msg=document.querySelector("#msg");
let new_game=document.querySelector("#new-btn");
let turnO=false;
let count=0;
const winning_conditions=[[0,3,6],[1,4,7],[2,5,8],[0,1,2],[3,4,5],[6,7,8],[0,4,8],[2,4,6]];
boxes.forEach((box)=>{//1
    box.addEventListener("click",()=>{
        // console.log("box clicked");
        // box.style.backgroundColor="Black";
        count++;
        if(turnO){
            box.innerHTML="<i class='text-yellow-600 font-bold'>O</i>";
            turnO=false;
        }
        else{
            box.innerHTML="<i class='text-red-600 font-bold'>X</i>";
            turnO=true;
        }
        
        box.classList.add("disabled");
        checkWinner();
        if(count===9){
            msg.innerText="It's a tie";
            msg_box.classList.remove("hidden");
        }
    });
});
const disableBoxes=()=>{//4
    for(let box of boxes){
        box.classList.add("disabled");
    }
}
const enableBoxes=()=>{//6
    for(let box of boxes){
        box.classList.remove("disabled");
    }
}
const newGame=()=>{//5
    turnO=false;
    count=0;
    enableBoxes();
    for(let box of boxes){
        box.innerText="";
    }
    msg_box.classList.add("hidden");
}
const showWinner=(winner)=>{//3
    msg.innerText=`🎊 Congratulations, ${winner} won the game 🎊`;
    msg_box.classList.remove("hidden");
}

let checkWinner =() =>{//2
    let pos_1_value;
    let pos_2_value;
    let pos_3_value;
    for(let pos of winning_conditions){
        pos_1_value=boxes[pos[0]].innerText;
        pos_2_value=boxes[pos[1]].innerText;
        pos_3_value=boxes[pos[2]].innerText;

        if(pos_1_value!="" && pos_2_value!="" && pos_3_value!=""){
            if(pos_1_value===pos_2_value && pos_2_value===pos_3_value){
                boxes[pos[0]].classList.add("winner");
                boxes[pos[1]].classList.add("winner");
                boxes[pos[2]].classList.add("winner");
                showWinner(pos_1_value);
                disableBoxes();
            }
        }
    }
    
}
reset.addEventListener("click",newGame);
new_game.addEventListener("click",newGame);