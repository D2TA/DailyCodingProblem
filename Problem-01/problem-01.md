## Problem #1:
Given an array of integers, return a new array such that each element at index i of the new array is the product of all the numbers in the original array except the one at i.

For example, if our input was [1, 2, 3, 4, 5], the expected output would be [120, 60, 40, 30, 24]. If our input was [3, 2, 1], the expected output would be [2, 3, 6].

**Solution:**
Thought Process:

- For a brute force solution, we can ask the user for an array of numbers then cycle through each element in the array and use another loop to take the product of each number.

- For a slightly more elegant solution, we can take the product of each element in the array and then create a new array by the total array product divided by the element from the original array.
    - In part 1 of the solution, the reduce() method and the ArrayProduct() function are used to calculate the product of the array
    - In part 2 of the solution, the map() method and the ArrayDivisor() function are used to cycle through each element of the inital array and perform the calculation (divide).
    - The reason why we calculate the product of the array is due to the Common Denominator formula.