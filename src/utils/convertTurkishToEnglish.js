export const convertTurkishToEnglish = (str) => {
    const turkishChars = {
      'ğ': 'g',
      'Ğ': 'G',
      'ı': 'i',
      'İ': 'I',
      'ö': 'o',
      'Ö': 'O',
      'ş': 's',
      'Ş': 'S',
      'ü': 'u',
      'Ü': 'U',
      'ç': 'c',
      'Ç': 'C',
      'i̇': 'i',
      'İ̇': 'I',
    };
  
    let convertedStr = str.toLowerCase();
    for (const [key, value] of Object.entries(turkishChars)) {
      convertedStr = convertedStr.replace(new RegExp(key, 'g'), value);
    }
  
    return convertedStr;
  };