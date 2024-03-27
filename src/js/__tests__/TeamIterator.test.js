import { Character, Team } from '../app';

test('TeamIterator', () => {
  const team = new Team();
  const teamList = [];

  for (let i = 0; i < 4; i++) {
    const character = new Character(`Персонаж ${i + 1}`, 'Bowman');
    team.addCharacter(character);
  }

  for (const teamElement of team) {
    teamList.push(teamElement);
  }

  expect(teamList.toString()).toBe(
    [
      {
        characterAttack: 40,
        characterDefence: 10,
        characterHealth: 50,
        characterLevel: 1,
        characterName: 'Персонаж 1',
        characterType: 'Bowman',
      },
      {
        characterAttack: 40,
        characterDefence: 10,
        characterHealth: 50,
        characterLevel: 1,
        characterName: 'Персонаж 2',
        characterType: 'Bowman',
      },
      {
        characterAttack: 40,
        characterDefence: 10,
        characterHealth: 50,
        characterLevel: 1,
        characterName: 'Персонаж 3',
        characterType: 'Bowman',
      },
      {
        characterAttack: 40,
        characterDefence: 10,
        characterHealth: 50,
        characterLevel: 1,
        characterName: 'Персонаж 4',
        characterType: 'Bowman',
      },
    ].toString(),
  );
});
