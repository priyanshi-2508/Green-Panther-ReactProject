// export const script = () => {
//     L.mapquest.key = 'ZO5ZYsbFfOp4DUdbsl4X0nhqxJjpb0JS';
//     var starting, ending;
//     var position1, position2;
//     var FinalDistance;
//     //The whole function invoked when we click on "show on map" button
//     function getcor() {
//         //Taking Pincodes
//         starting = document.getElementById('starting-input').value;
//         ending = document.getElementById('destination-input').value;
//         // Geocode locations(Convert Addresses into Latitude and longitude), then call the createMap callback
//         L.mapquest.geocoding().geocode([starting, ending], createMap);

//         function createMap(error, response) {
//             // Initialize the Map
//             var map = L.mapquest.map('map', {
//                 layers: L.mapquest.tileLayer('map'),
//                 center: [0, 0],
//                 zoom: 12
//             });

//             // Generate the feature group containing markers from the geocoded locations
//             var featureGroup = generateMarkersFeatureGroup(response);

//             // Add markers to the map and zoom to the features
//             featureGroup.addTo(map);
//             map.fitBounds(featureGroup.getBounds());
//         }

//         function generateMarkersFeatureGroup(response) {
//             var group = [];
//             for (var i = 0; i < response.results.length; i++) {
//                 var location = response.results[i].locations[0];
//                 var locationLatLng = location.latLng;

//                 // Create a marker for each location
//                 var marker = L.marker(locationLatLng, { icon: L.mapquest.icons.marker(), draggable: true })
//                     .bindPopup(location.adminArea5 + ', ' + location.adminArea3);

//                 group.push(marker);

//             }
//             position2 = (group[0].getLatLng());
//             position1 = (group[1].getLatLng());
//             //Event listener activated when we Drag and Drop the markers
//             group[0].on('dragend', function (event) {   //marker 1
//                 var marker = event.target;
//                 position2 = marker.getLatLng().wrap();
//                 console.log(position2)

//             });
//             group[1].on('dragend', function (event) {   //marker 2
//                 var marker = event.target;
//                 position1 = marker.getLatLng().wrap();
//                 console.log(position1)

//             });
//             return L.featureGroup(group);
//         }
//     }
//     //call distance matrix api to get the distance and show in the map
//     function get_route() {

//         var dist = L.mapquest.directions();
//         dist.route({
//             start: [position1.lat, position1.lng],
//             end: [position2.lat, position2.lng],

//             optimizeWaypoints: true,

//         }, directionsCallback);
//         function directionsCallback(error, response) {
//             //final distance variable
//             FinalDistance = response.route.distance;
//             console.log(FinalDistance);
//             dist.route({
//                 start: [position1.lat, position1.lng],
//                 end: [position2.lat, position2.lng],

//                 optimizeWaypoints: true,

//             });
//         }
//     }
// }

// export default get_route();


