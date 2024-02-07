const body=document.getElementById("content");
const box =document.getElementById("box");
const btn=document.getElementById("color");

btn.addEventListener('click',colorgenerate);

function colorgenerate(){
    let values ='0123456789abcdef';
    let color='#';
    for (let i = 0; i < 6; i++) {
        let randomvalue=Math.floor(Math.random()*16);
        color += values[randomvalue];
        
    }
    content.style.backgroundColor=color;
  } 

