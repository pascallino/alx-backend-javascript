export default function iterateThroughObject(reportWithIterator) {
  let result = '';
  for (const item of reportWithIterator) {
    result += item;
    result += ' |';
  }
  result = result.slice(0, -1);
  return result;
}
