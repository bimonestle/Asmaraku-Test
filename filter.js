// INITIALIZING ISOTOPE
var $products = $('.products');
$products.isotope({
    itemSelector: '.product',
    layoutMode: 'fitRows'
})

// BINDING FILTER INTO BUTTON
$('.filter-buttons li').click(function () {
    var selector = $(this).attr('data-filter');
    $('.products').isotope({
        filter: selector
    });
    return false;
});

// REMOVE ATTRIBUTES
// $('.product').removeAttr('style');
$('.product').css('position', 'relative');
// $('.product').css('left', '0');