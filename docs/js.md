# js
> JS
> JS是一种面向对象语言，简称"OOP"（Object-Oriented Programming）

## 对象与类的区别

> 类是ES6引入的概念

1. 对象的创建和属性访问
```js
// 使用字面量创建对象
const person = {
  name: 'John',
  age: 30,
  sayHello() {
    console.log(`Hello, my name is ${this.name}.`);
  }
};

console.log(person.name); // 输出：John
person.sayHello(); // 输出：Hello, my name is John.

```
2. 类的创建和实例化，这里有构造函数。
```js
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  sayHello() {
    console.log(`Hello, my name is ${this.name}.`);
  }
}

// 创建 Person 类的实例
const person1 = new Person('John', 30);
const person2 = new Person('Jane', 25);

console.log(person1.name); // 输出：John
person2.sayHello(); // 输出：Hello, my name is Jane.

```
3. 类的继承
```js
class Animal {
  constructor(name) {
    this.name = name;
  }

  sayHello() {
    console.log(`Hello, I'm ${this.name}.`);
  }
}
//共享sayHello()方法，独有bark()方法
class Dog extends Animal {
  bark() {
    console.log('Woof woof!');
  }
}

const dog = new Dog('Buddy');
dog.sayHello(); // 输出：Hello, I'm Buddy.
dog.bark(); // 输出：Woof woof!
```
