// burger menu

const menu = document.querySelector(".menu-long");
const menuItems = document.querySelectorAll(".nav-item");
const hamburger = document.querySelector(".hamburger");
// const closeIcon= document.querySelector(".closeIcon");
// const menuIcon = document.querySelector(".menuIcon");

function toggleMenu() {
  if (menu.classList.contains("showMenu")) {
    menu.classList.remove("showMenu");
    // closeIcon.style.display = "none";
    // menuIcon.style.display = "block";
  } else {
    menu.classList.add("showMenu");
    // closeIcon.style.display = "block";
    // menuIcon.style.display = "none";
  }
}

hamburger.addEventListener("click", toggleMenu);

menuItems.forEach(
  function (menuItem) {
    menuItem.addEventListener("click", toggleMenu);
  }
)

// bottom menu
let widths = [0, 768, 1000];
const ulFooter = document.getElementsByClassName("list-footer");
let open = false;

function showUl() {
  if(open === false && window.innerWidth>=widths[0] && window.innerWidth<widths[1]){
  for (var x = 0; x < ulFooter.length; x++) {
    ulFooter[x].style.display = "block";

  }
  open = true;
}
  else if (open === true && window.innerWidth>=widths[0] && window.innerWidth<widths[1]) {
    for (var x = 0; x < ulFooter.length; x++) {
      ulFooter[x].style.display = "none";
    }
    open = false;
  }

}
