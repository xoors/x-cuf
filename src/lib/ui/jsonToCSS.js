const jsonToCSS = (json) => {
  let css = ''
  for (let objKey in json) {
      css += objKey.replace(/([A-Z])/g, (g) => `-${g[0].toLowerCase()}`) + ':' + json[objKey] + ';'
  }
  return css
}

export default jsonToCSS
