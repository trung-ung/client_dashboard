export default (url, langcode) => {
  const arr = url.split('/')
  arr[1] = langcode
  return arr.join('/')
}
