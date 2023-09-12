import React from 'react';
import { bootstrapClass } from '../../utils/code-helper';
import Layout from './Layout';
import View from './View';
import { Colours } from '../../../src/styles/colours';
import FAIcon from '../ui/FAIcon'; // bootstrap Classes compiler

// bootstrap Classes compiler
const classNames = {
  title: bootstrapClass(['fs-1', 'fw-bolder']),
  subTitle: bootstrapClass([
    'display-1',
    'Font-Hello-Headline-Regular',
    'mb-3',
  ]),
  label: bootstrapClass(['badge', 'bg-dark', 'text-warning', 'px-5']),
};

// javascript element.style.[parameters]
const styles = {
  shadow: {
    fontStyle: 'bold',
    textShadow: '1pt 1pt 1pt rgba(40,40,40,0.33)',
  },
};

const MicroSiteTokenMissing: React.FC = () => (
  <Layout
    title="Unauthorized"
    backgroundColor={Colours.danger}
    textColor={Colours.white}
  >
    <View size={100}>
      <View className={classNames.title}>Micro Site Token</View>
      <View className={classNames.subTitle} style={styles.shadow}>
        MISSING
      </View>
      <View style={styles.shadow}>
        <FAIcon icon="times" size={100} color="warning" />
      </View>
      <View className={classNames.label}>403 - Unauthorized</View>
    </View>
  </Layout>
);

export default MicroSiteTokenMissing;
