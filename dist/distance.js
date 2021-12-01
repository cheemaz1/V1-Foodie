
function distance(lat1, lat2, lon1, lon2){
    let lon1n = lon1 * Math.PI / 180;
    lon2n = lon2 * Math.PI / 180;
    lat1n = lat1 * Math.PI / 180;
    lat2n = lat2 * Math.PI / 180;
    let dlon = lon2n - lon1n;
    let dlat = lat2n - lat1n;
    let a = Math.pow(Math.sin(dlat / 2), 2)
    + Math.cos(lat1n) * Math.cos(lat2n)
    * Math.pow(Math.sin(dlon / 2),2);

    let c = 2 * Math.asin(Math.sqrt(a));

        // Radius of earth in kilometers. Use 3956
        // for miles 6371 for km 
    let r = 3956;
    let returndist = c * r; 
    let returndistfix = parseFloat(returndist).toFixed(2);

        // calculate the result
    return(returndistfix + ' km Away');
    }
