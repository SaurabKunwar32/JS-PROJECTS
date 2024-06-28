let url = "https://dog.ceo/api/breeds/image/random";

let btn = document.querySelector("button");

btn.addEventListener("click", async () => {
  let links= await getimage();
  let IM=document.querySelector("#result");
  IM.setAttribute("src",links);

});

async function getimage() {
  try {
    let res = await axios.get(url);
    return res.data.message;
  } catch (err) {
    console.log("Error -", err);
    return "No image found";
  }
}
