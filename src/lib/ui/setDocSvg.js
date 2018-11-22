const setDocSvg = (id, svg) => {
  if (svg) {
    const body = document.getElementsByTagName('body')[0]
    if (document.getElementById(id) === null) {
      const newSvg = document.createElement('svg')
      newSvg.setAttribute('id', id)
      newSvg.innerHTML = svg
      body.appendChild(newSvg)
    } else {
      const editSvg = document.getElementsByTagName('svg')[id]
      editSvg.innerHTML = svg
    }
  }
}

export default setDocSvg
