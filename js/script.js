// User Interface Logic

const body = document.getElementById("body")
function buttonL() {
  const btn = document.getElementById('lightMode');
  btn.addEventListener('click', function onClick() {
    document.body.style.backgroundColor = "lightpink";
    document.querySelector("body").style.color = "purple"
  });
};

function buttonD() {
  const btn = document.getElementById('darkMode');
  btn.addEventListener('click', function onClick() {
    document.body.style.backgroundColor = "purple";
    document.querySelector("body").style.color = "white"
  });
};

// window.onload = function () {
//   let h1 = document.querySelector("h1");
//   h1.onmouseover = function () {
//     window.alert("I am a heading element.");
//   };

//   let p = document.querySelector("p");
//   p.onmouseover = function () {
//     document.querySelector("p>em").innerText = "Don't be surprised";
//   };

//   let img = document.querySelector("img");
//   img.onmouseover = function () {
//     img.style.height = "700px";
//   };
// };


// let button = document.getElementById("lightMode");
// button.onClick = () => {
//   body.style.backgroundColor = "white";
//   body.style.color = "purple";
// };


