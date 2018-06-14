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

### Available Functions

#### tag()

```js
tag(name, attributes, content, rhs)
```

- `name`: a string containing the tag name
- `attributes`: an object containing key/value pairs for attributes you want to add to your tag
- `content`: a string, DOM node
- `rhs`: an (optional) array containing strings, nodes, or arrays

Create an new HTML tag.

#### populate()

```js
populate(tag, content)
```

- `tag`: a DOM node you wish to populate with content
- `content`: a string or DOM node, or array containing any strings, DOM nodes, and arrays containing content you want to populate into the tag

Populate content (nested as deeply as you like) into a DOM node.

### Helper Functions

#### link()

```js
link(url, text, title, rhs)
```

- `url`: a string containing the URL to link to
- `text`: a string containing the text content of the link
- `title`: a string containing the tooltip text for the link
- `rhs`: an (optional) array containing strings, nodes, or arrays

This helper function outputs an anchor tag with the corresponding information in a simpler way. Both the title, and the text will fall back to the text and/or url, so you can create a link with as little as one argument by only specifying the URL.

#### embed()

```js
embed(url, width, height, rhs)
```

- `url`: a string containing the URL to link to
- `width`: a number matching the original width of the embedded media
- `height`: a number matching the original height of the embedded media
- `rhs`: an (optional) array containing strings, nodes, or arrays

Output a `div` element that contains an `iframe` element you want to make scalable while maintaining its aspect ratio.

#### siblings()

```js
siblings(name, content, rhs)
```

- `name`: a string containing a `name` argument for `tag()` 
- `content`: an array containing either content for that sibling, or an array containing an attributes object plus the content for that sibling
- `rhs`: an (optional) array containing strings, nodes, or arrays

Output multiple sibling elements with the same tag name.

### Writing Custom Helper Functions

JSTS files are similar to the 'JIC' stylesheets used by JS-in-CSS. for further reading about the flexibility of templating using JSTS you can also read:

- [What is a JIC stylesheet](https://responsive.style/theory/what-is-a-jic-stylesheet.html)
- [The .JIC format](https://responsive.style/theory/the-jic-format.html)

### Examples

These pages don't have much other than DOM nodes being templated on them, but check out the source code to see how the DOM is being created:

- Basic Website: [Live](https://tomhodgins.github.io/domforever/examples/website.html) / [Source](examples/website.html)
- JS Interpolation: [Live](https://tomhodgins.github.io/domforever/examples/js-interpolation.html) / [Source](examples/js-interpolation.html)
- Custom Helper Functions: [Live](https://tomhodgins.github.io/domforever/examples/helper-functions.html) / [Source](examples/helper-functions.html)

## Similar Projects

- [htmlforever](https://github.com/tomhodgins/htmlforever) HTML templating on the command-line with JS, Python & Ruby
- [hyperscript](https://github.com/hyperhype/hyperscript) DOM templating library for JavaScript
- [elm-lang/html](http://package.elm-lang.org/packages/elm-lang/html/2.0.0) HTML library for the Elm language