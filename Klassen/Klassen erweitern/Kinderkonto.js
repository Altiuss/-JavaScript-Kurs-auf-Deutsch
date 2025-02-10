"use strict";


class Kinderkonto extends Konto {

    constructor(iban, inhaber, einzahlung, limit) {
        super(iban, inhaber, einzahlung)
        this._limit = -Math.abs(limit);
    }

    _saldo_prufen(auszahlung) {

        return this._saldo - auszahlung < this._limit ? false : true;
    }

    abheben(auszahlung) {
       
        this._saldo_prufen(auszahlung) ?
            super.abheben(auszahlung) :
            console.log("Auszahlung nicht moglich: Limit uberschrittet");
    }

}