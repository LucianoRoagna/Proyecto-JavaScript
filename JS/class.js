class Producto {
    constructor(dato) {
        this.id = parseInt(dato.id);
        this.tipo = dato.tipo;
        this.precio = parseFloat(dato.precio);
        this.stock=(dato.stock);
        this.cantidad = 1;
     //  this.img = dato.img

    }
     
    addCantidad() {
      this.cantidad++;
  }

  resCantidad() {
      this.cantidad--;
  }

  getTotal() {
      return (this.cantidad * this.precio);
  }
} 
  
     


