const rawAppointments = [
{
id: "APT-201",
status: "COMPLETED",
doctor: { name: "Dr. Karim Uddin", dept: "Cardiology" },
patient: { name: "Nabila Rahman", contact: { phone: "01811000001", email: "nabila@mail.com" } },
fee: 1200,
discount: { code: "SENIOR", amount: 0 },
tests: [ { code: "ECG", price: 800 }, { code: "ECHO", price: 2500 } ],
followUpFee: 0
},
{
id: "APT-202",
status: "SCHEDULED",
doctor: { name: "Dr. Nusrat Jahan", dept: "Medicine" },
patient: { name: "" },
fee: 900,
discount: null,
tests: [ { code: "CBC", price: 400 } ],
followUpFee: 300
},
null,
{
id: "APT-204",
status: "COMPLETED",
doctor: { name: "Dr. Karim Uddin", dept: "Cardiology" },
patient: null,
fee: 1200,
discount: { code: "", amount: 500 },
tests: [],
followUpFee: null
},
{
id: "APT-205",
status: "CANCELLED",
doctor: { name: "Dr. Shirin Akter", dept: "Pediatrics" },
patient: { name: "Tamim Iqbal", contact: { phone: null } },
fee: 800,
tests: [ { code: "XRAY", price: 1500 } ]
},
{
id: "APT-206",
status: "COMPLETED",
doctor: { name: "Dr. Nusrat Jahan", dept: "Medicine" },
patient: { name: "Sumaiya Islam", contact: { phone: "01811000003" } },
fee: 900,
discount: { code: "CORP20", amount: 300 },
tests: [ { code: "CBC", price: 400 }, { code: "LFT", price: 1100 } ],
followUpFee: 300
}
];


// const { followUpFee = 0, discount: { amount = 0 } = {} } = rawAppointments[3];
// console.log(followUpFee, amount)



/**
 * 
 a. 
we can prevent the error using optional chaining and also we can check the value if it's undefined or null if found we can set that value N/A

01811000001
undefined
undefined
undefined
null
01811000003
 * 
 * 
 c. The correct one is where we are checking with nullish coallising(only if the data null and undefined it will return right) because for discount 0 is a valid number. for || or conditions when left is false it always return right so here 0 is falsy so it will create bug.
 * 
 * 
 d.
 function normalizeAppointments(rawAppointments){
    return rawAppointments.map(app =>{
        return{
            id: app?.id, patientName:app?.patient?.name
        }
    })
}

 * 
 * 
 e. State exactly which values array.filter(Boolean) removes from an array, and give one realistic
MediTrack array where using it would silently delete valid business data.

array.filter(Boolean) removers all the falsy value like undefine, null, 0. For one realistc example incase we need 0 value but if the array hold 0 it will slilently remove the value from the array.

 * 
 */

// function normalizeAppointments(rawAppointments){
//     return rawAppointments.map(app =>{
//         return{
//             id: app?.id, patientName:app?.patient?.name
//         }
//     })
// }

// console.log(normalizeAppointments(rawAppointments))

// const apt = rawAppointments[0]

// const discountA = apt.discount.amount || 100;
// const discountB = apt.discount.amount ?? 100

// console.log(discountA, discountB)

// rawAppointments.forEach(apt => console.log(apt?.patient?.contact?.phone))