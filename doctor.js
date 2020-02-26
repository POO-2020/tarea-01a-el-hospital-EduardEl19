export default class Doctor {
    /**
     * 
     * @param {string} nombre 
     * @param {string} especialidad 
     * @param {number} cedula 
     * @param {number} telefono 
     */
    constructor(nombre, especialidad, cedula, telefono){
        this.nombre = nombre
        this.especialidad = especialidad
        this.cedula = cedula
        this.numero = telefono
    }

    getPerfil(){
        return `Soy el doctor ${this.nombre}, soy ${this.especialidad}, mi cedula es ${this.cedula} y mi numero de telefono es ${this.numero}`
    }
}