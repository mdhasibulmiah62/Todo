var inputBox = document.querySelector("#inputbox");
var listContainer = document.querySelector(".listcontainer");

function show() {
  if (inputBox.value == "") {
    alert("Plased enter your text");
  } else {
    const li = document.createElement("li");
    li.innerHTML = inputBox.value;
    listContainer.appendChild(li);
    let span = document.createElement("span");
    span.innerHTML = "\u00d7";
    li.appendChild(span);
  }
  inputBox.value = "";
}

listContainer.addEventListener(
  "click",
  function (event) {
    if (event.target.tagName == "LI") {
      event.target.classList.toggle("cheked");
      saveData();
    } else if (event.target.tagName === "SPAN") {
      event.target.parentElement.remove();
      saveData();
    }
  },
  false
);
