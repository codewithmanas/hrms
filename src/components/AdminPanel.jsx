import { useEffect, useState } from "react";
import HrHubNavbar from "./HrHubNavbar"
import { useNavigate } from "react-router-dom"
// import { getAllEmployees } from "../api/admin-api";

const AdminPanel = () => {

        const [allEmployeeData, setAllEmployeeData] = useState([])

        const navigate = useNavigate();


        const handleAddEmployee = () => {
            navigate("/add-employee")
        }




        // const employeeData = [
        //     {
        //         employeeName: "Charul",
        //         employeeDesignation: "Designer",
        //         employeeContact: "1234567890",
        //         joiningDate: "11/04/24",
        //         leaveRequest: "None",
        //         employeeEmail: "abc@xyz.com"
        //     },
        //     {
        //         employeeName: "Charul",
        //         employeeDesignation: "Designer",
        //         employeeContact: "1234567890",
        //         joiningDate: "11/04/24",
        //         leaveRequest: "None",
        //         employeeEmail: "abc@xyz.com"
        //     },
        //     {
        //         employeeName: "Charul",
        //         employeeDesignation: "Designer",
        //         employeeContact: "1234567890",
        //         joiningDate: "11/04/24",
        //         leaveRequest: "None",
        //         employeeEmail: "abc@xyz.com"
        //     },
        //     {
        //         employeeName: "Charul",
        //         employeeDesignation: "Designer",
        //         employeeContact: "1234567890",
        //         joiningDate: "11/04/24",
        //         leaveRequest: "None",
        //         employeeEmail: "abc@xyz.com"
        //     },
        //     {
        //         employeeName: "Charul",
        //         employeeDesignation: "Designer",
        //         employeeContact: "1234567890",
        //         joiningDate: "11/04/24",
        //         leaveRequest: "None",
        //         employeeEmail: "abc@xyz.com"
        //     }
        // ]

        const handleEditEmployee = (userEmail) => {
            console.log("Edit Employee Button Clicked");
            navigate(`/update-employee?email=${userEmail}`)
        }

        const handleViewEmployee = (userEmail) => {
            console.log("Edit Employee Button Clicked");
            navigate(`/view-employee?email=${userEmail}`)
        }


  return (
    <div>
        <HrHubNavbar />
        <div className="admin-panel__container">

            <div className="admin-panel__top__section">
                <h2 className="admin-panel__top__section__title">
                    Hello Admin
                </h2>

                <div className="admin-panel__user">
                    abc@gamil.com
                </div>
            </div>

            <div className="admin-panel__cta__section">
                
                <button className="admin-panel__add__employee__cta"
                    onClick={() => handleAddEmployee()}
                >

                    Add Employee
                </button>

            </div>

            <div className="admin-panel__dashboard__section">
                <div className="admin-panel__table__container">
                <table  className="admin-panel__table">
                <thead>
                    <tr>
                        <th>Employee Name</th>
                        <th>Designation</th>
                        <th>Joined Date.</th>
                        <th>Contact</th>
                        <th>Leave Request</th>
                        <th>{"   "}</th>
                    </tr>
                </thead>

                <tbody>
                    {
                        allEmployeeData?.map((item, index) => (
                            <tr key={index}>
                                <td className="admin-panel__table__firstrow">{item.empName}
                                <button className="admin-panel__table__edit__btn"
                                        onClick={() =>  handleViewEmployee(item.empEmail)}
                                    >
                                        View Profile
                                    </button>
                                </td>
                                <td>{item.empDesignation}</td>
                                <td>{item.joiningDate}</td>
                                <td>{item.empPhone}</td>
                                <td>{item.leaveRequest}</td>
                                <td>
                                    <button className="admin-panel__table__edit__btn"
                                        onClick={() =>  handleEditEmployee(item.empEmail)}
                                    >
                                        Edit Profile
                                    </button>
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>


                </div>
            </div>


            </div>
        </div>
  )
}

export default AdminPanel