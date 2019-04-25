
// _id: 5c1906e2ca264c1020d002e5
// 12 bytes

    // 4 bytes: timestamp
    // 3 bytes: machine identifier
    // 2 bytes: process identifier
    // 3 bytes: counter

// 1 byte = 8 bits
// 2 ^ 8 = 256
// 2 ^ (8 * 3) = 16M

// Driver --> MongoDB

const mongoose = require('mongoose');

const id = new mongoose.Types.ObjectId();
const isValid = mongoose.Types.ObjectId.isValid('1234');

console.log(id);
console.log(id.getTimestamp());
console.log(isValid);