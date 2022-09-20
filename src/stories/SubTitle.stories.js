import React from 'react';

import SubTitle from "../components/SubTitle";
export default {
    title: 'Texts/SubTitle',
    component: SubTitle,
    argTypes: {
        size: {
            options: ['small', 'medium','large'],
            control: { type: 'select' },
        },
        fontSize:{
            control: {type:'number'}
        }
    },
};

const Template = (args) => <SubTitle {...args} />;

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

export const BackgroundColor = Template.bind({});
BackgroundColor.args = {
    size: 'large',
    text: 'LArge Text',
    onClick:()=>{console.log('Tıklandı')},
    bgColor:"#d16"
};


export const WithClick = Template.bind({});
WithClick.args = {
    size: 'large',
    text: 'LArge Text',
    onClick:()=>{console.log('Tıklandı')}
};


export const WithBadge = Template.bind({});
WithBadge.args = {
    size: 'large',
    text: 'LArge Text',
    onClick:()=>{console.log('Tıklandı')},
    showBadge:true
};


export const WithFontSize = Template.bind({});
WithFontSize.args = {
    size: 'large',
    text: 'LArge Text',
    onClick:()=>{console.log('Tıklandı')},
    showBadge:true,
    fontSize:15
};


