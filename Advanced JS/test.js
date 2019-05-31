// const food = {
//     init: function(type) {
//         this.type = type;
//     },
//     eat: function() {
//         console.log('Eating ', this.type);
//     }
// }

// const waffle = Object.create(food);


// console.dir(food);
// console.log(waffle);

function Food(food) {
    this.food = food;
}

Food.prototype.eat = function eat() {
    console.log('Eating ' + this.food);
}

function Waffle(type) {
    this.type = type;
    Food.call(this,`${this.type} Waffle`);
}

Waffle.prototype = Object.create(Food.prototype);

Waffle.prototype.pourSyrup = function pourSyrup(flavor) {
    console.log(`Pouring ${flavor} syrup on ${this.type} Waffle`);
}

const w1 = new Waffle('Blue-Berry');
w1.pourSyrup('Maple');
w1.eat();
console.dir(w1);