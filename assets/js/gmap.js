
;(function(app)
{
    var gmap = {
        
        mapOptions : null,
        myLatlng   : null,
        mapElement : null,
        map        : null,
        travelType : null,
        tracedata  : null,

        init: function()
        {
            self.myLatlng = new google.maps.LatLng(44.8152705, 4.3737854);
            self.mapElement = document.getElementById('map');
            self.setMapOptions();

            self.map = new google.maps.Map(self.mapElement, self.mapOptions);
        },

        predicatePlace: function(input)
        {
            var input   = document.getElementById(input);
            var options = {componentRestrictions: {country: 'fr'}};
            new google.maps.places.Autocomplete(input, options);
        },

        trace: function(origin, destination, transport)
        {
            self.travelType = transport;
            var direction = new google.maps.DirectionsRenderer({
                map   : self.map
            });
            
            if(origin && destination){
                self.setRequest(origin, destination);
                direction.setMap(self.map);

                self.getDirectionService(self.request, direction);
            }
        },

        setRequest: function(origin, destination)
        {
            self.request = {
                origin      : origin,
                destination : destination,
                travelMode  : self.setTravelMode()
            }

            return self.request;
        },

        getDirectionService: function(request, direction)
        {
            var directionsService = new google.maps.DirectionsService();
            directionsService.route(request, function(result, status) {
                if (status == google.maps.DirectionsStatus.OK) {
                    self.tracedata = result;
                    direction.setDirections(result);
                }
            });
        },

        setTravelMode: function()
        {
            if(self.travelType == 'sportif'){
                return google.maps.DirectionsTravelMode.WALKING;
            } else {
                return google.maps.DirectionsTravelMode.DRIVING;
            }
        },

        setMapOptions: function()
        {
            self.mapOptions = {
                zoom: 16,
                center: self.myLatlng,
                disableDefaultUI: false,
                scrollwheel: false,
            };
        }
    }

    var self   = gmap;
    app.gmap = gmap;

})(app);