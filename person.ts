export class Person {
  firstName: string;
  middleName: string;
  lastName: string;
  age: number;

  getFirstName(): string {
    return this.firstName;
  }

  getMiddleName(): string {
    return this.middleName;
  }

  getLastName(): string {
    return this.lastName;
  }

  getAge(): number {
    return this.age;
  }

  getFullName(): string {
    return `${this.firstName} ${this.middleName} ${this.lastName}`;
  }

  getBirthdayYear(): number {
    return 2022 - this.age;
  }
}
