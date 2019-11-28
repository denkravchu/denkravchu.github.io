$(window).scroll(function (){
        $('.animation').each(function (){
            var imagePos = $(this).offset().top;
            var topOfWindow = $(window).scrollTop();
            if (imagePos < topOfWindow+400) {
                $(this).addClass('jump');
            }
        });
    });
