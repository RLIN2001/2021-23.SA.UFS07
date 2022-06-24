import React from 'react';
import { Text } from '../src/atoms/text/Text';
import { Paragraph} from '../src/molecules/paragraph/Paragraph';

export default {
    title: 'Example/Molecules/Paragraph',
    component: Paragraph,
    // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
    argTypes: {
    },
  };

  const Template = (args) => <Paragraph {...args} />;

  export const Par = Template.bind({});
Par.args = {
   children:<><Text label={'label'}></Text><Text label={'label'}></Text></>,
};

export const Pars=Template.bind({});
const a=Text({label:"ciaooo"});
Pars.args={
  children:a,
}

