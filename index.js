let employee = {
    name: "Sam",
    streetAddress: "11 Broadway"
  };
  
  function updateEmployeeWithKeyAndValue(employee, key, value) {
    return {
      ...employee,
      [key]: value
    };
  }
  
  function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    employee[key] = value;
    return employee;
  }
  
  function deleteFromEmployeeByKey(employee, key) {
    let newEmployee = { ...employee };
    delete newEmployee[key];
    return newEmployee;
  }
  
  function destructivelyDeleteFromEmployeeByKey(employee, key) {
    delete employee[key];
    return employee;
  }
  
  // Test the functions
  console.log("Original Employee:", employee);
  
  let updatedEmployee = updateEmployeeWithKeyAndValue(employee, "name", "Jane Smith");
  console.log("Updated Employee (non-destructive):", updatedEmployee);
  
  console.log("Original Employee after non-destructive update:", employee);
  
  destructivelyUpdateEmployeeWithKeyAndValue(employee, "streetAddress", "456 Oak St");
  console.log("Employee after destructive update:", employee);
  
  let employeeWithoutName = deleteFromEmployeeByKey(employee, "name");
  console.log("Employee without name (non-destructive):", employeeWithoutName);
  
  console.log("Original Employee after non-destructive delete:", employee);
  
  destructivelyDeleteFromEmployeeByKey(employee, "streetAddress");
  console.log("Employee after destructive delete:", employee);