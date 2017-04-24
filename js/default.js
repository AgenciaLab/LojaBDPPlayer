jQuery(function ()
{

    //Menu Responsivo
    jQuery(function(){

        /* MAIN MENU */
        jQuery('#main-menu-mob > li:has(ul.sub-menu-mob)').addClass('parent-mob');
        jQuery('ul.sub-menu-mob > li:has(ul.sub-menu-mob) > a').addClass('parent-mob');

        jQuery('#menu-toggle-mob').click(function() {
            jQuery('#main-menu-mob').slideToggle(300);
            return false;
        });

        jQuery(window).resize(function() {
            if (jQuery(window).width() > 768) {
                jQuery('#main-menu-mob').removeAttr('style');
            }
        });

    });


    //Menu Responsivo - Busca
    jQuery(function(){

        /* MAIN MENU */
        jQuery('#main-menu-mob2 > li:has').addClass('parent-mob2');

        jQuery('#menu-toggle-mob2').click(function() {
            jQuery('#main-menu-mob2').slideToggle(300);
            return false;
        });

        jQuery(window).resize(function() {
            if (jQuery(window).width() > 768) {
                jQuery('#main-menu-mob2').removeAttr('style');
            }
        });

    });




    // Box Newsletter Floating
    jQuery(".floating-box .close").click( function(){
        jQuery(".floating-box").fadeOut();
        sessionStorage.lightwindow = "visualizado";
    });

    //Fechar clicando na mascara
    jQuery(".floating-box #mascara").click( function(){
        jQuery(".floating-box").fadeOut();
        sessionStorage.lightwindow = "visualizado";
    });

    jQuery(".news-button").click( function(){
        jQuery(".floating-box").fadeOut();
        sessionStorage.lightwindow = "visualizado";
    });

    setTimeout(function() {
        if (sessionStorage.lightwindow === 'visualizado') {
          jQuery(".floating-box").hide();
        }else{
          jQuery(".floating-box").fadeIn();
        }
    }, 3000);




});