
# BACKGROUND

Foodies is a web app designed to help a hungry individual look for their favourite food spot. Whether it be restaurant or cafe... Foodies has it all. You can look up your favourite restaurants location on a map, how far it is from you, as well as its address. If you need to know how the ratings are of the restaurant.. well, dont worry! because we have that too (color-coded as well!). The Foodies web app should be your no.1 go-to app when you are hungry looking for food! 
Users can also see the restaurants address, location on a map, aand how far the restaurants are from the users location. U


# FUNCTIONALITY & MVP

In Foodies, users will be able to: 
* View restaurants near their location on a map.
* Search for restaurants with its name.
* Find several locations of their favourite restaurant with labelled distances from the users location.
* Find ratings of the searched restaurants

In addition, this project includes:
* Production ReadMe
* Instructions on how to use the app 

# SCREENSHOTS

## Information screen with social links
<img width="453" alt="Screen Shot 2021-12-10 at 1 02 35 AM" src="https://user-images.githubusercontent.com/87393981/145525325-6a344f87-1fd1-4a19-b940-e3936ff35a9b.png">

## Main page 
<img width="453" alt="Screen Shot 2021-12-10 at 1 03 02 AM" src="https://user-images.githubusercontent.com/87393981/145525519-438a7838-4d58-4de1-a88f-7d23de8e8a0f.png">

## Once 'Find Near Me' is clicked 
<img width="453" alt="Screen Shot 2021-12-10 at 1 02 45 AM" src="https://user-images.githubusercontent.com/87393981/145525443-2afd9e91-4bdc-4e46-a9b5-8cc14b782186.png">

## Once user location is found
<img width="453" alt="Screen Shot 2021-12-10 at 1 02 53 AM" src="https://user-images.githubusercontent.com/87393981/145525490-2cb2a17e-d80b-48ed-9832-17834f6ad4a8.png">

## After user searches for restaurant
<img width="453" alt="Screen Shot 2021-12-10 at 1 03 20 AM" src="https://user-images.githubusercontent.com/87393981/145525561-f5d79ae0-9404-4ec2-976e-0324c91a909d.png">

**WIREFRAMES**

<img width="1012" alt="Screen Shot 2021-10-08 at 12 25 50 PM" src="https://user-images.githubusercontent.com/87393981/137029818-7c1ca68b-7b9e-4d60-ba68-44010632a859.png">


# TECHNOLOGIES, LIBRARIES, APIs

This project is implemented with the following technologies:
  - The Yelp API to fetch restaurant name, ratings, address, & distance 
  - Webpack and Babel to bundle and transpile the source JavaScript code
  - The MapBox API to render a mini-map that will display nearby restaurants with the same provided name 
  - The GeoLocation API to fetch the users current location => in order to fetch the nearest restaurant locations as well as the relative distances of other restaurants


# IMPLEMENTATION TIMELINE

      Friday Afternoon & Weekend: Create repo, learn how to use and fetch from the Yelp API, MapBox API as well as the Geolocation API. 

      Monday: On this day, I should be working on implementing logic to fetch from the APIs.

      Tuesday: I will make sure the map is rendered correctly, and layout is interactive.

      Wednesday: Focus on styling, as well as implementing color schemes and nav links. 

      Thursday Morning: Deploy to GitHub pages. If time, rewrite this proposal as a production README.

# CODE-SNIPPET

This is how distance from user location was calculated! Arguments containing latitude/longitude points from the users location & restaurant location, respectively.

```JavaScript
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
```

# BONUS FEATURES 

Some anticipated updates are:

     -Fetching directions in the mini-map

     -Displaying all possible restaurants instead of searched ones 

     -Displaying bars, nail salons, other services as well 
 
     -Having own reviews on site or access to google/yelp reviews of franchise 

