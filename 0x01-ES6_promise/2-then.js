export default function handleResponseFromAPI(promise) {
/* eslint-disable no-unused-vars */
  return promise.then((result) => {
    console.log('Got a response from the API');
    return { status: 200, body: 'Success' };
  }, (error) => {
    console.log('Got a response from the API');
    return new Error();
  });
/* eslint-enable no-unused-vars */
}
