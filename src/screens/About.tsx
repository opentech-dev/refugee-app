import { A } from '@expo/html-elements';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Text } from 'react-native-paper';

import AboutLogo from '../../assets/about-logo.svg';

const About = () => {
  return (
    <View style={styles.container}>
      <Text>
        Welcome to the UnitySpeak app, dedicated to providing invaluable
        language assistance to refugees in the Republic of Moldova. Our mission
        is to offer an efficient language assistant tool catering to speakers of
        Ukrainian, Russian, English, and Arabic. Developed by the{' '}
        <A style={styles.link} href="https://ccr.md/">
          Charity Centre for Refugees
        </A>{' '}
        , this Pocket Guide language assistant is supported by the{' '}
        <A style={styles.link} href="https://www.unhcr.org/">
          United Nations High Commissioner for Refugees
        </A>{' '}
        <A
          style={styles.link}
          href="https://www.unhcr.org/countries/republic-moldova"
        >
          (UNHCR Moldova)
        </A>
        .{'\n\n'}
        The Charity Centre for Refugees (CCR) stands as a non-governmental,
        non-profit organization, committed to facilitating the pre-integration
        of asylum-seekers and fostering the integration of refugees and
        beneficiaries of humanitarian protection into Moldovan society. Since
        its establishment in November 1999, CCR has upheld a mission centered on
        community-based activities, promoting self-reliance through employment,
        and raising awareness about the challenges and potential of those
        seeking refuge. Join us in making a positive impact on the lives of
        those in need.
      </Text>
      <View style={styles.footerContainer}>
        <Text style={styles.footerText}>Founded by</Text>
        <AboutLogo />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 24,
  },
  footerContainer: {
    marginTop: 16,
    display: 'flex',
    gap: 8,
    alignItems: 'flex-end',
  },
  footerText: {
    textAlign: 'right',
  },
  link: {
    color: '#1D4ED8',
    textDecorationLine: 'underline',
  },
});

export default About;
