function uppercaseFirstLetter(inputString: string): string {
  if (inputString.length === 0) {
    return inputString;
  }
  const firstLetter = inputString.charAt(0).toUpperCase();
  const restOfString = inputString.slice(1);
  return firstLetter + restOfString;
}

export default uppercaseFirstLetter;
