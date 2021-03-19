// See https://github.com/danigb/soundfont-player
// for more documentation on prop options.
import React, { useState, useEffect } from 'react';
import Soundfont from 'soundfont-player';

export default function SoundfontProvider(instrumentName: string, audioContext: AudioContext, render?) {
  
  const [instrument, setInstrument] = useState<Soundfont.Player|undefined>(undefined);
  const [activeAudioNodes, setAudioNotes] = useState({});

  useEffect(() => {
      loadInstrument(instrumentName);
  }, []);


  const loadInstrument = async (instrumentName: any) => {
    // Re-trigger loading state
    setInstrument(undefined);
    const newInstrument = await Soundfont.instrument(audioContext, instrumentName, {})
    setInstrument(newInstrument);
  };

  const playNote = async (note: string) => {
    await audioContext.resume()
    const audioNode = instrument.play(note);
    setAudioNotes(Object.assign({}, activeAudioNodes, {[note]: audioNode,}));
  };

  const stopNote = async (note: string) => {
    await audioContext.resume()
    if (!activeAudioNodes[note]) {
      return;
    }
    const audioNode:Soundfont.Player = activeAudioNodes[note];
    audioNode.stop();
    setAudioNotes(Object.assign({}, activeAudioNodes, {[note]: undefined,}));
  };

  // Clear any residual notes that don't get called with stopNote
  const stopAllNotes = async () => {
    await audioContext.resume()
    const AudioNodes:Soundfont.Player[] = Object.values(activeAudioNodes);
    AudioNodes.forEach(node => {
      if (node) {node.stop();}
    });
    setAudioNotes({});
  };

  if(render){
    return (
      render({instrument, playNote, stopNote, stopAllNotes})
      )
  }else{
    return ({instrument, playNote, stopNote, stopAllNotes})
}
  
}

