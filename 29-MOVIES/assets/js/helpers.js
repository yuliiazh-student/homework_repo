export const loader = {
  show(){document.body.classList.add('loading')},
  hide(){document.body.classList.remove('loading')}
}

export const formatDate = (dateStr) => {
  const arDate = dateStr.split('-')
  return `${arDate[2]}.${arDate[1]}.${arDate[0]}`
}