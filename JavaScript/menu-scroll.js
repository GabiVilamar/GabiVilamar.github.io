
$(function(){

    var menu = $("#top a");

    $(window).scroll(function(){
        var topScroll = $(window).scrollTop();
        menu.each(function(){
            var href       = $(this).attr('href');
            var el         = $(href);
            var posSection = el.offset().top;
            var hSection   = el.height();

            if(posSection <= topScroll && (posSection + hSection) > topScroll){

                menu.removeClass('menuActive');
                $(this).addClass('menuActive');
                
            }else{
                $(this).removeClass('menuActive');
            }

        });

    });


});