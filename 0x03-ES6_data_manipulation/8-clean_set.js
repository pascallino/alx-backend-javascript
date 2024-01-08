export default function cleanSet(inputSet, startString) {
  if (startString === '') {
    return '';
  }
  const array = Array.from(inputSet);
  const filteredValues = array.filter((value) => value.startsWith(startString));
  const result = filteredValues.map((element) => element.substring(startString.length));
  return result.join('-');
}
