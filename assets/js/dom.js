;(function(app)
{
    var dom = {

        $mainHeader : null,
        $leftNav    : null,

        init: function()
        {
            this.$mainHeader = $('#header-top');
            this.$leftNav    = $('#nav-panel');

            self.initHtml();
        },

        initHtml: function()
        {
            self.$mainHeader.toolbar({ theme: "a" });
            $.mobile.defaultPageTransition = 'slidefade';
        }

    }

    var self = dom;
    app.dom  = dom;

})(app);