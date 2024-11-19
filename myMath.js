// під'єднання стороннії бібліотек
import _ from 'lodash';

const randomNum = _.random(5,50, false);
console.log(randomNum);

class MyMath {
  static sum = (...nums) => nums.reduce((acc, num) => acc + num);

  static subtract = (...nums) => nums.reduce((acc, num) => acc - num);

  static multiply = (...nums) => nums.reduce((acc, num) => acc * num);

  static divide = (...nums) => nums.reduce((acc, num) => acc / num);
}

class MyTrigonometryMath {
  static func1 = () => {}
}

class MyBoolAlgerbra {
  static func2 = () => {}
}

// експорт даних з модуля

// 1. експорт за замовчанням - може використовуватися один раз за модуль
export default MyMath;

// export default 10;

// const obj = {
//   // MyTrigonometryMath: MyTrigonometryMath,
//   MyTrigonometryMath,
// }

// obj.MyTrigonometryMath

// 2. іменний експорт
export {
  MyTrigonometryMath,
  MyBoolAlgerbra
};

export const PIValue = 3.14;

export function testFunction () {
  console.log('testFunction is executed');
}
