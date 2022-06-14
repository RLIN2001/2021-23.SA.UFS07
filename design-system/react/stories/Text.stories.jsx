import React from 'react';
import { Text } from '../src/atoms/text/Text';

export default {
    title: 'Example/Atoms/Text',
    component: Text,
    // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
    argTypes: {
    //   backgroundColor: { control: 'color' },
    },
  };

  const Template = (args) => <Text {...args} />;

  export const txt = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
  txt.args = {
   label: ':)',
};

  
