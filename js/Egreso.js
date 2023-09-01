class Egreso extends Dato{
    static contandorEgresos = 0;

    constructor(descripcion, valor){
        super(descripcion, valor);
        this._id = ++Egreso.contadorEgresos;
    }

    get id(){
        return this._id;
    }
}