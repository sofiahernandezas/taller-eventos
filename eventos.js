
document.addEventListener("DOMContentLoaded", function() { //DOMContentLoaded permite que el script no se cargue antes que el DOM
    var element = document.getElementById("div");
    

    function myFunction() {
        alert("Hola! Soy el div");
    }

    element.addEventListener("click", myFunction);
 
});