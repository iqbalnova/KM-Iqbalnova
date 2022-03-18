console.log('OOP')

class Hero{
    constructor(heroName, stamina, type, attack){
        this.heroName = heroName;
        this.stamina = stamina;
        this.type = type;
        this.attack = attack;
    }
    health = 100;
    menyerang(){
        this.stamina -= 2
        return this.stamina;
    }
    istirahat(){
        this.stamina += 2;
    }
}

const Iqbal = new Hero('Pudge', 10, 'Tank', 20);

console.log(Iqbal.menyerang())
console.log(Iqbal)



// Inheritance
class Attribute extends Hero{
    constructor(heroName,stamina,type,attack){
        super(heroName,stamina,type,attack)
    }
}
const atr = new Attribute('Ling', 50, 'Carry', 100)
console.log(atr)


// Encapsulation
// #nama = # bersifat privat


// Polymorphism
// buat method sama tanpa merubah parent
// class Attribute extends Hero{
//     constructor(heroName,stamina,type,attack){
//         super(heroName,stamina,type,attack)
//     }
//     istirahat(){
//         if (this.stamina === 'Carry'){
//             return (this.stamina += 5)
//         }else{
//             return (this.stamina += 2)
//         }
//     }
// }


// Abstraction
class Student{
    constructor(props){
        this.state = props
    }
}

const Iqbaale = new Student({
    hobbies : ['Mangan', 'Turu'],
    address : 'Klaten'
});

console.log(Iqbaale)






// fast quiz
class Hewan{
    constructor(namaHewan, kriteria, caraHidup, kebiasaan){
        this.namaHewan = namaHewan;
        this.kriteria = kriteria;
        this.caraHidup = caraHidup;
        this.kebiasaan = kebiasaan;
    }
    
    makan(){
        if(this.caraHidup === "makan"){
            return "Kucing akan hidup"
        }else{
            return "Kucing akan mati"
        }
        
    } 
}

const Meisy = new Cat("Meisy",'Lucu', 'makan', 'tidur')
console.log(Meisy)
console.log(Meisy.makan())


class Cat extends Hewan{
    constructor(){
        
    }
}






// class Hewan {
//     constructor(props){
//         this.state = props;
//     }
// }

// class Kucing extends Hewan{
//     constructor(namaHewan, kriteria, caraHidup, kebiasaan){
//         this.namaHewan = namaHewan;
//         this.kriteria = kriteria;
//         this.caraHidup = caraHidup;
//         this.kebiasaan = kebiasaan;
//     }
//     Mengeong(){
//         if(this.state = "makan"){
//             return "mengeong"
//         }
//     }
// }

// console.log(Kucing("Meisy", 'lucu', 'makan', 'tidur'))

