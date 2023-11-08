
var Professional = /** @class */ (function () {
    function Professional(name, age, weight, height, isRetired, nationality, oscarsNumber, profession) {
        this.name = name;
        this.age = age;
        this.weight = weight;
        this.height = height;
        this.isRetired = isRetired;
        this.nationality = nationality;
        this.oscarsNumber = oscarsNumber;
        this.profession = profession;
    }
    Professional.prototype.toString = function () {
        console.log(this);
    };
    return Professional;
}());


var Movie = /** @class */ (function () {
    function Movie(title, releaseYear, nacionality, genre) {
        this.title = title;
        this.releaseYear = releaseYear;
        this.nacionality = nacionality;
        this.genre = genre;
    }
    Movie.prototype.toString = function () {
        console.log(this);
    };
    return Movie;
}());




var movie1 = new Movie("Vengadores: Era de Ultron", 2015, "America", "Acción/Aventura");
movie1.actors = ["Robert Downey Jr.","Chris Evans"];
movie1.writer = "Stan Lee";
movie1.director = "Joss Whedon";
movie1.photo = "./imagenes/vengadores-era-de-ultron-poster-1551691493.jpg";

var movie2 = new Movie("Capitana Marvel", 2019, "America", "Acción/Aventura");
movie2.actors = ["Brie Larson","Samuel L. Jackson"];
movie2.writer = "Stan Lee";
movie2.director = "Anna Boden";
movie2.photo = "./imagenes/capitana-marvel-poster-1551691489.jpg";

var movie3 = new Movie("Guardianes de la Galaxia", 2014, "America", "Ciencia Ficción");
movie3.actors = ["Chris Pratt","Zoe Saldaña"];
movie3.writer = "Stan Lee";
movie3.director = "James Gunn";
movie3.photo = "./imagenes/guardianes-de-la-galaxia-1525787553.jpg";

var movie4 = new Movie("Vengadores: Endgame", 2019, "America", "Acción");
movie4.actors = ["Chris Hemsworth","Mark Ruffalo"];
movie4.writer = "Stan Lee";
movie4.director = "Joe Russo";
movie4.photo = "./imagenes/0896830.jpg";


var actor1 = new Professional("Robert Downey Jr.", 50, 83, 1.80, false, "Americano", 3, "Actor");
actor1.photo = "./imagenes/robert-downey-jr-star-wars.webp";

var actor2 = new Professional("Brie Larson", 42, 54, 1.65, false, "Americana", 0, "Actriz");
actor2.photo = "./imagenes/14567360419440.jpg";

var actor3 = new Professional("Chris Hemsworth", 52, 86, 1.90, false, "Australiano", 0, "Actor");
actor3.photo = "./imagenes/image-w856.webp";

var actor4 = new Professional("Pedro Pascal", 48, 81, 1.80, true, "Chileno", 2, "Actor");
actor4.photo = "./imagenes/nms0d0ExYtiOke82oqr3vOb3smF.jpg";

let actores = [actor1,actor2,actor3,actor4];




var storedMovies = JSON.parse(sessionStorage.getItem('movies')) || [movie1, movie2, movie3, movie4];

