//SE PIDEN LOS DATOS POR GET.JSON
$().ready(()=>{
    $.getJSON("data/datos.json",(data, respuesta)=>{
    
    DATOS=data;
    
  
function HTMLjq(productos) {
    $('#Productos').append(card(productos))
}

function generarProductos(listado) {
    $("#Productos").empty();
    for (const producto of listado) {
        HTMLjq(producto);
    }
    $(".btn-producto").click(agregarProducto);
}

function agregarProducto(e) {
    let producto = SELECCIONADOS.find(producto => producto.id == e.target.id);
    if (producto != undefined) {
        producto.addCantidad();
    } else {
        let seleccionado = DATOS.find(producto => producto.id == e.target.id);
        SELECCIONADOS.push(new Producto(seleccionado));
    }

    console.log(SELECCIONADOS)

    


   generarCarrito();
}






//FILTRO DE BUSQUEDA POR PRECIO
$(document).ready(function(){
    $("#dropdownMenuButton").click(function(e){
        $("#carrito").toggle();
    });

    $("#queryLista").click(function(e){
        let min = $("#minQuery").val();
        let max = $("#maxQuery").val();
        const filtrados = DATOS.filter(producto => (producto.precio > min) && (producto.precio < max));
console.log(filtrados);
generarProductos(filtrados)

 
;
})
})
   





generarProductos(DATOS);




//SE GENERA EL CARRITO
function generarCarrito() {
    $("#carrito").empty();
    for (const producto of SELECCIONADOS) {
        $("#carrito").append(`<div  class="col-md-12">
        <h5>${producto.tipo}- Cantidad ${producto.cantidad} Total: $${producto.getTotal()}
        <button id="${producto.id}" class="btnDelete">X</button></h5>
      </div>`);
    }





//BOTON CONFIRMAR
$("#carrito").append('<button id="btnCompra">CONFIRMAR</button>');

$(".btnDelete").click(function (e) {
    eliminarDelete(e.target.id);
    generarCarrito();
});
//CONFIRMAR COMPRA
$("#btnCompra").click(function (e) {
    $.post("https://jsonplaceholder.typicode.com/posts", JSON.stringify(SELECCIONADOS), function (data, status) {

        $("#notificacion").html(alert("¡GRACIAS POR SU COMPRA!") );

        $("#carrito").empty();
        SELECCIONADOS = [];
    });
});

}




//ELIMINAR

function eliminarfilter(id) {
    SELECCIONADOS = SELECCIONADOS.filter(producto => producto.id != id)
}

function eliminarDelete(id) {
    const objeto = SELECCIONADOS.find(x => x.id == id);

    if (objeto.cantidad == 1) {
        const idObjeto = SELECCIONADOS.indexOf(objeto);
        console.log(objeto);
        console.log(idObjeto);

        SELECCIONADOS.splice(idObjeto, 1);
    } else {
        objeto.resCantidad();
    }
}





 










}
)}
)

let SELECCIONADOS = [];

