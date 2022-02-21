import { Exercise } from 'components/Exercise';
import PageLayout from 'components/Layout/PageLayout';
import { Menu } from 'components/Menu';
import { Options } from 'components/Options';
import { useAnswer, useAnswerButtons, useAnswerToggles, useNotes, useNotesScales, usePlayButton } from 'hooks';
import { GetStaticProps } from 'next';
import { getScaleNames } from 'services/scaleService';

export default function Notes({ scaleNames }: Props): JSX.Element {
  const { selectedScale, setNewSelectedScale } = useNotesScales(scaleNames);
  const { notes } = useNotes(selectedScale);
  const { playNote } = usePlayButton();
  const { answerToggles, updateIsSelected, selectAllOrThree } = useAnswerToggles(notes);
  const { answer, setNewAnswer } = useAnswer(answerToggles.filter((s) => s.isSelected));
  const { answerButtons, handleAnswerButtonClick, streak } = useAnswerButtons(
    answerToggles,
    answer,
    setNewAnswer,
    playNote
  );

  return (
    <PageLayout
      leftCol={<Menu />}
      rightCol={
        <Options
          answerToggles={answerToggles}
          scalesNames={scaleNames}
          selectedScale={selectedScale}
          handleScaleDropdownChange={setNewSelectedScale}
          handleAnswerToggleAllChange={selectAllOrThree}
          handleAnswerTogglesChange={updateIsSelected}
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

interface Props {
  scaleNames: string[];
}

export const getStaticProps: GetStaticProps<Props> = () => {
  const scaleNames = getScaleNames();
  return {
    props: {
      scaleNames,
    },
  };
};
