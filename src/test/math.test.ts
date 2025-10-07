// Primera palabra va a ser un nombre relacionado de lo que sera el test
// luego poner .test.ts
import { isEven, sum, calculateIVA} from "../helpers/utils";    

describe('utils/math', ()=>{
    test('sum function should return the sum of two numbers', ()=>{
        expect(sum(2,3)).toBe(5);
    });
    test('isEven function should return true if the number is even', ()=>{
        expect(isEven(4)).toBe(true);
        expect(isEven(5)).toBe(false);
    });
});


describe('math utils', ()=>{
    test('The function should return the nineteen porcent of the value', ()=>{
        expect(calculateIVA(100)).toBe(19);
        expect(calculateIVA(200)).toBe(38);
    });
});