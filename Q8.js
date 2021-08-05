const name = { firstName: 'Philip', lastName: 'Fry' };
const details = {
job: 'Delivery Boy',
employer: 'Planet Express' };


let merged = {...name, ...details};
console.log(merged);
