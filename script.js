function createInstructor(firstName, lastName) {
    return {
        firstName: firstName,
        lastName: lastName
    }
}

// Write an ES2015 Version

function createInstructorNew(firstName, lastName) {
    return {
        firstName,
        lastName
    };
}

// Computed Property Names
var favoriteNumber = 42;

var instructor = {
    firstName: "Colt"
}

// Write an ES2015 Version
instructor[favoriteNumber] = "That is my favorite!"

const instructorNew = {
    firstName: 'Colt',
    [favoriteNumber]: "That is my favorite!"
}

// Object Methods

var instructorMethod = {
    firstName: "Colt",
    sayHi: function () {
        return "Hi!";
    },
    sayBye: function () {
        return this.firstName + " says bye!";
    }
}

// Write an ES2015 Version
const instructorMethodNew = {
    firstName: 'Colt',
    sayHi() {
        return 'Hi!';
    },
    sayBye() {
        return this.firstName + ' says bye!';
    }
}

function createAnimal(species, verb, noise) {
    return {
        species,
        [verb]() { return noise }
    }
}
