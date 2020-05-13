import * as React from 'react';
import {FC} from 'react';

interface GreetingsProps{
    name: string;
    lastname: string;
}

const Greetings : FC<GreetingsProps> = ({name, lastname}) => (
<h1>Hello, {name} {lastname}</h1>
);


export default Greetings;

/*
interface GreetingsProps{
    name: string;
    lastname: string;
}

const Greetings : FC<GreetingsProps> = ({name:string, lastname:string}) => (
    <h1>Hello, {name} {lastname}</h1>
);
*/

