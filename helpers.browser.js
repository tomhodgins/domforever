function link(url='#', text='', title='', rhs=[]) {

  text = text || url
  title = title || text

  return [
    tag('a', {href: url, title: title}, [text]),
    rhs
  ]

}

function embed(url='#', width='560', height='315', rhs=[]) {

  return [
    tag(
      'div',
      {
        style: `
          position: relative;
          width: 100%;
          padding-bottom: calc(100% / (${width} / ${height}));
        `
      },
      tag(
        'iframe',
        {
          src: url,
          width: width,
          height: height,
          frameborder: 0,
          style: `
            position: absolute;
            width: 100%;
            height: 100%;
            top: 50%;
            left: 50%;
            transform: translateX(-50%) translateY(-50%);
          `
        }
      )
    ),
    rhs
  ]

}

function siblings(name='p', content=[], rhs=[]) {

  return [
    content.map(sibling =>
      Array.isArray(sibling)
      ? tag(name, sibling[0], sibling[1])
      : tag(name, [], sibling)
    ),
    rhs
  ]

}