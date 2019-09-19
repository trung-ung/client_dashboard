export default (countryCode: String) => {
  switch (countryCode) {
    case 'GB':
      return 'en'
    case 'DK':
      return 'da'
    case 'SE':
      return 'sv'
    case 'CZ':
      return 'cs'
    case 'NO':
      return 'nb'
    case 'EE':
      return 'et'
    case 'US':
      return 'en-us'
    case 'SI':
      return 'sl'
    default:
      return countryCode.toLocaleLowerCase()
  }
}
