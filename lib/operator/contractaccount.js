const R = require('ramda');
const CryptoUtil = require('../util/cryptoUtil');
const CryptoEdDSAUtil = require('../util/cryptoEdDSAUtil');

class Contractaccount {
    constructor() {
        this.id=null,
        this.address = null,
        this.name = null,
        this.code=null,
        this.variable ={}
    }
    getName(){
        return this.name;
    }
    getAddress(){
        return this.address;
    }
    getCode(){
        return this.code;
    }
    getVariable(){
        return this.variable;
    }
    updateVariable(data){
        this.variable = data;
        return this;
    }
    static fromJson(data) {
        let contractaccount = new Contractaccount();
        R.forEachObjIndexed((value, key) => { contractaccount[key] = value; }, data);
        return contractaccount;
    }
}
 module.exports = Contractaccount;

