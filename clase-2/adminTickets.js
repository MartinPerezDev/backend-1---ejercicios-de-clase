class TicketMaster{
  #precioBaseDeGanancia = 0.15; //15%
  #eventos = [];

  getEventos(){
    return this.#eventos;
  }

  agregarEvento(nombre, lugar, precio, capacidad = 50, fecha = new Date().toLocaleDateString() ){

    const id = this.#eventos.length + 1;

    this.#eventos.push({
      id,
      nombre,
      lugar,
      precio: precio * ( 1 + this.#precioBaseDeGanancia ) ,
      capacidad,
      fecha,
      participantes: []
    });

    return "Evento agregado correctamente";
  }

  agregarUsuario(idEvento, IdUsuario){}

}

const ticketek = new TicketMaster;

console.log( ticketek.getEventos() )
console.log( ticketek.agregarEvento("Baile Folklore", "Plaza de las carretas", 1000) )
console.log( ticketek.getEventos() )


