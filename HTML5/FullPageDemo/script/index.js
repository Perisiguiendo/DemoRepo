const btn_Click = document.getElementsByClassName('btn-click')[0].getElementsByTagName('li');
const ul_carousel = document.getElementsByClassName('carousel')[0];
const carousel = ul_carousel.getElementsByTagName('li');
let index = 0;
let timer3D = 0;
let autoIndex = 0;

home3D();

// 手动轮播
function home3D() {
  btn_Click[0].classList.add("active");
  for (let i = 0; i < btn_Click.length; i++) {
    btn_Click[i].onclick = function () {
      clearInterval(timer3D);
      if (index != i) {
        btn_Click[index].classList.remove("active");
        carousel[index].classList.remove("active");
        btn_Click[i].classList.add("active");
        carousel[i].classList.add("active");
        if (index < i) {
          carousel[i].classList.remove("leftHide");
          carousel[i].classList.remove("leftShow");
          carousel[i].classList.remove("rightHide");
          carousel[i].classList.add("rightShow");

          carousel[index].classList.remove("leftShow");
          carousel[index].classList.remove("rightShow");
          carousel[index].classList.remove("rightHide");
          carousel[index].classList.add("leftHide");
        } else {
          carousel[i].classList.remove("leftHide");
          carousel[i].classList.remove("rightShow");
          carousel[i].classList.remove("rightHide");
          carousel[i].classList.add("leftShow");

          carousel[index].classList.remove("leftShow");
          carousel[index].classList.remove("rightShow");
          carousel[index].classList.remove("leftHide");
          carousel[index].classList.add("rightHide");
        }
        index = i;
        autoIndex = index;
      }
    }
  }
  auto3D();
}

function auto3D() {
  timer3D = setInterval(function () {
    autoIndex++;
    if (autoIndex == carousel.length) {
      autoIndex = 0;
    }

    btn_Click[index].classList.remove("active");
    btn_Click[autoIndex].classList.add("active");
    carousel[autoIndex].classList.remove("leftHide");
    carousel[autoIndex].classList.remove("leftShow");
    carousel[autoIndex].classList.remove("rightHide");
    carousel[autoIndex].classList.add("rightShow");

    carousel[index].classList.remove("leftShow");
    carousel[index].classList.remove("rightShow");
    carousel[index].classList.remove("rightHide");
    carousel[index].classList.add("leftHide");

    index = autoIndex;
  }, 3000)
  ul_carousel.onmouseenter = function () {
    clearInterval(timer3D);
  }

  ul_carousel.onmouseleave = function () {
    auto3D();
  }
}

const persons = document.getElementsByClassName('persons')[0];
const personsLis = persons.getElementsByTagName('li');
let oc = null;
console.log(persons);

for (let i = 0; i < personsLis.length; i++) {
  personsLis[i].onmouseenter = function () {
    for (let j = 0; j < personsLis.length; j++) {
      personsLis[j].style.opacity = .2;
    }
    this.style.opacity = 1;
    addCanvas();
  }
  personsLis[i].onmouseleave = function () {
    for (let j = 0; j < personsLis.length; j++) {
      personsLis[j].style.opacity = 1;
    }
  }
}

function addCanvas() {
  if(!oc) {
    
  }
}

