(function (jQuery) {
    jQuery(document).ready(function () {

        jQuery("#owl-demo").owlCarousel({
            items: 1,
            loop: true,
            autoPlay: 5000,
            stopOnHover: false
        });

        jQuery("#owl-demoMob").owlCarousel({
            items: 1,
            loop: true,
            autoPlay: 5000,
            stopOnHover: false
        });

        /*jQuery(".areaDoMenu").on("mouseleave", function (e) {

            if (e.toElement === null)
            {
                closeMenu();
            }
            else
            {
                if (e.toElement.className.lenght === 0)
                {
                    closeMenu();
                }

                if (
                    (e.toElement.className !== "mnu_Area") &&
                    (e.toElement.className !== "mnu_Link") &&
                    (e.toElement.className !== "mnu_AreaCategoria categoriaSlide") &&
                    (e.toElement.className !== "areaPesquisa")
                ) {
                    closeMenu();
                }
            }
            
        });*/

        
    })

   
})(jQuery);





function escureATela() {
    jQuery('#overlay-back').fadeIn(500);
}

function clareiaATela() {
    jQuery('#overlay-back').fadeOut(500);
}

function mouseLeaveCategorias() {
}
;
function changeMenuIcon() {

    if (jQuery("#mrc_Marcas").css('display') === "block") {
        //jQuery("#imgSearch").attr("src", "img/btnSearchHover.png");
        jQuery("#areaMenu").css("background", "#fff02a");
        jQuery(".hdr_AreaButton input").css("display", "block");
        jQuery('#overlay-back').fadeIn(500);
    } else {
        //jQuery("#imgSearch").attr("src", "img/btnSearch.png");
        jQuery("#areaMenu").css("background", "none");
        jQuery(".hdr_AreaButton input").css("display", "none");
        jQuery('#overlay-back').fadeOut(500);
    }

}
;
function openMenu() {

    var altura = 0;

    
            if (jQuery("#bannerHome").height() === null)
            {
                if (jQuery("#areaImagem").height() === null)
                {
                    altura = 1200;
                }
                else
                {
                    altura = jQuery("#areaImagem").height()
                }
            }
            else
            {
                altura = jQuery("#bannerHome").height();
            }


            altura = jQuery(".hdr_AreaLogo").height() + altura;
                if (jQuery(".mnu_Area").css('display') === "block") {
                    jQuery(".mnu_Area").css("height", altura);
                }

    var altura = jQuery(".hdr_AreaLogo").height() + altura;
    jQuery(".mnu_Area").css('display', 'block');
    jQuery(".mnu_Area").animate({
        width: "100%",
        height: altura
    }, {
            duration: 200,
            specialEasing: {
                width: 'linear'
            }
        });
    jQuery(".mnu_Links").animate({
        width: "100%"
    }, {
            duration: 200,
            specialEasing: {
                width: 'linear'
            }
        });

    jQuery('#overlay-back').fadeIn(500);
    setTimeout(
        jQuery(".mnu_AreaCategoria").addClass("categoriaSlide")
        , 200);

    setTimeout(
        function () {
            jQuery(".mnu_Link").css("display", "block");
            jQuery(".mnu_Link").animate({ marginLeft: "20%" });
        }
        , 0);
}
;

function openMenuMobile() {
    fechaMenus();
    jQuery(".menuMobileArea").css("display", "block");
    getDownAnimation(".menuMobileArea", "height");
}

function closeMenuMobile() {
    jQuery(".menuMobileArea").css("display", "none");
}

function openMarcasMobile() {
    fechaMenus();
    jQuery(".searchMobileArea").css("display", "block");
    getDownAnimation(".mrc_Container", "height"); 

    jQuery(".mrc_Area").addClass("mrc_Efeito");    

    setTimeout(function() {
        jQuery(".mrc_Area").removeClass("mrc_Efeito");    
    }, (500));
}

function closeMarcasMobile() {
    jQuery(".searchMobileArea").css("display", "none");
}


