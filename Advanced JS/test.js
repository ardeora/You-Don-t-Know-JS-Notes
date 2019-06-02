// function Food(food) {
//     this.food = food;
// }

// Food.prototype.eat = function eat() {
//     console.log('Eating ' + this.food);
// }

// function Waffle(type) {
//     this.type = type;
//     Food.call(this,`${this.type} Waffle`);
// }

// Waffle.prototype = Object.create(Food.prototype);

// Waffle.prototype.pourSyrup = function pourSyrup(flavor) {
//     console.log(`Pouring ${flavor} syrup on ${this.type} Waffle`);
// }

// const w1 = new Waffle('Blue-Berry');
// w1.pourSyrup('Maple');
// w1.eat();
// console.dir(w1);


class Food {
    constructor(food) {
        this.food = food;
    }

    eat() {
        console.log('Eating ' + this.food); 
    }
}

class Waffle extends Food {
    constructor(type) {
        super(`${type} Waffle`);
        this.type = type;
    }

    pourSyrup(flavor) {
        console.log(`Pouring ${flavor} syrup on ${this.type} Waffle`);
    }
}

const w1 = new Waffle('Blue-Berry');
w1.pourSyrup('Maple');
w1.eat();
console.dir(w1);