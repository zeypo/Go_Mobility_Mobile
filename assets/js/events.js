;(function(app)
{
    var events = {
        
        activePage      : null,
        
        init: function()
        {
            $( "[data-role='header'], [data-role='footer']" ).toolbar({ theme: "a" });
            self.selectToolbar();
            
            $(document).on('pagebeforeshow', function(){
                self.selectToolbar();

                $( document ).on( "swiperight", "#"+self.activePage, function( e ) {
                    self.swipPanel(e);
                });
            })
        },

        selectToolbar: function()
        {
            self.activePage = $.mobile.activePage.attr('id');

            if(self.activePage == '' || self.activePage == 'connection'){
                app.dom.$mainHeader.hide();
            } else {
                app.dom.$mainHeader.show();
            }
        },

        swipPanel: function(e)
        {
            if ( $.mobile.activePage.jqmData( "panel" ) !== "open" ) {
                app.dom.$leftNav.panel( "open" );
            }
        }
    }

    var self   = events;
    app.events = events;

})(app);