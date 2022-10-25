import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setLoginAction } from "../redux/action/ResumeAction";
import { getUserResumeService } from "../services/ResumeService";

function CreatedResume(props) {
  // let [user, setUser] = useState(null);

  // let getUserResumeAction = async () => {
  //   try {
  //     let { status, result } = await getUserResumeService();
  //     if (status) {
  //       setUser({ ...result });
  //     } else {
  //       alert("user not found");
  //     }
  //   } catch (error) {
  //     alert("server error");
  //   }
  // };

  // useEffect(() => {
  //   getUserResumeAction();
  // }, []);
  return (
    <>
      <main className="container w-50 border border-3 mt-4">
        {/* {user ? ( */}
        <div>
          <h2 className="text-center text-primary fw-bold">RESUME</h2>
          <h3 className="text-primary fw-bold mb-3">
            {" "}
            <span className="fa fa-info"></span> Objective
            {/* {user.objective} */}
          </h3>
          <hr />
          <h3 className="text-primary fw-bold mb-3">
            <span className="fa fa-user"></span> Personal Information
          </h3>
          <h5 className="fw-bold">Name:</h5>
          <h5 className="fw-bold">DOB:</h5>
          <h5 className="fw-bold">Gender:</h5>
          <h5 className="fw-bold">Address:</h5>
          <h5 className="fw-bold">Phone Number:</h5>
          <h5 className="fw-bold">Email Address:</h5>
          <h5 className="fw-bold">Hobbies:</h5>
          <hr />
          <h3 className="text-primary fw-bold mt-3">
            {" "}
            <span className="fa fa-university"></span> Qualification
          </h3>
          <h5 className="fw-bold mt-3">College Education:</h5>
          <h5 className="fw-bold">Higher School / Diploma Education:</h5>
          <h5 className="fw-bold mb-3">School Education:</h5>
        </div>
        {/* ) : null} */}
      </main>
    </>
  );
}

export default CreatedResume;
