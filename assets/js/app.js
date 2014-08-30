;(function(window)
{
    var app = {

        init: function()
        {
            this.dom.init();
            this.events.init();
        }

    }

    var self   = app;
    window.app = app;

})(window);