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

};

function openMenu() {

    var altura = 439;
    var maxWidth = $( document ).width();
    
    if (jQuery("#bannerHome").height() === null)
    {
        if (jQuery("#areaImagem").height() === null)
        {
            altura = 439;
        }
        else
        {
            altura = jQuery("#areaImagem").height()
        }
    }
    else
    {
        altura = jQuery("#bannerHome").height();
        altura = altura - 10;
    }
    altura = altura - 8;

    altura = jQuery(".hdr_AreaLogo").height() + altura;
    if (jQuery(".mnu_Area").css('display') === "block") {
        jQuery(".mnu_Area").css("height", altura);
    }

    //altura = jQuery(".hdr_AreaLogo").height() + altura;
    jQuery(".mnu_Area").css('display', 'block');
    jQuery("#areaMenu").css("border-left", "none");

    if(maxWidth < 1440) {
        jQuery(".mnu_Area").animate({
            width: "99.6%",
            height: altura
        }, {
                duration: 200,
                specialEasing: { width: 'linear' }
            });
        jQuery(".mnu_Links").animate({
            width: "100%"
            }, {
                duration: 200,
                specialEasing: { width: 'linear' }
            }
        );
    }
    else {
        jQuery(".mnu_Area").animate({
            width: "99%",
            height: altura
        }, {
                duration: 200,
                specialEasing: { width: 'linear' }
            });
        jQuery(".mnu_Links").animate({
            width: "100%"
            }, {
                duration: 200,
                specialEasing: { width: 'linear' }
            }
        );
    }
    jQuery('#overlay-back').fadeIn(500);
    // setTimeout(jQuery(".mnu_AreaCategoria").addClass("categoriaSlide"), 200);

    setTimeout(
        function () {
            jQuery(".mnu_Link").css("display", "block");
            jQuery(".mnu_Link").animate({ marginLeft: "20%" });
        }, 0);
};

function openMenuMobile() {
    var menu = jQuery(".menuMobileArea").css("display");

    if(menu == 'block') {
        fechaMenusMobile();
    }
    else {
        jQuery(".menuMobileArea").css("display", "block");
        // jQuery(".menuMobileArea").css("position", "absolut");
        // jQuery(".menuMobileArea").css("top", "0px");
        // jQuery(".menuMobileArea").css("width", "100%");
        getDownAnimation(".menuMobileArea", "height");
    }
}

function openSubMenuMobile(id) {
    var Mobilemenu = jQuery(".menuMobileArea").css("display");
    var subMenu = jQuery(".SubMenuMobile_"+id).css("display");

    if(Mobilemenu == 'block') {
        closeSubMenuMobileAll();
        if(subMenu == 'block') {
            // closeSubMenuMobileAll();
        }   
        else {
            jQuery("#FullWidhtSUbOpen_"+id).attr("class","col-xs-12");

            jQuery(".SubMenuMobile_"+id).css("display", "block").fadeIn('slow');
            jQuery(".SubMenuMobile_"+id).css("background", "#000");
            jQuery(".SubMenuMobile_"+id).css("margin-top", "20px");
            jQuery(".item-level1-mnu-child-" + id).css("background", "#fff02a");
            jQuery(".categories-mobile").css("background", "#000");
            jQuery("#txt-lvl1_"+id).css("color", "#000");
            jQuery(".arrow-menu-mobile_"+id).css("margin-right", "70px");

            jQuery("#ArrowBottom_"+id).css("display", "none");
            jQuery("#ArrowTop_"+id).css("display","block");
        }
    }

}

function closeSubMenuMobileAll() {
    for(i = 0; i < 200; i++ ) {
        jQuery("#FullWidhtSUbOpen_"+i).attr("class","col-xs-10");
        jQuery(".SubMenuMobile_"+i).css("display", "none");
        jQuery(".item-level1-mnu-child-" + i).css("background", "#000");
        jQuery("#txt-lvl1_"+i).css("color", "beige");
        jQuery(".arrow-menu-mobile_"+i).css("margin-right", "0px");

        jQuery("#ArrowTop_"+i).css("display","none");
        jQuery("#ArrowBottom_"+i).css("display", "block");
    }
}

