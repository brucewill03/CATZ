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

let dropdown = $("#breed-dropdown");

dropdown.empty();

dropdown.prop('selectedIndex', 0);

var url = 'https://api.thecatapi.com/v1/breeds';

$.getJSON(url, function(data) {
    $.each(data, function(key, entry) {
        dropdown.append($('<option></option>').attr('value', entry.id).text(entry.name));
    })
});

function displayBreedImage(data) {

    var breedImageUrl = data[0].url;

    $("#breed-image").prepend("<img src='" + breedImageUrl + "' />");
}

$("id").click(function() {
    fetchBreedImageFromApi("id")
})


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

let dropdown1 = $("#category-dropdown");

dropdown1.empty();

dropdown1.prop('selectedIndex', 0);

var url = 'https://api.thecatapi.com/v1/categories';

$.getJSON(url, function(data) {
    $.each(data, function(key, entry) {
        dropdown1.append($('<option></option>').attr('value', entry.id).text(entry.name));
    })
});

function displayCategoryImage(data) {

    var breedCategoryUrl = data[0].url;

    $("#category-image").prepend("<img src='" + breedCategoryUrl + "' />");
};
