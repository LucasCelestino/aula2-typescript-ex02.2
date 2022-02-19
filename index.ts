// Import stylesheets
import { Person } from './person';
import './style.css';

let person = new Person();

person.firstName = 'Lucas';
person.middleName = 'Celestino';
person.lastName = 'Alves';
person.age = 23;

// Write TypeScript code!
const firstNameDiv: HTMLElement = document.getElementById('firstNameElement');
const middleNameDiv: HTMLElement = document.getElementById('middleNameElement');
const lastNameDiv: HTMLElement = document.getElementById('lastNameElement');
const ageElement: HTMLElement = document.getElementById('ageElement');
const birthdayYearElement: HTMLElement = document.getElementById(
  'birthdayYearElement'
);
const fullNameElement: HTMLElement = document.getElementById('fullNameElement');

firstNameDiv.innerHTML = `First Name: ${person.getFirstName()}`;
middleNameDiv.innerHTML = `Middle Name: ${person.getMiddleName()}`;
lastNameDiv.innerHTML = `Last Name: ${person.getLastName()}`;
ageElement.innerHTML = `Age: ${person.getAge()}`;
birthdayYearElement.innerHTML = `Birthday Year: ${person.getBirthdayYear()}`;
fullNameElement.innerHTML = `Full Name: ${person.getFullName()}`;
