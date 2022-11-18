import { ComponentMeta, ComponentStory } from '@storybook/react';

import TeamBlock from '@/components/makers/TeamBlock';

export default {
  component: TeamBlock,
} as ComponentMeta<typeof TeamBlock>;

const Template: ComponentStory<typeof TeamBlock> = (args) => <TeamBlock {...args} />;

export const Basic = Template.bind({});
Basic.args = {
  title: 'SOPT Playground Team',
  description: 'SOPT 구성원들을 위한 서비스를 만들어요.',
  children: '',
};
Basic.storyName = '기본';
