import React from 'react';

import Title from "../components/Title";
export default {
    title: 'Texts/Title',
    component: Title,
};

const Template = (args) => <Title {...args} />;

export const Default = Template.bind({});
Default.args = {
    text: 'Merhaba',
    size:"small",
};

export const Medium = Template.bind({});
Medium.args = {
    size: 'medium',
    text: 'Medium Text',
};
export const Large = Template.bind({});
Large.args = {
    size: 'large',
    text: 'LArge Text',
};


export const WithClick = Template.bind({});
WithClick.args = {
    size: 'large',
    text: 'LArge Text',
    onClick:()=>{console.log('Tıklandı')}
};


