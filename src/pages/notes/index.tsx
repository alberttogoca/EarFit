import { Exercise } from 'components/Exercise';
import PageLayout from 'components/Layout/PageLayout';
import { Menu } from 'components/Menu';
import { Options } from 'components/Options';
import { useAnswer, useAnswerButtons, useAnswerToggles, useNotes, useNotesScales, usePlayButton } from 'hooks';
import { GetStaticProps } from 'next';
import { getNotesScales } from 'services/scaleService';

export default function Notes({ scales }: Props): JSX.Element {
  const { selectedScale, setNewSelectedScale } = useNotesScales(scales);
  const { notes } = useNotes(selectedScale);
  const { playNote } = usePlayButton();
  const { items, updateIsSelected, selectAllOrThree } = useAnswerToggles(notes);
  const { answer, setNewAnswer } = useAnswer(items);
  const { answerButtons, handleAnswerButtonClick, streak } = useAnswerButtons(items, answer, setNewAnswer);

  return (
    <PageLayout
      leftCol={<Menu />}
      rightCol={
        <Options
          answerToggles={items}
          scalesNames={scales}
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

interface Props {
  scales: string[];
}

export const getStaticProps: GetStaticProps<Props> = () => {
  const scales = getNotesScales();
  return {
    props: {
      scales,
    },
  };
};
