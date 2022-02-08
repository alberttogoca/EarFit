import { Exercise } from 'components/Exercise';
import Layout from 'components/Layout';
import { Menu } from 'components/Menu';
import { Options } from 'components/Options';
import { useAnswerButtons, useNotes, usePlayButton, useStreak } from 'hooks';
import AnswerButton from 'utils/AnswerButton';
import Selectable from 'utils/Selectable';

export default function Notes(): JSX.Element {
  const {
    notes,
    answer,
    scalesNames,
    selectedScale,
    setNewAnswer,
    updateIsSelected,
    selectAllOrThree,
    setNewSelectedScale,
  } = useNotes();
  const { instrument, playNote } = usePlayButton();
  const { answerButtons, updateAnswerButtonColor, clearAnswerButtonColor } = useAnswerButtons(notes);
  const { streak, clearStreak, IncrementStreak } = useStreak();
  //  const { answerButtonSelector } = useAnswerButtonSelector(notes);

  function handleAnswerButtonClick(selectedOption: AnswerButton): boolean {
    if (selectedOption.id === answer.id) {
      setNewAnswer();
      updateAnswerButtonColor(selectedOption, true);
      IncrementStreak();
      playNote(answer);

      setTimeout(() => {
        clearAnswerButtonColor();
      }, 1000);

      return true;
    } else {
      updateAnswerButtonColor(selectedOption, false);
      clearStreak();
      return false;
    }
  }

  return (
    <Layout
      leftCol={<Menu />}
      rightCol={
        <Options
          selectables={notes} //answerButtonSelector
          scalesNames={scalesNames}
          selectedScale={selectedScale}
          handleToggleAllChange={selectAllOrThree}
          handleToggleButtonChange={(note: Selectable) => updateIsSelected(note.id, note.isSelected)}
          handleDropdownScaleSelect={(selectedScale: string) => setNewSelectedScale(selectedScale)}
        />
      }
    >
      <Exercise
        title="Notes"
        playButtonLabel="Note?"
        instrument={instrument}
        handlePlayButtonClick={() => playNote(answer)}
        answerButtons={answerButtons}
        handleAnswerButtonClick={handleAnswerButtonClick}
        streak={streak}
      />
    </Layout>
  );
}
