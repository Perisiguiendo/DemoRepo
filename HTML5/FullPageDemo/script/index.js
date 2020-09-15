const btn_Click = document.getElementsByClassName('btn-click')[0].getElementsByTagName('li');
let index = 0;
const carousel = document.getElementsByClassName('carousel')[0].getElementsByTagName('li');

home3D();
auto3D();

// 手动轮播
function home3D() {
  btn_Click[0].classList.add("active");
  for (let i = 0; i < btn_Click.length; i++) {
    btn_Click[i].onclick = function () {

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
      }
    }
  }
}

function auto3D() {

}

