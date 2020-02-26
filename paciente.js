import Nombre from "./nombre.js"
import Fecha from "./fecha.js"
export default class Paciente {
    /**
     * 
     * @param {string} nombre 
     * @param {date} fecha 
     * @param {number} telefono 
     */
    constructor(nombre, fecha, telefono){
        this.paciente = nombre
        this.fechanacimiento = fecha
        this.numerocel = telefono
    }

    getPerfil(){
        return `Soy ${this.paciente}, nací en ${this.fechanacimiento} y mi numero de telefono es ${this.numerocel}`
    }
}