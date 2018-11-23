const setDocSvg = (id, svg) => {
  if (svg) {
    if (document.getElementById(id) === null) {
      const body = document.getElementsByTagName('body')[0]
      const newSvg = document.createElementNS('http://www.w3.org/2000/svg', 'svg')
      newSvg.setAttribute('id', id)
      newSvg.setAttribute('style', 'display:none;')
      newSvg.innerHTML = svg
      body.appendChild(newSvg)
    } else {
      const editSvg = document.getElementsByTagName('svg')[id]
      editSvg.innerHTML = svg
    }
  }
}

export default setDocSvg
