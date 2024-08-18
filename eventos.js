
document.addEventListener("DOMContentLoaded", function() { //DOMContentLoaded permite que el script no se cargue antes que el DOM
    var element = document.getElementById("div");
    var button = element.querySelector("button"); // Selecciona el botón dentro del div


    function myFunction(event) {
        alert("Hola! Soy el div");
    
    }

    function buttonClick(event) {
        event.stopPropagation(); // Evita que el clic en el botón se propague al div
        alert('Hola!');
        
    }

    element.addEventListener("click", myFunction);
    button.addEventListener("click", buttonClick);
});