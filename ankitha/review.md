# Akshay's Review

## Structure Issues

- I think study should be an array you can have multiple studies

## Code my suggestions

- In this

```js
// 8. What is the average age of the individuals mentioned in the passage?
const getAverageAge = (people) => {
  return people.reduce((sum, { age }) => sum + age, 0) / people.length;
};
```

you are getting age and getting sum what i will do is

```js
const add = (num1, num2) => num1 + num2;

const getAverageAge = (people) => {
  const peopleAge = people.map(({ age }) => age);
  return peopleAge.reduce(add) / people.length;
};
```

- because your functions is doing two work at the same time mine is not

- **If you are not completed your code why did you send it to me😅**

```js const countCSPetOwners = (people) => {
  return people
    .filter(({ study }) => study === "computer science") // study.includes(computer science)
    .filter(({ pets }) => pets).length;
};

```

- bro you made a resuable function and not using it

```js
const getPet = (people) => {
  return people.flatMap(({ pets }) => pets);
};
```

this function you can use it in here only

```js
const countVaccinatedPetsWithoutCarOwners = (people) => {
  return people.filter(({ hasCar }) => !hasCar).flatMap(({ pets }) => pets)
    .length;
};
```

- this answer is wrong it should count vaccinated pets right

- this is bad of other way to do this thing

```js
const commonPet = commonTypes();

const newCommonPet = Object.entries(commonPet);
const max = newCommonPet.reduce(
  (count, pet) => Math.max(count, pet[1]),
  -Infinity
);

newCommonPet.filter((pet) => pet[1] === max)[0][0];
```

- direct return, you don't have to store this into a variable

```js
const countPeopleWithSharedHobbiesRamesh = (people) => {
  const rameshHobbies = people[2].hobbies;
  const allHobbies = people.flatMap(({ hobbies }) => hobbies);

  const numberOfPeople =
    allHobbies.filter((hobbies) =>
      hobbies.some((hobby) => rameshHobbies.includes(hobby))
    ).length - 1;

  return numberOfPeople;
};
```

instead of this just do this

```js
return (
  allHobbies.filter((hobbies) =>
    hobbies.some((hobby) => rameshHobbies.includes(hobby))
  ).length - 1
);
```

- try to improve this code

```js
const findYoungestPet = (pets) => {
  const ageOfPets = pets.map((pet) => pet.age);
  const minAge = ageOfPets.reduce((min, age) => Math.min(min, age), Infinity);

  const petWithMinAge = pets
    .filter((pet) => pet.age === minAge)
    .map((pet) => pet.name)
    .join();

  return petWithMinAge;
};
```
