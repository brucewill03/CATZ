const settings = {
    "async": true,
    "crossDomain": true,
    "url": "https://type.fit/api/quotes",
    "method": "GET"
}

// image object to store in localStorage.
var previousImage = "";
   

var setPreviousImage = function() {
    /* add tasks to localStorage */
    localStorage.setItem("previousImage", previousImage);
    console.log (previousImage);
}


var getPreviousImage = function() {
    /* load the tasks from localStorage and create tasks in the right row */

    var loadedPreviousImage = localStorage.getItem("previousImage");
    if (loadedPreviousImage) {
        $("#image").html("<img src='" + loadedPreviousImage + "' />");
        console.log(loadedPreviousImage);
        }
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

    $("#image").html("<img id='physicalImage' src='" + breedImageUrl + "' />");
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
    previousImage=$("#physicalImage").attr ("src"); 
    setPreviousImage();
    fetchBreedImageFromApi($(this).val());
});

$("#previousImage").click (function() {
    getPreviousImage();

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

    $("#image").html("<img id='physicalImage' src='" + categoryImageUrl + "' />");
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
    previousImage=$("#physicalImage").attr ("src"); 
    setPreviousImage();
    fetchCategoryFromApi($(this).val());
})