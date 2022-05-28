$(document).ready(function() {
    $('a.linkItem[data-id]').on('mouseover', function(e) {
        var dataid = $(this).attr("data-id");
        $('.portion').removeClass('active');
        //gestione foto
        $('.imagesWrapper img#logoImage').css({display: 'none'});
        $('.imagesWrapper img.sectorImage').hide();
        $('.imagesWrapper img.sectorImage[data-id='+dataid+']').show();
        
        //gestione frammenti colorati
        $('.portion[data-id='+dataid+']').addClass('active');
        
    });
})
