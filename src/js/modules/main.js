// Nav
(function() {

    var $nav;
    var $navItem;

    $.fn.nav = function() {
        $nav = $(this);
    }

})();

$('[data-nav]').nav();
