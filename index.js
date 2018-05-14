module.exports.tag = function(name='div', attributes={}, content=[], rhs=[]) {

  const node = document.createElement(name)

  for (let attr in attributes) node.setAttribute(attr, attributes[attr])

  module.exports.populate(node, content)

  return [node, rhs]

}

module.exports.populate = function(tag, content) {

  const flattenArray = content =>

    Array.from(content)

      .reduce((acc, child) =>

        Array.isArray(child)
        ? acc.concat(flattenArray(child))
        : acc.concat(child)

      , [])

  return flattenArray(content)

    .forEach(child =>

      typeof child === 'string'
      ? tag.innerHTML += child
      : tag.appendChild(child)

    )

}