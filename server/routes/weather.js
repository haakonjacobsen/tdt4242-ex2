import express from 'express'
var router = express.Router();

/* 
 * Gets the cached data for the specified city_name, otherwise fetches the data from the Open Weather API, 
 * caches the data, and returns the results.
 * 
 * The response must be a JSON object with the following three fields:
 * 
 *   cityName
 *   temperature
 *   weatherDescription
 * 
 * e.g.
 * 
 * {
 *   cityName: "London",
 *   temperature: 18,
 *   weatherDescription: "Scattered Clouds" 
 * }
 * 
 * Note that the temperature should be the minimum temperature at the moment. The temperature should also be the 
 * Celsius value, rounded to the nearest integer.
 * 
 * The data for any city should only live in the cache for a maximum time of 5 minutes.
 * 
 * If the data is not available from the Open Weather API for the given city, throw a `404` Not Found error.
 *
 */
router.get('/:city', function(req, res) {
  //TODO Implement
});

/* 
 * Gets the data for all cities currently in the cache.
 * 
 * If the max query parameter is specified, return the latest entries, otherwise, return all entries.
 * For example, if there are 4 entries in the cache, and max is 2, then return the data for the 2 latest entries. If
 * max is not specified, then return the data for all entries (the 4 entries in this example).
 * 
 * If max is < 1, throw a 400 Bad Request error.
 * 
 * If max is greater than the number of entries currently in the cache, return all entries.
 * 
 * The response must be a JSON list containing objects, e.g.
 * 
 * [  
 *   {
 *     cityName: "London",
 *     temperature: 18,
 *     weatherDescription: "Scattered Clouds" 
 *   },
 *   {
 *     cityName: "New York",
 *     temperature: 22,
 *     weatherDescription: "Clear Sky"
 *   }
 * ]
 * 
 */
router.get('/', function(req, res) {
  //TODO Implement
});


export default router;
