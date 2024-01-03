import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default function handleProfileSignup(firstName, lastName, fileName) {
  const p1 = signUpUser(firstName, lastName);
  const p2 = uploadPhoto(fileName);

  return Promise.allSettled(([p1, p2])).then((values) => {
    const result = [];
    if (values[0].status === 'fulfilled') {
      result.push({ status: values[0].status, value: values[0].value });
    } else {
      result.push({ status: values[0].status, value: `${values[0].reason}` });
    }
    if (values[1].status === 'fulfilled') {
      result.push({ status: values[1].status, value: values[1].value });
    } else {
      result.push({ status: values[1].status, value: `${values[1].reason}` });
    }
    return result;
  });
}
