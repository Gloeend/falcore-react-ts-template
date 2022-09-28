import React from 'react';
import pic from '@pictures/exam.png';
import c from './TestComponent.module.css';


export default function TestComponent() {

    let num: number = 2;
    let num2: number = 3;

    console.log(num + num2);

    return (
        <section className={c.section}>
            <h1>Test</h1>
            <img src={pic} alt="pic" />
        </section>
    )
}
