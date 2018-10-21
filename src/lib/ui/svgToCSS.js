const symbols = /[\r\n%#()<>?\[\\\]^`{|}]/g
//const quotes = getQuotes()
//const externalQuotesValue = document.querySelector('.options__input:checked').value

const svgToCSS = (svg) => {
  //return `background-image: url(${quotes.level1}data:image/svg+xml,${encodeSVG(addNameSpace(svg))}${quotes.level1});`
  return `background-image: url("data:image/svg+xml,${encodeSVG(addNameSpace(svg))}");`
}

function addNameSpace(data) {
  if (data.indexOf('http://www.w3.org/2000/svg') < 0) {
    //data = data.replace(/<svg/g, `<svg xmlns=${quotes.level2}http://www.w3.org/2000/svg${quotes.level2}`)
    data = data.replace(/<svg/g, `<svg xmlns=\'http://www.w3.org/2000/svg\'`)
  }
  return data
}

function encodeSVG(data) {
  // Use single quotes instead of double to avoid encoding.
  /*if (externalQuotesValue === 'double') {
    data = data.replace(/"/g, '\'')
  }
  else {
    data = data.replace(/'/g, '"')
  }*/
  data = data.replace(/"/g, '\'')

  data = data.replace(/>\s{1,}</g, "><")
  data = data.replace(/\s{2,}/g, " ")

  return data.replace(symbols, encodeURIComponent)
}

/*function getQuotes() {
  const double = `"`
  const single = `'`
  return {
    level1: externalQuotesValue === 'double' ? double : single,
    level2: externalQuotesValue === 'double' ? single : double
  }
}*/

export default svgToCSS
