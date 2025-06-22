$(document).ready(function () {
    // Validación para formulario de categorías
    $('#formCategorias').on('submit', function (e) {
        let nombre = $('#nombreCategoria').val().trim();
        let errores = [];

        if (nombre === "") {
            errores.push("Nombre de la categoría");
        }

        if (errores.length > 0) {
            e.preventDefault();
            alert("Campos vacíos o con solo espacios:\n" + errores.join(", ") + "\n\nEduardo Viguera Alerta");
        }
    });

    // Validación para formulario de productos
    $('#formProductos').on('submit', function (e) {
        let nombre = $('#nombreProducto').val().trim();
        let descripcion = $('#descripcionProducto').val().trim();
        let precio = $('#precio').val().trim();
        let categoria = $('#categoria').val().trim();
        let imagen = $('#imagen').val().trim(); // opcional
        let errores = [];

        if (nombre === "") errores.push("Nombre del producto");
        if (descripcion === "") errores.push("Descripción");
        if (categoria === "") errores.push("Categoría");
        if (imagen === "") errores.push("Imagen");
        if (precio === "" || isNaN(precio) || parseFloat(precio) <= 0) errores.push("Precio válido");

        if (errores.length > 0) {
            e.preventDefault();
            alert("Campos vacíos o inválidos:\n" + errores.join(", ") + "\n\nEduardo Viguera alerta");
        }
    });
});
