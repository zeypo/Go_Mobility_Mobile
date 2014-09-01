;(function(app)
{
    var events = {
        
        mmactivePage      : null,
        
        init: function()
        {
            $( "[data-role='header'], [data-role='footer']" ).toolbar({ theme: "a" });
            self.selectToolbar();
            
            $(document).on('pagebeforeshow', function(){
                self.selectToolbar();
                self.setTitle();

                $( document ).on( "swiperight", "#"+self.mactivePage, function( e ) {
                    self.swipPanel(e);
                });
            })
        },

        selectToolbar: function()
        {
            //self.mactivePage = $.mobile.activePage.attr('id');

            try{
                self.mactivePage = $.mobile.activePage.attr('id');
            } catch (e) {
                if (typeof (self.mactivePage) == 'undefined' && self.mactivePage == "")
                self.mactivePage = event.target.id;
            };

            if(self.mactivePage == '' || self.mactivePage == 'connection'){
                app.dom.$mainHeader.hide();
            } else {
                app.dom.$mainHeader.show();
            }
        },

        swipPanel: function(e)
        {
            if ( $.mobile.mactivePage.jqmData( "panel" ) !== "open" ) {
                app.dom.$leftNav.panel( "open" );
            }
        },

        setTitle: function()
        {
            var title = $("#"+self.mactivePage).attr('data-title');
            $('.content-header .page-title').html(title);
        }
    }

    var self   = events;
    app.events = events;

})(app);