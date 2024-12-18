class Persona{
  constructor(nombre, edad){
    this.nombre = nombre;
    this.edad = edad;
    this.humor = 80
  }

  saludar(){
    const mensaje = `👦 Hola, me llamo ${this.nombre} y tengo ${this.edad} años`;
    return mensaje
  }

  cumple(){
    this.edad++;
    const mensaje = `
    [🎈 Cumpleaños] - Hoy es un gran dia, ${this.nombre} ya tiene ${this.edad} años
    `;
    return mensaje
  }

}

const persona1 = new Persona( "Matias", 20 );
console.log( persona1.saludar() )
console.log( persona1.cumple() )