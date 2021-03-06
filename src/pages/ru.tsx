import { Box, Heading, Markdown } from 'grommet';
import * as React from 'react';
import Helmet from 'react-helmet';

import LangButtons from '../components/LangButtons';
import Layout from '../components/Layout';
import SocButtons from '../components/SocButtons';

const Page = ({ location }) => (
  <Layout>
    <Helmet
      htmlAttributes={{ lang: 'ru' }}
      meta={[
        { name: 'description', content: 'Иван Ганев, JavaScript разработчик' }
      ]}
      title="Иван Ганев"
    />
    <Heading margin={{ vertical: 'small' }}>Иван Ганев</Heading>
    <LangButtons pathname={location.pathname} />
    <Markdown>
      {`
Привет, я JavaScript разработчик. Работаю с [React js](https://reactjs.org/), особенно с SSG [Gatsby js](https://www.gatsbyjs.org/) и [Grommet](https://grommet.io/). Я так же работаю с [Node js](https://nodejs.org/), и всем что относится к этим технологиям.

Я работаю в качестве фрилансера, можете писать мне сюда: **iganevru@gmail.com**

### Я предпочитаю:
* [TypeScript](https://typescriptlang.org) вместо JavaScript.
* [graphQL](https://www.graphql.org/) вместо REST API.
* CSS in JS, особенно [styled-components](https://www.styled-components.com/), вместо CSS и любых css препроцессоров (если речь идет о React).
* [React js](https://reactjs.org/) вместо [Vue js](https://vuejs.org/).
* [Jest](https://jestjs.io) вместо [Mocha](https://mochajs.org/).
* Любой UI фреймворк, особенно [Grommet](https://grommet.io/), вместо создания всего с нуля.

Это лист того с чем я предпочитаю работать, а не список того что я считаю лучше в любых ситуациях.
      `}
    </Markdown>

    <Heading level="3" margin={{ vertical: 'xsmall' }}>
      Меня можно найти здесь:
    </Heading>
    <SocButtons />

    <Markdown>
      {`

Я на Хабре: [habr.com/ru/users/ivanganev](https://habr.com/ru/users/ivanganev/posts)

### Мои работы:
[www.esportset.com](https://www.esportset.com)
[www.cyberset.org](https://www.cyberset.org) - то же самое, но на русском.

[gatsby-starter-blog-grommet](https://github.com/Ganevru/gatsby-starter-blog-grommet) - стартер для Gatsby v2 основанный на Grommet v2 UI.

[apify.com/ganevru/webdesignernews-scraper](https://apify.com/ganevru/webdesignernews-scraper) - Веб-скрапер для www.webdesignernews.com, с использованием Apify.

[split-proxy](https://github.com/Ganevru/split-proxy) - Разбитие строки с адресом прокси в объект с протоколом, адресом, портом, логином и паролем.

[proxy-simple-test](https://github.com/Ganevru/proxy-simple-test) - Простое тестирование прокси.

[proxy-turn-over](https://github.com/Ganevru/proxy-turn-over) - Переворачивание адреса и логина:пароля у прокси.

[proxy-to-string](https://github.com/Ganevru/proxy-to-string) - Создание строки из объекта прокси адреса.

[enough-time-ago](https://www.npmjs.com/package/enough-time-ago) - Node.js библиотека для проверки времени с момента создания, модификации или изменения файла.

[periodic-crawler](https://github.com/Ganevru/periodic-crawler)

[Slime Solid Theme](https://marketplace.visualstudio.com/items?itemName=ganevru.slime-solid) - моя переделка темы Slime для VS Code.

[ganevru-gatsby](https://github.com/Ganevru/ganevru-gatsby) - репозиторий этого сайта.

[behance.net/IvanGanev](https://www.behance.net/IvanGanev) - некоторая инфографика.

### Курсы:
[www.Codecademy.com/ivanganev](https://www.codecademy.com/ivanganev)
      `}
    </Markdown>
    <Box margin={{ vertical: 'medium' }} />
    <LangButtons pathname={location.pathname} />
  </Layout>
);

export default Page;
