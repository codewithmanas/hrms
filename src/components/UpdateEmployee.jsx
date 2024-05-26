import { useState } from "react";
import { FaArrowLeft } from "react-icons/fa";
// import { submitEmployeeData } from "../api/admin-api";
import HrHubNavbar from "./HrHubNavbar";
import { useNavigate } from "react-router-dom";

import { useLocation } from 'react-router-dom';
import { updateEmployeeData } from "../api/admin-api";

const useQuery = () => {
  return new URLSearchParams(useLocation().search);
};


const UpdateEmployee = () => {
        const [employeeName, setEmployeeName] = useState(null);
        const [employeeEmail, setEmployeeEmail] = useState(null);
        const [employeePassword, setEmployeePassword] = useState(null);
        const [employeePhone, setEmployeePhone] = useState(null);
        const [employeeType, setEmployeeType] = useState(null);
        const [employeeDesignation, setEmployeeDesignation] = useState(null);
        const [employeeImgUrl, setEmployeeImgUrl] = useState(null);
        const [employeeSalary, setEmployeeSalary] = useState(null);
        const [employeeDOB, setEmployeeDOB] = useState(null);
        const [employeeJoiningDate, setEmployeeJoiningDate] = useState(null);

        const navigate = useNavigate();

        const query = useQuery();

        const userEmail = query.get('email');
//   const param2 = query.get('param2');

        console.log("User Email", userEmail);

        const updateData = {
                    employeeName,
                    employeeEmail,
                    employeePassword,
                    employeePhone,
                    employeeType,
                    employeeDesignation,
                    employeeImgUrl,
                    employeeSalary,
                    employeeDOB,
                    employeeJoiningDate
        }


        const handleSubmit = async (e) => {
            e.preventDefault();

            console.log("Submit Button Clicked");

            try {
                const res = await updateEmployeeData(userEmail, updateData
                );
        
                console.log("res", res);

                if(res) {
                  navigate("/admin-panel")
                }

            } catch (error) {
                console.error("Error submitting employee data:", error);
            }
        }

  return (
    <>
    <HrHubNavbar />
    <div className="add-employee__container">
        <div className="add-employee__topsection">
          <div className="add-employee__backicon"
            onClick={() => navigate("/admin-panel")}
          >
            <FaArrowLeft className="back__logo" />
          </div>
          <div className="add-employee__back__text"
            onClick={() => navigate("/admin-panel")}
          >
            Back to Home
          </div>
        </div>

        <div className="add-employee__form__section">
        <form
          action="#"
          className="add-employee__form__container"
        >
          <h1
            className="add-employee__form__title"
          >
            Update Employee Data
          </h1>

          {/* First Section Start */}
          <div className="add-employee__form__fields">
            <div className="add-employee__name">
              <label
                htmlFor="employee__name"
              >
                Employee Name
              </label>

                <input
                  type="text"
                  id="employee__name"
                  placeholder="Enter Employee Name"
                  onChange={e => setEmployeeName(e.target.value)}

                />
            </div>


            <div className="add-employee__email">
              <label
                htmlFor="employee__email"
              >
                Employee Email
              </label>

                <input
                  type="text"
                  id="employee__email"
                  placeholder="Enter Employee Email"
                  onChange={e => setEmployeeEmail(e.target.value)}


                />
            </div>

          </div>
            {/* First Section End */}


          {/* Second Section Start */}

          <div className="add-employee__form__fields">
            <div className="add-employee__password">
              <label
                htmlFor="employee__password"
              >
                Employee Password
              </label>

                <input
                  type="password"
                  id="employee__password"
                  placeholder="Enter Employee Password"
                  onChange={e => setEmployeePassword(e.target.value)}
                />
            </div>


            <div className="add-employee__phone">
              <label
                htmlFor="employee__phone"
              >
                Employee Phone
              </label>

                <input
                  type="text"
                  id="employee__phone"
                  placeholder="Enter Employee Phone"
                  onChange={e => setEmployeePhone(e.target.value)}

                />
            </div>

          </div>

          {/* Second Section End */}

          {/* Third Section Start */}
          <div className="add-employee__form__fields">
            <div className="add-employee__type">
              <label
                htmlFor="employee__type"
              >
                Employee Type
              </label>

                <input
                  type="text"
                  id="employee__type"
                  placeholder="Enter Employee Type"
                  onChange={e => setEmployeeType(e.target.value)}

                />
            </div>


            <div className="add-employee__designation">
              <label
                htmlFor="employee__designation"
              >
                Employee Designation
              </label>

                <input
                  type="text"
                  id="employee__designation"
                  placeholder="Enter Employee Designation"
                  onChange={e => setEmployeeDesignation(e.target.value)}

                />
            </div>

          </div>

          {/* Third Section End */}

          {/* Fourth Section Start */}
          <div className="add-employee__form__fields">
            <div className="add-employee__type">
              <label
                htmlFor="employee__image"
              >
                Employee Image Url
              </label>

                <input
                  type="text"
                  id="employee__image"
                  placeholder="Enter Employee Image Url"
                  onChange={e => setEmployeeImgUrl(e.target.value)}
                />
            </div>


            <div className="add-employee__designation">
              <label
                htmlFor="employee__salary"
              >
                Employee Salary
              </label>

                <input
                  type="text"
                  id="employee__salary"
                  placeholder="Enter Employee Salary"
                  onChange={e => setEmployeeSalary(e.target.value)}

                />
            </div>

          </div>
          {/* Fourth Section End */}

          {/* Fifth Section Start */}
          <div className="add-employee__form__fields">
            <div className="add-employee__type">
              <label
                htmlFor="employee__dob"
              >
                Employee Date Of Birth
              </label>

                <input
                  type="text"
                  id="employee__dob"
                  placeholder="Enter Employee Date of Birth"
                  onChange={e => setEmployeeDOB(e.target.value)}

                />
            </div>


            <div className="add-employee__designation">
              <label
                htmlFor="employee__joindate"
              >
                Employee Joining Date
              </label>

                <input
                  type="text"
                  id="employee__joindate"
                  placeholder="Enter Employee Joining Date"
                  onChange={e => setEmployeeJoiningDate(e.target.value)}

                />
            </div>

          </div>
          {/* Fifth Section End */}

          <div className="add-employee__submit__cta">
            <button onClick={(e) => handleSubmit(e)}>
              Update
            </button>
          </div>
        </form>

        </div>
    </div>
    </>
  )
}

export default UpdateEmployee