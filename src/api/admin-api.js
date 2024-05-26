import axios from "axios";
import { backendUrl } from "./backendUrl";



// For Adding Employee Data
export async function submitEmployeeData(
    employeeName,
    employeeEmail,
    employeePassword,
    employeePhone,
    employeeType,
    employeeDesignation,
    employeeImgUrl,
    employeeSalary,
    employeeDOB,
    employeeJoiningDate,
) {

    try {
        const response = await axios.post(`${backendUrl}/empInfo/addEmp`,
        {
            empName: employeeName,
            empEmail: employeeEmail,
            empPassword: employeePassword,
            empPhone: employeePhone,
            empType: employeeType,
            empDesignation: employeeDesignation,
            imgUrl: employeeImgUrl,
            empSalary: employeeSalary,
            dateOfBirth: employeeDOB,
            joiningDate: employeeJoiningDate,
        }
        )
        console.log(response);

        if(response.data) {
            return response.data
        } else {
            return false;
        }

      } catch (error) {
        console.error(error);
      }
}


// For Updating Employee Data
export async function updateEmployeeData(empEmail,inputdata){
    try {
        const { data } = await axios.put(`${backendUrl}/empInfo/updateEmployeeData?empEmail=${empEmail}`, inputdata)

        if(data) {
            return data
        } else {
            return false
        }
    } catch (err) {
        console.log(err.message)
        // throw new Error(err.message)
    }
}

// Fetch Single Employee Data
export async function getSingleEmployee(empEmail){
    try {
        const { data } = await axios.get(`${backendUrl}/empInfo/getEmpInfo?empEmail=${empEmail}`)
        return data 
    } catch (err) {
        console.log(err.message)
        // throw new Error(err.message)
    }
}

// Get Leave Data by Email
export async function getLeavedata(empEmail){
    try {
        const { data } = await axios.get(`${backendUrl}/leaves/getNoOfLeavesLeft?empEmail=${empEmail}`)
        return data
    } catch (err) {
        console.log(err.message)
        // throw new Error(err.message)
    }
}
