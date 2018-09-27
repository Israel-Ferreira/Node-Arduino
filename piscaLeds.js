const five = require('johnny-five');
const board = new five.Board();

const criarLed = pino => new five.Led(pino);

const piscarLed = (led,tempo) =>  setInterval(() => led.blink(),tempo);

board.on("ready",() => {
    let leds  = [criarLed(11), criarLed(10), criarLed(9)];
    leds.forEach(led => piscarLed(led,1500));
});
