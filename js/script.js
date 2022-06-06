	$(document).ready(function(){
        let header_age = 0;
        let main_work_age = 0;
        let pc_mobile_age = 0;
        let pc_work_age = 0;
        let about_me1_age = 0;
        let about_me2_age = 0;

        $(window).scroll(function(){
            sc = $(window).scrollTop()

            if( sc >= $('#main_work').offset().top-50 ){
                $('header').css({'position':'fixed','z-index':'9999999','top':'0'})
            }
            else {
                $('header').css({'position':'static'})
            }
            if(sc >= $('#main_work').offset().top-300){
                main_work_age = main_work_age + 1
                if( main_work_age == 2){
                    $('#main_work_title>h3').animate({'maginTop':'0','opacity':'1'},300)
                    $('#main_work_title>p').delay(200).animate({'maginTop':'0','opacity':'1'},300)
                    $('#main_work_img').delay(400).animate({'maginTop':'50px','opacity':'1'},300)
                }        
            }
            if( sc >= $('#pc_work').offset().top-300){
                pc_work_age = pc_work_age + 1
                if( pc_work_age == 2){
                    $('#pc_work>h3').animate({'maginTop':'0','opacity':'1'},300)
                    $('#pc_work>p').delay(200).animate({'maginTop':'20px','opacity':'1'},300)
                    $('#pc_work>ul').delay(400).animate({'maginTop':'30px','opacity':'1'},300)
                } 
            }
            if( sc >= $('#about_me').offset().top-300){
                about_me1_age = about_me1_age + 1
                if( about_me1_age == 2){
                    $('#about_me>h3').animate({'maginTop':'0','opacity':'1'},300)
                    $('#about_me_img').delay(200).animate({'maginTop':'0','opacity':'1'},300)
                }
            }
            if( sc >= $('#about_me').offset().top-300){
                about_me2_age = about_me2_age + 1
                if( about_me2_age == 2){
                    $('#skills>ul>li:nth-child(1)>.skills_bg>.skills_box').animate({'width':'95%'},200)
                    $('#skills>ul>li:nth-child(2)>.skills_bg>.skills_box').delay(100).animate({'width':'85%'},200)
                    $('#skills>ul>li:nth-child(3)>.skills_bg>.skills_box').delay(200).animate({'width':'80%'},200)
                    $('#skills>ul>li:nth-child(4)>.skills_bg>.skills_box').delay(300).animate({'width':'80%'},200)
                }
            }
        })

        $('#close_btn').click(function(){
            $('#menu_popup').fadeOut()
        })
        $('#mobile_menu').click(function(){
            $('#menu_popup').fadeIn()
        })
        $('#main>h1').animate({'top':'-50px','opacity':'1'},300)
        $('#main>p').delay(100).animate({'top':'70px','opacity':'1'},300)
        setInterval(function(){
            $('#wheel').animate({'top':'12px','opacity':'0'},290)
            $('#wheel').animate({'top':'6px','opacity':'1'},290)
        },600)
		$('#menu_popup_menu>li').mouseenter(function(){
            $(this).children('.sub').stop().slideDown()
        })
        $('#menu_popup_menu>li').mouseleave(function(){
            $(this).children('.sub').stop().slideUp()
        })
	});
