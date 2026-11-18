const findTheOldest = function (people) {
    let sorting = false;
    people.map((person) => person.age = person.yearOfDeath - person.yearOfBirth);
    people.sort((a, b) => b.age - a.age);
    people.map((person) => {
        if (Number.isNaN(person.age)) {
            sorting = true;
        };
    });
    if (sorting === true) {
        people.sort((a, b) => a.yearOfBirth - b.yearOfBirth);
        sorting = false;
    }
    if (!Number.isNaN(people[0].age)) {
        people.sort((a, b) => b.age - a.age);
    };
    return people[0];
};

// Do not edit below this line
module.exports = findTheOldest;
