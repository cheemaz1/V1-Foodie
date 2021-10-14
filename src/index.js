

const form = document.getElementById('addForm');
const itemList = document.getElementById('items');





//form submit event 
form.addEventListener('click', queryBySearch);


//add item
let arr = [];
let longcord = [];
function queryBySearch(e) {
    e.preventDefault();
    var newItem = document.getElementById("item").value;
    fetch(`https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${newItem}&latitude=${latc}&longitude=${longc}&limit=20`, {
        method: 'GET',
        headers: {
            Authorization: `Bearer QWy1cPDLl8PtwXi0EbDynwhj8308og8hGg9CM71OcqEWgJ7NpTuR0aE_hI_M4vTqdVkfGWudlRDo9egMfmT2LRsvEyd6HJB_3zKIToCtwJlfywjCGqYfwds3qVhfYXYx`
        }
    }).then((res) => {
        res.json().then(function (data) {
            console.log(data);
            for (i = 0; i < data.businesses.length; i++) {
                arr.push(data.businesses[i]);
            }
            const ratingz = { 0: '☆☆☆☆☆', 1: '★☆☆☆☆', 2: '★★☆☆☆', 3: '★★★☆☆', 4: '★★★★☆', 5: '★★★★★' }
            const colorz = ['#ffcccc', '#ff8080', '#ff3333', '#e60000', '#990000', '#4d0000']
            const colorz2 = ['#FF0000', '#FFA500', '#ffff00', '#90EE90', '#79C99E', '#006400']

            itemList.innerHTML = '';
            var li = document.createElement('li');
            li.className = 'list-group-item';
            li.appendChild(document.createTextNode(arr[0].name));
            itemList.appendChild(li);
            if (arr[0].price) {
                var li = document.createElement('li');
                li.className = 'list-group-item';
                li.appendChild(document.createTextNode(arr[0].price));
                itemList.appendChild(li);
            }
            var li = document.createElement('li');
            li.className = 'list-group-item';
            li.appendChild(document.createTextNode(arr[0].location.display_address.join(', ')));
            itemList.appendChild(li);

            var li = document.createElement('li');
            li.className = 'list-group-item';
            if (arr[0].rating === 0) {
                li.appendChild(document.createTextNode('☆☆☆☆☆'))
            }
            else if (arr[0].rating === 1) {
                li.appendChild(document.createTextNode('★☆☆☆☆'))
            }
            else if (arr[0].rating === 2) {
                li.appendChild(document.createTextNode('★★☆☆☆'))
            }
            else if (arr[0].rating === 3) {
                li.appendChild(document.createTextNode('★★★☆☆'))
            }
            else if (arr[0].rating === 4) {
                li.appendChild(document.createTextNode('★★★★☆'))
            }
            else if (arr[0].rating === 5) {
                li.appendChild(document.createTextNode('★★★★★'))
            }
            //li.appendChild(document.createTextNode(ratingz.arrrating));
            itemList.appendChild(li);
            document.getElementById("item").value = '';

            var li = document.createElement('li');
            li.className = 'list-group-item';
            let mileage = distance(arr[0].coordinates.latitude, latc, arr[0].coordinates.longitude, longc)
            li.appendChild(document.createTextNode(mileage));
            itemList.appendChild(li);

            //map API 
            mapboxgl.accessToken = 'pk.eyJ1IjoiY2hlZW1zOTgiLCJhIjoiY2t1bHlqdG9nMDVraDJubGl1dHN0eXE3ZCJ9.06qQ8BV_zNaE_aQs5WhvWQ';
            const map = new mapboxgl.Map({
                container: 'map', // container ID
                style: 'mapbox://styles/mapbox/navigation-night-v1', // style URL
                center: [arr[0].coordinates.longitude, arr[0].coordinates.latitude], // starting position [lng, lat]
                zoom: 14 // starting zoom
            });
            //set markers 
            const geojson = {
                type: 'FeatureCollection',
                features: [
                    {
                        type: 'Feature',
                        geometry: {
                            type: 'Point',
                            coordinates: [longc, latc]
                        },
                        properties: {
                            title: 'Home',
                            description: 'My Current Location'
                        }
                    },
                ],
            };


            // arr.forEach(ele => {
            //     geojson.features.push({
            //         type: 'Feature',
            //         geometry: {
            //             type: 'Point',
            //             coordinates: [ele.coordinates.longitude, ele.coordinates.latitude]
            //         },
            //         properties: {
            //             title: `${ele.name}`
            //         }
            //     })
            // });
            console.log(geojson)
            console.log('passed')
            console.log(arr)

            for (const { geometry, properties } of geojson.features) {
                // create a HTML element for each feature
                const el = document.createElement('div');
                el.className = 'marker';

                // make a marker for each feature and add to the map
                new mapboxgl.Marker(el)
                    .setLngLat(geometry.coordinates).setPopup(new mapboxgl.Popup({ offset: 25 }).setHTML('My Current Location')).addTo(map);
            }
            arr.forEach(ele => {
                let mileage2 = distance(ele.coordinates.latitude, latc, ele.coordinates.longitude, longc)
                const marker = new mapboxgl.Marker({
                    color: colorz[parseInt(ele.rating)],
                    draggable: false
                }).setLngLat([ele.coordinates.longitude, ele.coordinates.latitude]).setPopup(new mapboxgl.Popup({ offset: 25 }).setHTML(`${ele.name}<p>${ele.location.display_address.join(', ')}.</p><p>${ele.rating} stars</p><p>${mileage2}</p>`))
                    .addTo(map);

            })






            // Create a new marker.

            //add zoom buttons 
            const nav = new mapboxgl.NavigationControl({
                visualizePitch: true
            });
            map.addControl(nav, 'bottom-right');
            lengthofarr = arr.length


            while (arr.length > 0) {
                arr.shift()
            }



        });

        var imag = document.createElement('img');
        imag.className = 'legend';
        imag.src = 'red_grad.png'
        document.querySelector('.legendspace').appendChild(image)





        //create new li elemnt
        //var li = document.createElement('li');
        //add class 
        //li.className = 'list-group-item';
        //arr.push(newItem)
        //add text to node w input value 
        //li.appendChild(document.createTextNode(arr[0].name));

        //itemList.appendChild(li);
        //document.getElementById("item").value = '';
        //arr.shift()

    }).catch(err => console.log(err))
    //get input value 

    //ocument.replaceChild('li','li')

}

