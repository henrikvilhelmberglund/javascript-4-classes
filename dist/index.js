"use strict";
// ? First try - doesn't work 😱
// class Movie {
//   constructor(title: string, director:string) {
//     this.title = title;
//     this.director = director;
//   }
// }
// ? Second try - works! but a bit verbose maybe
// class Movie {
//   // Skapar egenskaper
//   title: string;
//   director: string;
//   constructor(title: string, director: string) {
//     this.title = title;
//     this.director = director;
//   }
// }
// ? Third try - implicit typing (inference)
// class Movie {
//   // Skapar egenskaper
//   title: string;
//   director: string;
//   releaseYear = 2023;
//   constructor(title: string, director: string, releaseYear: number) {
//     this.title = title;
//     this.director = director;
//     this.releaseYear = releaseYear;
//   }
// }
// const taken = new Movie("Taken", "Pierre Morelle", 2008);
// ? Fourth try - use readonly mechanism
// class Movie {
//   // Skapar egenskaper
//   readonly title: string;
//   director: string;
//   releaseYear = 2023;
//   constructor(title: string, director: string, releaseYear: number) {
//     this.title = title;
//     this.director = director;
//     this.releaseYear = releaseYear;
//   }
// }
// const taken = new Movie("Taken", "Pierre Morelle", 2008);
// taken.title = "Taken 2"
// // ? Fifth try - public and private (data hiding)
// class Movie {
//   // Skapar egenskaper - lägger till _ framför för att markera att det är privat
//   private readonly _title: string;
//   private _director: string;
//   private _releaseYear = 2023;
//   private _movieSecret: string;
//   // new way to set this private in both TS and JS
//   #rating: number;
//   constructor(title: string, director: string, releaseYear: number, rating: number) {
//     this._title = title;
//     this._director = director;
//     this._releaseYear = releaseYear;
//     this._movieSecret = "my secret";
//     this.#rating = rating;
//   }
//   // Getters to get the data (but a bit overkill)
//   get movieTitle() {
//     return this._title;
//   }
//   get movieDirector() {
//     return this._director;
//   }
//   get movieReleaseYear() {
//     return this._releaseYear;
//   }
//   public displaySecret() {
//     return this._movieSecret;
//   }
// }
// ? Sixth try - parameter shortcut, parameters properties
// class Movie {
//   // doesn't work for # though
//   #rating: number;
//   constructor(
//     private _title: string,
//     private _director: string,
//     private _releaseYear: number,
//     rating: number,
//     public length: number
//   ) {
//     this.#rating = rating;
//   }
//   // Getters to get the data (but a bit overkill)
//   get movieTitle() {
//     return this._title;
//   }
//   get movieDirector() {
//     return this._director;
//   }
//   get movieReleaseYear() {
//     return this._releaseYear;
//   }
// }
// const taken = new Movie("Taken", "Pierre Morelle", 2008, 6.8, 134);
// const title = taken.movieTitle;
// const director = taken.movieDirector;
// const releaseYear = taken.movieReleaseYear;
// ? Seventh try
class Movie {
    // doesn't work for # though
    constructor(title, director, releaseYear, _length) {
        this.title = title;
        this.director = director;
        this.releaseYear = releaseYear;
        this._length = _length;
    }
    // Getters to get the data (but a bit overkill)
    get movieInfo() {
        return `${this.title} - ${this.director} - ${this.releaseYear} - ${this._length}`;
    }
    set length(length) {
        // rimlighetslogik
        if (length > 240) {
            throw new Error("Alldeles för lång! Korta ner filmen!");
        }
        else {
            this._length = length;
        }
    }
}
const taken = new Movie("Taken", "Pierre Morel", 2008, 134);
taken.length = 134;
var HorrorMovieEnum;
(function (HorrorMovieEnum) {
    HorrorMovieEnum[HorrorMovieEnum["Slasher"] = 0] = "Slasher";
    HorrorMovieEnum[HorrorMovieEnum["Teenage"] = 1] = "Teenage";
    HorrorMovieEnum[HorrorMovieEnum["ScreamQueens"] = 2] = "ScreamQueens";
})(HorrorMovieEnum || (HorrorMovieEnum = {}));
class HorrorMovie extends Movie {
    constructor(category, 
    // vi är skyldiga att ge Movie allt den behöver för att skapa
    title, director, releaseYear, _length) {
        // här skapar vi föräldern (Movie)
        // new Movie("Scream", "Wes Craven", 2005, 96)
        super(title, director, releaseYear, _length);
        this.category = category;
        this.title = title;
        this.director = director;
        this.releaseYear = releaseYear;
        this._length = _length;
        // Nu kan vi gå vidare och skapa en instans av HorrorMovie
    }
    displayMovieInfo() {
        this._length = 194;
    }
}
const scream = new HorrorMovie(HorrorMovieEnum.Slasher, "Scream", "Wes Craven", 2005, 96);
scream.length = 104;
// Slasher, teenage, screamqueens
class ActionMovie extends Movie {
}
const equalizer = new ActionMovie("Equalizer 3", "Someone", 2023, 120);
// Vehicle är liten
class Vehicle {
}
class Car extends Vehicle {
}
class Taxi extends Car {
}
class Bike extends Vehicle {
}
// ? Abstract classes
// bara till för att ärvas
class Employee {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    // concrete functions with its own implementation
    displayEmployeeInfo() {
        console.log(`${this.firstName} ${this.lastName}`);
    }
}
// Concrete class
class FullTimeEmployee extends Employee {
    constructor(firstName, lastName, _salary) {
        super(firstName, lastName);
        this.firstName = firstName;
        this.lastName = lastName;
        this._salary = _salary;
    }
    // concrete implementation of abstract function
    getSalary() {
        return this._salary;
    }
    // override the parent's function
    displayEmployeeInfo() {
        console.log(`${this.firstName} ${this.lastName} ${this._salary}`);
    }
}
// Concrete class
class PartTimeEmployee extends Employee {
    constructor(firstName, lastName, _hourlyRate, _workedHours) {
        super(firstName, lastName);
        this.firstName = firstName;
        this.lastName = lastName;
        this._hourlyRate = _hourlyRate;
        this._workedHours = _workedHours;
    }
    getSalary() {
        return this._hourlyRate * this._workedHours;
    }
    displayEmployeeInfo() {
        console.log(`${this.firstName} ${this.lastName} ${this._hourlyRate} ${this._workedHours}`);
    }
}
const michael = new FullTimeEmployee("Michael", "Gustavsson", 300000);
michael.displayEmployeeInfo();
const tobias = new PartTimeEmployee("Tobias", "Tobiasson", 800, 120);
tobias.displayEmployeeInfo();
const nisse = new FullTimeEmployee("nisse", "nilsson", 400000);
// polymorphism
nisse.displayEmployeeInfo();
