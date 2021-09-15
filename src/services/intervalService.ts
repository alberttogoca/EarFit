import { transpose } from '@tonaljs/core';
import { Interval as TonalInterval } from '@tonaljs/tonal';

export interface Interval {
  name: string;
  value: string[];
}
//INFO: +/-: direccion, 2: distancia notas, P/M/m/A/dd/d?: justa/mayor/menor/aumentado/disminuido/? (semitonos)
//const almostAllIntervals = ['1P', '2m', '2M', '3m', '3M', '4P', '4A', '5P', '6m', '6M', '7m', '7M'];

export const getIntervals = (): Interval[] => {
  const intervalsNames = TonalInterval.names();

  const intervals = intervalsNames.map((interval) => {
    return { name: interval, value: [] };
  });

  return intervals;
};

export const calcIntervalToPlay = (note1: string, interval: string): string[] => {
  const note2 = transpose(note1, interval);
  return [note1, note2];
};

//ANTES: Check
//const tonic = 'C';
//const octave = '3';
//const pattern = 'major';
//const notes = TonalScale.get(tonic + octave + ' ' + pattern).notes;
/*  const newNotes = notes.flatMap((note) =>
    intervalsNames.flatMap((interval) => {
      const combine = transpose(note, interval);
      return { note1: note, interval: interval, note2: combine };
    })
  ); */
//console.log(`Notes: ${notes}`);
//console.log(`Intervals: ${intervals}`);
//console.log(newNotes);
//console.log([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map(TonalInterval.fromSemitones));

// const allIntervals = notes.flatMap((firstnote) =>
//   notes.flatMap((secondnote) => {
//     const name = TonalInterval.distance(firstnote, secondnote).slice(-2); //slice es para quitar la direccion
//     const value = [firstnote, secondnote];
//     return { value, name };
//   })
// );

//console.log(allIntervals);

//ANTES:
// const intervalsSet = new Set<string>();
// const allPosbileIntervals = noteList.map(
//   (firstnote) => noteList.map((secondnote) => TonalInterval.distance(firstnote, secondnote).slice(-2)) //slice es para quitar la direccion
// );
// allPosbileIntervals.forEach((intervalList) => intervalList.forEach((item) => intervalsSet.add(item)));
// const intervals = Array.from(intervalsSet).sort();

// intervals.map((s) => {
//   return { displayName: s, isSelected: true };
// });

// const n1 = getRandomItem(noteList);
// const n2 = getRandomItem(noteList); // TO DO: ¿que esta nota sea siempre mayor?
// const value = { note1: n1, note2: n2 };
// const name = TonalInterval.distance(value.note1, value.note2).slice(-2);
// const answer = { name, value };
