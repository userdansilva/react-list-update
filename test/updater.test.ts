import updater from '../src/updater';

test('properly adds object', () => {
  const array = [
    {
      name: 'Dan',
      age: 24,
    },
  ];
  expect(
    updater(array).add({
      name: 'John',
      age: 65,
    })[1].name
  ).toBe('John');
});

test('properly removes object', () => {
  const array = [
    {
      name: 'Dan',
      age: 24,
    },
    {
      name: 'John',
      age: 65,
    },
  ];
  expect(
    updater(array)
      .remove()
      .where('name', 'Dan')[0].name
  ).toBe('John');
});

test('properly update object', () => {
  const array = [
    {
      name: 'Dan',
      age: 24,
    },
    {
      name: 'John',
      age: 55,
    },
  ];
  expect(
    updater(array)
      .update({
        age: 65,
      })
      .where('name', 'Dan')[0].age
  ).toBe(65);
});
