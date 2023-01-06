let autocomplete;
function initAutocomplete() {
    autocomplete = new google.maps.places.Autocomplete(
        document.getElementById('autocomplete'),
        {
            types: ['establishment'],
            componentRestriction: {'country' : ['AU']},
            fields: ['place_id', 'geometry', 'name']
        });

    autocomplete.addEventListener('place_changed', onPlaceChanged);
}

function onPlaceChanged() {
    var place = autocomplete.getPlace();

    if (!place.geometry) {
        // User did not select a prediction; reset the input field
        document.getElementById('autocomplete').placeholder = 'Enter a place';
    } else {
        // Display details about the valid place
        document.getElementById('details').innerHTML = place.name;
    }
}

alert(PLACES_AUTOCOMPLETE_APIKEY);