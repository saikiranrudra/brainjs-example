const brain = require("brain.js");
const data = require("./data.json")

const network = new brain.recurrent.LSTM();

network.train(data, {
    iterations: 2000
});

const output = network.run("I have 10W power supply");

console.log(`catogorie: ${output}`);