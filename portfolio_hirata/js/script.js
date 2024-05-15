/* ---------------------------------------------
ヘッダー スクロールするとハンバーガーメニューに変化
----------------------------------------------- */

function FixedAnime() {
    //mvの高さを取得
    var mainvisualH = $('.mainvisual').outerHeight(true);
    var scroll = $(window).scrollTop();
    if (scroll >= mainvisualH){//mvの高さ以上までスクロールしたら
        $('.menu_btn').addClass('fadeDown');//.openbtnにfadeDownというクラス名を付与して
        $('#header').addClass('dnone');//#headerにdnoneというクラス名を付与
        }else{//それ以外は
            $('.menu_btn').removeClass('fadeDown');//fadeDownというクラス名を除き
            $('#header').removeClass('dnone');//dnoneというクラス名を除く
        }
}

  // 画面をスクロールをしたら動かしたい場合の記述
$(window).scroll(function () {
    FixedAnime();//スクロールをするとハンバーガーメニューに変化するための関数を呼ぶ
});

  //ボタンをクリックした際のアニメーションの設定
$(".menu_btn").click(function () {//ボタンがクリックされたら
    $(this).toggleClass('active');//ボタン自身に activeクラスを付与し
        $("#header").toggleClass('panelactive');//ヘッダーにpanelactiveクラスを付与
});
$("#header__nav li a").click(function () {//ナビゲーションのリンクがクリックされたら
    $(".menu_btn").removeClass('active');//ボタンの activeクラスを除去し
    $("#header").removeClass('panelactive');//ヘッダーのpanelactiveクラスも除去
});

