

jQuery(() => {

    var total = 0;
    $(".annadir").on("click", function () {
        var precio = parseFloat($(this).closest(".card").find(".precio").text());
        var prenda = $(this).closest(".card").find(".card-title").text();
        $(".mbody").append("<p> PRENDA:  " + prenda + " " + precio +"€"+ "</p>");
        total += precio;
        
        $(".toast-body").empty();
        $(".toast-body").append("<p> Prenda añadida al carrito: " + prenda + " " + precio +"€ </p>");
        $(".toast").css("display", "block");
        $(".toast").toast("show");
        
    })

    $(".btn-close").on("click", function (){
        $(".toast").css("display", "none");
    })

    

  
    $("#carro").click(function() {
          $(".modal").css("display", "block");
          $(".faded").css("background-color"," rgba(0,0,0,0.7)");
          $(".compra").empty();
          $(".compra").append( "TOTAL COMPRA: "+total + "€");
    });

    $(".close").click(function() {
        $(".modal").css("display", "none");


    });
  
})
