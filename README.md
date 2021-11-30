# Chord Transposer

This project is a chrome extension, born of laziness and unwillingness to pay for ridiculous features.
I was strumming a song I liked on my guitar, when the barred chords were tiring my left hand.
"No problem", I thought, "I'll just hit the transpose button in the chords site, and use me some easier, open chords".
Well, if only it were that simple - because after the page loaded, a nasty message was presented to me: "Only premium users can view easier chords".
"Preposterous!" I thought, "I know how to transpose myself! I'm just too lazy to do so each time!
~and so, this idea was born✨

## The how

Above was the why, this is the how.
Essentially, despite (in my opinion, of course) google's _lacking_ extension documentation, I cracked how to write an extension.
But before doing that, I wrote the script with the "algorithm" itself.
I created a RegEx to detect chords in text.
I then selected all spans of a document, checked whether a textContent matched the reg, and if so ran the "algorithm" on it, taking into account several hiccups with chord transpositioning.
Then I just replaced that textContent with the transposed chord!

## Supported chords documentation

Here I'll document the chords that my RegEx is currently looking for. I might add more along the way, as the need arises:

`Majors`
`Minors`
`Flats`
`Sharps`
`maj7`
`min7` ==> (just "7")
`sus2`
`sus4`

v1.0

### Enjoy!