function openMenuFast() {

     var altura = 0;

    
            if (jQuery("#bannerHome").height() === null)
            {
                if (jQuery("#areaImagem").height() === null)
                {
                    altura = 1200;
                }
                else
                {
                    altura = jQuery("#areaImagem").height()
                }
            }
            else
            {
                altura = jQuery("#bannerHome").height();
            }


            altura = jQuery(".hdr_AreaLogo").height() + altura;
    jQuery(".mnu_Area").css('display', 'block');
    jQuery(".mnu_Area").animate({
        width: "100%",
        height: altura
    }, {
            duration: 0,
            specialEasing: {
                width: 'linear'
            }
        });
    jQuery(".mnu_Links").animate({
        width: "100%"
    }, {
            duration: 0,
            specialEasing: {
                width: 'linear'
            }
        });

    jQuery('#overlay-back').fadeIn(500);
    setTimeout(
        jQuery(".mnu_AreaCategoria").addClass("categoriaSlide")
        , 0);

    setTimeout(
        function () {
            jQuery(".mnu_Link").css("display", "block");
            jQuery(".mnu_Link").animate({ marginLeft: "20%" });
        }
        , 0);
}
;

function openMenuMarcas() {


     var altura = 0;

    
            if (jQuery("#bannerHome").height() === null)
            {
                if (jQuery("#areaImagem").height() === null)
                {
                    altura = 1200;
                }
                else
                {
                    altura = jQuery("#areaImagem").height()
                }
            }
            else
            {
                altura = jQuery("#bannerHome").height();
            }


            altura = jQuery(".hdr_AreaLogo").height() + altura;
    jQuery("#btnOpenSearch").css('display', 'block');
    jQuery("#btnAbrirMarcas").css('display', 'none');
    jQuery(".mnu_Area").css('display', 'block');
    jQuery("#areaMenu").css('background', '#fff02a');
    jQuery(".mnu_Area").animate({
        width: "100%",
        height: altura
    }, {
            duration: 0,
            specialEasing: {
                width: 'linear'
            }
        });
    jQuery(".mnu_Links").animate({
        width: "100%"
    }, {
            duration: 0,
            specialEasing: {
                width: 'linear'
            }
        });

    jQuery('#overlay-back').fadeIn(0);
    setTimeout(
        jQuery(".mnu_AreaCategoria").addClass("categoriaSlide")
        , 0);

    setTimeout(
        function () {
            jQuery(".mnu_Link").css("display", "block");
            jQuery(".mnu_Link").animate({ marginLeft: "20%" });
        }
        , 0);


}
;
function closeMenu() {

    jQuery("#btnOpenSearch").css("display", "none");
    jQuery("#btnAbrirMarcas").css("display", "block");
    jQuery(".mnu_AreaCategoria").removeClass("categoriaSlide");
    jQuery(".mnu_AreaCategoria").first().css("background", "#070003");
    jQuery(".mnu_AreaCategoria span").first().css("color", "#fff");
    jQuery(".mnu_Area").animate({
        width: "0%"
    }, {
            duration: 400,
            specialEasing: {
                width: 'linear'
            }
        });

    jQuery(".mnu_Area").css('display', 'none');
    jQuery(".mnu_Link").css("display", "none");
    jQuery(".mnu_Links").animate({ marginLeft: "0%" });
    jQuery('#overlay-back').fadeOut(500);

    if (jQuery("#mrc_Marcas").css('display') === 'block') {
        jQuery("#mrc_Marcas").css('display', 'none');
    }
    changeMenuIcon();
}
;
function showLogin() {
    hideCart();
    
    if (jQuery(".fly_Area").css('display') === 'none') {
        escureATela();
        jQuery(".AreaBotaoLogin").css("z-index", "25");
        jQuery(".AreaBotaoLogin").css('background', '#252525');
        jQuery(".fly_Area").css('display', 'block');
        jQuery(".fly_Area").animate({ right: "0px" }, 200);
    } else {
        clareiaATela();
        jQuery(".AreaBotaoLogin").css("z-index", "0");
        jQuery(".AreaBotaoLogin").css('background', 'none');
        jQuery(".fly_Area").css('display', 'none');
        jQuery(".fly_Area").animate({ right: "-400px" }, 200);
    }
}

