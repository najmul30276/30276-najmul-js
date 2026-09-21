console.log("1: sync");
(async () => {
console.log("2: async body");
await Promise.resolve();
console.log("3: after await");
})();
setTimeout(() => console.log("4: timeout 0"), 0);
Promise.resolve().then(() => console.log("5: then"));
console.log("6: sync end")



/**
 * 
 * a. 
 
1: sync
2: async body
6: sync end
3: after await
5: then
4: timeout 0

Here 1 and 2 will follow the order for the promise it will go to the webapi and 3 will not execute then the 4 will go to the webapi then the promise 5 will follow the same path. and 6 will print then the micro and macro task will be happen here promise priroty is first thats why the event loop will pass first promise to call stack and then print 3 then it will print 5: then because of priority at last execute the setTimeout.

 * 
 * 
 * 
 * b. we have to retrun the value from the then func thats why the value is undefined
 * 
 * 
 * c. 
 
async function loadAll(ids) {
const appointments = [];
for (const id of ids) {
appointments.push(await fetchAppointment(id)); // each call takes ~300ms
}
return await promise.all[...appointments];
}

we can use await promise.all[...appointments] to resolve or get the the response at a time. 
 */