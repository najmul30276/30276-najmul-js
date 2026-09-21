// console.log(typeof formatSlot);
// console.log(typeof buildInvoice);
// console.log(defaultDuration);
// console.log(typeof consultFee);
// var defaultDuration = 30;
// const consultFee = 800;
// function formatSlot(slot) {
// return `${slot.start} - ${slot.end}`;
// }
// var buildInvoice = function (patient) {
// return { patient, fee: consultFee };
// };


/* a. function, undefined, undefined, ReferenceError

 - line 4 throw the error
 - Here js create the variable and functions reference on the creation time that time it put formatSlot with func reference and here the
 buildInvoice is expression fucntion for that reason it put undefine in creation phase.  At the last the consultFee is declare using const for
 that reason it will be uninitialized in the creation phase and it throw error because we called it inside temporal dead zone. the code execution
 closed here.

 b.




 c. In arrow function this is not work outside it's scope it always refer it's inside property.

*/

const scheduler = {
clinic: "MediTrack Uttara",
doctors: ["Dr. Karim Uddin", "Dr. Nusrat Jahan"],
printRoster: function () {
this.doctors.forEach(function (doc) {
console.log(`${doc} @ ${this.clinic}`);
});
}
};
scheduler.printRoster();
const printRoster = scheduler.printRoster;
printRoster();