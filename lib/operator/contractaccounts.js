const Contractaccount = require('./contractaccount');
const R = require('ramda');

class Contractaccounts extends Array {
    static fromJson(data) {
        let contractaccounts = new Contractaccounts();
        R.forEach((contractaccount) => { contractaccounts.push(Contractaccount.fromJson(contractaccount)); }, data);
        return contractaccounts;
    }
}

module.exports = Contractaccounts;