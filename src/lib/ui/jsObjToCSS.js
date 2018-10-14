const jsObjToCSS = (js) => {
  let cssStr = "";
  for (let objKey in js) {
      cssStr += objKey.replace(/([A-Z])/g, (g) => `-${g[0].toLowerCase()}`) + ":" + js[objKey] + ";"
  }
  return cssStr
}

export default jsObjToCSS
