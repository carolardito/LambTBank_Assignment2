// Get a free key at http://openweathermap.org/. Replace the "Your_Key_Here" string with that key.
var OpenWeatherAppKey = "5709a8b2333dacbf82b7c839210adf3e";

function getWeatherWithZipCode() {

    
    //var zipcode = $('#zip-code-input').val();

    /*var queryString =
        'http://api.openweathermap.org/data/2.5/weather?zip='
         + zipcode + ',us&appid=' + OpenWeatherAppKey + '&units=imperial';*/
    var queryString =
        'http://api.openweathermap.org/data/2.5/weather?q=toronto,ca&appid=' 
        + OpenWeatherAppKey + '&units=imperial';

    //alert(queryString);
    $.getJSON(queryString, function (results) {
        //alert(results);
        showWeatherData(results);

    }).fail(function (jqXHR) {
        //alert("error");
        $('#error-msg').show();
        $('#error-msg').text("Error retrieving data. " + jqXHR.statusText);
    });
    //alert("after");
    return false;
}

function showWeatherData(results) {
    //alert( "abrir");
    if (results.weather.length) {

        $('#error-msg').hide();
        $('#weather-data').show();

        $('#title').text(results.name);
        $('#temperature').text(results.main.temp);
        $('#wind').text(results.wind.speed);
        $('#humidity').text(results.main.humidity);
        $('#visibility').text(results.weather[0].main);

        var sunriseDate = new Date(results.sys.sunrise * 1000);
        $('#sunrise').text(sunriseDate.toLocaleTimeString());

        var sunsetDate = new Date(results.sys.sunset * 1000);
        $('#sunset').text(sunsetDate.toLocaleTimeString());

    } else {
        $('#weather-data').hide();
        $('#error-msg').show();
        $('#error-msg').text("Error retrieving data. ");
    }
}

function getWeatherWithGeoLocation() {

    navigator.geolocation.getCurrentPosition(onGetLocationSuccess, onGetLocationError,
      { enableHighAccuracy: true });

    $('#error-msg').show();
    $('#error-msg').text('Determining your current location ...');

    $('#get-weather-btn').prop('disabled', true);
}
function onGetLocationSuccess(position) {

    var latitude = position.coords.latitude;
    var longitude = position.coords.longitude;

    var queryString =
      'http://api.openweathermap.org/data/2.5/weather?lat='
      + latitude + '&lon=' + longitude + '&appid=' + OpenWeatherAppKey + '&units=imperial';

    $('#get-weather-btn').prop('disabled', false);

    $.getJSON(queryString, function (results) {

        showWeatherData(results);

    }).fail(function (jqXHR) {
        $('#error-msg').show();
        $('#error-msg').text("Error retrieving data. " + jqXHR.statusText);
    });

}
function onGetLocationError(error) {

    $('#error-msg').text('Error getting location');
    $('#get-weather-btn').prop('disabled', false);
}