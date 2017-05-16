app.controller('mainController', function($scope, factory, $state) {
$scope.flowers = factory.flowers;
$scope.nameSearch;

/*-------------------------------------------------------
                  get flowers data
--------------------------------------------------------*/
$scope.getImage = function(flower){
  return flower["image link"];
}

$scope.getSeason = function(flower){
  return flower["best season"];
}

/*-------------------------------------------------------
                  languages switch
--------------------------------------------------------*/

$scope.he = function(he) {
  alert("yoyoyoy");
}

$scope.en = function(en) {
  alert("mememe");
}


// $scope.filterName = function(nameSearch){
// console.log(nameSearch)
// }
//
// $scope.filterSeason = function(seasonSearch) {
// console.log(seasonSearch);
// }


});
