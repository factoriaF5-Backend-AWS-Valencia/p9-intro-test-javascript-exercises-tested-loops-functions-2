import {describe, it} from 'vitest';
import assert from 'node:assert/strict';
import { getNumbers, getFruits, getEvenNumbers, getPersonDetails, getMultiplicationTable 
    , fizzBuzz, sumArray
} from './04-Loops.js';
import {addNumbers, findMax, countVowels, getSquareRoot} from './06-Functions.js';


describe('Loops', function() {
    it('should return an array with numbers from 1 to 10', function() {
        const result = getNumbers();
        assert.deepEqual(result, [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
    });
    //---------------------
    it('should return an array with the same fruits', function() {
        const fruits = ["apple", "banana", "cherry"];
        const result = getFruits(fruits);
        assert.deepEqual(result, ["apple", "banana", "cherry"]);
    });
    //---------------------
    it('should return an array with even numbers from 2 to 20', function() {
        const result = getEvenNumbers();
        assert.deepEqual(result, [2, 4, 6, 8, 10, 12, 14, 16, 18, 20]);
    });
    //---------------------
    it('should return an array of person details', function() {
        const person = { name: "John", age: 25, isStudent: true };
        const result = getPersonDetails(person);
        assert.deepEqual(result, ["name: John", "age: 25", "isStudent: true"]);
    });
    //---------------------
    it('should return a 10x10 multiplication table', function() {
        const result = getMultiplicationTable();
        assert.equal(result.length, 10);
        assert.deepEqual(result[0], [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
        assert.deepEqual(result[9], [10, 20, 30, 40, 50, 60, 70, 80, 90, 100]);
    });
    //---------------------
    it('should return an array with Fizz, Buzz, and FizzBuzz', function() {
        const result = fizzBuzz();
        assert.equal(result[2], 'Fizz');
        assert.equal(result[4], 'Buzz');
        assert.equal(result[14], 'FizzBuzz');
    });
    //---------------------
    it('should return the sum of an array', function() {
        const result = sumArray([10, 20, 30, 40, 50]);
        assert.equal(result, 150);
    });
});

describe('Functions', function() {
    it('should return the sum of two numbers', function() {
        assert.equal(addNumbers(2, 3), 5);
        assert.equal(addNumbers(-1, 1), 0);
    });
    //---------------------
    it('should return the maximum number in the array', function() {
        assert.equal(findMax([1, 2, 3, 4, 5]), 5);
        assert.equal(findMax([-1, -2, -3, -4]), -1);
        assert.equal(findMax([10, 10, 10]), 10);
    });
    //---------------------
    it('should return the number of vowels in the string', function() {
        assert.equal(countVowels('hello'), 2);
        assert.equal(countVowels('world'), 1);
        assert.equal(countVowels('aeiou'), 5);
    });
    //---------------------
    it('should return the square root of a function', function() {
        assert.equal(getSquareRoot(9), 81);
        assert.equal(countVowels(0), 0);
    });
});
