var endpoint = "https://query.wikidata.org/sparql";
var query = (function () {/*
SELECT * WHERE{
  ?uri wdt:P1705 ?title;
         wdt:P580 ?start;
         wdt:P582 ?end;
         schema:description ?description.
  FILTER(LANG(?description) = "en")
} 
ORDER BY desc(year(?start))
LIMIT 100 
*/}).toString().match(/\n([\s\S]*)\n/)[1];

var labelTitle = "title";
var labelStartDate = "start";
var labelEndDate = "end";
var allDayFlag = true;
//var defaultDate = '2013-10-01';
var now = moment().format("YYYY-MM-DDTHH:mm:ss+09:00");
var colors = ["limegreen", "gray", "purple", "darkblue", "green", "darkorange", "darkcyan", "brown", "lightseagreen"];
