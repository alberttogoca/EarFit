import { ConfigurationPlaceholder } from 'components/Configuration';
import { Title } from 'components/Exercise';
import Layout from 'components/Layout';
import { Piano as PianoComponent } from 'components/Piano';
import React from 'react';

export default function Piano(): JSX.Element {
  return (
    <>
      <Layout rightColumn={<ConfigurationPlaceholder page="Piano"></ConfigurationPlaceholder>}>
        <Title>Piano</Title>
        <PianoComponent firstNote="c3" lastNote="b4" />
      </Layout>
    </>
  );
}
