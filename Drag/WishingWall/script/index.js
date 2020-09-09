/**
 * 根据指定的最小值 和 最大值 得到指定范围内的随机整数
 * @param {*} min 最小值
 * @param {*} max 最大值 取不到
 */
function getRandom(min, max) {
  // Math.random()   0~1
  // Math.random() * (max - min)     0 ~ (max - min)
  // Math.random() * (max - min) + min     min ~ max
  return Math.floor(Math.random() * (max - min) + min);
}

var divCards = document.getElementById("cards"); // 卡片的容器
var nextZIndex = 1; // 下一个zIndex
/**
 * 创建一个愿望卡片到页面上
 * @param {*} content 卡片的内容
 */
function createWish(content) {
  // 1. 创建页面中的元素
  var div = document.createElement("div"); // 卡片的整个div
  div.className = "item";
  var divWords = document.createElement("div"); // 卡片内容的div
  divWords.className = "words";
  divWords.innerText = content;
  var spanClose = document.createElement("span");
  spanClose.className = "close";
  spanClose.innerText = "X";
  div.appendChild(divWords);
  div.appendChild(spanClose);
  divCards.appendChild(div);

  // 2. 卡片的背景颜色随机
  var r = getRandom(150, 256);
  var g = getRandom(150, 256);
  var b = getRandom(150, 256);
  div.style.background = "rgb(" + r + ", " + g + ", " + b + ")";

  // 3. 位置随机
  var maxLeft = divCards.clientWidth - 170; // 最大的横坐标
  div.style.left = getRandom(0, maxLeft) + "px";
  var maxTop = divCards.clientHeight - 170; // 最大纵坐标
  div.style.top = getRandom(0, maxTop) + "px";

  // 4. 注册关闭事件
  spanClose.onclick = function () {
    div.remove();
  };

  // 5. 注册点击后卡片跑到最前面的事件
  // div.onclick = function () {
  //   // div要跑到最前面
  //   div.style.zIndex = nextZIndex;
  //   nextZIndex++;
  // };

  // 6. 拖动效果
  div.onmousedown = function (e) {
    // div要跑到最前面
    div.style.zIndex = nextZIndex;
    nextZIndex++;
    var x1 = e.clientX,
      y1 = e.clientY; // 按下时，鼠标的坐标
    var a1 = parseFloat(div.style.left), // 按下时，元素的横坐标
      b1 = parseFloat(div.style.top); // 按下时，元素的纵坐标
    // 鼠标按下的时候，监控鼠标移动
    window.onmousemove = function (e) {
      var x2 = e.clientX,
        y2 = e.clientY; // 移动了一段后，鼠标的坐标
      var xDis = x2 - x1; // 鼠标横向移动的距离
      var yDis = y2 - y1; // 鼠标纵向移动的距离

      var a2 = a1 + xDis; // 元素新的横坐标
      var b2 = b1 + yDis; // 元素新的纵坐标

      // 新的横纵坐标是有界限的
      if (a2 < 0) {
        a2 = 0;
      } else if (a2 > maxLeft) {
        a2 = maxLeft;
      }

      if (b2 < 0) {
        b2 = 0;
      } else if (b2 > maxTop) {
        b2 = maxTop;
      }

      div.style.left = a2 + "px";
      div.style.top = b2 + "px";
    };

    // 鼠标抬起的时候，不要监控鼠标移动
    window.onmouseup = function () {
      window.onmousemove = null; //注销事件
    };
  };
}

// 初始一些祝福语
function init() {
  var wishes = ["邓哥好", "邓哥棒", "邓哥呱呱叫！"];
  for (var i = 0; i < wishes.length; i++) {
    createWish(wishes[i]);
  }
}

init();

var txtWish = document.getElementById("txtWish");
txtWish.onkeydown = function (e) {
  if (e.key !== "Enter") {
    // 按下的不是回车键
    return;
  }
  if (!txtWish.value) {
    return; // 如果没有输入内容，不做任何事情
  }
  createWish(txtWish.value);
  txtWish.value = "";
};
