let wrapper = document.querySelector(".wrapper"),
  container = document.querySelector(".container"),
  topNavParent = container.querySelector(".topNavParent"),
  notesList = container.querySelector(".notesList"),
  addNote = container.querySelector(".addNoteParent .addNote");

//navigation close?open

/*const navOpen = `<svg class="navOpen" xmlns="http://www.w3.org/2000/svg" height="35px" viewBox="0 0 24 24" width="35px" fill="#ffffff">
  <path d="M0 0h24v24H0V0z" fill="none"/>
  <path d="M4 18h16c.55 0 1-.45 1-1s-.45-1-1-1H4c-.55 0-1 .45-1 1s.45 1 1 1zm0-5h16c.55 0 1-.45 1-1s-.45-1-1-1H4c-.55 0-1 .45-1 1s.45 1 1 1zM3 7c0 .55.45 1 1 1h16c.55 0 1-.45 1-1s-.45-1-1-1H4c-.55 0-1 .45-1 1z"/>
</svg>`,*/
const navIcon = `<svg class="navClose" xmlns="http://www.w3.org/2000/svg" height="35px" viewBox="0 0 24 24" width="35px" fill="#fff">
<path d="M14.71 15.88L10.83 12l3.88-3.88c.39-.39.39-1.02 0-1.41-.39-.39-1.02-.39-1.41 0L8.71 11.3c-.39.39-.39 1.02 0 1.41l4.59 4.59c.39.39 1.02.39 1.41 0 .38-.39.39-1.03 0-1.42z"/>
</svg>`;

//

//function events
topNavParent.querySelector("div").onclick = navCloseOpen;

//
topNavParent.querySelector("div").innerHTML = navIcon;

function navCloseOpen() {
  if (topNavParent.querySelector("div svg").classList.contains("navClose")) {
    topNavParent.querySelector("div").style.rotate = "180deg";
    topNavParent
      .querySelector("div svg")
      .classList.replace("navClose", "navOpen");
    //
    container.style.width = "0%";
    wrapper.style.width = "100%";
    setTimeout(() => {
      container.querySelector(".notesList").style.display = "none";
      container.querySelector(".addNoteParent").style.display = "none";
      topNavParent.style.alignItems = "flex-start";
    }, 150);
  } else {
    topNavParent.querySelector("div").style.rotate = "0deg";
    topNavParent
      .querySelector("div svg")
      .classList.replace("navOpen", "navClose");
    container.style.width = "30%";
    wrapper.style.width = "70%";
    setTimeout(() => {
      container.querySelector(".notesList").style.display = "";
      container.querySelector(".addNoteParent").style.display = "";
      topNavParent.style.alignItems = "center";
    }, 150);
  }
}
