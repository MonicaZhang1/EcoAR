var animals = []

function ARModel(name, dialogue) {
    //we can make name link to the el id to find it on click?
    this.name = name;
    this.dialogue = dialogue;
    

}

ARModel.prototype.speak = function() {
    return this.dialogue;   
}

function Animal(name, dialogue) {
    ARModel.call(this, name, dialogue);
}

Animal.prototype = Object.create(ARModel.prototype);


function initiateModels() {
    var animalArray = [
      {
        name: 'polarbear',
        dialogue: "Due to rising temperatures, sea ice in the Arctic shrinks each year. It is estimated that 30% of the polar bear population will decline by 2050."
      },
      {
        name: 'tree',
        dialogue: "About 10 million hectares of trees are removed each year for crops, livestock, and paper production. Deforestation contributes to an increase in 4.8 million tons of CO2 emissions!"
      },
      {
        name: 'fish',
        dialogue: "When fisheries catch fish at a rate faster than the fish can be replenished, they lead to a decline in the ocean wildlife population. Overfishing also is a danger to populations of people who rely on fish as a source of protein."
      },
      {
        name: 'cloud',
        dialogue: "Floods can result in destruction of habitats, erosion of the natural landscape, and the spread of contaminants and potential waterborne diseases like cholera and hepatitis A."
      },
      {
        name: 'car',
        dialogue: "The production of cars consumes a large amount of energy and the emissions from cars that run on fossil fuels contribute to air pollution and is one of the largest sources of greenhouse gases.  Electric cars reduce the amount of greenhouse gases released into the environment. One electric car can reduce the amount of CO2 emitted by an average of 1.5 million grams!"
      }
    ];

    animalArray.forEach(function(animal){
        animals.push(new Animal(animal.name, animal.dialogue));
    });

    console.log('animals: ', animals);
}

initiateModels();
