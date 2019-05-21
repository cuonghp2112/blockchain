const R = require('ramda');

class ContractVoting  {
    constructor() {
        this.candidate=[{'name':'Dung', 'vote':0},{'name':'Tuan', 'vote':0},{'name':'Thanh','vote':0},{'name':'Cuong', 'vote':0}];
        this.voter=[];
    }

    vote(address,name){
        if(!isvoted(address)){
            this.voter.push(address);
            newstate = []
            R.forEach((candidate)=>{
                if(candidate.name==name) newstate.push({name:candidate.name,vote:candidate.vote+1});
                else newstate.push(candidate);
            },this.candidates);
            this.candidate = newstate;
            return true;
        }
        else{ return false;}
    }

    isvoted(address){
        return R.any((someone)=>{return R.equals(address,someone)},this.voter)
    }

    showstate(){
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