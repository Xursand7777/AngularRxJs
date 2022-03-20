# AngularRxJs

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 13.3.0.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.


Дано:
Есть 2 кнопки. первая выводит точное время в лог, вторая - счетчик от 0 до бесконечности каждый раз при нажатии.

Задание 1.
По клику на кнопку выводить счетчик умноженный на 10.

Вывод по кликам на кнопку 2:
0
10
20
30

Задание 2.
Вывести к заданию 1 вывести по кнопке 5 значений, а дальше не учитывать клики.
Вывод по кликам на кнопку 2:
0
10
20
30
40

---

Задание 3.
Исходное состояние (как по ссылке).
С помощь двух последовательных операторов map подумать, как сделать след задание:
Нужно в первом операторе map умножить счетчик на 10, во втором, прибавить значение самого счетчика, то есть:

```
this.button2Click$.pipe(
  map([прибавить 10]),
  map([прибавить само значение счетчика])
).subscribe((value) => this.log.push(value.toString()));
```

Итого вывод:
0 // 0 _ 10 + 0
11 // 1 _ 10 + 1
22 // 2 \* 10 + 2
33
44
.. // до бесконечности

Задание 4:
К решению задачи 3 добавить вывод первых 4х значений только.

Задание 5.
https://www.learnrxjs.io/learn-rxjs/operators/filtering
Среди этих операторов найти подходящие для выполнения этого и следующих заданий

Вернуть страницу к начальному состоянию, как по ссылке.
Также работаем тоьлко со второй кнопкой.
Написать цепочку, которая выводит счетчик, умноженный на 10, но выводит только значения с 3-го по пятое.
Итого, жмем первый раз - ничего не происходит, второй - ничего, третий - выводится 30, потом 40, 50, потом ничего.

Задание 6.
Вернуть страницу к начальному состоянию, как по ссылке.

Выводить в лог только четные числа (найти оператор по ссылке)

Задание 7\* (усложненное)
Вернуть страницу к начальному состоянию, как по ссылке.
Задача учитывать только последнее значение, если кнопку не нажимали в течение двух секунд.

Пример.
Форма загрузилась.
Мы быстро нажимаем без пауз на кнопку 2 пять раз. Ждем 2 секунды, появляется в логе значение 5.
Опять быстро жмем три раза. через 2 секунды появляется значение 8.

---

У последней задачи есть реально применение в вебе. Например когда ты в автокомплите ищешь что-то, тебе надо отправить запрос на сервер только тогда, когда пользователь закончил ввод и не вводит символы больше 2х секунд.

Будут вопросы - задавай.
Все решения присылай в виде цепочек.
