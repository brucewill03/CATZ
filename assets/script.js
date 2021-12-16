var catzImage = document.querySelector("catz-image");
var breed = document.querySelector("breed");
var category = document.querySelector("category");

function fetchBreedImageFromApi(breedShow) {
    var apiURL = 'https://api.thecatapi.com/v1/images/search?breed_ids=' + breedShow;
    fetch(apiURL)
        .then(function (response) {
            response.json()
                .then(function (data) {
                    console.log(data);
                    console.log(data[0].url);
                    displayBreedImage(data);
                });
        });
};

function displayBreedImage(data) {

    var breedImageUrl = data[0].url;

    $("#breed-image").prepend("<img src='" + breedImageUrl + "' />");
}

$("#asho").click(function () {
    fetchBreedImageFromApi("asho");
});

$("#beng").click(function () {
    fetchBreedImageFromApi("beng");
});

$("#bslo").click(function () {
    fetchBreedImageFromApi("bslo");
});

$("#bure").click(function () {
    fetchBreedImageFromApi("bure");
});

function fetchCategoryFromApi(categoryShow) {
    var apiURL = 'https://api.thecatapi.com/v1/images/search?category_ids=' + categoryShow;

    fetch(apiURL)
        .then(function (response) {
            response.json()
                .then(function (data) {
                    console.log(data);
                    console.log(data[0].url);
                    displayCategoryImage(data);
                });
        });
};

function displayCategoryImage(data) {

    var breedCategoryUrl = data[0].url;

    $("#category-image").prepend("<img src='" + breedCategoryUrl + "' />");
};

$("#5").click(function () {
    fetchCategoryFromApi("5");
});

$("#15").click(function () {
    fetchCategoryFromApi("15");
});

$("#1").click(function () {
    fetchCategoryFromApi("1");
});

$("#14").click(function () {
    fetchCategoryFromApi("14");
});
