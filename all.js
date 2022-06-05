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
        $(this).siblings('.answer').slideToggle(300); // 打開兄弟P
        $(this).toggleClass('question_color'); // 改變開啟的問題樣式
        $(this).find('img').toggle(); // 切換+-
        $(this).parent().siblings().children('.answer').slideUp(300); 
        // parent:li ; siblings:其他li; 點問題時把其他展開中的答案收起
        $(this).parent().siblings().children('.question').removeClass('question_color');
        // parent:li ; siblings:其他li; 點問題時把其他問題的顏色拿掉
        
    });
    
});