function closeSubMenuMobile(id) {          

        jQuery("#FullWidhtSUbOpen_"+id).attr("class","col-xs-10");
        jQuery(".SubMenuMobile_"+id).css("display", "none");
        jQuery(".item-level1-mnu-child-" + id).css("background", "#000");
        jQuery("#txt-lvl1_"+id).css("color", "beige");
        jQuery(".arrow-menu-mobile_"+id).css("margin-right", "0px");

        jQuery("#ArrowTop_"+id).css("display","none");
        jQuery("#ArrowBottom_"+id).css("display", "block");

}

function closeMenuMobile() {
    jQuery(".menuMobileArea").css("display", "none");
}

function openMarcasMobile() {
    fechaMenusMobile();
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

function openMenuMarcas() {
     var altura = 577;
     var alturaMarcas = 0;
     var maxWidth = $( document ).width();

    if (jQuery("#bannerHome").height() === null)
    {
        alturaMarcas = 109.4;
    }
    else
    {
        alturaMarcas = jQuery("#bannerHome").height() / 4 - 2.4;
    }

    /*if (jQuery("#bannerHome").height() === null)
    {
        if (jQuery("#areaImagem").height() === null)
        {
            altura = 578;
        }
        else
        {
            altura = jQuery("#areaImagem").height()
        }
    }
    else
    {
        altura = jQuery("#bannerHome").height();
    }*/

        alturaMarcas = alturaMarcas-1.5;

        //altura = jQuery(".hdr_AreaLogo").height() + altura;
        jQuery("#btnOpenSearch").css('display', 'block');
        jQuery("#btnAbrirMarcas").css('display', 'none');
        // jQuery(".mnu_Area").css('display', 'block');
        jQuery(".AreaManterabertoSeach").css('display', 'block');
        jQuery("#areaMenu").css('background', '#fff02a');
        jQuery("#areaMenu").css('border-left', 'none');
        jQuery(".borderMenu").css('display', 'none');

        // Marcas
        jQuery("#areaMenu").css("z-index", "23");
        jQuery("#areaMenu").css('left', '-3px');
        jQuery("#mrc_Marcas").css('display', 'block');
        jQuery(".mrc_Area").css("height", alturaMarcas);

        var left = jQuery("#hdr_AreaMenu").width();
        jQuery(".mrc_Container").css("left", left);
        jQuery(".mrc_Container").css("margin-left", '-3px');
        jQuery(".spanMarcas").css("color", "#000")

        jQuery(".mnu_AreaCategoria").first().css("background", "#fff02a");
        jQuery(".mnu_AreaCategoria").first().css("margin-top", "2px");
        jQuery(".mnu_AreaCategoria").first().css("padding-right", "2px");
        jQuery(".mnu_AreaCategoria span").first().css("color", "#1d1607");

        if(maxWidth < 1440) {
            jQuery(".mnu_Area").animate({
                width: "99.6%"
                
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
        }
        else {
            jQuery(".mnu_Area").animate({
                width: "99%"
                
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
        }

    jQuery('#overlay-back').fadeIn(0);
    //setTimeout( jQuery(".mnu_AreaCategoria").addClass("categoriaSlide"), 0);

    setTimeout(
        function () {
            jQuery(".mnu_Link").css("display", "block");
            jQuery(".mnu_Link").animate({ marginLeft: "20%" });
        }
        , 0);

};

function closeMenu() {

    jQuery("#btnOpenSearch").css("display", "none");
    jQuery("#btnAbrirMarcas").css("display", "block");
    jQuery("#areaMenu").css("border-left", "1px solid");
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
    fecharMenuMarcas();
    
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
    hideAreaLogin()
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
        jQuery("#carrinho").css("display", "block");
        jQuery("#fecharCarrinho").css("display", "none");

}

function hideAreaLogin() {
    clareiaATela();
        jQuery(".AreaBotaoCart").css("z-index", "0");
        jQuery(".AreaBotaoCart").css('background', 'none');
        jQuery(".user_Area").css("display", "none");
        jQuery(".user_Area").css("right", "-400px");
        jQuery("#botaoLogin").css("display", "block");
        jQuery("#fecharLogin").css("display", "none");
}

function showUserArea() {
     hideCart();
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
        fechaMenusMobile();
        jQuery(".fly_AreaMobile").css('display', 'block');

        getDownAnimation(".fly_AreaMobile", "height");

    } else {
        jQuery(".fly_AreaMobile").css('display', 'none');
    }
}

function showCartMobile()
{    
    if (jQuery(".cart_AreaMobile").css('display') === 'none') {
        fechaMenusMobile();
        jQuery(".cart_AreaMobile").css('display', 'block');

        getDownAnimation(".cart_AreaMobile", "height");

    } else {
        jQuery(".cart_AreaMobile").css('display', 'none');
    }
}

function showUserAreaMobile()
{
    if (jQuery(".AreaLogado").css('display') === 'none') {
        fechaMenusMobile();
        jQuery(".AreaLogado").css('display', 'block');

        getDownAnimation(".AreaLogado", "height");

    } else {
        jQuery(".AreaLogado").css('display', 'none');
    }
}

function getDownAnimation(classe, prop)
{
    var height = screen.height;
    height = height - 118;
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

function fechaMenusMobile()
{
    jQuery(".menuMobileArea").css("display", "none");
    jQuery(".fly_AreaMobile").css('display', 'none');
    jQuery(".cart_AreaMobile").css('display', 'none');
    jQuery(".AreaLogado").css('display', 'none');

    for( i = 0; i < '101'; i++) {
        closeSubMenuMobile(i);
    }
}

function hideLogin() {
    clareiaATela();
    jQuery(".AreaBotaoLogin").css("z-index", "0");
    jQuery(".AreaBotaoLogin").css('background', 'none');
    jQuery(".fly_Area").css('display', 'none');
    jQuery(".fly_Area").animate({ right: "-400px" }, 300);
    jQuery("#botaoLogado").css("display", "block");
    jQuery("#fecharLogado").css("display", "none");
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

    if (jQuery("#mrc_Marcas").css('display') === 'none') {
        openMenu();
        openMenuMarcas();

        
    }
    else
    {
        //console.log(this.event.target.className)
        //fecharMenuMarcas();
    }
    //jQuery("#SeachMenuMarcas").focus();

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
                    alturaMarcas = 235;
                }
                else
                {
                    alturaMarcas = jQuery("#bannerHome").height() / 4 - 3;
                }

                // jQuery(".mrc_Area").css("height", alturaMarcas);
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
    if( this.event.target.className !== "mrc_AreaImage") {
         console.log(this.event.target.className);
        jQuery("#mrc_Marcas").css("display", "none");
        jQuery(".mnu_AreaCategoria").first().css("background", "#070003");
        jQuery(".mnu_AreaCategoria span").first().css("color", "#fff");
        jQuery("#btnOpenSearch").css('display', 'none');
        jQuery(".AreaManterabertoSeach").css('display', 'none');
        jQuery("#btnAbrirMarcas").css('display', 'block');    
        jQuery("#areaMenu").css('background', '#070003');
        jQuery("#areaMenu").css('left', '-2px');
        jQuery(".spanMarcas").css("color", "beige");
        jQuery(".borderMenu").css('display', 'block');
        //jQuery("#areaMenu").css('border-left', '1px solid');
    }
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

function trocaBannerRotHome(area) {

    if (area == 'A')
    {
       jQuery("#linkBannerRotA").addClass("active");
       jQuery("#linkBannerRotB").removeClass("active");
       jQuery("#linkBannerRotC").removeClass("active");

        jQuery(".areaBannerRotA").css("display", "block");
        jQuery(".areaBannerRotB").css("display", "none");
        jQuery(".areaBannerRotC").css("display", "none");

    }
    else  if (area == 'B')
    {
       jQuery("#linkBannerRotA").removeClass("active");
       jQuery("#linkBannerRotB").addClass("active");
       jQuery("#linkBannerRotC").removeClass("active");

        jQuery(".areaBannerRotA").css("display", "none");
        jQuery(".areaBannerRotB").css("display", "block");
        jQuery(".areaBannerRotC").css("display", "none");
    }
    else  if (area == 'C')
    {
       jQuery("#linkBannerRotA").removeClass("active");
       jQuery("#linkBannerRotB").removeClass("active");
       jQuery("#linkBannerRotC").addClass("active");

        jQuery(".areaBannerRotA").css("display", "none");
        jQuery(".areaBannerRotB").css("display", "none");
        jQuery(".areaBannerRotC").css("display", "block");
    }

}

function openSubMenu(id)
{
    var altura = 0;

    if (jQuery("#subMenu_" + id).css("display") == "none")
    {
        fecharMenuMarcas();
        
        if (jQuery("#bannerHome").height() === null)
        {
            altura = 449;
        }
        else
        {
            altura = jQuery("#bannerHome").height();
        }
        altura = altura + 132;

        jQuery(".subMenu_Container").css("min-height", altura);

        jQuery("#subMenu_" + id).css("display", "block");        
        jQuery("#subMenu_" + id).css("marginLeft", jQuery(".mnu_AreaLinks").width());
        jQuery("#btnOpenSearch").css('display', 'block');
        //jQuery(".areaPesquisa").css('display', 'none');        
        jQuery("#btnAbrirMarcas").css('display', 'none');        
        jQuery("#areaMenu").css('background', '#fff02a');
        jQuery("#areaMenu").css('left', '-3px');
        jQuery("#areaMenu").css('border-left', 'none');
        jQuery(".borderMenu").css('display', 'none');

        jQuery("#menuArea_" + id).css('background', 'rgb(255, 240, 42)');
        jQuery("#menuArea_" + id + " span").css('color', '#000');

        jQuery(".linkMenuSubmenu_" + id).css('position', 'absolute');
        jQuery(".linkMenuSubmenu_" + id).css('margin-left', '185px');
        jQuery(".linkMenuSubmenu_" + id).css('margin-top', '-10px');
        jQuery(".linkMenuSubmenu_" + id).css('width', '10px');
        jQuery(".linkMenuSubmenu_" + id).css('height', '65px');
        jQuery(".linkMenuSubmenu_" + id).css('background', 'rgb(255, 240, 42)');
        jQuery(".linkMenuSubmenu_" + id).css('z-index', '35');
        jQuery(".linkMenuSubmenu_" + id).css('display', 'block');

    }
    
}

function fechaSubMenu(id)
{
   if( this.event.target.className != "mrc_AreaImage") {
        jQuery("#subMenu_" + id).css("display", "none");
        jQuery("#btnOpenSearch").css('display', 'none');
        jQuery("#btnAbrirMarcas").css('display', 'block');
        jQuery("#areaMenu").css('background', '#000');
        jQuery("#areaMenu").css('display', 'block');
        jQuery("#areaMenu").css('left', '-2px');
        //jQuery("#areaMenu").css('border-left', '1px solid');
        jQuery("#menuArea_" + id).css('background', '#000');
        jQuery("#menuArea_" + id + " span").css('color', '#fff');
        jQuery(".linkMenuSubmenu_" + id).css('display', 'none');
        jQuery(".borderMenu").css('display', 'block');
   }
}

function CloseAllSubMenuTabs() {
    var menu = jQuery(".mnu_Area").css('display');
    //jQuery("#areaMenu").css("border-left", "1px solid rgb(255, 240, 42)");

    fecharMenuMarcas();

    for(i = 0; i < '101'; i++) {

        if(jQuery("#subMenu_" + i).css('display') == 'block') {
            fechaSubMenu(i);

            break;
        }
    }

}
