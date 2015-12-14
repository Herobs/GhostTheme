$(function() {
    var currentYPosition = function() {
        if (window.pageYOffset)
            return window.pageYOffset;
        else if (window.document.documentElement && window.document.documentElement.scrollTop)
            return window.document.documentElement.scrollTop;
        else if (window.document.body.scrollTop)
            return window.document.body.scrollTop;
        else
            return 0;
    }

    var scrollToTop = $('#scroll-to-top');
    $(window).on('scroll', function() {
        if (currentYPosition() > 96)
            scrollToTop.fadeIn();
        else
            scrollToTop.fadeOut();
    });
    scrollToTop.click(function() {
        $("html, body").animate({ scrollTop: 0 }, 300);
    });
});
