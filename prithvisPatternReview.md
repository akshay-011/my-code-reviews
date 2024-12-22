# Akshay's review
## simple mistakes
- put early exit at the begining, line number 171 onwards
```js
  if (areRowOrColumnEmpty(dimensions)) {
    return '';
  }

  const patterns = {
    'filled-rectangle': filledRectangle,
    'hollow-rectangle': hollowRectangle,
    'alternating-rectangle': alternatingRectangle,
    'triangle': triangle,
    'right-aligned-triangle': rightAngledtriangle,
    'spaced-alternating-rectangle': spacedAlternatingRectangle,
    'diamond': diamond,
  };
```

- unnecessary variables declarations & some improvement
```js
  const diamond = function (dimension) {
    if (dimension[0] === 1) {
      return [STAR];
    }

    const size = validOddNumber(dimension[0]);

    const rowCounts = requiredArray(size, 2);
    const moti = rowCounts.map(diamondShape(size));
    return moti;
  };
```
  here you don't need moti variable, by the way what is moti better thing to do
  ```js 
    return rowCounts.map(diamondShape(size));
  ```
  and **if dimension[0] is 1 or 2 it is still a star**i hope you understood

- 

## Name issues
- the name `validOddNumber()` is not good name, this function making any number
into odd right? name appropriatly

- `requiredArray(size, 2)` this function is giving base numbers of your diamond
right, this name is kinda confusing.

- this function is not `getRow()` **Jayanth gave a name for this** remember find it

```js
  const getRow = function (char) {
    return function (times) {
      return char.repeat(times);
    };
  };
```

## My observations
- you have this function so called `getRow()`, can't make a function to repeat
stars, and spaces i think it will much helpfull