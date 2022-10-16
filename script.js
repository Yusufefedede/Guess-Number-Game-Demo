'use strict';

let gizliNumara = Math.trunc(Math.random() * 20) + 1;

let puan = 20;
let yüksekPuan = 0;

document.querySelector(".check").addEventListener("click", function(){
    const tahmin = Number(document.querySelector(".guess").value);

    //DEĞER GİRİLMEMİŞ
    if(!tahmin){
        document.querySelector(".message").textContent = "There's No Number !!";
    //OYUNCU KAZANIR
    }else if(tahmin === gizliNumara){
        document.querySelector(".message").textContent = "You're Right 👌";
        document.querySelector("body").style.backgroundColor = "#60b347";
        document.querySelector(".number").style.width = "30rem";
        document.querySelector(".number").textContent = gizliNumara;
        if(puan > yüksekPuan){
            yüksekPuan = puan
            document.querySelector(".highscore").textContent = yüksekPuan;
        }
    //YÜKSEK TAHMİN
    }else if(tahmin > gizliNumara){
        if(puan > 1){
            document.querySelector(".message").textContent = "Too High !!";
            puan--;
            document.querySelector(".score") = puan
        }else{
            document.querySelector(".message").textContent = "Game Over...";
            document.querySelector(".score").textContent = 0;
        }
    //DÜŞÜK TAHMİN
    }else if(tahmin < gizliNumara){
        if(puan > 1){
            document.querySelector(".message").textContent = "Too Low !!";
            puan--;
            document.querySelector(".score").textContent = puan;
        }else{
            document.querySelector(".message").textContent = "Game Over...";
            document.querySelector("body").style.backgroundColor = "#ff0000";
            document.querySelector(".score").textContent = 0;
        }
    }
});
//AGAİN BUTONU VE DEFAULT HALE GETİRME
document.querySelector(".again").addEventListener("click", function(){
    document.querySelector(".message").textContent = "Start Guessing...";
    document.querySelector(".score").textContent = 20;
    document.querySelector(".guess").value = "";
    document.querySelector("body").style.backgroundColor = "#222";
    document.querySelector(".number").style.width = "15rem";
    document.querySelector(".number").textContent = "?";
    gizliNumara = Math.trunc(Math.random() * 20) + 1;
});