const Nav = document.getElementById('nav-right-first');
const nav = document.getElementById('nav-first');
const touch = document.getElementById('touch');
const hover = document.getElementById('hover');
const searchOut = document.getElementById('btn');
const searchIn = document.getElementById('search-content');
const hpc = document.getElementsByClassName('hoverPic');
const choiceCard = document.querySelector('.choiceCard');
const lilist = choiceCard.querySelectorAll('li');
const ullist = document.querySelectorAll('.divlist');
let button = document.querySelector('.change')
const nav1 = document.querySelector('.nav1')
console.log(nav1);




console.log(ullist);

lilist[0].onclick = function () {
    ullist[0].className = "choiceCard_live divlist"
    ullist[1].className = "like_up divlist show"
    ullist[2].className = "tjblock divlist show"
    this.className = "changed"
    lilist[2].className = ''
    lilist[1].className = ''



}
lilist[1].onclick = function () {
    ullist[0].className = "choiceCard_live divlist show"
    ullist[1].className = "like_up divlist"
    ullist[2].className = "tjblock divlist show"
    this.className = 'changed'
    lilist[0].className = ''
    lilist[2].className = ''
}
lilist[2].onclick = function () {
    ullist[0].className = "choiceCard_live divlist show"
    ullist[1].className = "like_up divlist show"
    ullist[2].className = "tjblock divlist"
    this.className = 'changed'
    lilist[0].className = ''
    lilist[1].className = ''
}


// for()

// console.log(hover);
//搜索栏点击变色
searchOut.onclick = () => {
    searchIn.style.background = '#E3E5E7';

}
searchOut.onblur = function () {
    searchIn.style.background = '#F1F2F3'
}


// 用户头像动画效果
hover.onmouseover = function () {
    setTimeout(() => {
        nav.classList.add("slide-in-left");
        nav.classList.remove("slide-out-left");

    }, 400);


}
hover.onmouseout = () => {
    setTimeout(() => {
        nav.classList.add("slide-out-left");
        nav.classList.remove("slide-in-left");
    }, 400);

};
let html = document.documentElement || document.body;
window.onscroll = function () {//滚动监听，页面一滚动就输出距离页面顶部的距离像素
    console.log(html.scrollTop);

}
if (html.scrollTop > 167) {
    // nav1.className='nav1 show'
    nav1.style.Zindex = '9999999'
} else {
    nav1.style.Zindex = '-9999999'

    // nav1.className='nav1 none'
}