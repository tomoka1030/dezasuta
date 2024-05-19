/* ---------------------------------------------
ヘッダー スクロールするとハンバーガーメニューに変化
----------------------------------------------- */

function FixedAnime() {
    //mvの高さを取得
    var mainvisualH = $('.mainvisual').outerHeight(true);
    var scroll = $(window).scrollTop();
    if (scroll >= mainvisualH){//mvの高さ以上までスクロールしたら
        $('.menu_btn').addClass('fadeDown');//.openbtnにfadeDownというクラス名を付与して
        $('#header').addClass('done');//#headerにdoneというクラス名を付与
        }else{//それ以外は
            $('.menu_btn').removeClass('fadeDown');//fadeDownというクラス名を除き
            $('#header').removeClass('done');//doneというクラス名を除く
        }
}

  // 画面をスクロールをしたら動かしたい場合の記述
$(window).scroll(function () {
    if (window.matchMedia('(min-width: 1001px)').matches) {
        FixedAnime();
    } //画面幅が1000px以上になるとFixedAnimeを実行する
});
  //ボタンをクリックした際のアニメーションの設定
$(".menu_btn").click(function () {//ボタンがクリックされたら
    $(this).toggleClass('active');//ボタン自身に activeクラスを付与し
        $("#header").toggleClass('panelactive');//ヘッダーにpanelactiveクラスを付与
});
$(".header__nav").click(function () {//ナビゲーションのリンクがクリックされたら
    $(".menu_btn").removeClass('active');//ボタンの activeクラスを除去し
    $("#header").removeClass('panelactive');//ヘッダーのpanelactiveクラスも除去
});


/* ----------
slick
------------- */

$(function () {
/*worksページ*/
    $('.website__slider').slick({
        slidesToShow: 2,
        slidesToScroll: 1,
        autoplay: true,
        dots: true,
        autoplaySpeed: 2000,
        // centerMode: true,// 次の画像をちら見せ
        // centerPadding: '5%',
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            }
        ]
    });

    $('.banner__slider').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        dots: true,
        autoplaySpeed: 2000,
        // centerMode: true,// 次の画像をちら見せ
        // centerPadding: '5%',
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            }
        ]
    });

    $('.graphic__slider').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        dots: true,
        // centerMode: true,// 次の画像をちら見せ
        // centerPadding: '5%',
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    centerMode: true,
                    centerPadding: '5%',
                }
            }
        ]
    });
    /*serviceページ*/
    $('.flow__list').slick({
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        dots: true,
        arrows: false,
        // dotsClass: "slide-dots",
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    centerMode: true,// 次の画像をちら見せ
                    centerPadding: '10%',
                }
            }
        ]
    });
});



/* ---------------------
slick/message/feature
--------------------- */
/*スマホのときのみスライダーを有効にする*/
$(function(){
	function sliderSetting(){
        var width = $(window).width();
        if(width <= 769){
        $('.feature__list').not('.slick-initialized').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 2000,
            dots: true,
            arrows: false,
            centerMode: true,// 次の画像をちら見せ
            centerPadding: '5%',
            });
        } else {
            $('.slide.slick-initialized').slick('unslick');
        }
	}
	sliderSetting();
	$(window).resize(function(){
        sliderSetting();
	});
});

