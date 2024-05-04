/*global document */

window.sUserName;

function returnToTop() {
  scrollTo({
    top: 0,
    behavior: 'smooth',
  });
}

function MsgBoxPromote(text) {
  if (confirm(text)) {
    alert(`\n${sUserName} Room is promoted`);
  } else {
    alert(`\n${sUserName} Room is not promoted`);
  }
}

function dmOnClick() {

  document.body.classList.toggle("light-theme")

  let theme = "dark";
  if (document.body.classList.contains("light-theme")){
    theme = "light";
  }
  localStorage.setItem("theme", theme);
}
