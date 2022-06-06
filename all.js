//-----------------Swiper-------------------//

/* 自訂初始化的 Swiper 套件的函式 */
function initSwiper() {
    /* 
    id="comment-swiper" 區塊是我想要使用 swiper 套件的範圍
    要抓取 id "#comment-swiper"
    可以參考 CodePen 來看這個 id 是對應到哪個區塊
    */
    
    const swiper = new Swiper("#comment-swiper", {
        
        /*  預設要顯示幾個卡片 */
        slidesPerView: 1,
        
        /* 斷點設定 */
        breakpoints: {
            /* 螢幕寬度大於等於 992px 時切換為 3 欄 */
            992: {
                slidesPerView: 3
            },
            /* 螢幕寬度大於等於 768px 時切換為 2 欄 */
            768: {
                slidesPerView: 2
            },
            /* 更小時都顯示 1 欄 */
            0: {
                slidesPerView: 1
            }
        },
        /* 卡片元素的間隔 */
        spaceBetween: 16,
        pagination: {
            /* 想將分頁圓點綁在哪個 class */
            el: ".swiper-pagination",
            /* 將輪播設定為可以點擊分頁圓點來切換圖片 */
            clickable: true
        }
    });
}

/* 觸發自己定義的函式 */
initSwiper();



//-----------------jQuery-------------------//

$(document).ready(function () {
    
    // TOP
    $('.top').click(function (e) { 
        e.preventDefault();
        $('html').animate({scrollTop:0}, 1000)    
        
    });
    
    // 方案價格
    $('.plan_page_b').eq(0).addClass('plan_page_a_c'); //預設
    
    $('.plan_page_b').eq(0).click(function (e) {
        $('.number_p').text('10000');
        $('.number_mb').text('600');
        $('.number_ms').text('1600');
        $('.plan_page_b').filter('.plan_page_a_c').removeClass('plan_page_a_c');
        $(this).addClass('plan_page_a_c');
        
    });
    
    $('.plan_page_b').eq(1).click(function (e) {
        $('.number_p').text('15000');
        $('.number_mb').text('700');
        $('.number_ms').text('1700');
        $('.plan_page_b').filter('.plan_page_a_c').removeClass('plan_page_a_c');
        $(this).addClass('plan_page_a_c');
        
    });
    
    $('.plan_page_b').eq(2).click(function (e) {
        $('.number_p').text('20000');
        $('.number_mb').text('800');
        $('.number_ms').text('1800');
        $('.plan_page_b').filter('.plan_page_a_c').removeClass('plan_page_a_c');
        $(this).addClass('plan_page_a_c');
        
    });
    
    $('.plan_page_b').eq(3).click(function (e) {
        $('.number_p').text('25000');
        $('.number_mb').text('900');
        $('.number_ms').text('1900');
        $('.plan_page_b').filter('.plan_page_a_c').removeClass('plan_page_a_c');
        $(this).addClass('plan_page_a_c');
        
    });
    
    $('.plan_page_b').eq(4).click(function (e) {
        $('.number_p').text('>25000');
        $('.number_mb').text('1000');
        $('.number_ms').text('2000');
        $('.plan_page_b').filter('.plan_page_a_c').removeClass('plan_page_a_c');
        $(this).addClass('plan_page_a_c');
        
    });
    
    
    // 常見問答
    $('.question').click(function (e) { 
        e.preventDefault();
        $(this).siblings('.answer').slideToggle(300); // 打開P
        $(this).toggleClass('question_color'); // 改變問題的樣式
        $(this).find('img').toggle(); // 切換+-
        
        // 收合其他的問題 (parent:li ; siblings:其他li;)
        $(this).parent().siblings().children('.answer').slideUp(300); 
        // 恢復問題的樣式
        $(this).parent().siblings().children('.question').removeClass('question_color');
        // 恢復+-號
        $(this).parent().siblings().find('.minus').hide(); 
        $(this).parent().siblings().find('.plus').show(); 
    });
    
});


