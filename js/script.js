const floatingModel = document.getElementById("floatingModel");

const float = document.getElementById("float");

const clearX = document.getElementById("clearX");

clearX.hidden = true;

let i = 0;
let headerText = "Logical solutions to enhance athletic performance";
let speed = 50;
function typeWriter() {
  if (i < headerText.length) {
    document.getElementById("overlay").innerHTML += headerText.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}

window.onscroll = function() {
  if (window.scrollY > 500) {
    floatingModel.style.cssText =
      "animation-duration: 1s;animation-name: slide-in;opacity: 1;";

    console.log("working");
    setTimeout(() => {
      showFloatingComment();
    }, "1000");
  }
};

const markup = ` <div class="talk-bubble tri-right border round btm-left-in">
    <div class="talktext">
      <p>Lifting boosts metabolism for 72 hours—burn calories even at rest!</p>
    </div>
  </div>
  `;

const appearDiv = document.getElementsByClassName(
  "talk-bubble tri-right border round btm-left-in"
);

function showFloatingComment() {
  float.style.cssText = " animation-duration: 1.5s;animation-name: appear;";

  float.innerHTML = markup;
}

function showDelete() {
  clearX.hidden = false;
}

function hideDelete() {
  clearX.hidden = true;
}

function clearModel() {
  console.log("clicked");
  floatingModel.hidden = true;
}

const scroll = document.getElementsByClassName("pOInfo");
function scrollAbility() {
  scroll.style.cssText = "overflow-y: scroll;";
}

function scrollToForum() {
  window.scroll({
    top: 900,
    behavior: "smooth"
  });
}
let header = document.getElementById("headerForPage");
let innerHeaderForPage = document.getElementById("innerHeaderForPage");
let logoContainForPage = document.getElementById("logoContainForPage");
let talkMan = document.getElementById("float");
let articleHead = document.getElementById("articleHead");
let article = document.getElementById("article");
let myLiftingImg = document.getElementById("myLiftingImg");
function darkMode() {
  document.body.style.cssText =
    "background-color:#121212 ;color:#FFFFFF !important;";
  floatingModel.style.cssText = "background-color:#121212;color:#FFFFFF;";
  float.style.cssText =
    "background-color:#121212;color:#FFFFFF;border:#FFFFFF; ";
  articleHead.style.cssText = "background: #1E1E1E;";
  talkMan.style.cssText = "background: #1E1E1E;border: solid white 1px;";
  header.style.cssText = "background: #1E1E1E;border-bottom: solid white 1px;";
  innerHeaderForPage.style.cssText = "background: #1E1E1E;color:white;";
  logoContainForPage.style.cssText = "background: #1E1E1E;color:white;";
  article.style.cssText = "background: #1E1E1E;border: solid white 1px;";
  myLiftingImg.style.cssText = "opacity: 0.75;";
}

