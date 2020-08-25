console.clear();

/*
setTimeout(function() {
  $(window).scrollTop(0);
}, 500);
*/




function main_enter() {
  $('.main-image').css('transform', 'scale(1)');
}

function btn__menu() {
  $('.top-bar > .right-menu-box > .btn-menu').click(function () {

    var $btn = $('.top-bar > .right-menu-box > .btn-menu');
    var $btnMenu = $('.btn-menu-box');
    var $topBar = $('.top-bar');

    if ($btn.hasClass('active')) {
      $btn.removeClass('active');
      $btnMenu.removeClass('active');
      $topBar.removeClass('active');
      $('html').removeClass('active');
    } else {
      $btn.addClass('active');
      $btnMenu.addClass('active');
      $topBar.addClass('active');
      $('html').addClass('active');
    }

  })
}

function site_map() {
  $('.family-site > li').click(function () {

    if ($(this).hasClass('active')) {
      $(this).removeClass('active');
    } else {
      $(this).addClass('active');
    }
  })
}


function top_move() {
  $('.hover-btn > .move-top').click(function () {
    $('html,body').scrollTop('0');
  });
}

/* 슬릭슬라이더 */
function slick() {
  $('.page-3 > .slider-box > .slider-div').slick({
    slide: 'div', //슬라이드 되어야 할 태그 ex) div, li 
    infinite: true, //무한 반복 옵션	 
    slidesToShow: 1, // 한 화면에 보여질 컨텐츠 개수
    slidesToScroll: 1, //스크롤 한번에 움직일 컨텐츠 개수
    speed: 2000, // 다음 버튼 누르고 다음 화면 뜨는데까지 걸리는 시간(ms)
    arrows: true, // 옆으로 이동하는 화살표 표시 여부
    dots: false, // 스크롤바 아래 점으로 페이지네이션 여부
    autoplay: false, // 자동 스크롤 사용 여부
    autoplaySpeed: 10000, // 자동 스크롤 시 다음으로 넘어가는데 걸리는 시간 (ms)
    pauseOnHover: true, // 슬라이드 이동	시 마우스 호버하면 슬라이더 멈추게 설정
    vertical: false, // 세로 방향 슬라이드 옵션
    prevArrow: '<img src="https://kkt9102.github.io/img1/blog/article/portfolio/metanettplatform/alli-arr-prev.png" alt="">', // 이전 화살표 모양 설정
    nextArrow: '<img src="https://kkt9102.github.io/img1/blog/article/portfolio/metanettplatform/alli-arr-next.png" alt="">', // 다음 화살표 모양 설정
  });
  $('.slider-ul').slick({
    slide : 'div',
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    speed: 1000,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 10000,
    vertical: true,
    prevArrow: '<img src="https://kkt9102.github.io/img1/blog/article/portfolio/metanettplatform/tr-arr-up.png" alt="">',
		nextArrow: '<img src="https://kkt9102.github.io/img1/blog/article/portfolio/metanettplatform/tr-arr-down.png" alt="">',
  });


}
/* 기존작업물
function slider__btn() {
  $('.page-3 > .slider-btn > div').click(function () {
    var $click = $(this);
    var $slider = $('.slider-box > .slider');
    var $current = $slider.find('> .active');
    var $post = null;
    var isLeft = $click.index() == 0;

    if (isLeft) {
      $post = $current.prev();

    } else {
      $post = $current.next();

    }

    if ($post.length == 0) {
      if (isLeft) {
        $post = $slider.find(':last-child');
      } else {
        $post = $slider.find(':first-child');
      }
    }




    $current.removeClass('active');
    $post.addClass('active');


  })
}
*/
function menuBoxHover() {
  $('.top-bar .menu-box-1 > ul > li > div').each(function (index, el) {
    $(this).parent().data('origin-height', $(this).height());
    $(this).css('height', 0);
  });

  $('.top-bar .menu-box-1 > ul > li').mouseenter(function () {
    $(this).addClass('selected');
    $(this).siblings('.selected').removeClass('selected');
    var originHeight = $(this).data('origin-height');
    $('.top-bar .menu-box-1 > ul > li > div').css('height', originHeight);
  });

  $('.top-bar .menu-box-1 > ul').mouseleave(function () {
    $('.top-bar .menu-box-1 > ul > li > div').css('height', 0);
  });
}



function main_scroll() {
  $(document).ready(function () {
    $(window).scroll(function () {
      var scroll = $(window).scrollTop();
      if (scroll > 1) {
        $('.top-bar').addClass('no-bar');
        $('.hover-btn').addClass('no-bar');
      } else {
        $('.top-bar').removeClass('no-bar');
        $('.hover-btn').removeClass('no-bar');
      }

      if (scroll > 400) {
        $('.scroll-box').addClass('scroll');
      } else {
        $('.scroll-box').removeClass('scroll');
      }

      if (scroll > 1300) {
        $('.page-3').addClass('scroll');
      } else {
        $('.page-3').removeClass('scroll');
      }

      if (scroll > 2200) {
        $('.page-4').addClass('scroll');
      } else {
        $('.page-4').removeClass('scroll');
      }
    })
  })
}



/*
function main_scroll(){
$(document).ready(function(){
  $(window).scroll(function(){
    var scroll = $(window).scrollTop();
    if (scroll > 1) {
      $(".top-bar>.right-menu-box>.lang>ul>.active>a").css('color','#000').css('border-bottom','3px solid #000');
    }
    else{
      $(".top-bar>.right-menu-box>.lang>ul>.active>a").css('color','#fff').css('border-bottom','3px solid #fff');  
    }
  })
})
}
*/


/*
function hoverMenu(){
  $('.menu-box-1 > ul > li:first-child').mouseenter(function(){
    $(this).addClass('active');
    $('.hybrid').addClass('active');
  })
  $('.menu-box-1 > ul > li:nth-child(2)').mouseenter(function(){
    $(this).addClass('active');
    $('.platform').addClass('active');
  })
  $('.menu-box-1 > ul > li:nth-child(3)').mouseenter(function(){
    $(this).addClass('active');
    $('.solution').addClass('active');
  })
  $('.menu-box-1 > ul > li:nth-child(4)').mouseenter(function(){
    $(this).addClass('active');
    $('.resource').addClass('active');
  })
  $('.menu-box-1 > ul > li:last-child').mouseenter(function(){
    $(this).addClass('active');
    $('.aboutus').addClass('active');
  })
}
function nonHoverMenu(){
  $('.menu-box-1 > ul > li').mouseleave(function(){
    
    $('.menu-box-1 > ul > li').removeClass('active');
    $('.hover-menu-box > div').removeClass('active');
  })
  
}
*/

function alerted(){
	$('.alerted > .alert-box > .close-btn > .close-text').click(function(){
		$('.alerted').removeClass('active');
	})
}

$(function () {
  main_enter();
  btn__menu();
  top_move();
  site_map();
  slick();
  main_scroll();
  menuBoxHover();
  alerted();
})