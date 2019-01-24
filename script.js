'use strict';


// v 2 


function Animation(targetEl, animationType) {

/*    var self = this;

    self.animationClassName = 'animating';
    var types = {

        shaking: 'shaking',
        zooming: 'zooming'
    }
    for (var key in types) {
        if ( animationType == types[key] ){
            self.animationClassName +=  " " + animationType;
        }       
    }
console.log('animationClassName: ' + self.animationClassName);*/

    this.animationStart = function() {
        // self.targetEl.classList.add('animating');        
        targetEl.classList.add('animating' + '-'+ animationType);        
        // targetEl.classList.add(self.animationClassName);        
    }
    this.animationEnd = function() {

        targetEl.classList.remove('animating' + '-'+ animationType);        
        // targetEl.classList.remove(self.animationClassName);        
    }  
}


function CoffeeMachine(elementMachine) {     // class ?

    var self = this; 

    this.coffeeMachineUI = elementMachine;
    var animatedObj = new Animation(self.coffeeMachineUI, 'shaking');

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

        return heatCapacity *  mass * tempDifference / power;
    }

    var cookingCoffee = function() {

        duration = durationCooking(WATER_HEAT_CAPACITY, self.waterAmount, WATER_TEMPERATURE_DIFF, power);      
        alert('Будет готово через: ' + duration / MILLISECOND_COEFF + ' секунд)'); 

        // animationStart();
        animatedObj.animationStart();
    }

    var coffeeReady = function() {

        // animationEnd();
        animatedObj.animationEnd();        
        alert('Кофе готов!');        
    }


    // var animationStart = function() {
    //     self.coffeeMachineUI.classList.add('animating');        
    // }
    // var animationEnd = function() {
    //     self.coffeeMachineUI.classList.remove('animating');        
    // }    


    this.start = function () {


        getComponents();

        // checkIngridients();

        cookingCoffee();
// console.log(duration);
        setTimeout(coffeeReady, duration);

    }

    
}


var coffeeMachineUI = document.querySelector('.coffee-machine');
var buttonStartUI   = document.querySelector('#start_coffee');

// создать кофеварку
var coffeeMachine = new CoffeeMachine(coffeeMachineUI);
// coffeeMachine.start();


buttonStartUI.addEventListener('click', 

        coffeeMachine.start    
);



/* 
Simple

start

    getComponents

    checkComponents

    cookingCoffee
*/


/* 
Simple + StartUI + Animation

start

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