jQuery(() => {

    $(document).ready(function(){
        const tarjetasContainer = $(".divBody");
        

        storedMovies.forEach((tarjeta) => {
            const card = $("<div class='card mb-3 ' style='width: 250px; max-height: fit-content; background-color: white; border-radius: 5px;'>");
            const img = $("<img class='card-img-top m-4' >").attr("src", tarjeta.photo);
            card.append(img);
    
            const cardBody = $("<div class='card-body p-4' style='display:flex; flex-direction:column; align-items: center;'>");        
            cardBody.append($("<h5 class='card-title mb-3'>").text(tarjeta.title));
            cardBody.append($("<hr width='200px'>" ));
            
            if(tarjeta.actors != undefined){
                cardBody.append($("<h6 class='card-text text-white mb-2'>").text("Actores:"));
                tarjeta.actors.forEach((actor) => {
                    cardBody.append($("<p class='card-text' >").text(actor));
                });
            }

            card.append(cardBody);
            tarjetasContainer.append(card);
        });
    })

    $(document).ready(function(){
        const tarjetasContainer = $(".divBody_pelis");
        var storedMovies = JSON.parse(sessionStorage.getItem('movies')) || [movie1, movie2, movie3, movie4];

        storedMovies.forEach((tarjeta) => {
            const card = $("<div class='card mb-3 ' style='width: 250px; max-width:250px; max-height: fit-content; background-color: white; border-radius: 5px;'>");
            const img = $("<img class='card-img-top m-4' >").attr("src", tarjeta.photo);
            card.append(img);
    
            const cardBody = $("<div class='card-body p-4' style='display:flex; flex-direction:column;'>");        
            cardBody.append($("<h5 class='card-title mb-3'>").text(tarjeta.title));
            cardBody.append($("<hr width='200px'>" ));
            if(tarjeta.actors != undefined){
                cardBody.append($("<h7 class='card-text text-white mb-2'>").text("Actores: " + tarjeta.actors.join(" & ")));
            }
            
            cardBody.append($("<h7 class='card-text text-white mb-2'>").text("Escritor: " + tarjeta.writer));
            cardBody.append($("<h7 class='card-text text-white mb-2'>").text("Director: " + tarjeta.director));
            cardBody.append($("<h7 class='card-text text-white mb-2'>").text("Año de estreno: " + tarjeta.releaseYear));
            cardBody.append($("<h7 class='card-text text-white mb-2'>").text("Género: " + tarjeta.genre));
            cardBody.append($("<h7 class='card-text text-white mb-2'>").text("Nacionalidad: " + tarjeta.nacionality));

            card.append(cardBody);
            tarjetasContainer.append(card);
        });
    })

    $(".annadir").on("click", function(){
        var movie = new Movie();
        movie.title = $("#titulo").val();
        movie.releaseYear = $("#anno").val();
        movie.nacionality = $("#nacion").val();
        movie.genre = $("#genero").val();
        movie.writer = $("#escritor").val();
        movie.director = $("#director").val();
        movie.photo = $("#imagen").val();
        storedMovies.push(movie);

        const tarjetasContainer = $(".divBody_pelis");

        const card = $("<div class='card mb-3 ' style='width: 250px; max-width:250px; max-height: fit-content; background-color: white; border-radius: 5px;'>");
        const img = $("<img class='card-img-top m-4' >").attr("src", movie.photo);
        card.append(img);

        const cardBody = $("<div class='card-body p-4' style='display:flex; flex-direction:column;'>");        
        cardBody.append($("<h5 class='card-title mb-3'>").text(movie.title));
        cardBody.append($("<hr width='200px'>" ));
        
        cardBody.append($("<h7 class='card-text text-white mb-2'>").text("Escritor: " + movie.writer));
        cardBody.append($("<h7 class='card-text text-white mb-2'>").text("Director: " + movie.director));
        cardBody.append($("<h7 class='card-text text-white mb-2'>").text("Año de estreno: " + movie.releaseYear));
        cardBody.append($("<h7 class='card-text text-white mb-2'>").text("Género: " + movie.genre));
        cardBody.append($("<h7 class='card-text text-white mb-2'>").text("Nacionalidad: " + movie.nacionality));
        card.append(cardBody);
        tarjetasContainer.append(card);

        sessionStorage.setItem('movies', JSON.stringify(storedMovies));

    })


    $(document).ready(function(){
        const tarjetasContainer = $(".divBody_actores");

        actores.forEach((tarjeta) => {
            const card = $("<div class='card mb-3 ' style='width: 250px; max-width:250px; max-height: fit-content; background-color: white; border-radius: 5px;'>");
            const img = $("<img class='card-img-top m-4' >").attr("src", tarjeta.photo);
            card.append(img);
    
            const cardBody = $("<div class='card-body p-4' style='display:flex; flex-direction:column;'>");        
            cardBody.append($("<h5 class='card-title mb-3'>").text(tarjeta.name));
            cardBody.append($("<hr width='200px'>" ));
            
            cardBody.append($("<h7 class='card-text text-white mb-2'>").text("Edad: " + tarjeta.age));
            cardBody.append($("<h7 class='card-text text-white mb-2'>").text("Peso: " + tarjeta.weight));
            cardBody.append($("<h7 class='card-text text-white mb-2'>").text("Altura: " + tarjeta.director));
            cardBody.append($("<h7 class='card-text text-white mb-2'>").text("Está retirado?: " + (tarjeta.isRetired ? "Si" : "No")));
            cardBody.append($("<h7 class='card-text text-white mb-2'>").text("Nacionalidad: " + tarjeta.nationality));
            cardBody.append($("<h7 class='card-text text-white mb-2'>").text("Nº de Oscars: " + tarjeta.oscarsNumber));
            cardBody.append($("<h7 class='card-text text-white mb-2'>").text("Profesión: " + tarjeta.profession));


            card.append(cardBody);
            tarjetasContainer.append(card);
        });
    })
})

