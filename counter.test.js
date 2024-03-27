import {test, expect} from 'vitest';

test ('teste de div', ()=>{

    const div = document.createElement('div');
    div.textContent = "Hello, World";
    expect(div).toHaveTextContent("Hello, World");


});