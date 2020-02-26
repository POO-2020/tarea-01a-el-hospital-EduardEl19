export default class Tiempo {
    /**
     * 
     * @param {number} hora 
     * @param {number} minuto 
     * @param {string} periodo 
     */
    constructor(hora, minuto, periodo){
        this.hora = hora
        this.minutos = minuto
        this.periodo = periodo
    }

    getFormato12(){
        return `${this.hora}: ${this.minutos} ${this.periodo}`
    }

    getFormato24(){
        if (this.periodo == "pm"){
            let nuevahora = `${this.hora + 12}: ${this.minutos} ${this.periodo}`
            return `${nuevahora}`
        } else {
            return `${this.hora}: ${this.minutos} ${this.periodo}`
        }
    }
}