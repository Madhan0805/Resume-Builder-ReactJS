import React, { useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { resetCreateResume, saveNewResume } from "../services/ResumeService";
import axios from "axios";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

function Resume(props) {
  let initValue = {
    objective: "",
    fullname: "",
    phonenumber: "",
    address: "",
    email: "",
    DOB: "",
    college: "",
    hsc: "",
    sslc: "",
    hobbies: "",
  };
  let [forms, setForm] = useState({ ...initValue });
  // let [errors, setErrors] = useState({ ...initValue });

  let handleforms = (event) => {
    let { name, value } = event.target;
    forms[name] = value;
    setForm({ ...forms });
    // validate();
    // valideteInput(name, value);
  };

  let submitForm = async (event) => {
    event.preventDefault();
    console.log(forms);
    // if (validate()) return false;

    let URL = "http://localhost:4501/api/create-resume";
    let sendData = {
      objective: forms.objective,
      fullname: forms.fullname,
      email: forms.email,
      phonenumber: forms.phonenumber,
      address: forms.address,
      DOB: forms.DOB,
      college: forms.college,
      hsc: forms.hsc,
      sslc: forms.sslc,
      hobbies: forms.hobbies,
    };
    try {
      let { data } = await axios.post(URL, sendData);
      let { status, message } = data;
      if (status) {
        Swal.fire("Resume Details Added Successfully");
        // navigate("/");
      } else {
        Swal.fire(message);
      }
    } catch (error) {
      Swal.fire("Server error");
      console.log(error);
    }
  };

  // let validate = () => {
  //   let isError = false;
  //   let array = Object.entries(forms);

  //   array.forEach((value) => {
  //     if (value[1] === "") {
  //       errors[value[0]] = "Please enter the " + [value[0]];
  //       isError = true;
  //     } else {
  //       let _text = "";
  //       switch (value[0]) {
  //         case "fullname":
  //           _text = testRegEx("user", value[1]) ? "" : "Invalid full name";
  //           break;
  //         case "phonenumber":
  //           _text = testRegEx("phonenumber", Number(value[1]))
  //             ? ""
  //             : "Invalid phonenumber";
  //           break;
  //         case "email":
  //           _text = testRegEx("email", value[1]) ? "" : "Invalide email id";
  //           break;
  //         case "username":
  //           _text = testRegEx("username", value[1])
  //             ? ""
  //             : "Username without space";
  //           break;
  //         case "confirmpass":
  //           _text =
  //             forms.pass === forms.confirmpass
  //               ? ""
  //               : "Password is not matching";
  //           break;
  //         default:
  //       }
  //       isError = _text === "" ? false : true;
  //       errors[value[0]] = _text;
  //     }
  //   });
  //   setErrors({ ...errors });
  //   return isError;
  // };
  // let valideteInput = (name, value) => {
  //   let isError = false;
  //   if (value == "") {
  //     errors[name] = "Please Enter the " + name;
  //     isError = true;
  //   } else {
  //     let _text = "";
  //     switch (name) {
  //       case "fullname":
  //         _text = testRegEx("user", value) ? "" : "Invalid full name";
  //         break;
  //       case "phonenumber":
  //         _text = testRegEx("phonenumber", Number(value))
  //           ? ""
  //           : "Invalid phonenumber";
  //         break;
  //       case "email":
  //         _text = testRegEx("email", value) ? "" : "Invalid email id";
  //         break;
  //       case "username":
  //         _text = testRegEx("username", value) ? "" : "Username without space";
  //         break;
  //       case "confirmpass":
  //         _text =
  //           forms.pass === forms.confirmpass ? "" : "Password is not matching";
  //         break;
  //       default:
  //         break;
  //     }
  //     isError = _text === "" ? false : true;
  //     errors[name] = _text;
  //   }
  //   setErrors({ ...errors });
  // };

  // let testRegEx = (type, string) => {
  //   let expression = {
  //     email: /^([a-zA-Z0-9\._]+)@([a-zA-Z0-9])+.([a-z]+)(.[a-z]+)$/g,
  //     phonenumber: /^[6-9]\d{9}$/g,
  //     username: /^([a-zA-z])+$/g,
  //     user: /^([ A-Za-z])+$/g,
  //     c_phonenumber: /^\+\d{2}[7-9]\d{9}$/g,
  //   };
  //   const regex = new RegExp(expression[type]);
  //   return regex.test(string);
  // };
  return (
    <>
      <main className="container-fluid w-50 border border-5">
        <h4 className="text-primary fw-bold text-center">Create Ur Resume</h4>
        <form action="" id="reg-form2" onSubmit={submitForm}>
          <div className="mb-2 mt-4">
            <label htmlFor="objective">
              {" "}
              <i className="fa fa-info fw-bold text-primary">
                {" "}
                Objective{" "}
              </i>{" "}
            </label>
            <textarea
              type="text"
              className="form-control border border-3"
              id="objective"
              name="objective"
              value={forms.objective}
              onChange={handleforms}
              placeholder="Enter Objective"
            />
          </div>
          <div className="mb-2 mt-4">
            <label htmlFor="fullname">
              {" "}
              <i className="fa fa-user fw-bold text-primary">
                {" "}
                Full Name{" "}
              </i>{" "}
            </label>
            <input
              type="text"
              className="form-control border border-3"
              id="fullname"
              name="fullname"
              value={forms.fullname}
              onChange={handleforms}
              placeholder="Enter full name"
            />
          </div>
          <div className="mb-2 mt-4">
            <label htmlFor="DOB">
              {" "}
              <i className="fa fa-calendar fw-bold text-primary">
                {" "}
                Date of Birth{" "}
              </i>{" "}
            </label>
            <input
              type="date"
              className="form-control border border-3"
              id="DOB"
              name="DOB"
              value={forms.DOB}
              onChange={handleforms}
              placeholder="Enter DOB"
            />
          </div>
          <div className="">
            <label
              htmlFor=""
              className="form-label fw-bold text-primary fa fa-check mx-2"
            >
              Gender
            </label>
            <div className="d-flex justify-content-evenly">
              <div className="form-check">
                <input type="radio" id="" className="form-check-input" />
                <label htmlFor="" className="fw-bold text-primary">
                  Male
                </label>
              </div>
              <div className="form-check">
                <input type="radio" id="" className="form-check-input" />
                <label htmlFor="" className="fw-bold text-primary">
                  Female
                </label>
              </div>
              <div className="form-check">
                <input type="radio" id="" className="form-check-input" />
                <label htmlFor="" className="fw-bold text-primary">
                  Other
                </label>
              </div>
            </div>
          </div>
          <div className="mb-2 mt-4">
            <label htmlFor="address">
              {" "}
              <i className="fa fa-home fw-bold text-primary"> Address </i>{" "}
            </label>
            <textarea
              type="text"
              className="form-control border border-3"
              id="address"
              name="address"
              value={forms.address}
              onChange={handleforms}
              placeholder="Enter Address"
            />
          </div>
          <div className="mb-2">
            <label htmlFor="phonenumber">
              {" "}
              <i className="fa fa-phone-square fw-bold text-primary">
                {" "}
                Phone Number{" "}
              </i>
            </label>
            <input
              type="number"
              className="form-control border border-3"
              name="phonenumber"
              value={forms.phonenumber}
              onChange={handleforms}
              id="phonenumber"
              placeholder="Enter Phone Number"
            />
          </div>
          <div className=" mb-2">
            <label htmlFor="email-id">
              {" "}
              <i className="fa fa-envelope-square fw-bold text-primary">
                {" "}
                Email Address{" "}
              </i>
            </label>
            <input
              type="email"
              className="form-control border border-3"
              name="email"
              value={forms.email}
              onChange={handleforms}
              id="email-id"
              placeholder="Enter Email-ID"
            />
          </div>
          <div className="mb-2 mt-4">
            <label htmlFor="college">
              {" "}
              <i className="fa fa-university fw-bold text-primary">
                {" "}
                College Education Details{" "}
              </i>{" "}
            </label>
            <input
              type="text"
              className="form-control border border-3"
              id="college"
              name="college"
              value={forms.college}
              onChange={handleforms}
              placeholder="Enter College Education Details"
            />
          </div>
          <div className="mb-2 mt-4">
            <label htmlFor="hsc">
              {" "}
              <i className="fa fa-university fw-bold text-primary">
                {" "}
                Higher School / Diploma Education Details{" "}
              </i>{" "}
            </label>
            <input
              type="text"
              className="form-control border border-3"
              id="hsc"
              name="hsc"
              value={forms.hsc}
              onChange={handleforms}
              placeholder="Enter Higher School Education Details"
            />
          </div>
          <div className="mb-2 mt-4">
            <label htmlFor="sslc">
              {" "}
              <i className="fa fa-university fw-bold text-primary">
                {" "}
                Secondary School Education Details{" "}
              </i>{" "}
            </label>
            <input
              type="text"
              className="form-control border border-3"
              id="sslc"
              name="sslc"
              value={forms.sslc}
              onChange={handleforms}
              placeholder="Enter Secondary Education Details"
            />
          </div>
          <div className="mb-2 mt-4">
            <label htmlFor="hobbies">
              {" "}
              <i className="fa fa-check fw-bold text-primary"> Hobbies </i>{" "}
            </label>
            <input
              type="text"
              className="form-control border border-3"
              id="hobbies"
              name="hobbies"
              value={forms.hobbies}
              onChange={handleforms}
              placeholder="Enter Hobbies"
            />
          </div>
          <div className="mb-4 text-center">
            <button className="btn btn-primary me-2" id="submit">
              Submit
            </button>
            <Link to="/createresume" className="btn btn-success ">
              Resume
            </Link>
          </div>
        </form>
      </main>
    </>
  );
}

export default Resume;
