# Real Time Bus Tracker

This project was part of the MIT xPro Full Stack Development with MERN Course. It is a real-time bus tracker using data from the Massachussets Bay Transportation Authority (MBTA). This project displays a map that updates the location of position of the bus every 15 seconds on route between MIT and Harvard. It focuses on using Mapbox API to display map and markers and async functions to fetch data from MBTA API. [Mapbox GL JS](https://docs.mapbox.com/mapbox-gl-js/api/) is an interactive JavaScript library that uses WebGL to render interactive maps from vector tiles and Mapbox styles.

## How to Run

* [Clone this GitHub repo.](https://docs.github.com/en/github/creating-cloning-and-archiving-repositories/cloning-a-repository-from-github/cloning-a-repository)
* Sign up for a Mapbox api key and replace it in the mapAnimation.js for the  line: mapboxgl.accessToken
* Open up the index.html file in a browser and move cursor around the page. You should see the eyes following your mouse cursor.


## Roadmap

* Add custom marker for bus and show multiple buses returned for route
* Add pop-up to show bus id
* Add unit tests

## License Information

MIT License

Copyright (c) 2021 Catherine Chanse

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
