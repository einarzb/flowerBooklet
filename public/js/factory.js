app.factory('factory', function($http){

//initialize
var flowers = [];

//flowers json
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
      "image link": "https://upload.wikimedia.org/wikipedia/commons/b/b0/Hypericum_calycinum_Tasmania.jpg"
    },
    {
      "name": "orchid Phalaenopsis",
      "best season": "winter to spring",
      "image link": "http://agroflora.ru/wp-content/uploads/2015/08/cvetok-orhidei.jpg"
    }
  ]
}

// var image = json.data[0]["image link"];
// var season = json.data[0]["best season"];

//languages json
var translation =
{
  "success": true,
  "data": {
    "en": {
      "hello": "hello",
      "welcome": "welcome",
      "flower guide": "flower guide",
			"blossom season": "blossom season",
			"summer": "summer",
			"winter": "winter",
			"fall": "fall",
			"spring": "spring",
			"rose": "rose",
			"Calla lily": "Calla lily",
			"sunset safari": "sunset safari",
			"hypericum": "hypericum",
			"orchid Phalaenopsis": "orchid Phalaenopsis"
    },

    "he": {
      "hello": "שלום",
      "welcome": "ברוכים הבאים",
      "flower guide": "מדריך פרחים",
			"blossom season": "עונת הפריחה",
			"summer": "קיץ",
			"winter": "חורף",
			"fall": "סתיו",
			"spring": "אביב",
			"rose": "ורד",
			"Calla lily": "לילך",
			"sunset safari": "לויקודנדרון",
			"hypericum": "פרע",
			"orchid Phalaenopsis": "סחלב"
		}
		}
  }

//languages
var heSeason = translation.data.heSeason;
var heFlower = translation.data.heFlower;
console.log(heFlower);
var en = translation.data.en;
// console.log(he);
// console.log(en);

	return {
		flowers:json['data']
	}
				
});
