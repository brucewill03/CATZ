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

function fetchBreedImageFromApi (breedShow) {
    var apiURL = 'https://api.thecatapi.com/v1/images/search?breed_id='+breedShow;

    fetch(apiURL)
        .then(function (response) {
            response.json()
                .then(function (data) {
                   console.log (data);
                   console.log (data[0].url);
                    displayBreedImage(data);
                });
        });
};

function displayBreedImage(data){
    
    var breedImageUrl=data[0].url;
    
$("#breed-image").prepend("<img src='" + breedImageUrl + "' />");
}
$("#asho").click(function(){
    fetchBreedImageFromApi ("asho");
    });


   function fetchCategoryFromApi (categoryShow) 
   {
        var apiURL = 'https://api.thecatapi.com/v1/images/search?category_id='+categoryShow;
    
        fetch(apiURL)
            .then(function (response) {
                response.json()
                    .then(function (data) {
                       console.log (data);
                       console.log (data[0].url);
                        displayCategoryImage(data);
                    });
            });
    };
    
    function displayCategoryImage(data){
        
        var breedCategoryUrl=data[0].url;
        
    $("#category-image").prepend("<img src='" + breedCategoryUrl + "' />");
    }
    $("#5").click(function(){
        fetchBreedCategoryFromApi ("5");
        });
        
        $("#asho").click(function() {
            alert($(this).attr('id'));
            // id of clicked li by directly accessing DOMElement property
            
            });
            $('#breedList').on('click', 'li', function () {
            alert($(this).attr('id'));
                // snip...
        });

    fetchBreedImageFromApi("asho")