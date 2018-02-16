const scribble = require('scribbletune');

let hat = scribble.clip({
    notes: ['c4'],
    pattern: 'x'.repeat(16),
    accentMap: 'x---x---x-x---x-'
});

scribble.midi(hat, 'hats.mid');