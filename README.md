```
const Perceptronjs = require("./Perceptronjs")

var per = new Perceptronjs({debug:false})

per.train([1,1,0,0,0], 1)
per.train([0,0,0,1,1], 0)
per.train([0,0,0,0,1], 0)
per.train([0,0,0,0,0], 0)

while(!per.retrain()) {}

console.log(per.perceive([1,1,0,0,0]))// => 1
console.log(per.perceive([0,0,0,0,1]))/// => 0

```