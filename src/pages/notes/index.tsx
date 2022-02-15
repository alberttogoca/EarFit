import { Exercise } from 'components/Exercise';
import PageLayout from 'components/Layout/PageLayout';
import { Menu } from 'components/Menu';
import { Options } from 'components/Options';
import { useNotes } from 'hooks';
import Selectable from 'utils/Selectable';

export default function Notes(): JSX.Element {
  const {
    title,
    answerToggles,
    answerButtons,
    answer, //sacar al playButton
    scalesNames,
    selectedScale,
    updateIsSelected,
    selectAllOrThree,
    setNewSelectedScale,
    handleAnswerButtonClick,
    streak,
    label,
    playNote,
  } = useNotes();

  return (
    <PageLayout
      leftCol={<Menu />}
      rightCol={
        <Options
          answerToggles={answerToggles}
          scalesNames={scalesNames}
          selectedScale={selectedScale}
          handleToggleAllChange={selectAllOrThree}
          handleToggleButtonChange={(note: Selectable) => updateIsSelected(note.id, note.isSelected)}
          handleDropdownScaleSelect={(selectedScale: string) => setNewSelectedScale(selectedScale)}
        />
      }
    >
      <Exercise
        title={title}
        playButtonLabel={label}
        handlePlayButtonClick={() => playNote(answer)}
        answerButtons={answerButtons}
        handleAnswerButtonClick={handleAnswerButtonClick}
        streak={streak}
      />
    </PageLayout>
  );
}
