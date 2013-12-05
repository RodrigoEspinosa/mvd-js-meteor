tests = {
  // LEVEL 1
  1: [
    {i: 'doubleInt(2);', o: 4},
    {i: 'doubleInt(4);', o: 8},
    {i: 'doubleInt(1);', o: 2},
    {i: 'doubleInt(10);', o: 20},
    {i: 'doubleInt(-9);', o: -18}
  ],
  // LEVEL 2
  2: [
    {i: 'isEvenNumber(2);', o: true},
    {i: 'isEvenNumber(4);', o: true},
    {i: 'isEvenNumber(1);', o: false},
    {i: 'isEvenNumber(' + (Math.floor(Math.random() * 100000) * 2) + ');', o: true},
    {i: 'isEvenNumber(' + (Math.floor(Math.random() * 10) * 2 + 1 )+ ');', o: false}
  ],
  // LEVEL 3
  3: [
    {i: 'endsWith(\'hello world\', \'world\');', o: true},
    {i: 'endsWith(\'mundo hola!\', \'mundo\');', o: false},
    {i: 'endsWith(\'Loremipsumdolorsitamet\', \'Loremipsumdolorsitamet\');', o: true},
    {i: 'endsWith(\'Negativo.\', \'Vos sos buchón de la policia federal!\');', o: false},
    {i: 'endsWith(\'Uruguay es el mejor pais.\', \'Mejor que Francia y mejor que paris\');', o: false}
  ],
  // LEVEL 4
  4: [
    {i: 'sumArray([2]);', o: 2},
    {i: 'sumArray([4, 6, 8, 10]);', o: 28},
    {i: 'sumArray([6, [4, 10], 20, [10, [30, 10], 10]]);', o: 100}
  ],
  // LEVEL 5
  5: [
    {i: 'isTwo(2);', o: true},
    {i: 'isTwo(4);', o: false},
    {i: 'isTwo(1);', o: false}
  ],
};