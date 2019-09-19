export default (langcode: String) => {
  switch (langcode) {
    case 'en':
      return 'GB'
    case 'da':
      return 'DK'
    case 'sv':
      return 'SE'
    case 'cs':
      return 'CZ'
    case 'nb':
      return 'NO'
    case 'et':
      return 'EE'
    case 'en-us':
      return 'US'
    case 'sl':
      return 'SI'
    default:
      return langcode.toUpperCase()
  }
}
