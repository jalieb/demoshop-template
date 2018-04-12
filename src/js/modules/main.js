//
// Main navigation
//


(function() {

    $(document).on('click', '[data-nav-toggle]', function () {
        $navMenu = $('[data-nav-menu]');
        navMenuOpenClass = 'navigation--mobile-visible';

        // TODO: Add slide effect.
        if($navMenu.hasClass(navMenuOpenClass)) {
            $navMenu.removeClass(navMenuOpenClass);
        } else {
            $navMenu.addClass(navMenuOpenClass);
        }
    });

})();
