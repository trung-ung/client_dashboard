const countries = [
  'GB',
  'DK',
  'FI',
  'FR',
  'DE',
  'IT',
  'LV',
  'RU',
  'ES',
  'SE',
  'TR',
  'CZ',
  'NO',
  'EE',
  'NL',
  'PL',
  'US',
  'SK',
  'SI'
]

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