function showCart() {
    hideLogin()

    if (jQuery(".cartArea").css('display') === 'none') {
        escureATela();
        jQuery(".cartArea").css("display", "block");
        jQuery(".cartArea").animate({ right: "0px" }, 200);
        jQuery(".AreaBotaoCart").css("z-index", "25");
        jQuery(".AreaBotaoCart").css('background', '#252525');        
    } else {
        clareiaATela();
        jQuery(".AreaBotaoCart").css("z-index", "0");
        jQuery(".AreaBotaoCart").css('background', 'none');       
        jQuery(".cartArea").css("display", "none");
        jQuery(".cartArea").css("right", "-400px");
    }    
}

function hideCart() {
    clareiaATela();
        jQuery(".AreaBotaoCart").css("z-index", "0");
        jQuery(".AreaBotaoCart").css('background', 'none');       
        jQuery(".cartArea").css("display", "none");
        jQuery(".cartArea").css("right", "-400px");
}

function showUserArea() {
    if (jQuery(".user_Area").css('display') === 'none') {
        escureATela();
        jQuery(".AreaBotaoLogin").css("z-index", "25");
        jQuery(".AreaBotaoLogin").css('background', '#252525');
        jQuery(".user_Area").css('display', 'block');
        jQuery(".user_Area").animate({ right: "0px" }, 200);
    } else {
        clareiaATela();
        jQuery(".AreaBotaoLogin").css("z-index", "0");
        jQuery(".AreaBotaoLogin").css('background', 'none');
        jQuery(".user_Area").css('display', 'none');
        jQuery(".user_Area").animate({ right: "-400px" }, 200);
    }
}

function showLoginMobile() {
    if (jQuery(".fly_AreaMobile").css('display') === 'none') {
        fechaMenus();
        jQuery(".fly_AreaMobile").css('display', 'block');

        getDownAnimation(".fly_AreaMobile", "height");

    } else {
        jQuery(".fly_AreaMobile").css('display', 'none');
    }
}

function showCartMobile()
{    
    if (jQuery(".cart_AreaMobile").css('display') === 'none') {
        fechaMenus();
        jQuery(".cart_AreaMobile").css('display', 'block');

        getDownAnimation(".cart_AreaMobile", "height");

    } else {
        jQuery(".cart_AreaMobile").css('display', 'none');
    }
}

function getDownAnimation(classe, prop)
{
    var areaHeight = jQuery(classe).css(prop);
        jQuery(classe).css(prop, "0px");

        jQuery(classe).animate({
            height: areaHeight
        }, {
                duration: 400,
                specialEasing: {
                    width: 'linear'
                }
        });
}

function fechaMenus()
{
    jQuery(".menuMobileArea").css("display", "none");
    jQuery(".fly_AreaMobile").css('display', 'none');
    jQuery(".cart_AreaMobile").css('display', 'none');
}

function hideLogin() {
    clareiaATela();
    jQuery(".AreaBotaoLogin").css("z-index", "0");
    jQuery(".AreaBotaoLogin").css('background', 'none');
    jQuery(".fly_Area").css('display', 'none');
    jQuery(".fly_Area").animate({ right: "-400px" }, 300);
}

function showTab(tabActive, tabInative, areaActive, areaInative) {
    if (jQuery('#' + areaActive).css('display', 'none')) {

        jQuery('#' + areaActive).css('display', 'block');
        jQuery('#' + areaInative).css('display', 'none');
        jQuery('#' + tabActive).css('background-color', '#fff02a');
        jQuery('#' + tabInative).css('background-color', '#5c5c5c');
    }

}

function openSearch() {

    var alturaMarcas = 0;

                if (jQuery("#bannerHome").height() === null)
                {
                    alturaMarcas = 115;
                }
                else
                {
                    alturaMarcas = jQuery("#bannerHome").height() / 4;
                }

    if (jQuery("#mrc_Marcas").css('display') === 'none') {
        openMenuMarcas();

        jQuery("#areaMenu").css("z-index", "22");
        jQuery("#mrc_Marcas").css('display', 'block');
        jQuery(".mrc_Area").css("height", alturaMarcas);

        var left = jQuery("#hdr_AreaMenu").width();
        jQuery(".mrc_Container").css("left", left);
        
        jQuery(".mnu_AreaCategoria").first().css("background", "#fff02a");
        jQuery(".mnu_AreaCategoria").first().css("margin-top", "2px");
        jQuery(".mnu_AreaCategoria").first().css("padding-right", "2px");
        jQuery(".mnu_AreaCategoria span").first().css("color", "#1d1607");
    }
    else
    {
        fecharMenuMarcas();
    }

}

