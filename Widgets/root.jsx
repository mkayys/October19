import React from 'react';
import Clock from './frontend/clock';
import Tabs from './frontend/tabs';
import Weather from './frontend/weather';

const tabsArr = [{
    title: 'first',
    content: 'hello'
}, {
    title: 'second',
    content: 'goodbye'
}, {
    title: 'third',
    content: 'hey'
}]

const Root = (props) => {
    return (
        <div>
           <Clock />
           <Tabs tabsArr={tabsArr}/>
           <Weather />
        </div>
    )
};

export default Root;