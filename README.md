# Drawboard Test

## About Drawboard and the test

We are all about annotating/marking up engineering/construction/architecture documents, collaboratively, in real-time, across multiple devices.

We think this test, which is based on an actual issue we have had to deal with, should give us an idea of how you solve problems as well as give you an idea regarding the sort of challenges you will face working with us.

## Brief

If someone draws a rectangle in our windows app (or any other app of ours), we must acurately display that rectangle in the same place and in the same way on every one of our other apps, this is an extremely important aspect about what we do.

We have provided you with a couple important things:
- [Some sample api data](https://github.com/DrawboardLtd/frontend-test/blob/master/src/annotation_api_data.js)
- [An Annotation component to render the api data](https://github.com/DrawboardLtd/frontend-test/blob/master/src/Annotation/index.js)
- [What the annotations should look like](https://github.com/DrawboardLtd/frontend-test#what-the-annotations-should-look-like)

When you start up the react app you will notice that the annotations are sort of stretched and not looking like the [provided picture](https://github.com/DrawboardLtd/frontend-test#what-the-annotations-should-look-like). This is because we are applying the transformation matrix to the shapes as a whole after the fact (transform attribute on the path element) instead of individually to the data that represents the shape before it is rendered on the screen.

**We would like you to make the annotations render correctly ([they should look like this](https://github.com/DrawboardLtd/frontend-test#what-the-annotations-should-look-like))**

## How to pass the test

> NOTE: You can use/import any files already present in the `./src` directory as you please, just remember you can only add/modify files in the `./src/Annotation` directory

- [ ] Fork the repo to your own github account
- [ ] Make the annotations look like the [provided image]((https://github.com/DrawboardLtd/frontend-test#what-the-annotations-should-look-like))
- [ ] Only modify/add files in the [`./src/Annotation` directory](https://github.com/DrawboardLtd/frontend-test/tree/master/src/Annotation)
- [ ] Dont add/use any additional libraries (No d3, three.js, paper, etc), you shouldnt need them.
- [ ] Send us a link to your fork when you are ready for us to review

## Getting things running

> NOTE: we use `yarn` as our package manager ([info here](https://yarnpkg.com/)), there are corresponding `npm` commands ([info here](https://yarnpkg.com/en/docs/migrating-from-npm#toc-cli-commands-comparison)) if that is what you prefer.

```
// Install Deps
$ yarn

// Start Dev Environment
$ yarn start

// Run Tests
$ yarn test
```

> NOTE: the test runner will any files that that end in `*.test.js` that are found in the `./src` directory. Some example tests can be found in the [`./src/__lib__` directory](https://github.com/DrawboardLtd/frontend-test/tree/master/src/__lib__). We are using [Jest](https://facebook.github.io/jest/docs/api.html#content) for our tests at Drawboard and in this test.

## What the annotations should look like

![Expected Outcome](https://raw.githubusercontent.com/DrawboardLtd/frontend-test/master/expected.png)

## What the annotations currently look like

![Expected Outcome](https://raw.githubusercontent.com/DrawboardLtd/frontend-test/master/current.png)

## Recommended reading

- [MelbCSS - Matrix Transforms 101](https://youtu.be/hAECeSfyO9M)
- [MDN - SVG Transform](https://developer.mozilla.org/en/docs/Web/SVG/Attribute/transform)
- [MDN - SVG path](https://developer.mozilla.org/en-US/docs/Web/SVG/Tutorial/Paths)
