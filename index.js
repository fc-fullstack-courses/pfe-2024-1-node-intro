// імпорт даних з інших модулей

// 1. імпорт за замовчанням
// import MyMath from './myMath.js';

// при імпорті за замовчанням назва необов'язково має спвпадати
// import TheBestMath from './myMath.js';

// // 2. іменний імпорт
// import { PIValue, testFunction as newTest,  } from './myMath.js';

// // 3. Комбінований імпорт
// import MyMath, { MyBoolAlgerbra, MyTrigonometryMath } from './myMath.js';

import TheBestMath, { PIValue, testFunction as newTest, MyBoolAlgerbra, MyTrigonometryMath } from './myMath.js';

import * as AllExportsFromMyMath from './myMath.js';

console.log('Hello from Node');

console.log(AllExportsFromMyMath);

console.log(PIValue);

newTest();

function testFunction () {

}

const numbers = [5, 7, 8, 9, 10, -500];

console.log(TheBestMath.sum(...numbers));