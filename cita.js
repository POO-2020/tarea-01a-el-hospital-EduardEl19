import Fecha from "./fecha.js"
import Paciente from "./paciente.js"
import Tiempo from "./tiempo.js"
import Doctor from "./doctor.js"
export default class Cita {
    /**
     * 
     * @param {date} fecha 
     * @param {Number} hora 
     * @param {String} doctor
     * @param {String} paciente 
     */

    constructor(fecha, hora, doctor, paciente) {
        this.fecha = Fecha
        this.hora = Tiempo
        this.doctor = Doctor
        this.paciente = Paciente
    }

getPerfil() {
   return `Fecha de la cita: ${this.fecha}, a las ${this.hora}, Dr. ${this.doctor}, el paciente citado es ${this.paciente}.`
    }
}