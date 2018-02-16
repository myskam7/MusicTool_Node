const scribble = require('scribbletune');

/* 
Patters: 
    (x) = note on,
    (-)hyped = note off,
    (_)underscore = sustain,
*/
let pattern = 'x_x_x_--'.repeat(8); //String.repeat() returns 'x_x_x_--x_x_x_--x_x_x_--x_x_x_--x_x_x_--x_x_x_--x_x_x_--x_x_x_--'

let clip = scribble.clip({
    notes:['F#min', 'C#min', 'Dmaj', 'Bmin', 'Emaj', 'Amaj', 'Dmaj', 'C#min', 'Amaj'],//Array of notes
    pattern: pattern,
    sizzle: true
});

console.log('SCALES: ' + scribble.scales);

console.log('CHORDS LIST: ' + scribble.listChords());
scribble.midi(clip, 'chords.mid'); 