const tones = document.getElementById("tonesInput");
const saveButton = document.getElementById("save");











const chords = [
  "C",
  "C#",
  "D",
  "Eb",
  "E",
  "F",
  "F#",
  "G",
  "Ab",
  "A",
  "Bb",
  "B",
];
const chords2 = [
  "C",
  "Db",
  "D",
  "D#",
  "E",
  "F",
  "Gb",
  "G",
  "Ab",
  "A",
  "Bb",
  "B",
];

const chordRegEx = new RegExp("[CDEFGAB][#b]?m?7?");

function transposer(tones) {
  console.log("called!");
  const spans = document.querySelectorAll("span");
  const steps = tones + tones;

  for (const span of spans) {
    const chord = span.textContent;

    if (chord.match(chordRegEx)) {
      const newChord = translator(chord, steps);
      span.textContent = newChord;
    }
  }
}

function translator(chord, steps) {
  const flat = "b";
  const sharp = "#";

  let additions;
  let chordIndex;
  let newChord;

  if (chord[1] === flat || chord[1] === sharp) {
    additions = chord.slice(2);
    chord = chord.slice(0, 2);
  } else {
    additions = chord.slice(1);
    chord = chord.slice(0, 1);
  }

  if (chords.includes(chord)) {
    chordIndex = chords.indexOf(chord);
  } else if (chords2.includes(chord)) {
    chordIndex = chords2.indexOf(chord);
  }

  if (Math.abs(steps) > 11) {
    return null;
  } else if (steps < 0) {
    if (chordIndex + steps < 0) {
      newChord = chords[chords.length + (chordIndex + steps)];
    } else {
      newChord = chords[chordIndex + steps];
    }
  } else {
    if (chordIndex + steps > chords.length - 1) {
      newChord = chords[chordIndex + steps - 12];
    } else {
      newChord = chords[chordIndex + steps];
    }
  }

  newChord += additions;
  return newChord;
}


saveButton.addEventListener("click", async () => {
  saveButton.textContent = "shot";
  console.log(tones.value);
  let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });

  function callback() {
    transposer(tones.value);
  }

  chrome.scripting.executeScript({
    target: { tabId: tab.id },
    function: callback
  });
});