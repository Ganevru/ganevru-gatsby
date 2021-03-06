import { Box, Heading, Markdown } from 'grommet';
import * as React from 'react';
import Helmet from 'react-helmet';

import LangButtons from '../components/LangButtons';
import Layout from '../components/Layout';
import SocButtons from '../components/SocButtons';

const Page = ({ location }) => (
  <Layout>
    <Helmet
      htmlAttributes={{ lang: 'en' }}
      meta={[
        { name: 'description', content: 'Ivan Ganev, JavaScript developer' }
      ]}
      title="Ivan Ganev"
    />
    <Heading margin={{ vertical: 'small' }}>Ivan Ganev</Heading>
    <LangButtons pathname={location.pathname} />
    <Markdown>
      {`
Hi, I'm a JavaScript developer. I prefer to work with [React js](https://reactjs.org/), especially with SSG [Gatsby js](https://www.gatsbyjs.org/) and [Grommet](https://grommet.io/). I also work with [Node js](https://nodejs.org/), and everything related to these technologies.

I am ready to work as a freelancer, write me here: **iganevru@gmail.com**

### I prefer:
* [TypeScript](https://typescriptlang.org) over JavaScript.
* [graphQL](https://www.graphql.org/) over REST API.
* CSS in JS, especially [styled-components](https://www.styled-components.com/), over CSS and any css preprocessors (if it comes to React).
* [React js](https://reactjs.org/) over [Vue js](https://vuejs.org/).
* [Jest](https://jestjs.io) over [Mocha](https://mochajs.org/).
* Any UI framework, especially [Grommet](https://grommet.io/), over starting from scratch.


This is a list of what I prefer, but, of course, what I chose for myself does not mean that it is better for someone else.
      `}
    </Markdown>

    <Heading level="3" margin={{ vertical: 'xsmall' }}>
      You can find me here:
    </Heading>
    <SocButtons />

    <Markdown>
      {`

My Habr (ru lang): [habr.com/ru/users/ivanganev](https://habr.com/ru/users/ivanganev/posts)

### My works:
[www.esportset.com](https://www.esportset.com) - my main project at the moment.
[www.cyberset.org](https://www.cyberset.org) - russian version.

[gatsby-starter-blog-grommet](https://github.com/Ganevru/gatsby-starter-blog-grommet) - a Gatsby v2 starter based on Grommet v2 UI.

[apify.com/ganevru/webdesignernews-scraper](https://apify.com/ganevru/webdesignernews-scraper) - Scraper for www.webdesignernews.com, using Apify.

[split-proxy](https://github.com/Ganevru/split-proxy) - Split proxy string into protocol, ipAddress, port, login and password.

[proxy-simple-test](https://github.com/Ganevru/proxy-simple-test) - Simple proxy testing.

[proxy-turn-over](https://github.com/Ganevru/proxy-turn-over) - Flip ip address and login:password in proxy.

[proxy-to-string](https://github.com/Ganevru/proxy-to-string) - Creating a proxy string from objects.

[enough-time-ago](https://www.npmjs.com/package/enough-time-ago) - A Node.js library for checking how much time has passed since file was modified, changed, created or accessed.

[periodic-crawler](https://github.com/Ganevru/periodic-crawler)

[Slime Solid Theme](https://marketplace.visualstudio.com/items?itemName=ganevru.slime-solid) - changed Slime theme (for VS Code).

[ganevru-gatsby](https://github.com/Ganevru/ganevru-gatsby) - repository of this site.

[behance.net/IvanGanev](https://www.behance.net/IvanGanev) - some infographics.

### Courses:
[www.Codecademy.com/ivanganev](https://www.codecademy.com/ivanganev)
      `}
    </Markdown>
    <Box margin={{ vertical: 'medium' }} />
    <LangButtons pathname={location.pathname} />
  </Layout>
);

export default Page;