jQuery(window).resize(function () {

    setTimeout(
        function () {

            var altura = 0;
            if (jQuery("#bannerHome").height() === null)
            {
                if (jQuery("#areaImagem").height() === null)
                {
                    altura = 1200;
                }
                else
                {
                    altura = jQuery("#areaImagem").height()
                }
            }
            else
            {
                altura = jQuery("#bannerHome").height();
            }

            altura = jQuery(".hdr_AreaLogo").height() + altura;
                if (jQuery(".mnu_Area").css('display') === "block") {
                    jQuery(".mnu_Area").css("height", altura);
                }

            if (jQuery("#mrc_Marcas").css('display') === "block") {
                var left = jQuery(".mnu_Area").width();
                var alturaMarcas = 0;

                if (jQuery("#bannerHome").height() === null)
                {
                    alturaMarcas = 250;
                }
                else
                {
                    alturaMarcas = jQuery("#bannerHome").height() / 4;
                }

                jQuery(".mrc_Area").css("height", alturaMarcas);
                jQuery(".mrc_Container").css("left", left);
            }
        }, 200);

});

function entraMenu() {
    jQuery("#mrc_Marcas").css("display", "none");
    jQuery(".mnu_AreaCategoria").first().css("background", "#070003");
    jQuery(".mnu_AreaCategoria span").first().css("color", "#fff");
}
;

function fecharMenuMarcas() {
    jQuery("#mrc_Marcas").css("display", "none");
    jQuery(".mnu_AreaCategoria").first().css("background", "#070003");
    jQuery(".mnu_AreaCategoria span").first().css("color", "#fff");
    jQuery("#btnOpenSearch").css('display', 'none');
    jQuery("#btnAbrirMarcas").css('display', 'block');    
    jQuery("#areaMenu").css('background', '#070003');
}

function trocaBannerHome() {
    
    if (jQuery("#linkBannerA").attr('class') === "areaLinkBannerA active")
    {
        jQuery("#linkBannerA").removeClass("active");
        jQuery("#linkBannerB").addClass("active");

        jQuery(".areaBannerA").css("display", "none");
        jQuery(".areaBannerB").css("display", "block");
    }
    else
    {
        jQuery("#linkBannerA").addClass("active");
        jQuery("#linkBannerB").removeClass("active");
        jQuery(".areaBannerA").css("display", "block");
        jQuery(".areaBannerB").css("display", "none");
    }

}

function openSubMenu(id)
{
    if (jQuery("#subMenu_" + id).css("display") == "none")
    {
        fecharMenuMarcas();
        jQuery("#subMenu_" + id).css("display", "block");        
        jQuery("#subMenu_" + id).css("marginLeft", jQuery(".mnu_AreaLinks").width());
        jQuery("#btnOpenSearch").css('display', 'block');
        jQuery("#btnAbrirMarcas").css('display', 'none');        
        jQuery("#areaMenu").css('background', '#fff02a');
        jQuery("#menuArea_" + id).css('background', 'rgb(255, 240, 42)');
        jQuery("#menuArea_" + id + " span").css('color', '#000');
    }
    /*else
    {
        jQuery("#subMenu_" + id).css("display", "none");
        jQuery("#btnOpenSearch").css('display', 'none');
        jQuery("#btnAbrirMarcas").css('display', 'block');
        jQuery("#areaMenu").css('background', '#000');
        jQuery("#menuArea_" + id).css('background', '#000');
        jQuery("#menuArea_" + id + " span").css('color', '#fff');
    }*/
    
}

function fechaSubMenu(id)
{
    console.log(this.event.target.className);
    if( this.event.target.className !== "mnu_Link") {
        jQuery("#subMenu_" + id).css("display", "none");
        jQuery("#btnOpenSearch").css('display', 'none');
        jQuery("#btnAbrirMarcas").css('display', 'block');
        jQuery("#areaMenu").css('background', '#000');
        jQuery("#menuArea_" + id).css('background', '#000');
        jQuery("#menuArea_" + id + " span").css('color', '#fff');
    }
}