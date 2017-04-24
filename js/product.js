jQuery(document).ready(function(){

    jQuery('<input class="qtminus" type="button" id="plus" value="-" onclick="process(-1)">').insertBefore('#quant');
    jQuery('<input class="qtplus" type="button" id="minus" value="+" onclick="process(1)">').insertAfter('#quant');


    if(jQuery('.zoom').length){
        jQuery('.zoom').elevateZoom({
            gallery: "product-gallery",
            zoomType: "inner",
            cursor: "crosshair",
            galleryActiveClass: "active"
        });
    }


    jQuery('.thumbs-vertical-slide').slick({
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    vertical:true,
    verticalSwiping:true,
    pauseOnHover:true,
    pauseOnFocus:true,
    responsive: [
        {
            breakpoint: 1200,
            settings: {
                slidesToShow: 4
            }
        },
        {
            breakpoint: 991,
            settings: {
                slidesToShow: 3
            }
        }
    ]
    });




});