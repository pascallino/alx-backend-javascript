import { createUser, uploadPhoto } from './utils';

export default function handleProfileSignup() {
  const promise1 = uploadPhoto();
  const promise2 = createUser();
  /* eslint-disable no-unused-vars */
  Promise.all([promise1, promise2])
    .then((results) => {
      console.log(`${results[0].body} ${results[1].firstName} ${results[1].lastName}`);
    })
    .catch((error) => { console.log('Signup system offline'); });
}
