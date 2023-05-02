function passName() {
  let sel = document.getElementById("name");
  last = sel.value;
  localStorage.setItem("myName", last);
  return false;
}

function passRoll() {
  let sel = document.getElementById("roll");
  last = sel.value;
  localStorage.setItem("myRoll", last);
  return false;
}

function passCgpa() {
  let sel = calculate();
  localStorage.setItem("cg", sel);
  return false;
}




document.getElementById("NAME").innerHTML = localStorage.getItem("myName").toUpperCase();
document.getElementById("ROLL").innerHTML = localStorage.getItem("myRoll");
document.getElementById("cgpa").innerHTML = localStorage.getItem("cg");


localStorage.clear();
