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
class Movie {
  // doesn't work for # though
  #rating: number;
  constructor(
    private _title: string,
    private _director: string,
    private _releaseYear: number,
    rating: number,
    public length: number
  ) {
    this.#rating = rating;
  }

  // Getters to get the data (but a bit overkill)
  get movieTitle() {
    return this._title;
  }
  get movieDirector() {
    return this._director;
  }
  get movieReleaseYear() {
    return this._releaseYear;
  }
}

const taken = new Movie("Taken", "Pierre Morelle", 2008, 6.8, 134);
const title = taken.movieTitle;
const director = taken.movieDirector;
const releaseYear = taken.movieReleaseYear;