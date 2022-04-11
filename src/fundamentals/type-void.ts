function withinReturn(...args: string[]): void {
  console.log(args.join(' '));
}

const person = {
  name: 'Eudalio',
  surname: 'Sousa',
  showName(): void {
    console.log(this.name + ' ' + this.surname);
  },
};

withinReturn('Eudálio', 'Sousa');
person.showName();

export { person };
