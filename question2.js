// const appointmentSnapshot = {
// appointmentId: "APT-9001",
// bookedAt: new Date("2026-03-04T09:30:00Z"),
// patient: { name: "Nabila", address: { city: "Dhaka", area: "Uttara" } },
// tests: [ { code: "ECG", price: 800 }, { code: "CBC", price: 400 } ]
// };
// const draft = JSON.parse(JSON.stringify(appointmentSnapshot));
// draft.appointmentId = "APT-9001-DRAFT";
// draft.patient.address.city = "Sylhet";
// draft.tests.push({ code: "LFT", price: 1100 });
// console.log(appointmentSnapshot.appointmentId);
// console.log(appointmentSnapshot.patient.address.city);
// console.log(appointmentSnapshot.tests.length);



// function cloneAppointment(appointment){
//     return structuredClone(appointment)
// }


/* 

a. Here the log values are: APT-9001, Sylhet, 3

appointmentId behaved differently from patient.address.city cause appointmentId is top label property in appointmentSnapshot object.
which is behave as new when it's shallow copy but the nested object still hold the parent reference for that reason when we are changing value from the darft it's also changing from the parent. { ...appointmentSnapshot } also behave same. only if we use structuredClone or JSON.parse(JSON.Stringify()) it will behave differently.

b.

function cloneAppointment(appointment){
    return structuredClone(appointment)
}




c. Here the bug is it's directly modifying the main array. 

the fix is:

function getTopThreeTests(tests) {
return [...tests].sort((a, b) => b.price - a.price).slice(0, 3);
}


d. 

duration.sort() will log [10,11,8,9]. The reason behind it is js when sort it compare the first number and then maintain the order.

line y will through error beacuse we are trying to reassign but const can't give the flexibility to reassign.

*/

const durations = [8, 11, 9, 10];
console.log(durations.sort());
const clinicConfig = { maxPerSlot: 4 };
clinicConfig.maxPerSlot = 6; // line X
clinicConfig = { maxPerSlot: 6 }; 