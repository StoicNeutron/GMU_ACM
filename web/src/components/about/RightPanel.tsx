import React, { useState } from 'react';
import {Flex} from '@mantine/core';

const styles = {
  container: {
    padding: 20,
    //outline: '1px solid black',
  },
  h3: {
    marginBottom: 15,
    marginTop: 20,
    fontWeight: 'bold',
  },
  ul: {
    listStyle: 'none',
    paddingLeft: 0,
  }
} as Record<string, React.CSSProperties>;

export default function Component() {

  return (
    <Flex flex={1} direction="column" style={styles.container}>
      <h3 style={styles.h3}>Project Leads</h3>
      <ul style={styles.ul}>
        <li>Pete Pongpeauk</li>
        <li>Samnang Thorn</li>
        <li>Amatak Yvi</li>
      </ul>
      <h3 style={styles.h3}>Contributors</h3>
      <ul style={styles.ul}>
        <li>Natasha Takahashi</li>
        <li>Jonas Kazimli</li>
        <li>Dalbir Kang</li>
      </ul>
      <h3 style={styles.h3}>Contact Information</h3>
      <ul style={styles.ul}>
        <li>Email: samnangt@acm.org</li>
      </ul>
      <h3 style={styles.h3}>Join our Discord</h3>
      <ul style={styles.ul}>
        <li>Link: <a href="https://discord.gg/eqCHp5t2">https://discord.gg/eqCHp5t2</a></li>
      </ul>
    </Flex>
  );
}
