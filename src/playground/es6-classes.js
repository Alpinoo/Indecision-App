class Person {
   constructor(name = 'Anonymous', age = 0) {
      //?constructor builds class with given inputs. Defaults have been written in parenthesis
      this.name = name; //set name property to the name of Person
      this.age = age;
   } //no comma between parenthesis

   getDescription() {
      return `${this.name} is ${this.age} years old.`;
   }

   hiThere() {
      return `Hello there.I'm ${this.name}.`;
   }
}

class Student extends Person {
   constructor(name, age, major) {
      super(name, age); //?super is for using extended class' constructor values so that we don't write them again
      this.major = major;
   }
   hasMajor() {
      return !!this.major; //! !! converts truthy or falsy values to true or false. !!undefined = false
   }
   getDescription() {
      let description = super.getDescription(); //for using getDescription from parent class

      if (this.hasMajor()) {
         description += ` His major is ${this.major}`; //as same as description = description + ${...}
      }
      return description;
   }
}

class Traveler extends Person {
   constructor(name, age, homeLocation) {
      super(name, age);
      this.homeLocation = homeLocation;
   }

   hiThere() {
      let hello = super.hiThere();
      if (this.homeLocation) {
         hello += `I'm visiting from ${this.homeLocation}`;
      }
      return hello;
   }
}

const me = new Traveler(
   'Alp Oral',
   12,
   'Computer Engineering'
);
console.log(me.hiThere('Istanbul'));

const someone = new Traveler();
console.log(someone.hiThere());
