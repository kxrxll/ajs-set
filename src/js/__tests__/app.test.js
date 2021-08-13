import Team from '../app';

test('Straight test on add() and toArray()', () => {
  const team = new Team();
  team.add({ name: 'Ваня', class: 'Archer' });
  team.add({ name: 'Петя', class: 'Axeman' });
  team.add({ name: 'Кузя', class: 'Sorcerer' });
  const expected = [
    { name: 'Ваня', class: 'Archer' },
    { name: 'Петя', class: 'Axeman' },
    { name: 'Кузя', class: 'Sorcerer' },
  ];
  expect(team.toArray()).toEqual(expected);
});

test('Straight test on addAll() and toArray()', () => {
  const team = new Team();
  team.addAll(
    { name: 'Ваня', class: 'Archer' },
    { name: 'Петя', class: 'Axeman' },
    { name: 'Кузя', class: 'Sorcerer' },
  );
  const expected = [
    { name: 'Ваня', class: 'Archer' },
    { name: 'Петя', class: 'Axeman' },
    { name: 'Кузя', class: 'Sorcerer' },
  ];
  expect(team.toArray()).toEqual(expected);
});
