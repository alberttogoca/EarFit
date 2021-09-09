import { Interval as ToneInterval, Scale as ToneScale } from '@tonaljs/tonal';
import { getRandomItem } from 'utils/arrayUtils';

export interface Interval {
  value: string[];
  name: string;
}
//INFO: +/-: direccion, 2: distancia notas, P/M/m/A/dd/d?: justa/mayor/menor/aumentado/disminuido/? (semitonos)
//const almostAllIntervals = ['1P', '2m', '2M', '3m', '3M', '4P', '4A', '5P', '6m', '6M', '7m', '7M'];

export const getIntervals = (): Interval[] => {
  const tonic = 'C';
  const octave = '3';
  const pattern = 'major';
  const modes = ToneScale.modeNames(tonic + octave + ' ' + pattern);
  const scaleList = modes.map(([root, name]) => ToneScale.get([root, name]));
  const noteList = scaleList[0].notes; //major
  setNotes(noteList);

  const intervalsSet = new Set<string>();
  const allPosbileIntervals = noteList.map(
    (firstnote) => noteList.map((secondnote) => ToneInterval.distance(firstnote, secondnote).slice(-2)) //slice es para quitar la direccion
  );
  allPosbileIntervals.forEach((intervalList) => intervalList.forEach((item) => intervalsSet.add(item)));
  const intervals = Array.from(intervalsSet).sort();
  setOptions(
    intervals.map((s) => {
      return { displayName: s, isSelected: true };
    })
  );

  const n1 = getRandomItem(noteList);
  const n2 = getRandomItem(noteList); // TO DO: ¿que esta nota sea siempre mayor?
  const value = { note1: n1, note2: n2 };
  const name = ToneInterval.distance(value.note1, value.note2).slice(-2);
  const answer = { name, value };
  setAnswer(answer);
  s;
};
