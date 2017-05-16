app.factory('factory', function($http){


	/*var flowers = [{
      name: "rose",
      season: "fall",
      image:"http://www.almanac.com/sites/default/files/styles/primary_image_in_article/public/images/photo_9705.jpg?itok=44DBZcZV"
	},
	{
	  name: "Calla lily",
      season: "summer",
      image: "https://www.gardenia.net/rendition.slider_detail/uploads/plant/1429882990-890258a76fbc11f3a/41305.jpg"
	}];*/

	var json =
	{
  "success": true,
  "data": [
    {
      "name": "rose",
      "best season": "fall",
      "image link": "http://www.almanac.com/sites/default/files/styles/primary_image_in_article/public/images/photo_9705.jpg?itok=44DBZcZV"
    },
    {
      "name": "Calla lily",
      "best season": "summer",
      "image link": "https://www.gardenia.net/rendition.slider_detail/uploads/plant/1429882990-890258a76fbc11f3a/41305.jpg"
    },
    {
      "name": "sunset safari",
      "best season": "winter",
      "image link": "http://sierraflowerfinder.blob.core.windows.net/medias/FlowerPictures/792/safari%20sunset1.jpg"
    },
    {
      "name": "hypericum",
      "best season": "winter",
      "image link": "http://chrysalflowerfood.com/blog/wp-content/uploads/2014/04/Hot-Pink-Bouquet-Filled-with-Callas-Gomphrena-Hot-Pink-Princess-Roses-and-Bright-Green-Hypericum-Berries-The-French-Bouquet-James-Walton-Photo.jpg"
    },
    {
      "name": "orchid Phalaenopsis",
      "best season": "winter to spring",
      "image link": "http://agroflora.ru/wp-content/uploads/2015/08/cvetok-orhidei.jpg"
    }
  ]
}

var language =
{
  "success": true,
  "data": {
    "en": {
      "hello": "hello",
      "welcome": "welcome",
      "flower guide": "flower guide"
    },
    "he": {
      "hello": "שלום",
      "welcome": "ברוכים הבאים",
      "flower guide": "מדריך פרחים",
      "summer": "קיץ",
      "winter": "חורף",
      "fall": "סתיו",
      "spring": "אביב",
      "blossom season": "blossom season",
      "rose": "ורדז",
      "Calla lily": "לילך",
      "sunset safari": "לויקודנדרון",
      "hypericum": "פרע",
      "orchid Phalaenopsis": "סחלב"
    }
  }
}

	var flowers = [];
	var image = json.data[1]["image link"];
	// console.log(image);

	var he = language.data.he;
	var en = language.data.en;
	console.log(he);
	console.log(en);

	/*var season = json['data'].['best season'];
	console.log(season)
*/

	/*var jsonToArr = function(json){
		var keys = Object.keys(json.data);
		console.log(keys);
		keys.forEach(function(key){
			flowers.push(json[key])
		});
		return flowers;
	}*/

/*	jsonToArr(json);
*/	/*var rose = {};

	var getFlowers = function () {
		rose = JSON.parse('{name:"rose", best season:"fall", "image link": "http://www.almanac.com/sites/default/files/styles/primary_image_in_article/public/images/photo_9705.jpg?itok=44DBZcZV"}')
		console.log(rose.name)
		flowers.push(rose);
		console.log(flowers);
	}

	getFlowers();*/

	return {
		flowers:json['data'],
		image:image,
		he:he,
		en:en
/*		season:json['data'].['best season']
*/		/*jsonToArr:jsonToArr
		rose:rose,
		getFlowers:getFlowers*/
	}


});
