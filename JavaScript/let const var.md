# let const var

<img src="https://postfiles.pstatic.net/MjAyMzA0MDhfMjM4/MDAxNjgwOTYzNjkzODI2.hHMd1pKvdpMkw03tyOhzuOSvjqfLfpZsNafSMn0sWhQg.PhrfTj-1yPCwXCmYY2KvCWARv5SInEO-TXw7FDwGtjwg.PNG.chul8747/image.png?type=w773">

자바스크립트에서 const라면 선언할 때 바로 값을 넣어 줘야하고, 한번 넣은 값은 바꿀 수 없는 상수를 말한다. 

```jsx
const study = '정지관';
study = '김철우';XXXXX
```

---

let 변수는 선언과 값 정의를 따로 할 수 있고 대신 선언을 다시 하는 것은 못하게 되어있다.

```jsx
let javascript;
javascript = '코딩';
javascrtpt = '코드';

let javascript = '코딩';
```

---

- const와 let은 자바스크립트의 ES6, ECMA 2016 버전부터 생긴 구문들이다. 그 전에는 주로 var 변수만 있었다.
- var로 선언된 변수들은 값을 변경할 수 있을 뿐 아니라 또 다시 선언하는 것까지 가능하다.
- **호이스팅**으로 선언부 위로 올라가는 것이 가능하다.

> 🙋‍♀️ 호이스팅이 뭔가요?

→**호이스팅이란 스코프 내부 어디서든 변수 선언은 최상위에 선언된 것처럼 행동하는 것이다.**

→ const 와 let 의 경우 선언하기 이전에 호출을 한다면 참조에러가 발생하지만, var의 경우는 문제가 없다. 그러나 선언은 호이스팅되지만 할당은 값이 아직 들어가기 전이라 **undefined**로 나타난다.

<img src="https://postfiles.pstatic.net/MjAyMzA0MDhfMTc4/MDAxNjgwOTYzODQ5OTU1.lSQ8ReNQFpKRsEouiYBEHdUKIV-6dJnV2mbP78QT4X8g.siKEpdNhfjTJ_VAcuT8UjgKTm9x-QLpSGkoas1VmcjQg.PNG.chul8747/image.png?type=w773">

그런데 var 키워드처럼 동작하지 않고 에러가 발생되는 것인가? 바로, Temporal Dead Zone(TDZ)라는 것 때문에 일어난다.

TDZ를 한글로 직역하자면 일시적인 사각지대란 뜻이다. 이 일시적인 사각지대는 스코프의 시작 지점부터 초기화 시작 지점까지의 구간을 TDZ라고 한다.

    #hoisting
    console.log(name); // TDZ
    const name = 'chulwoo'; // 함수 선언 및 할당
    console.log(name); // 사용 가능

}

countWithLet(); //위의 함수를 호출 

위에 TDZ 영역에 있는 변수들은 사용 가능하지 않는데, 바로 let과 const는 TDZ에 영향을 받기 때문이다. 이말은 곧 할당을 하기 전에는 사용할 수 없다는 말 같다. 이는 코드를 예측 가능하게 하고, 잠재적인 버그를 줄일 수 있다는 장점을 갖는다.

---

```jsx
function countWithLet () {

    for (let i = 0; i < 5; i++) {
        //1초 뒤 i를 출력하라는 지시를 내린다.
        setTimeout(funtion () {
            console.log(i)
        }, 1000)
    }
}

countWithLet(); //위의 함수를 호출 
```

출력결과

<img src="https://postfiles.pstatic.net/MjAyMzA0MDhfMTAx/MDAxNjgwOTYzNzA5NjQ3.X1USPB8TsImsGBWW58DIilhENO1VbOY1CgtdxN7uIlcg.-J2RcgzKEqT3jv0-_yirW6_LcWhLjYx8VJDTRrcQjBkg.PNG.chul8747/image.png?type=w773">

let을 사용했기 때문에 볼 수 있는 모습이다.

---

```jsx
function countWithVar () {

//0에서 4까지 for loop을 돌면서
for (var i = 0; i < 5; i++) {

    setTimeout(function () {

        console.log(i)
        }, 1000)
    }
}

countWithVar();
```

출력결과

<img src="https://postfiles.pstatic.net/MjAyMzA0MDhfNTcg/MDAxNjgwOTYzNzI0NzUz.OPU4cqQ_XSUBLIGixQyUhlhTC77vDwwCNN3wK08KYD4g.xMh9dLJO-7TTtOOgVM8dziH7Y0CpPgq17Z4wb1HuK9Yg.PNG.chul8747/image.png?type=w773">

‘왜’ 이런 결과가 나왔을까요?

<aside>
🤔 함수 스코프를 갖는다

</aside>

let으로 선언된 i는 언어의 상/변수들이 그렇듯 for문으로 지정된 블록 영역

```jsx
for (let i = 0; i < 5; i++) {

        //바로 여기
    }
```

 즉 주석으로 나타낸 위의 활동영역을 갖게 된다.

반면 함수 스코프를 갖는 var 변수 

```jsx
function countWithVar() {
    //여기
    for (var i = 0; i < 5; i++) {

    }
    //여기까지
}
```

주석으로 표시한 위의 공간에서 활동하게 된다.