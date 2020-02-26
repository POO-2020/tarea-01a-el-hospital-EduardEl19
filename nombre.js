export default class Nombre {
    /**
     * 
     * @param {string} nombre 
     * @param {string} apellidop 
     * @param {string} apellidom 
     */
    constructor(nombre, apellidopaterno, apellidomaterno){
        this.nombre = nombre
        this.apellido1 = apellidopaterno
        this.apellido2 = apellidomaterno
    }
    
    getNombreCompleto(){
        return `${this.nombre} ${this.apellido1} ${this.apellido2}`
    }

    getApellidoNombre(){
        return `${this.apellido1} ${this.apellido2} ${this.nombre}`
    }

    getIniciales(){
        var cadena = `${this.nombre} ${this.apellido1} ${this.apellido2}`,
        separador = " ",
        separar=[],
        arregloDeSubCadenas = cadena.split(separador);

        for (let x=0 ; x<arregloDeSubCadenas.length; x++){
            separar[x] = arregloDeSubCadenas[x].substring(0, 1);
    }
        return `${separar}`
    }
}