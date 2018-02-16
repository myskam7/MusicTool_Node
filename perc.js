const scribble = require('scribbletune');

let perc = scribble.clip({
    notes: ['c2', 'c#2', 'd2', 'd#2'],
    patter: 'x-x-x--x',
    sizzle: true, // creates wave for the notes sound
    shuffle: true // shuffles notes passed
});

let perc2 = scribble.clip({
    notes: ['c2', 'c#2', 'd2', 'd#2'],
    patter: 'x-x-xxxx',
    sizzle: true, // creates wave for the notes sound
    shuffle: true // shuffles notes passed
});


scribble.midi(perc.concat(perc, perc, perc2));