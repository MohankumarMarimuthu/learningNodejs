class superHero{
    constructor(name){
        this.name = name;
    }

    getName(){
        return this.name;
    }

    setName(name){
        this.name = name;
    }
}

// module.exports = new superHero("Batman") in this method we can module caching
module.exports = superHero