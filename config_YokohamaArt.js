var endpoint = "https://data.yafjp.org/sparql";
var query = (function () {/*
PREFIX rdf:<http://www.w3.org/1999/02/22-rdf-syntax-ns#>
PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>
PREFIX yav: <http://yafjp.org/terms/yav/1.0#>
PREFIX cal: <http://www.w3.org/2002/12/cal/icaltzd#>
SELECT DISTINCT ?title ?start ?end 
WHERE {
?s a yav:Event ;
rdfs:label ?title ;
cal:dtstart ?start ;
cal:dtend ?end .
FILTER (xsd:dateTime(?end) >= "2022-10-01T00:00:00+09:00"^^xsd:dateTime && xsd:dateTime(?end) <= "2022-12-31T00:00:00+09:00"^^xsd:dateTime )
FILTER (lang(?title) ="ja")
}
ORDER BY desc(?start)
*/}).toString().match(/\n([\s\S]*)\n/)[1];

var labelTitle = "title";
var labelStartDate = "start";
var labelEndDate = "end";
var allDayFlag = true;
//var defaultDate = '2013-10-01';
var now = moment().format("YYYY-MM-DDTHH:mm:ss+09:00");
var colors = ["limegreen", "gray", "purple", "darkblue", "green", "darkorange", "darkcyan", "brown", "lightseagreen"];
