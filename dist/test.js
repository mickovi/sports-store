"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// With callback
asyncOperation(arg, (err, result) => {
    if (err) {
        // Do something
    }
    // Do stuff with the result
});
// With Promises
asyncOperationPromise(arg)
    .then(result => {
    // Do something (the fulfillment value)
})
    .then(err => {
    // Handle the error (the rejection reason)
});
