let url="https://catfact.ninja/fact" ;

let btn=document.querySelector('button');

btn.addEventListener("click", async ()=>{
    let fact= await getfact();
    // console.log(fact);
    let para=document.querySelector("#result");
    para.innerText=fact;

});



async function getfact(){
    try{
        let res= await axios.get(url);
        return res.data.fact;
    }
    catch(err){
        console.log("Error -",err);
        return "No fact found";
    }
   
}