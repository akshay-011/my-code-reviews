const people = [
  {
    name: "Rahul",
    age: 25,
    profession: "software Engineer",
    place: "Pune",
    interests: ["Board Games", "gardening"],
    pets: [
      {
        type: "Dog",
        name: "Max",
        age: 4,
        favouriteAct: ["loves playing fetch in the park"],
        isVaccinated: true,
      },
    ],
    isEmployed: true,
    hasCar: true,
    study: "computer science",
    extraSkills: "football",
    hobbies: ["chess", "gardening"],
  },
  {
    name: "Ananya",
    age: 30,
    profession: "chef",
    place: "Bangalore",
    interests: ["cooking"],
    pets: [
      {
        type: "Parrot",
        name: "Kiwi",
        age: 12,
        favouriteAct: [],
        isVaccinated: true,
      },
    ],
    isEmployed: false,
    hasCar: false,
    study: "computer science",
    extraSkills: "graphic design",
    hobbies: ["experiments with Italian recipes"],
  },
  {
    name: "Ramesh",
    age: 45,
    profession: "Business owner",
    place: "Jaipur",
    interests: ["gardening", { books: "historical fiction" }], // change it with specific interests
    pets: [
      {
        type: "cat",
        name: "Bella",
        age: 3,
        favouriteAct: ["love lounging in the sun"],
        isVaccinated: true,
      },
      {
        type: "cat",
        name: "leo",
        age: 3,
        favouriteAct: ["love lounging in the sun"],
        isVaccinated: true,
      },
    ],
    isEmployed: true,
    hasCar: false,
    study: "",
    extraSkills: "",
    hobbies: ["gardening", "reading"],
  },
  {
    name: "Kavya",
    age: 28,
    profession: "Professional Dancer",
    place: "Chennai",
    interests: ["sci - fi", { books: "fantasy novels" }],
    pets: [
      {
        type: "rabbit",
        name: "Snowy",
        age: 2,
        favouriteAct: ["hopping around her backyard", "nibbling on carrots"],
        isVaccinated: true,
      },
    ],
    isEmployed: false,
    hasCar: false,
    study: "",
    extraSkills: "",
    hobbies: ["binge-watching sci-fi", "reading"],
  },
];

const getPet = (people) => {
  return people.flatMap(({ pets }) => pets);
};

const pets = getPet(people);

// 1. How many individuals are currently employed?

const getEmployedCount = (people) => {
  return people.filter(({ isEmployed }) => isEmployed).length;
};

// 2. How many people own a car?

const getCarOwnersCount = (people) => {
  return people.filter(({ hasCar }) => hasCar).length;
};

// 3. How many pets are fully vaccinated?
const getVaccinatedPetCount = (pets) => {
  return pets.filter(({ isVaccinated }) => isVaccinated).length;
};

// 4. What are the names of all the pets, and what type of animal is each?
const getPetInfo = (pets) => {
  return pets.map((pet) => {
    const { name, type } = pet;
    return { name, type };
  });
};

// 5. Which cities do the individuals live in?
const getPlace = (people) => {
  return people.map(({ place }) => place);
};

// 6. How many hobbies are shared across the group? What are they?
const fetchHobbies = (people) => {
  const hobbies = people.flatMap(({ hobbies }) => hobbies);
  return { hobbies: hobbies, length: hobbies.length };
};

// 7. How many pets belong to people who are currently unemployed?
const countPets = (people) => {
  return people.filter(({ isEmployed }) => !isEmployed).map(({ pets }) => pets)
    .length;
};

// 8. What is the average age of the individuals mentioned in the passage?
const getAverageAge = (people) => {
  return people.reduce((sum, { age }) => sum + age, 0) / people.length;
};

// 9. How many individuals have studied computer science, and how many of them have pets?

const countCSPetOwners = (people) => {
  return people
    .filter(({ study }) => study === "computer science") // study.includes(computer science)
    .filter(({ pets }) => pets).length;
};

// 10. How many individuals own more than one pet?
const getMultiPetOwners = (people) => {
  return people.filter(({ pets }) => pets.length > 1).length;
};

// 11. Which pets are associated with specific favorite activities?
const petsWithFavActivities = (pets) => {
  return pets
    .filter(({ favouriteAct }) => favouriteAct.length !== 0)
    .map(({ name }) => name);
};

// 12. What are the names of all animals that belong to people who live in Bangalore or Chennai?

const getPeopleFromBangaloreChennai = (people) => {
  return people
    .filter(({ place }) => ["Bangalore", "Chennai"].includes(place))
    .map(({ name }) => name);
};

// 13. How many vaccinated pets belong to people who do not own a car?

const countVaccinatedPetsWithoutCarOwners = (people) => {
  return people.filter(({ hasCar }) => !hasCar).flatMap(({ pets }) => pets)
    .length;
};

// const peopleWithNoCar = people.filter((person) => !person.hasCar);
// const peopleWithVaccinatedPet = peopleWithNoCar.filter((person) =>
//   person.pets.map((pet) => pet.isVaccinated)
// ).length;

// console.log(peopleWithVaccinatedPet);

// 14. What is the most common type of pet among the group?

const someFunction = function (object, pet) {
  object[pet] = (object[pet] || 0) + 1;

  return object;
};

const commonTypes = function () {
  const petTypes = people.flatMap((person) =>
    person.pets.map(({ type }) => type)
  );

  return petTypes.reduce(someFunction, {});
};

const commonPet = commonTypes();

const newCommonPet = Object.entries(commonPet);
const max = newCommonPet.reduce(
  (count, pet) => Math.max(count, pet[1]),
  -Infinity
);

newCommonPet.filter((pet) => pet[1] === max)[0][0];

// 15. How many individuals have more than two hobbies?

const peopleWithMultiHobbies = (people) => {
  return people.filter(({ hobbies }) => hobbies.length > 2).length;
};

// 16. How many individuals share at least one hobby with Ramesh?

const countPeopleWithSharedHobbiesRamesh = (people) => {
  const rameshHobbies = people[2].hobbies;
  const allHobbies = people.flatMap(({ hobbies }) => hobbies);

  const numberOfPeople =
    allHobbies.filter((hobbies) =>
      hobbies.some((hobby) => rameshHobbies.includes(hobby))
    ).length - 1;

  return numberOfPeople;
};

// 17. Which pet is the youngest, and what is its name?

const findYoungestPet = (pets) => {
  const ageOfPets = pets.map((pet) => pet.age);
  const minAge = ageOfPets.reduce((min, age) => Math.min(min, age), Infinity);

  const petWithMinAge = pets
    .filter((pet) => pet.age === minAge)
    .map((pet) => pet.name)
    .join();

  return petWithMinAge;
};

// 18. What types of books are mentioned as interests, and who reads them?
// historical fantasy novels , ramesh and kavya

people.map((person) => person.interests.map());

// 19. How many individuals live in cities starting with the letter "B"?

const countPeopleInCitiesStartingWithB = (people) => {
  return people.filter(({ place }) => place.startsWith("B")).length;
};

// 20. Which individuals do not own any pets?

const getPeopleWithNoPets = (people) => {
  return people.filter(({ pets }) => pets.length === 0);
};
