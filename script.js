'use strict';

// v 0
/*
function CoffeeMachine(power) {

    this.waterAmount = 0; // количество воды в кофеварке
    this.cofeeAmount = 0; // количество кофе в кофеварке

// var waterAmount = this.waterAmount;
// var cofeeAmount = this.cofeeAmount;
    var coeff = 0.25;

    function checkIngridients() {
// console.log(waterAmount, cofeeAmount);
        // if ( this.cofeeAmount / this.waterAmount  < coeff ) {
        if ( this.cofeeAmount / this.waterAmount  < coeff ) {

            return alert('Вы положили недостаточно кофе!');
        }
    }


    this.start = function () {
        
        // checkIngridients(); // TypeError: this is undefined
        // checkIngridients.call(this); // Неудобно к каждому вызову привязывать this
        checkIngridients();
        alert( 'Создана кофеварка мощностью: ' + power + ' ватт' );
    }

    // checkIngridients();


    
}

// создать кофеварку
var coffeeMachine = new CoffeeMachine(100);

// залить воды
coffeeMachine.waterAmount = 200;
coffeeMachine.cofeeAmount = 40;

coffeeMachine.start();


// alert(coffeeMachine.coeff);

*/


// v 1

/*
function CoffeeMachine(power) {

    this.waterAmount = 0; // количество воды в кофеварке
    this.cofeeAmount = 0; // количество кофе в кофеварке

    var coeff = 0.25;

    var checkIngridients = function () {

        if ( this.cofeeAmount / this.waterAmount  < coeff ) {

            return alert('Вы положили недостаточно кофе!');
        }
    }.bind(this);   // Некрасиво объявлять так ф-ю)


    this.start = function () {
        
        checkIngridients();
        alert( 'Создана кофеварка мощностью: ' + power + ' ватт' );
    }


}

// создать кофеварку
var coffeeMachine = new CoffeeMachine(100);

// залить воды
coffeeMachine.waterAmount = 200;
coffeeMachine.cofeeAmount = 40;

coffeeMachine.start();

*/


// v 2 

function CoffeeMachine(power) {     // class ?

    var self = this; 

    this.cofeeAmount = 0; // количество кофе в кофеварке    
    this.waterAmount = 0; // количество воды в кофеварке

    var COEFF = 0.25;
    var COFFEE_MIN = 25;
    var COFFEE_MAX = 100;
    var WATER_MIN  = 100;
    var WATER_MAX  = 400;

    var WATER_HEAT_CAPACITY = 4200;
    var WATER_TEMPERATURE_DEFAULT = 20;
    var WATER_TEMPERATURE_DIFF = 100 - WATER_TEMPERATURE_DEFAULT;
    var power = 10000; // Вт, чтоб быстрее кипятило)
    var duration = 0;
    // duration = c*m*ΔT / power 

    var MILLISECOND_COEFF = 1000;




    var getComponents = function(components) {

        var isIngridientsNormal = false;
        var addSugar = false;

        do {
            getCoffee();

            getWater();

            // getSugar();

            isIngridientsNormal = checkIngridients();  
            // debugger;   

        } while(!isIngridientsNormal);

        alert('Ингридиенты добавлены!');
    }


    var getCoffee = function() {

        self.cofeeAmount = +prompt("Засыпьте кофе! (грамм, число)");
    }

    var getWater = function() {

        self.waterAmount = +prompt("Залейте воды (мл, число)");
    }  

    // var getSugar = function() {

    //     self.sugarAmount = 
    // }

    var checkIngridients = function() {

        if ( ( self.cofeeAmount < COFFEE_MIN ) || ( self.cofeeAmount > COFFEE_MAX ) ) {

            alert('Кофе должно быть от ' + COFFEE_MIN + ' до ' + COFFEE_MAX);
            return false;
        }

        if ( ( self.waterAmount < WATER_MIN ) || ( self.waterAmount > WATER_MAX ) ) {

            alert('Воды должно быть от ' + WATER_MIN + ' до ' + WATER_MAX);
            return false;
        }        

        return true 
    }


    var durationCooking = function(heatCapacity, mass, tempDifference, power ) {

        // return WATER_HEAT_CAPACITY * self.waterAmount/1000 * WATER_TEMPERATURE_DIFF / power;
        // return this.waterAmount * WATER_HEAT_CAPACITY * 80 / power;
        return heatCapacity *  mass * tempDifference / power;
    }

    var cookingCoffee = function() {

        duration = durationCooking(WATER_HEAT_CAPACITY, self.waterAmount/1000, WATER_TEMPERATURE_DIFF, power);      
        alert('Будет готово через: ' + duration + ' секунд)'); 
    }

    var coffeeReady = function() {

        alert('Кофе готов!');
    }







/*    var checkIngridients = function () {

        if ( self.cofeeAmount / self.waterAmount  < COEFF ) {

            alert('Вы положили недостаточно кофе!');
            return false;
        }
        return true;
    }*/


    this.start = function () {



        getComponents();

        // checkIngridients();

        cookingCoffee();
console.log(duration);
        setTimeout(coffeeReady, duration * MILLISECOND_COEFF);

        
        // var isIngridientsNormal = checkIngridients();

        // if (isIngridientsNormal) 
        //     alert( 'Создана кофеварка мощностью: ' + power + ' ватт' );
    }

    
}



// создать кофеварку
var coffeeMachine = new CoffeeMachine(100);

// залить воды
coffeeMachine.waterAmount = 200;
coffeeMachine.cofeeAmount = 40;

coffeeMachine.start();




/*start

    getComponents

    checkComponents

    cookingCoffee
*/




/*
1) Сначала сделать просто кофе,
вызов функций-этапов внутри класса

Далее сделать внешний методы - 
и запускать этапы снаружи


Добавить 3 программы: крепкий кофе, средний, слабый
разные пропорции ингридиентов


*/