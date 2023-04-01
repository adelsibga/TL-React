# Words

- Install `NodeJS` & `Git`
- Run `yarn`
- Run `yarn run words`

## VS Code

Перед началом работы установите
[рекомендуемые расширения для VS Code](https://github.com/LehaIvanov/words/blob/master/.vscode/extensions.json).

## Задание

Разработать приложение, которое позволяет ввести набор английских слов и их переводов, а также проверить пользователя на знание этих слов(Наподобие Anki).

Пользователем приложения является один человек, авторизации делать не нужно. У приложения должно быть два режима:

- Режим заполнения словаря. Вводится произвольное количество слов/переводов, с возможностью редактирования этого списка и удаления элементов из этого списка.
- Режим проверки знания слов. В этом режиме, например, пользователю предлагаются случайные 10 слов из словаря, и пользователь должен ввести перевод для каждого слова. В конце проверки показывается результат, сколько переводов пользователь ввел корректно.

[Ссылка на макеты приложения](https://www.figma.com/file/k7ECnekC5lEhWtVhoSWdfo) (не обязательно придерживаться макетов, можно включить воображение и придумать что-то своё)

## Полезные ссылки

Советуем ознакомаится с инструментами, которые используются при разработке.

### Typescript

<https://www.typescriptlang.org/docs/handbook/typescript-from-scratch.html>
<https://www.typescriptlang.org/docs/handbook/typescript-in-5-minutes.html>

### React

Нужно изучить основные понятия. После изучения хотя бы первых семи пунктов, можно приступать к разработке, а остальные пункты изучить потом. Ссылки ведут на документацию на русском, но советуем прочитать её на английском, если знания языка позволяют это сделать.

1. [Привет, мир](https://ru.reactjs.org/docs/hello-world.html)
2. [Знакомство с JSX](https://ru.reactjs.org/docs/introducing-jsx.html)
3. [Рендеринг элементов](https://ru.reactjs.org/docs/rendering-elements.html)
4. [Компоненты и пропсы](https://ru.reactjs.org/docs/components-and-props.html)
5. [Состояние и жизненный цикл](https://ru.reactjs.org/docs/state-and-lifecycle.html)
6. [Обработка событий](https://ru.reactjs.org/docs/handling-events.html)
7. [Условный рендеринг](https://ru.reactjs.org/docs/conditional-rendering.html)

#### Хуки

Знания по хукам можно получить в процессе разработки, но первое знакомство можно сделать по следующим статьям:

1. [Введение в хуки](https://ru.reactjs.org/docs/hooks-intro.html)
2. [Краткий обзор хуков](https://ru.reactjs.org/docs/hooks-overview.html)
3. [Использование хука состояния](https://ru.reactjs.org/docs/hooks-state.html)

### JSS

[Официальный сайт JSS](https://cssinjs.org/react-jss/?v=v10.10.0). Чтобы целиком не изучать всю официальную документацию, можно самостоятельно поискать статьи про JSS в React.

### NPM, YARN

[Ознакомительная статья об npm](https://proglib.io/p/chto-takoe-npm-gayd-po-node-package-manager-dlya-nachinayushchih-2020-07-21), но нужно учитывать, что мы используем npm через yarn. [Небольшая статься про различия в интерфейсе командной строки](http://prgssr.ru/development/yarn-ili-npm-vse-chto-vam-nuzhno-znat.html#heading-yarn--npm-----)

### Eslint

<https://eslint.org/docs/latest/use/getting-started>

### Cspell

<https://www.npmjs.com/package/cspell>
