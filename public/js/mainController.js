app.controller('mainController', function($scope, factory, $state) {
$scope.flowers = factory.flowers;
$scope.nameSearch;


$scope.link = function(flower){
/*
console.log(flower)
console.log(flower["image link"]);
*/
return flower["image link"];

}

$scope.he = function(he) {
  alert("yoyoyoy");
}

$scope.en = function(en) {
  alert("mememe");
}


$scope.filterName = function(nameSearch){
console.log(nameSearch)
}

$scope.filterSeason = function(seasonSearch) {
console.log(seasonSearch);
}


});
