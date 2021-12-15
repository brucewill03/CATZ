var catzImage = document.querySelector("catz-image");
var breed = document.querySelector("breed");
var category = document.querySelector("category");
var breedImage = document.querySelector("breed-image");
var asho = document.querySelector("asho");
var beng = document.querySelector("beng");
var bslo = document.querySelector("bslo");
var bure = document.querySelector("bure");
var cypr = document.querySelector("cypr");
var mcoo = document.querySelector("mcoo");
var pers = document.querySelector("pers");
var ragd = document.querySelector("ragd");
var siam = document.querySelector("siam");
var sphy = document.querySelector("sphy");

var breedList = function (breedShow) {
    var apiURL = 'https://api.thecatapi.com/v1/images/search?breed_id=';

    fetch(apiURL)
        .then(function (response) {
            response.json()
                .then(function (data) {
                    breedDisplay(data);
                });
        });
};

var breedDisplay = function() {

}