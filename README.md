# JavaScript-CodeScreen-Weather-Buddy-Test

## Project Description: 
The [Open Weather API](https://openweathermap.org/current) is an API that allows you to access current weather data for over 200,000 cities across the globe. This project will implements a small service to query weather information from cities around the world. The existing codebase is an Express (https://expressjs.com/) application server that provides the following two HTTP endpoints:
**1.** `GET /weather/:city`:
Gets the cached data for the specified city_name, otherwise fetches the data from the `Open Weather API`, caches the data and returns the results.
 
The output has to be in `JSON` format with the following three fields: cityName, temperature, and weatherDescription. The temperature should be the minimum temperature at the moment. The temperature should also be the Celsius value, rounded to the nearest integer. An example of an output is:
    {
        cityName: "London",
        temperature: 18,
        weatherDescription: "Scattered Clouds" 
    }
The data for any city should only live in the cache for a maximum time of 5 minutes. If the data is not available from the Open Weather API for the given city, throw a `404` Not Found error.
**2.** `GET /weather?max=<max_number>`:

Gets the data for all cities currently in the cache.
If the max query parameter is specified, return the latest entries, otherwise, return all entries.
For example, if there are 4 entries in the cache, and max is 2, then return the data for 2 latest entries. If max is not specified, then return the data for all entries.
If max is < 1, throw a `400` Bad Request error.
 If max is greater than the number of entries currently in the cache, return all entries.
The output has to be in JSON format, as a list containing objects, e.g.
    [  
        {
            cityName: "London",
            temperature: 18,
            weatherDescription: "Scattered Clouds" 
        },
        {
            cityName: "New York",
            temperature: 22,
            weatherDescription: "Clear Sky"
        }
    ]


## Your Task:

2.1. You will implement the logic for the two endpoints in the [server/routes/weather.js](server/routes/weather.js) file.
2.2. You also need to implement the `getWeather()` method inside the [OpenWeatherAPIService](open-weather-api/open-weather-api-service.js) class.
    All the unit tests in the [tests/weather-buddy-api.spec.js](tests/weather-buddy-api.spec.js) file should pass if your solution has been implemented correctly. 
2.3. Create your own test file (tests/mygroupnumber_unittest.js) to validate all other requirements that are not mentioned in [tests/weather-buddy-api.spec.js]. All the unit tests you created in [tests/mygroupnumber_unittest.js] should pass!
2.4. Calculate and explain for the statement coverage and branch coverage you have achieved with the two testing files.

## Requirements

The [tests/weather-buddy-api.spec.js](tests/weather-buddy-api.spec.js) file should not be modified. 
For [tests/mygroupnumber_unittest.js], you can use the [Jest](https://jestjs.io/) framework.
You are free to use whichever libraries you want (Node.js or third-party) when implementing your solution.
The [package.json](package.json) file should **only** be modified in order to add any third-party dependencies required for your solution.
The existing dependencies and versions should not be changed.
Your solution must use/be compatible with `Node.js` version `15.5.1`.
Your solution has to be compressed as a Zip file and uploaded in Assignment 2 portal, using the following name patterns: Ex2_GroupName_LastChangedDate.zip. For example: Ex2_Group08_20Jan.zip

##Running and validating instruction
Open https://openweathermap.org/api and create our own account. The API key is all you need to call any of our weather APIs (https://openweathermap.org/appid). Once you sign up using your email, the API key (APPID) will be sent to you in a confirmation email. 
Run `npm install` to install all dependencies, then run `npm run watch:dev` to build and launch the server locally. The endpoints will be available locally at http://localhost:3001/weather. The server will automatically reload if you change any of the source files.
Run `npm run test` to run the unit tests. These should all pass if your solution has been implemented correctly.
