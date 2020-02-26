export default class Fecha {
    /**
     * 
     * @param {number} año 
     * @param {number} mes 
     * @param {number} dia 
     */
    constructor(dia, mes, año){
        this.fecha = new Date (dia, mes, año)
        this.dia = ["Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"]
        this.mes = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"]        
    }
    getAños(){
        let thisyear = 2020
        let año = this.fecha.getFullYear()
        let años = thisyear - año
        return `${años}`
    }
    getMeses(){
        let meses
        meses = this.getAños() * 12
        return `${meses}`
    }
    getSemanas(){
        let semanas 
        semanas = this.getMeses() * 4
        return `${semanas}`
    }
    getDias(){
        let dias 
        dias = this.getSemanas() * 7
        return `${dias}`
    }
    getFecha(){
        let mes = this.mes[this.fecha.getMonth()]
        return `${this.fecha.getDate()} / ${mes} / ${this.fecha.getFullYear()}`
    }
    getDiaFecha(){
        let dia = this.dia[this.fecha.getDay()]
        return `${dia}`
    }
}