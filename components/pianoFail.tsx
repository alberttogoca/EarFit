import { Piano, KeyboardShortcuts, MidiNumbers } from "react-piano";
import SoundfontProvider from "./SoundfontProvider";
import "./piano.module.css";
// webkitAudioContext fallback needed to support Safari
const audioContext = new (window.AudioContext || window.webkitAudioContext)();

const noteRange = {
  first: MidiNumbers.fromNote("c3"),
  last: MidiNumbers.fromNote("f4"),
};
const keyboardShortcuts = KeyboardShortcuts.create({
  firstNote: noteRange.first,
  lastNote: noteRange.last,
  keyboardConfig: KeyboardShortcuts.HOME_ROW,
});

export default function BasicPiano(props) {
  return (
    <SoundfontProvider
      instrumentName="acoustic_grand_piano"
      audioContext={audioContext}
      render={({isLoading, playNote, stopNote, stopAllNotes}) => (
        <Piano
          noteRange={noteRange}
          width={300}
          playNote={playNote}
          stopNote={stopNote}
          stopAllNotes={stopAllNotes}
          disabled={isLoading}
          keyboardShortcuts={keyboardShortcuts}
          {...props}
        />
      )}
    />
  );
}



