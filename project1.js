const image= document.querySelector('#selectimage');
const rock = document.querySelector('#rock');
const cimage = document.querySelector('#Cselectimage');
let p1;
rock.addEventListener('click',function(){
    console.log("You Pressed Rock!!");
    remover();
    removeimg();
    image.src = "download.jpg";
    rock.classList.add('active');
    p1 = 'Rock';
});
const paper = document.querySelector('#paper');
paper.addEventListener('click',function(){
    console.log("You pressed Paper!!!");
    remover();
    removeimg();
    image.src="images.jpg";
    paper.classList.add('active');
    p1='Paper';
});
const scissor = document.querySelector('#scissor');
scissor.addEventListener('click',function(){
    console.log("You clicked On Scissor!!!");
    remover();
    removeimg();
    image.src="scissors.png";
    scissor.classList.add('active');
    p1='Scissor';
});
const box = document.querySelectorAll('.box');
box[0].addEventListener('dblclick',function(){
    remover();
    removeimg();
})
box[1].addEventListener('dblclick',function(){
    remover();
    removeimg();
})
box[2].addEventListener('dblclick',function(){
    remover();
    removeimg();
})
function remover(){
    paper.classList.remove('active');
    rock.classList.remove('active');
    scissor.classList.remove('active');
}
function removeimg(){
    image.src="";
}
const h4 = document.querySelector('#h4');
const Go = document.querySelector('#GoB');
let gameover = false;
const p1score = document.querySelector('#p1');
const cscore = document.querySelector('#p2');
const compuChoiceses = ['Rock','Paper','Scissor'];
let s1 = 0;
let s2 = 0;
const lim = document.querySelector('#winlimit');
let limit = 3;
lim.addEventListener('click',function(){
    limit = parseInt(lim.value);
})
Go.addEventListener('click',function(){
    if(!p1)
    {
        alert("Please make a choice!!!");
    }
    else{if(!gameover)
    {
        let i = Math.floor(Math.random()*3);
        if(i === 0)
        {
            cimage.src='download.jpg';
        }
        else if(i === 1)
        {
            cimage.src='images.jpg';
        }
        else{
            cimage.src='scissors.png';
        }
        if(winlogic(p1,compuChoiceses[i]))
        {
            console.log("PlayerWins");
            s1++;
            
            p1score.textContent=s1;
            if(s1 === limit)
            {
                game();
            }
            if(gameover)
                {
                    h4.textContent = "Player Wins";
                }
        }
        else if(winlogic(p1,compuChoiceses[i])===false)
        {
            console.log("Computer Wins");
            s2++;
            cscore.textContent=s2;
            if(s2===limit)
            {
                game();
            }
            if(gameover)
            {
                h4.textContent = "Computer Wins";
            }
        }
    }}
    removeimg();
    p1='';
})
function game() {
    gameover = true;
    s1 = 0;
    s2 = 0;
    p1score.textContent = s1; // Update scoreboard
    cscore.textContent = s2;  // Update scoreboard
    console.log("Game Over. Resetting scores.");
}
function winlogic(a,b){
    if(a=='Rock' && b =='Scissor' || a=='Paper' && b=='Rock' || a=='Scissor' && b=='Paper')
    {
        return true;
    }
    else if( a===b)
    {
        alert("Its a TIE!!!");
        return null;
    }
    else {
        return false;
    }
}
const reset = document.querySelector('#reeset');
reset.addEventListener('click',function(){
    s1 = 0;
    s2 = 0;
    gameover = false;
    p1 = '';
    image.src = '';
    cimage.src = '';
    p1score.textContent = s1;
    cscore.textContent = s2;
    remover();
    console.log("Game has been reset!");
    h4.textContent="";    
})