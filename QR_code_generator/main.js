let url="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=";

let input=document.getElementById("inputText");
let boxqr=document.getElementById("boxqr");
let qrImg=document.getElementById("qrImg");
let button=document.querySelector("button");



function generateQR(){        
    if(input.value.length > 0){
        let display=url+input.value;
        qrImg.src=display;
        boxqr.classList.add("display_qr");
    }else{
        alert("Please Enter the text");
    }
    
}
// input.classList.add("empty_input");
// setTimeout(()=>{
//     input.classList.remove(".empty_input");
// },100)

input.addEventListener('keyup',(e)=>{
    if(e.keyCode === 13){
        generateQR();
    }
});


button.addEventListener("click",()=>{
    generateQR();
});
