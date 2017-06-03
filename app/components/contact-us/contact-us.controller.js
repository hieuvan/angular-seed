'use strict';

define(function() {
  return ['config', function(config) {
    var vm = this;
    vm.title = config.siteTitle;
    vm.offices = [
      {
        office : 'VIC/TAS (Head Office)',
        address : 'Level 11, 473 Bourke Street Melbourne Vic 3000',
        phone: '+61 3 8629 1222',
        lat : -37.8155508,
        long : 144.95995019999998
      },
      {
        office : 'NSW/ACT',
        address : 'Level 5, 345 George Street Sydney, NSW 2000',
        phone: '+61 2 8267 2400',
        lat : -33.868350,
        long : 151.206864
      },
      {
        office : 'WA',
        address : 'Level 15, 108 St Georges Terrace Perth, WA 6000',
        phone: '+61 8 9217 0536',
        lat : -31.9536976,
        long : 115.853911
      },
      {
        office : 'QLD',
        address : 'Level 7, 120 Edward St Brisbane, QLD 4000',
        phone: '+61 7 5512 6143',
        lat : -27.4675676,
        long : 153.0287663
      },
      {
        office : 'CHRISTCHURCH',
        address : 'Level 1, 22 Papanoi Road Merivale, Christchurch 8014',
        phone: '+64 2 1817 988',
        lat : -43.5196267,
        long : 172.6276061
      }
    ];
    var mapOptions = {
      zoom: 16,
      center: new google.maps.LatLng(-37.8155508, 144.95995019999998),
      mapTypeId: google.maps.MapTypeId.ROADMAP
    };
    vm.map = new google.maps.Map(document.getElementById('map'), mapOptions);

    vm.markers = [];

    var infoWindow = new google.maps.InfoWindow();

    var image = 'styles/images/ahs-map-icon.png';

    var createMarker = function (info){

      var marker = new google.maps.Marker({
        map: vm.map,
        position: new google.maps.LatLng(info.lat, info.long),
        title: info.office,
        address: info.address,
        phone: info.phone,
        icon: image
      });
      marker.content = '<div class="infoWindowContent">' + info.address + '</div>';

      google.maps.event.addListener(marker, 'click', function(){
        infoWindow.setContent('<h2>' + marker.title + '</h2>' + marker.content);
        infoWindow.open(vm.map, marker);
      });

      vm.markers.push(marker);

    };

    for (var i = 0; i < vm.offices.length; i++){
      createMarker(vm.offices[i]);
    }

    vm.openInfoWindow = function(e, selectedMarker){
      e.preventDefault();
      google.maps.event.trigger(selectedMarker, 'click');
    }
  }];
});
