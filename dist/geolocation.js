const latc = []
const longc = []

function geoFindMe() {

    const status = document.querySelector('#status');
    const mapLink = document.querySelector('#map-link');

    mapLink.href = '';
    mapLink.textContent = '';


    function success(position) {
        const latitude = position.coords.latitude;
        const longitude = position.coords.longitude;

        status.textContent = '';
        mapLink.href = `https://www.openstreetmap.org/#map=18/${latitude}/${longitude}`;
        //mapLink.textContent = `Latitude: ${latitude} °, Longitude: ${longitude} °`;
        latc.push(latitude)
        longc.push(longitude)
        console.log(latc)
        console.log(longc)
        document.querySelector('*').removeAttribute('style')

    }


    function error() {
        alert('Unable to retrieve your location');
    }

    if (!navigator.geolocation) {
        alert('Geolocation is not supported by your browser') ;
    } else {
        status.style.color = '#fff'
        document.querySelector('*').style.cursor = 'wait'
        // document.querySelector('geoloc').style.cursor = 'wait'
        // document.querySelectorAll.style.cursor = 'wait'
        status.textContent = '';
        
        navigator.geolocation.getCurrentPosition(success, error);
        

    }



}


document.querySelector('#find-me').addEventListener('click', geoFindMe);
