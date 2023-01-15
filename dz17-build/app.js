class Human {
    name;
    gender;
    constructor (name, gender) {
       this.name = name;
       this.gender = gender;
    }
}

class Flat {
    renting = [];
    addHuman(newHuman){
        this.renting.push(newHuman);
    }
}

class House {
    arrFlat = [];
    maxNumFlat;
    constructor (maxNumFlat) {
        this.maxNumFlat = maxNumFlat;
    };
    addFlat(newFlat) {
        (this.arrFlat.length < this.maxNumFlat)? this.arrFlat.push(newFlat) : console.log('House is full');

    }
}

const Hum1 = new Human('Vasja','man');
const Hum2 = new Human('Olja','frau');
const Hum3 = new Human('Max','man');

const Flat1 = new Flat();
const Flat2 = new Flat();
const Flat3 = new Flat();
const Flat4 = new Flat();

const bigHouse = new House(3);

Flat1.addHuman(Hum1);
Flat1.addHuman(Hum2);
Flat2.addHuman(Hum3);
console.log(Flat1, Flat2);

bigHouse.addFlat(Flat1);
bigHouse.addFlat(Flat2);
bigHouse.addFlat(Flat3);
bigHouse.addFlat(Flat4);
console.log(bigHouse);





