// Create the objects that you feel would best model a jungle using your best coding practices based on the following requirements, using JS:
// The Jungle contains 2  species of animals; tigers, monkeys and snakes. chicken
// All animals can do 3 things. Make a sound, eat food and sleep.
// By default when an animal’s energy level changes, it changes in the following ways:
// -3 for making a sound.
// +5 for eating food.
// +10 for sleeping.
// The jungle can perform a sound off. This involves all of the animals in the jungle each making their sound, along with reporting their energy level.
// Tigers get +5 of energy for sleeping.
// Monkeys get +2 of energy for eating and -4 for making a sound.
// Only monkeys will have the ability to play. When they do so, they say “Oooo Oooo” and get -8 of energy. If they don't have energy to play, they say “I’m too tired”.
// The jungle contains several types of food (Fish, Grain and Meat), and Tigers can’t eat Grain because they have sensitive digestive systems. And when they try to eat Grain, they say “I can’t it that”.
// Bonus: The jungle can have each animal perform a random activity out of the ones possible for that animal.


/**
 *  Class Animal
 */
class Animal {
    /**
     * @returns {Void}
     */
    constructor(){
        this.energy = 0;
    }

    /**
     * Method to start animal eating 
     * @returns {Void}
     */
    eat() {
        this.energy = this.energy + 5;
    }

    /**
     * Method to start animal speaking 
     * @returns {Void}
     */
    speak() {
        this.energy = this.energy - 3;
    }

    /**
     * Method to start animal speaking 
     * @returns {Void}
     */
    sleep() {
        this.energy = this.energy + 10;
    }
}

/**
 * Class Tiger inherit from Animal
 */
class Tiger extends Animal {

    /**
     * Method to start animal eating 
     * @returns {Void}
    */
    eat(foodType) {
        if (foodType === 'GRAIN') {
            console.log('I can’t it that');
        }
    }
} 

/**
 * Class Monkey inherit from Animal class
 */
class Monkey extends Animal {
    /**
     * Method to start animal eating 
     * @returns {Void}
    */
    eat() {
        this.energy = this.energy + 2;
    }

    /**
     * Method to start animal speaking 
     * @returns {Void}
    */
    speak() {
        this.energy = this.energy - 4;
    }

    /**
     * Method to start animal playing
     * @param {String} sound specific sound to start playing
     * @returns {Void}
     */
    play(sound) {
        if (sound === 'Oooo Oooo') {
            if(this.energy <= 0) {
                console.log('I’m too tired.');
            } else {
                this.energy = this.energy - 8;
            }
        }
    }
}

class Snake extends Animal {
    
}


/**
 * Class Jungle 
 */
class Jungle {
    /**
     * 
     * @param {Boolean} soundOff is sound off
     * @param {Array} animals array with animals in jungle
     */
    constructor(isSoundOff, animals) {
        this.isSoundOff = isSoundOff;
        this.animals = animals;
        this.instances = [];
    }

    /**
     * Method to initialize the jungle
     * @return {Void} 
     */
    startJungle() {
        this.createInstances();
        if(this.isSoundOff){
            this.soundOffSpeaking(this.instances);
        } else {
            this.randomActivity(this.instances);
        }

        console.log(this.instances);
    }

    /**
     * Method soundOffSpeaking to auto start speaking in the current instances
     * @param {Array} instances created instances for each animal in jungle
     */
    soundOffSpeaking(instances) {
        instances.map(item => {
            item.speak();
        });
    }

    /**
     * Method createInstances
     * @returns {Object} new instance for each animal. 
     */
    createInstances() {
        if(this.animals.length > 0) {
            this.animals.map((item, id) => {
                if(item === 'tiger') {
                    return this.instances.push(new Tiger());
                }
                if(item === 'monkey') {
                    return this.instances.push(new Monkey());
                }
                if(item === 'snake') {
                    return this.instances.push(new Snake());
                } else {
                    return this.instances.push(new Animal());
                } 
            });
        }
    }

    /**
     * Method randomActivityGenerator gets the activity from inheritance 
     * @returns {String} name of activity
     */
    randomActivityGenerator() {
        const animalActivities = Object.getOwnPropertyNames(Animal.prototype).filter(x => x !== 'constructor');
        const activity = animalActivities[Math.floor(Math.random()*animalActivities.length)];
        return activity;
    }

    /**
     * Method randomActivity takes a random activity and play it in the instance
     * @param {Array} instances created instances for each animal in jungle
     * @returns {Void}
     */
    randomActivity(instances) {
        const activity = this.randomActivityGenerator();
        console.log(activity);
        instances.map(item => {
            switch(activity) {
                case 'sleep':
                    item.sleep();
                  break;
                case 'eat':
                    item.eat();
                  break;
                case 'speak':
                    item.speak();
                  break;
              }
        })
        
    }
}


const myJungle = new Jungle(true, ['monkey', 'tiger', 'snake']);
myJungle.startJungle();




