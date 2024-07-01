let btn = document.querySelector("button");
// let country=document.querySelector("input").value;

btn.addEventListener("click", async () => {
  let inputText = document.querySelector("input");
  if (inputText.value.length > 0) {
    let content = inputText.value;
    inputText.value = "";
    let p = document.querySelector("#para");
    p.innerText = `Colleges in ${content} are :`;
    let colarr = await getCollege(content);
    showNa(colarr);
  } else {
    alert("Enter the name of the country");
  }
});

function showNa(colarr) {
  let list = document.querySelector("#result");
  list.innerText = "";
  for (coll of colarr) {
    // console.log(coll.name);
    let li = document.createElement("li");
    li.innerText = coll.name;
    list.appendChild(li);
  }
}

let url = "http://universities.hipolabs.com/search?name=";

async function getCollege(cnt) {
  try {
    let res = await axios.get(url + cnt);
    return res.data;
  } catch (err) {
    console.log("Error", err);
    return [];
  }
}
