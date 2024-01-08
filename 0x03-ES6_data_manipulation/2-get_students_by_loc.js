export default function getStudentsByLocation(arrayofobj, city) {
  if (!Array.isArray(arrayofobj)) {
    return [];
  }
  const map = arrayofobj.filter((student) => student.location === city);
  return map;
}
