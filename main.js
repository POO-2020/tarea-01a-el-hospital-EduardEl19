import Fecha from "./fecha.js"
import Tiempo from "./tiempo.js"
import Nombre from "./nombre.js"
import Paciente from "./paciente.js"
import Doctor from "./doctor.js"
import Cita from "./cita.js"
import Hospital from "./hospital.js"

class Main {
    constructor(){
        this.fechaNueva = new Fecha (16, 12, 2002)
        this.eltiempo = new Tiempo (5,30,"pm")
        this.nombreNuevo = new Nombre ("Eduardo", "López", "Fletes")
        this.nuevoPaciente = new Paciente (this.nombreNuevo, this.fechaNueva, 3123045867)
        this.doctorNuevo = new Doctor ("Jorge Corona", "oculista", 12345678, 3146095054)
        this.citaNueva = new Cita (this.fechaNueva, this.eltiempo, this.doctorNuevo, this.nuevoPaciente)
        this.hospital = new Hospital ("Hospital San Lucas", "Av. Constitución #1056")
    }
    probarFecha(){
        console.log(`${this.fechaNueva.getAños()}`)
        console.log(`${this.fechaNueva.getMeses()}`)
        console.log(`${this.fechaNueva.getSemanas()}`)
        console.log(`${this.fechaNueva.getDias()}`)
        console.log(`${this.fechaNueva.getFecha()}`)
        console.log(`${this.fechaNueva.getDiaFecha()}`)
    }
    probarTiempo(){
        console.log(`${this.eltiempo.getFormato12()}`)
        console.log(`${this.eltiempo.getFormato24()}`)
    }
    probarNombre(){
        console.log(`${this.nombreNuevo.getNombreCompleto()}`)
        console.log(`${this.nombreNuevo.getApellidoNombre()}`)
        console.log(`${this.nombreNuevo.getIniciales()}`)
    }
    probarPaciente(){
        console.log(`${this.nuevoPaciente.getPerfil()}`)
    }
    probarDoctor(){
        console.log(`${this.doctorNuevo.getPerfil()}`)
    }
    probarCita(){
        console.log(`${this.citaNueva.getPerfil()}`)
    }
    probarHospital(){
        this.hospital.getRegistrarDoctor(this.doctorNuevo)
        this.hospital.getRegistrarCitas(this.citaNueva)
        this.hospital.getListarDoctores()
        this.hospital.getListarCitas()
    }
}

let app = new Main
app.probarFecha()
app.probarTiempo()
app.probarNombre()
app.probarPaciente()
app.probarDoctor()
app.probarCita()
app.probarHospital()