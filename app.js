function opentab(evt, name) {
  var i, content, navlinks;
  content = document.getElementsByClassName("content");
  for (i = 0; i < content.length; i++) {
    content[i].style.display = "none";
  }
  navlinks = document.getElementsByClassName("navlinks");
  for (i = 0; i < navlinks.length; i++) {
    navlinks[i].className = navlinks[i].className.replace(" active", "");
  }
  document.getElementById(name).style.display = "block";
  evt.currentTarget.className += " active";
}
document.getElementById("defaultOpen").click();

const toggleSwitch = document.querySelector("#switch");
const currentTheme = localStorage.getItem("theme");

if (currentTheme) {
  document.documentElement.setAttribute("data-theme", currentTheme);

  if (currentTheme === "dark") {
    toggleSwitch.checked = true;
    document.getElementById("logo").src = "src/ia96white.png";
  }
}

function switchTheme(e) {
  if (e.target.checked) {
    document.documentElement.setAttribute("data-theme", "dark");
    localStorage.setItem("theme", "dark");
    document.getElementById("logo").src = "src/ia96white.png";
  } else {
    document.documentElement.setAttribute("data-theme", "light");
    localStorage.setItem("theme", "light");
    document.getElementById("logo").src = "src/ia96.png";
  }
}

toggleSwitch.addEventListener("change", switchTheme, false);

const fonctionnement = document.querySelector(".fonctionnementContent");
const fonctionnementBtn = document.querySelector(".fonctionnementBtn");
fonctionnementBtn.addEventListener("click", () => {
  fonctionnement.classList.add("active");
});

const metier = document.querySelector(".metierContent");
const metierBtn = document.querySelector(".metierBtn");
metierBtn.addEventListener("click", () => {
  metier.classList.add("active");
});
const exemples = document.querySelector(".exemplesContent");
const exemplesBtn = document.querySelector(".exemplesBtn");
exemplesBtn.addEventListener("click", () => {
  exemples.classList.add("active");
});