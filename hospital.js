export default class Hospital {
    /**
     * 
     * @param {string} nombre 
     * @param {string} direccion
     * @param {string} doctores
     * @param {string} citas
     */
    constructor(nombre, direccion){
        this.nombre = nombre
        this.direccion = direccion
        this.listarDoctores = []
        this.listarCitas = []
    }

    getRegistrarDoctor(doctor){
        this.listarDoctores.push(doctor)
    }
    getListarDoctores(){
        this.listarDoctores.forEach((doctor, i) => {
            console.log(`${doctor.getPerfil()}, ${i}`)
        })
    }
    getRegistrarCitas(cita){
        this.listarCitas.push(cita)
    }
    getListarCitas(){
        this.listarCitas.forEach((cita, i) => {
            console.log(`${cita.getPerfil()}, ${i}`)
        })
    }
}