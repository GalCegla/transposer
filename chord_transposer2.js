const chords = [
  "C",
  "half",
  "D",
  "half",
  "E",
  "F",
  "half",
  "G",
  "half",
  "A",
  "half",
  "B",
];

const spans = document.querySelectorAll("span");

const chordRegEx = new RegExp("[CDRFGAB][#b]?m?7?");

function transposer(tones) {
  for (const span of spans) {
    const tc = span.textContent;
    if (tc && tc.match(chordRegEx)) {
      const additionals = tc.slice(1);
      const steps = tones + tones;
      const chordIndex = chords.indexOf(tc[0]);
      let newChord;

      if (Math.abs(steps) > 11) {
        null;
      } else if (steps < 0) {
        if (chordIndex - steps < 0) {
          newChord = chords[chords.length - 1 + (chordIndex - steps)];
        } else {
          newChord = chords[chords.length - (chordIndex - steps)];
        }
      } else {
        if (chordIndex + steps > chords.length - 1) {
          newChord = chords[chordIndex + steps - 12];
        } else {
          newChord = chords[chordIndex + steps];
        }
      }

      if (newChord !== "half") {
        if (additionals) {
          newChord += additionals;
        }
      } else {
      }
    }
  }
}
