module.exports.tag = function(name='div', attributes={}, content=[], rhs=[]) {

  const node = document.createElement(name)

  for (let attr in attributes) node.setAttribute(attr, attributes[attr])

  module.exports.populate(node, content)

  return [node, rhs]

}

module.exports.populate = function(tag, content) {

  const flattenArray = children =>

    Array.from(children)

      .reduce((acc, child) =>

        acc.concat(
          Array.isArray(child)
          ? flattenArray(child)
          : child
        )

      , [])

  return flattenArray(content)

    .forEach(child =>

      typeof child === 'string'
      ? tag.innerHTML += child
      : tag.appendChild(child)

    )

}