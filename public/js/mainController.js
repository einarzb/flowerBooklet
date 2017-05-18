app.controller('mainController', function($scope, factory, $state) {
$scope.flowers = factory.flowers;
$scope.nameSearch;

/*-------------------------------------------------------
                  get flowers data
--------------------------------------------------------*/
$scope.getImage = function(flower){
  return flower["image link"];
}

$scope.zoom = function(index) {
  var zoomedImage = index;
  console.log(zoomedImage);
  console.log(zoomedImage.style);
    if(zoomedImage.style.width == "400px"){
    zoomedImage.style.width = "300px";
    zoomedImage.style.height = "300px";
    }else{
    zoomedImage.style.width = "400px";
    zoomedImage.style.height = "400px";
    }
};

$scope.getSeason = function(flower){
  return flower["best season"];
}

/*-------------------------------------------------------
                  languages switch
--------------------------------------------------------*/

$scope.he = function() {
  console.log(flower);
  console.log(flower.heSeason);
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
