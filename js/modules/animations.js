(function(jQuery){    
    jQuery(document).ready( function(){
        jQuery(".areaDoMenu").on("mouseleave", function(e) {

            if (
                (e.toElement.className !== "mnu_Area") &&
                (e.toElement.className !== "mnu_Link") &&
                (e.toElement.className !== "mnu_AreaCategoria categoriaSlide")  &&
                (e.toElement.className !== "areaPesquisa")                                
            ){
                closeMenu();
            }
        });     
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

    if (jQuery("#mrc_Marcas").css('display') === "block")
    {
        //jQuery("#imgSearch").attr("src", "img/btnSearchHover.png");
        jQuery("#areaMenu").css("background", "#fff02a");
        jQuery(".hdr_AreaButton input").css("display", "block");
        jQuery('#overlay-back').fadeIn(500);
    } else
    {
        //jQuery("#imgSearch").attr("src", "img/btnSearch.png");
        jQuery("#areaMenu").css("background", "none");
        jQuery(".hdr_AreaButton input").css("display", "none");
        jQuery('#overlay-back').fadeOut(500);
    }

}
;
function openMenu() {
    
    var altura = jQuery(".hdr_AreaLogo").height() + jQuery("#bannerHome").height();
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
            , 400);

    setTimeout(
            function () {
                jQuery(".mnu_Link").css("display", "block");
                jQuery(".mnu_Link").animate({marginLeft: "20%"});
            }
    , 400);
}
;

function openMenuFast() {
    
    var altura = jQuery(".hdr_AreaLogo").height() + jQuery("#bannerHome").height();
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
                jQuery(".mnu_Link").animate({marginLeft: "20%"});
            }
    , 0);
}
;

function openMenuMarcas() {


    var altura = jQuery(".hdr_AreaLogo").height() + jQuery("#bannerHome").height();
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
                jQuery(".mnu_Link").animate({marginLeft: "20%"});
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
    jQuery(".mnu_Links").animate({marginLeft: "0%"});
    jQuery('#overlay-back').fadeOut(500);

    if (jQuery("#mrc_Marcas").css('display') === 'block')
    {
        jQuery("#mrc_Marcas").css('display', 'none');
    }
    changeMenuIcon();
}
;
function showLogin()
{
    if (jQuery(".fly_Area").css('display') === 'none')
    {
        escureATela();
        jQuery(".AreaBotaoLogin").css("z-index", "25");
        jQuery(".AreaBotaoLogin").css('background', '#252525');
        jQuery(".fly_Area").css('display', 'block');
        jQuery(".fly_Area").animate({right: "0px"}, 200);
    } else
    {
        clareiaATela();
        jQuery(".AreaBotaoLogin").css("z-index", "0");
        jQuery(".AreaBotaoLogin").css('background', 'none');
        jQuery(".fly_Area").css('display', 'none');
        jQuery(".fly_Area").animate({right: "-400px"}, 200);
    }

}

function hideLogin() {
    clareiaATela();
    jQuery(".AreaBotaoLogin").css("z-index", "0");
    jQuery(".AreaBotaoLogin").css('background', 'none');
    jQuery(".fly_Area").css('display', 'none');
    jQuery(".fly_Area").animate({right: "-400px"}, 300);
}

function showTab(tabActive, tabInative, areaActive, areaInative)
{
    if (jQuery('#' + areaActive).css('display', 'none')) {

        jQuery('#' + areaActive).css('display', 'block');
        jQuery('#' + areaInative).css('display', 'none');
        jQuery('#' + tabActive).css('background-color', '#fff02a');
        jQuery('#' + tabInative).css('background-color', '#5c5c5c');
    }

}

function openSearch() {

    var altura = jQuery("#bannerHome").height() / 4;
    if (jQuery("#mrc_Marcas").css('display') === 'none')
    {
        openMenuMarcas();

        jQuery("#areaMenu").css("z-index", "22");
        jQuery("#mrc_Marcas").css('display', 'block');
        jQuery(".mrc_Area").css("height", altura);

        setTimeout(function () {
            var left = jQuery(".mnu_Area").width();
            jQuery(".mrc_Container").css("left", left);
        }, 400);

        jQuery(".mnu_AreaCategoria").first().css("background", "#fff02a");
        jQuery(".mnu_AreaCategoria").first().css("margin-top", "2px");
        jQuery(".mnu_AreaCategoria").first().css("padding-right", "2px");
        jQuery(".mnu_AreaCategoria span").first().css("color", "#1d1607");
    }

}

jQuery(window).resize(function () {

    var altura = jQuery(".hdr_AreaLogo").height() + jQuery("#bannerHome").height();
    if (jQuery(".mnu_Area").css('display') === "block")
    {
        jQuery(".mnu_Area").css('display', 'block');
        jQuery(".mnu_Area").animate({
            height: altura
        }, {
            duration: 0,
            specialEasing: {
                width: 'linear'
            }
        });
    }

    if (jQuery("#mrc_Marcas").css('display') === "block")
    {
        var left = jQuery(".mnu_Area").width();
        var alturaMarcas = jQuery("#bannerHome").height() / 4;
        jQuery(".mrc_Area").css("height", alturaMarcas);
        jQuery(".mrc_Container").css("left", left);
    }

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
}

