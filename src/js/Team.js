export class Team {
  constructor() {
    this.teamCharacters = [];
  }
  addCharacter(character) {
    this.teamCharacters.push(character);
  }

  [Symbol.iterator] = () => {
    let i = 0;
    return {
      next: () => {
        if (i >= this.teamCharacters.length) {
          return {
            done: true,
          };
        }
        return {
          value: this.teamCharacters[i++],
          done: false,
        };
      },
    };
  };
}
