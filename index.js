const employee = {
    name:'joy',
    streetAddress:'5690 storybrook lane'
};
function updateEmployeeWithKeyAndValue(employee, key, value) {
    return Object.assign({},employee,{[key] :value});
}
function destructivelyUpdateEmployeeWithKeyAndValue(emloyee, key, value){
    employee[key] = value
    return employee;
}
function deleteFromEmployeeByKey(employee,key){
    const newObject = Object.assign({},employee)
    delete newObject[key]
    return newObject;
}
function destructivelyDeleteFromEmployeeByKey(employee, key) {
    delete employee[key]
    return employee;
}