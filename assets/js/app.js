;(function(window)
{
    var app = {

        init: function()
        {
            this.dom.init();
            this.gmap.init();
            this.gmap.trace('L\'Ardèche', 'Le Pequelet', 'touristique');
            this.events.init();
        }

    }

    var self   = app;
    window.app = app;

})(window);