function fnCloseAll() {

}

function fnGetMenuSize() {

    return jQuery(".paginaConteudo").height();
}

function fnOpenMenu() {
    fnCloseAll();

    jQuery(".mnu_Area").css('display', 'block');
    jQuery(".mnu_Area").animate({
        width: "100%",
        height: fnGetMenuSize()
    }, {
        duration: 200,
        specialEasing: {
            width: 'linear'
        }
    });

    
}