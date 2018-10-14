const setDocStyle = (id, style) => {
  const head = document.getElementsByTagName('head')[0]
  if (document.getElementById(id) === null) {
    const newStyle = document.createElement('style')
    newStyle.setAttribute('id', id)
    newStyle.innerHTML = style
    head.appendChild(newStyle)
  } else {
    const editStyle = document.getElementsByTagName('style')[id]
    editStyle.innerHTML = style
  }
}

export default setDocStyle
