const settings = {
    "async": true,
    "crossDomain": true,
    "url": "https://type.fit/api/quotes",
    "method": "GET"
}

$.ajax(settings).done(function (response) {
    const data = JSON.parse(response);
    console.log(data);
    displayQuotes(data);
});

function displayQuotes(data) {

    let quotesText = data[Math.floor(Math.random() * data.length)];
    console.log(quotesText);

    var quotesTextUrl = quotesText.text;

    $("#quotes").html(quotesTextUrl);
};

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

    $("#image").html("<img src='" + breedImageUrl + "' />");
};

let dropdown = $("#breed-dropdown");
dropdown.empty();
dropdown.prop('selectedIndex', 0);
var url = 'https://api.thecatapi.com/v1/breeds';

$.getJSON(url, function (data) {
    $.each(data, function (key, entry) {
        dropdown.append($('<option></option>').attr('value', entry.id).text(entry.name));
    })

});

dropdown.change(function () {
    fetchBreedImageFromApi($(this).val());
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

    var categoryImageUrl = data[0].url;

    $("#image").html("<img src='" + categoryImageUrl + "' />");
};

let dropdown1 = $("#category-dropdown");
dropdown1.empty();
dropdown1.prop('selectedIndex', 0);
var url = 'https://api.thecatapi.com/v1/categories';


$.getJSON(url, function (data) {
    $.each(data, function (key, entry) {
        dropdown1.append($('<option></option>').attr('value', entry.id).text(entry.name));
    })
});

dropdown1.change(function () {
    fetchCategoryFromApi($(this).val());
});