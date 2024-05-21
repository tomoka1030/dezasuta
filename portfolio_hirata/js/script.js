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
if (window.matchMedia('(max-width: 1000px)').matches) {
    $('#header').addClass('done');
}//画面幅が1000px以下になると#headerにdoneというクラス名を付与(メニューを表示させる)

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
    if($('.website__slider').length > 0){ // このクラス名が0以上あるなら(存在するなら)
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
                    arrows: false,
                    centerMode: true,
                    centerPadding: '8%',
                }
            }
        ]
    });
    }


    if($('.banner__slider').length > 0){ // このクラス名が0以上あるなら(存在するなら)
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
                    arrows: false,
                    centerMode: true,
                    centerPadding: '8%',
                }
            }
        ]
    });
    }

    if($('.graphic__slider').length > 0){ // このクラス名が0以上あるなら(存在するなら)
    $('.graphic__slider').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        // autoplay: true,      // 実績増えたらオートプレイにする
        // autoplaySpeed: 2000,  
        dots: true,
        // centerMode: true,   // 次の画像をちら見せ
        // centerPadding: '5%',
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    arrows: false,
                    centerMode: true,
                    centerPadding: '8%',
                }
            }
        ]
    });
    }
});
    

/*serviceページ*/
$(document).ready(function () {
    if ($('.flow__list').length > 0) {
        var $slider = $('.flow__list');
        var $slide = $slider.children();
        var slideLen = $slide.length;
        
        $slider.slick({
            dots: true,
            autoplay: true,
            infinite: false,// スライダーのループを無効にする
            arrows: false,// マウスホバー時に自動再生を一時停止する
            pauseOnHover: true,
            slidesToShow: 5,
            slidesToScroll: 2,
            responsive: [
                {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        centerMode: true,
                        centerPadding: '2%',
                    }
                }
            ]
        }).on('afterChange', function () {
            var $self = $(this);
            if ((slideLen - 1) <= $self.slick('slickCurrentSlide')) {
                $self.slick('slickSetOption', 'autoplay', false);
            }
        });
    }
});



/* ---------------------
slick/message/feature
--------------------- */
/*スマホのときのみスライダーを有効にする*/
$(function(){
	function sliderSetting(){
        var width = $(window).width();
        if($('.feature__list').length > 0){ // このクラス名が0以上あるなら(存在するなら)
            if(width <= 767){
                $('.feature__list').not('.slick-initialized').slick({
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    autoplay: true,
                    autoplaySpeed: 4000,
                    dots: true,
                    arrows: false,
                    centerMode: true,// 次の画像をちら見せ
                    centerPadding: '5%',
                });
            } else {
                $('.slide.slick-initialized').slick('unslick');
            }
        }
	}
	sliderSetting();
	$(window).resize(function(){
        sliderSetting();
	});
});

