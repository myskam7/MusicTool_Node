const scribble = require('scribbletune');
let clip = scribble.clip({
    notes: ['c3'],
    pattern: 'x---x---x---x---'
});
scribble.midi(clip);