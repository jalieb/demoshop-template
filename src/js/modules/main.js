//
// Main navigation
//


(function() {

    // Open navigation
    $(document).on('click', '[data-nav-open]', function () {
        $navMenu = $('[data-nav-menu]');
        navMenuOpenClass = 'navigation--mobile-visible';

        $navMenu.addClass(navMenuOpenClass);
    });

    // Close navigation
    $(document).on('click', '[data-nav-close]', function () {
        $navMenu = $('[data-nav-menu]');
        navMenuOpenClass = 'navigation--mobile-visible';

        $navMenu.removeClass(navMenuOpenClass);
    });

})();
