import React from 'react';
import View from '../../vendor/components/layout/View';
import AppAnimation from '../../vendor/components/ui/animation/AppAnimation'; // bootstrap Classes compiler

const RewardBackground: React.FC = () => (
  <View size={100}>
    <AppAnimation folder="fruits" />
  </View>
);

export default RewardBackground;
