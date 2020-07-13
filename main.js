
//class for all dice
class Dice {
    constructor(maxDiceVal) {
        this.diceValue = this.setDiceValue(maxDiceVal);
        this.diceId = this.makeId();
        this.div = document.createElement('div');
        this.div = addEventListener('click', () => {
            this.removeEl();
        })
        
        // this.event = this.createEventLis();
    //     this.addEventListener = $(this.diceId).click(function(){
    //         $(this.diceId).remove();
    //         console.log(this.diceId);
    // })
    // createEventLis(){
    //     console.log("ok");
    //      $(this.diceId).click(function(){
    //              $(this.diceId).remove();
    //              console.log(this.diceId);

    //     })
     }
     removeEl(){
         console.log(this.diceId);
     }
     makeId(){
            //random num betwwen 0 and 1000
           const idNum = Math.floor(Math.random() * 1000);
           //random letter
           const alphabeth = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","r","s","t","u","w","x","y","z"];
           const idLett = Math.floor(Math.random() * alphabeth.length);
           return `#${alphabeth[idLett]}${idNum}`;
        }
    setDiceValue(maxDiceVal){
            return Math.floor(Math.random() * maxDiceVal);
    }
    // createEventLis(){
    //     $(this.diceId).click(function(){
    //         $(this.diceId).empty();
    //         console.log('click');
    //     }
    //     )}
}

//create obj literal table
let table = {
    //array with all the current dices 
    currentDice : [],

    //create a dice
    createDice : function(diceAmount, maxDiceVal) {
        let dice;
         for(let i = 0; i <diceAmount; i++) {
            this.currentDice.push(new Dice(maxDiceVal));

            
            //push to currentDIce array
            // this.currentDice.push(dice);
         }
    
        },
//     addEvent : function() {
//         for(let i = 0; i <this.currentDice; i++){
//             this.currentDice[i].event = $(currentDice[i].diceId).click(function(){
//             console.log('removed');
//                 // $(currentDice[i].diceId).remove();
//         })
//     },
// }
    //place the die on the screen
    placeDie : function(location, diceId, cssClass, diceVal) {
        $(location).append(`<div id="${diceId}" class="${cssClass}">${diceVal}</div>`);

    },
    diceValuesCount : function() {
        let arrDiceVal = [];
        for(let i = 0; i < this.currentDice.length; i++) {
            arrDiceVal.push(this.currentDice[i].diceValue);
        }
        arrDiceVal = arrDiceVal.reduce(function(total, currentVal){
             return total = total + currentVal;
         })
        return arrDiceVal;
    }
}

//event listener functions 

//when 'roll' clicked
$("#rollBtn").click(function() {
    //clear the table
    $(".diceClear").empty();
    //empty table obj
    table.currentDice = [];
    //create four dice
    table.createDice(4, 6);
    //place four dice on the table
    for(let i = 0; i < 4; i++) {
        let locationDice = ".dicePlace" + i;
        table.placeDie(locationDice, table.currentDice[i].diceId, "dice", table.currentDice[i].diceValue);
        
    }
    
    console.log(table);
});
    

//when 'clear' clicked
$("#clearBtn").click(function() {
        //clear the table
        console.log("table cleared");
    $(".diceClear").empty();
});
//when 'sum' clicked
$("#sumBtn").click(function() {
    return console.log(table.diceValuesCount());
});

//when div with this id clicked
// function createEventLis()
// $('.dicePlace0').click(function(){
//     $('.dicePlace0').empty();
//     console.log('click');
// });
//when div with this id doubble clicked


// table.placeDie(".dicePlace", table.currentDice[1].id, "dice");

// function getSum(){
    
   
   //  this.currentDice.diceValue.
    // numbers.reduce(function(total, currentVal){
    //     return total + currentVal;
    // }); 
    // };

  


