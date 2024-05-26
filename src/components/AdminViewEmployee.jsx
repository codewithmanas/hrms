import { useEffect, useState } from "react"
import HrHubNavbar from "./HrHubNavbar"
import { useLocation } from 'react-router-dom';
// import { useNavigate } from "react-router-dom";
import { getLeavedata, getSingleEmployee } from "../api/admin-api";


const useQuery = () => {
    return new URLSearchParams(useLocation().search);
  };

const AdminViewEmployee = () => {
        const [user, setUser] = useState(null);
        const [userleaveData, setUserLeaveData] = useState(null);



        // const navigate = useNavigate();
        const query = useQuery();

        const userEmail = query.get('email');
//   const param2 = query.get('param2');

        console.log("User Email", userEmail);

        const fetchDataByEmail = async (userEmail) => {
            const res = await getSingleEmployee(userEmail)

            if(res) {
                console.log("res", res);
                setUser(res);
            }
        }

        const fetchLeaveDataByEmail = async (userEmail) => {
            const res = await getLeavedata(userEmail)

            if(res) {
                console.log("res", res);
                setUserLeaveData(res);
            }
        }


        useEffect(() => {
            fetchDataByEmail(userEmail);

            fetchLeaveDataByEmail(userEmail)
        }, [])

  return (
    <div>
        <HrHubNavbar />
        <div className="admin-view-employee__container">

            <div className="admin-view-employee__container__header">
                <div className="admin-view-employee__profile">
                    <h2>
                        {user?.empName || "Charul Rawat"}
                    </h2>
                    <p>
                        {user?.empDesignation || "UI/UX Developer"}
                    </p>
                </div>
            </div>

{/* Leave Request Section */}
            <div className="admin-view-employee__leave__request__section">
                <div className="admin-view-employee__leave__request__box">
                    <h2 className="heading">
                        Leave Request
                    </h2>

                    <div className="leave__update">
                        2 days : 
                        <span> Casual leave</span>
                    </div>

                    <div className="cta__section">
                        <button className="approve__cta">
                            Approve
                        </button>  

                        <button className="deny__cta">
                            Deny
                        </button>  
                    </div>

                </div>

            </div>

            <div className="admin-view-employee__leave__taken__section">

                <h2 className="admin-view-employee__leave__taken__section__heading">
                    Leave Taken
                </h2>
                <div className="admin-view-employee__leave__taken__container">

                    {/* Casual Leave Section */}
                    <div className="admin-view-employee__leave__taken__box">
                        <div className="box__top">
                            This Month
                        </div>

                        <div className="box__heading">
                            Casual Leaves
                        </div>

                        <div className="total__leave__section">
                            <div className="total__leave__present">
                                <div className="number">
                                       {
                                        user?.empType === "INTERN" ? "01" : 
                                        user?.empType === "REGULAR" ? "02" :
                                        user?.empType === "MST" ? "03" : 
                                        "02"
                                       }
                                </div>
                                <div className="text">
                                        Total Leaves
                                </div>
                            </div>

                            <div className="total__leave__taken">
                                <div className="number">
                                        {userleaveData?.casual_leaves_left || "00"}
                                </div>
                                <div className="text">
                                       Leaves Remaining
                                </div>
                            </div>
                        </div>

                    </div>

                    {/* Personal Leave Section */}
                    <div className="admin-view-employee__leave__taken__box">
                        <div className="box__top">
                            This Year
                        </div>

                        <div className="box__heading">
                            Personal Leaves
                        </div>

                        <div className="total__leave__section">
                            <div className="total__leave__present">
                                <div className="number">
                                        02
                                </div>
                                <div className="text">
                                        Total Leaves
                                </div>
                            </div>

                            <div className="total__leave__taken">
                                <div className="number">
                                {userleaveData?.personal_leaves_left || "00"}
                                </div>
                                <div className="text">
                                        Leaves Remaining
                                </div>
                            </div>
                        </div>

                    </div>

                    {/* National Leaves Section */}
                    <div className="admin-view-employee__leave__taken__box">
                        <div className="box__top">
                            This Month
                        </div>

                        <div className="box__heading">
                            National Leaves
                        </div>

                        <div className="total__leave__section">
                            <div className="total__leave__present">
                                <div className="number">
                                        05
                                </div>
                                <div className="text">
                                        Total Leaves
                                </div>
                            </div>

                            <div className="total__leave__taken">
                                <div className="number">
                                {userleaveData?.national_leaves_left || "00"}
                                </div>
                                <div className="text">
                                        Leaves Remaining
                                </div>
                            </div>
                        </div>

                    </div>

                    {/* Flexible Leaves Section */}

                    <div className="admin-view-employee__leave__taken__box">
                        <div className="box__top">
                            in four months
                        </div>

                        <div className="box__heading">
                            Flexible Leaves
                        </div>

                        <div className="total__leave__section">
                            <div className="total__leave__present">
                                <div className="number">
                                        03
                                </div>
                                <div className="text">
                                        Total Leaves
                                </div>
                            </div>

                            <div className="total__leave__taken">
                                <div className="number">
                                    {userleaveData?.flexi_leaves_left || "00"}
                                </div>
                                <div className="text">
                                        Leaves Remaining
                                </div>
                            </div>
                        </div>

                    </div>

                    {/* Optional Leaves  Section */}

                    <div className="admin-view-employee__leave__taken__box">
                        <div className="box__top">
                            This Year
                        </div>

                        <div className="box__heading">
                            Optional Leaves
                        </div>

                        <div className="total__leave__section">
                            <div className="total__leave__present">
                                <div className="number">
                                        04
                                </div>
                                <div className="text">
                                        Total Leaves
                                </div>
                            </div>

                            <div className="total__leave__taken">
                                <div className="number">
                                    {userleaveData?.optional_leaves_left || "00"}
                                </div>
                                <div className="text">
                                        Leaves Remaining
                                </div>
                            </div>
                        </div>

                    </div>



                </div>
            </div>

        </div>

    </div>
  )
}

export default AdminViewEmployee