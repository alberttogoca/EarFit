import { Exercise } from 'components/Exercise';
import PageLayout from 'components/Layout/PageLayout';
import { Menu } from 'components/Menu';
import { Options } from 'components/Options';
import { useAnswerButtons, useAnswerToggles, useNotes, usePlayButton, useScaleDropdown } from 'hooks';

export default function Notes(): JSX.Element {
  const { scalesNames, selectedScale, setNewSelectedScale } = useScaleDropdown();
  const { notes, setNewNotes, answer, setNewAnswer } = useNotes(selectedScale); //Esto a contexto?
  const { playNote } = usePlayButton();
  const { updateIsSelected, selectAllOrThree } = useAnswerToggles(notes, setNewNotes);
  const { answerButtons, handleAnswerButtonClick, streak } = useAnswerButtons(notes, answer, setNewAnswer, playNote);

  return (
    <PageLayout
      leftCol={<Menu />}
      rightCol={
        <Options
          answerToggles={notes}
          scalesNames={scalesNames}
          selectedScale={selectedScale}
          handleDropdownScaleSelect={setNewSelectedScale}
          handleToggleAllChange={selectAllOrThree}
          handleToggleButtonChange={updateIsSelected}
        />
      }
    >
      <Exercise
        title="Notes"
        playButtonLabel="Note?"
        handlePlayButtonClick={() => playNote(answer)}
        answerButtons={answerButtons}
        handleAnswerButtonClick={handleAnswerButtonClick}
        streak={streak}
      />
    </PageLayout>
  );
}
