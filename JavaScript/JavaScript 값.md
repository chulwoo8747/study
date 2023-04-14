# JavaScript 값

## 값과 리터럴

---

프로그래밍을 하며 가장 많이 하는 일은 값(value)을 다루는 일이다. 

리터럴은 값의 표기법으로, 프로그래밍 언어마다 값을 표현하는 여러 가지 리터럴을 가지고 있다.

```jsx
1; // 정수 리터럴
2.5; // 부동 소수점 리터럴
'hello'; // 문자열 리터럴
true; // 진리값(boolean) 리터럴
```

## 변수 (Varialbe)

---

프로그래밍 언어에는 대개 **값에 이름을 붙여서 다시 쓸 수 있게 만드는 기능**이 존재한다. JavaScript에서는 여러 가지 방법을 통해 값에 이름을 붙일 수 있는데, 그 중에 두 가지 방법을 다뤄봅시다.

### let

- `let` 은 변수를 선언할 때 쓰는 키워드이다. let은 변수의 선언이 끝난 이후에 대입을 하거나, 이미 값이 대입되어 있는 변수에 다른 값을 대입할 수도 있다.

```jsx
let eight;
eight = 8;
let seven = 7;
seven = 77;
seven = 777;
```

### const

- `const` 는 재대입이 불가능한 변수를 선언할 때 쓰는 키워드이다. const로 변수를 선언할 때는 반드시 선언할 때 값을 대입해줘야 한다. 값 없이 선언만 하게 되면 에러가 발생한다. 또한 추후에 다른 값을 대입할 수 없다.

```jsx
const notAssigned; // ERROR

const assigned; = 1
assigned = 2; // ERROR
```

let과 const로 선언한 이름은 다시 선언될 수 없다. 

```jsx
let seven = 7;
let seven = 77; // ERROR
```

<aside>
🤔 그렇다면 let과 const 중 무엇을 써야할까?

</aside>

let 보다 **cons**t를 사용하는 것이 좋다. let을 사용하면 의도치 않게 다른 값이 대입되어 버리는 일이 생길 수 있기 때문이다. 

→ 변수 선언은 const로 하자!

## 식별자

---

식별자: 위에서 사용한 변수의 이름이 모두 **식별자(Identifier)**이다. 식별자는 어떤 개체를 유일하게 식별하기 위해 사용된다.

규칙

- 숫자, 알파벳, 달러 문자($), 언더스코어(_)가 포함될 수 있다.
- 단, 숫자로 시작되면 안 된다.
- 예약어는 식별자가 될 수 없다.

```jsx
const foo; // 0
const _a123; // 0
const $; // 0 - jQuery가 이 식별자를 사용한다.
const 7seven; // X - 숫자로 시작하면 안된다
const const; // X - 예약어는 식별자가 될 수 없다.
```

여기서 예약어란 JavaScript 언어의 기능을 위해 미리 예약해둔 단어를 말한다.

ex) const, let 등

### Camel Case

JavaScript에서 널리 사용되는 식별자 선언 방식은 식별자에 들어가는 각 단어의 첫 글자를 대문자로 써주는 방식이다.

```jsx
// Camel case
let fastCampus;
let fooBar;
```

### Snake case

단어 사이에 언더스코어(_)를 사용해서 단어를 구분해주는 관례도 있는데, 이를 Snake case라고 한다. 이 방식은 JavaScript에서는 잘 사용되지 않고, 파이썬 등의 프로그래밍 언어에서 많이 사용된다.

```jsx
// Snake case
let fast_campus;
let foo_bar;
```

## 타입

---

대부분의 프로그래밍 언어는 여러 가지 종류의 값을 지원하는데, 이러한 값의 종류를 자료형(data type)이라고 부른다. 줄여서 **타입**이라고 부르기도 한다.

값의 타입을 알아보기 위해 typeof 연산자를 사용할 수 있다.

```jsx
typeof 1; // 'number'
typeof 'hello'; // 'string'
```