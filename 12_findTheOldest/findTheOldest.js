const findTheOldest = function (people) {
    people.map(obj => {
        let age = 0;
        if ('yearOfDeath' in obj) {
            age = obj.yearOfDeath - obj.yearOfBirth;
            
        } else {
            const currentYear = new Date().getFullYear();
            age = currentYear - obj.yearOfBirth;
        }
        obj.age = age;
    });
    people.sort((a, b) => b.age - a.age);
    people.map(obj => delete obj.age);
    return people[0];
};
// Do not edit below this line
module.exports = findTheOldest;
