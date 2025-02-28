$(function () {
  //ハンバーガーメニュー
  $(".js-hamburger,.js-drawer").click(function(){
    $(".js-hamburger").toggleClass("is-active");
    $(".js-drawer").fadeToggle();
  });
});

 //メインビューを過ぎたら背景色を変更する
document.addEventListener('DOMContentLoaded',function(){
  const imgHeight = document.querySelector('.js-fv').offsetHeight;
  const header = document.querySelector('.js-header');
  const nav = document.querySelector('.js-header-items');

  window.addEventListener('scroll',function(){
    if(window.scrollY < imgHeight){
      header.classList.remove('change-color');
      nav.classList.remove('change-color');
    }else{
      header.classList.add('change-color');
      nav.classList.add('change-color');
   }
  })
});

//スライダー
const swiper = new Swiper(".swiper", {
  loop: true,
  effect: "fade",
  speed: 3000,
  allowTouchMove: false,
  autoplay: {
    delay: 3000,
  },
});
