const buffer = new DataView(new ArrayBuffer(10));
const int8 = new Int8Array(buffer, 0, 10);
int8[0] = 69;

console.log(buffer);
