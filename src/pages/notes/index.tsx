import { Exercise } from 'components/Exercise';
import { Menu } from 'components/Menu';
import { Options } from 'components/Options';
import PageLayout from 'components/PageLayout';
import { useAnswerButtons, useNotes, usePlayButton, useStreak } from 'hooks';
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

  function handleAnswerButtonClick(selectedOption: Selectable): boolean {
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
    <PageLayout
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
        selectables={answerButtons}
        handleAnswerButtonClick={handleAnswerButtonClick}
        streak={streak}
      />
    </PageLayout>
  );
}
