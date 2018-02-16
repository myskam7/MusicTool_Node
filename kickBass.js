const scribble = require('scribbletune');

let kick, bass; 

kick = scribble.clip({
    notes: ['c2'],
    pattern: '--x-'.repeat(4)
}); 

scribble.midi(kick, 'kick.mid');

bass = scribble.clip({
    notes: scribble.scale('a', 'minor', 2).slice(0, 3),
    pattern: '--x-'.repeat(4),
    shuffle: true
});

scribble.midi(bass, 'bass.mid');