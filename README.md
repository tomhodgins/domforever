# domforever

**DOM templating helper functions written in a Continuation-Passing Style**

## About

These functions are a set of combinators written in a [Continuation-Passing style](https://en.wikipedia.org/wiki/Continuation-passing_style) in JS encapsulate the composition of DOM fragments and allow you to do two things:

- define high-level abstractions working with DOM nodes as functions in code
- generate DOM fragments by evaluating expressions described in [Symbolic Expressions](https://en.wikipedia.org/wiki/S-expression)

## Symbolic Expression Data Format

The data format used for describing DOM with these helper functions assumes that every helper function is written in a Continuation-Passing style, that means it accepts an additional "right-hand side" argument in addition to any other arguments it may require, and passes through anything on the right-hand side as it finds it.

Because of this, we can nest the calls to our helper functions as deeply as we like and it will begin evaluating at the deepest level of nesting and work its way outward. Here's an example of an S-Expression that expands to be a DOM fragment with some dummy content:

```js
tag('h1', {}, 'Example Headline', tag('p', {}, 'This is an example paragraph'))
```

You can also use arrays `[]` with comma-separated siblings to include siblings on the same level rather than passing them through as a right hand side argument:

```js
tag('main', {}, [
  tag('h1', {}, 'Example Headline'),
  tag('p', {}, 'This is an example paragraph')
])
```

This is a little more free-form than something like JSON, and it allows us to combine the output of our helper functions (and the arguments we give them) in a very flexible way.

You'll notice that some of the existing helper functions included with the library make heavy use of these S-Expressions themselves for structuring data and act as helpful abstractions over the underlying DOM that they represent.

## Usage

The `domforever` package is delivered in three different formats:

- CommonJS JS Module: [index.js](index.js)
- Vanilla JS Module: [index.vanilla.js](index.vanilla.js)
- Browser version: [index.browser.js](index.browser.js)

You can `import` and `require()` these modules in your code with whatever bundler you prefer, or use the vanilla module or browser version in web browsers directly without bundling.

There are also some example helper functions included in the [helpers.js](helpers.js), [helpers.vanilla.js](helpers.vanilla.js), and [helpers.browser.js](helpers.browser.js) files that show how functions can be written to help template using `tag()`.

### Examples

These pages don't have much other than DOM nodes being templated on them, but check out the source code to see how the DOM is being created:

- Basic Website: [Live](https://tomhodgins.github.io/domforever/examples/website.html) [Source](examples/website.html)
- JS Interpolation: [Live](https://tomhodgins.github.io/domforever/examples/js-interpolation.html) [Source](examples/js-interpolation.html)
- Custom Helper Functions: [Live](https://tomhodgins.github.io/domforever/examples/helper-functions.html) [Source](examples/helper-functions.html)

## Similar Projects

- [htmlforever](https://github.com/tomhodgins/htmlforever) HTML templating on the command-line with JS, Python & Ruby
- [hyperscript](https://github.com/hyperhype/hyperscript) DOM templating library for JavaScript
- [elm-lang/html](http://package.elm-lang.org/packages/elm-lang/html/2.0.0) HTML library for the Elm language