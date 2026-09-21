const appointments = [{id:1,fee:0},{id:2, fee:100}]

const getAppointmentIds = (appointments) => {
return appointments.map(apt =>  apt.id );
};

const getAppointmentCards = (appointments) => appointments.map(apt => { id: apt.id, fee: 0 });

console.log(getAppointmentIds(appointments))

const durations = ["9", "11", "10", "21"];
console.log(durations.map(parse => parseInt(parse, 10)));


/**
 * 
 * a. It's returning undefined for the first one. the reason is we aren't return any value from our function that's why it's showing undefined. the fix code is:
 * 
 const getAppointmentIds = (appointments) => {
return appointments.map(apt =>  apt.id );
};
 * 
b. [ 9, NaN, 2, 7 ] here is the log. 

two fix:

const durations = ["9", "11", "10", "21"];
console.log(durations.map(parse => parseInt(parse)));

const durations = ["9", "11", "10", "21"];
console.log(durations.map(parse => parseInt(parse, 10)));


 */