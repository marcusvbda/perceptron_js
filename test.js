const Perceptron = require("./perceptron")

var and = new Perceptron({debug:false})

and.train([1,1,0,0,0], 1)
and.train([0,0,0,1,1], 0)
and.train([0,0,0,0,1], 0)
and.train([0,0,0,0,0], 0)

while(!and.retrain()) {}

var and2 = new Perceptron({debug:false,weights:and.weights})
console.log(and.perceive([1,1,0,0,0]))// => 1
console.log(and2.perceive([0,0,0,0,1]))/// => 0