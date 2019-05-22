const R = require('ramda');

class ContractVoting  {
    constructor() {
        this.candidate=[{'name':'Dung', 'vote':0},{'name':'Tuan', 'vote':0},{'name':'Thanh','vote':0},{'name':'Cuong', 'vote':0}];
        this.voter=[];
    }

    vote(address,name){
        if(!R.any((addr)=>{return R.equals(addr,address)},this.voter)){
            this.voter.push(address);
            let newstate = []
            R.forEach((cand)=>{
                if(cand.name==name) newstate.push({name:cand.name,vote:cand.vote+1});
                else newstate.push(cand);
            },this.candidate);
            this.candidate = newstate;
            return true;
        }
        else{ return false;}
    }


    getstate(){
        return {
            candidate: this.candidate,
            voter: this.voter
        };
    }

    update(variable){
        this.candidate = variable.candidate;
        this.voter = variable.voter;
    }

}

module.exports = ContractVoting;