
let arrObj = [];
function guardarObjeto(){
    
    let obj = {};
    obj.nombre = document.getElementById("name").value;
    obj.origen = document.getElementById("origen").value;
    obj.destino = document.getElementById("destino").value;
    obj.NPersonas = document.getElementById("npers").value;
    obj.fecha = document.getElementById("date").value;
    arrObj.push(obj);

    console.log(arrObj);
    

}

function mostrar(){

    for(let obj of arrObj){
        if(obj.destino.toUpperCase() == "MALLORCA" || obj.destino.toUpperCase() == "CANARIAS" || obj.destino.toUpperCase() == "GALICIA"){
            let foo = "";
            for(let property in obj){
                foo += "<li>" + property + ": "+ obj[property] + "</li> ";
            }
            document.getElementById("foo").innerHTML += foo + "<hr>";
        }
    }
}