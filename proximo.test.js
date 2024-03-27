import {test,expect} from 'vitest';

test('o proximo (0) retorna 1', ()=>{
    expect(proximo(0)).toBe(1);
});
test('o proximo (1) retorna 3', ()=>{
    expect(proximo(1)).toBe(3);
});
test('o proximo (2) retorna 5', ()=>{
    expect(proximo(2)).toBe(5);
});
test('o proximo (3) retorna 4', ()=>{
    expect(proximo(3)).toBe(4);
});
test('o proximo (4) retorna 6', ()=>{
    expect(proximo(4)).toBe(6);
});