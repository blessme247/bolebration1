import React, { useEffect, useState } from "react";
import logo from "../../assets/Icons/logo.svg";
import { Link, useNavigate } from "react-router-dom";
import { paidRegisterSchema } from "../../utils/formValidation/register-schema";
import { Formik, Field } from "formik";

import "./paidRegistration.scss";

import axiosInstance from "../../utils/axiosConfig";
import Swal from "sweetalert2";

const PaidRegistrationForm = ({count}) => {
  useEffect(() => {
    Swal.fire({
      position: "center",
      icon: "info",
      title:
        "Kindly Note that the form You're about to fill will generate a pay at the gate ticket for You",
      showConfirmButton: true,
      timer: 4000,
    });
  }, []);
  const navigate = useNavigate();
  return (
    <div className="formWrapper">
      <div className="logoImage">
        <img src={logo} alt="logo" />
      </div>

      <p className="formHeading">Register</p>

      <Formik
        initialValues={{
          firstName: "",
          lastName: "",
          email: "",
          phone: "",
          ticketType: "",
          quantity: "",
          amount: "",
        }}
        validationSchema={paidRegisterSchema}
        onSubmit={async (values, { setSubmitting, resetForm }) => {
          setSubmitting(true);
          // console.log(isSubmitting, "submit status")
          console.log(values);

          let payload = {};
          let amount;
          payload.firstName = values.firstName;
          payload.lastName = values.lastName;
          payload.email = values.email;
          payload.phone = values.phone;
          payload.quantity = values.quantity;

            values.ticketType === "regular"
              ? amount = 1000 * Number(payload.quantity)
              : (values.ticketType === "vip")
              ? amount = 100000 * Number(payload.quantity)
              :  amount = 250000 * Number(payload.quantity);

              payload = values;
          payload.amount = amount;
          //   resetForm()

            try {
              let response = await axiosInstance.post("/payatgate", {
                email: values.email,
                phone: values.phone,
                gender: values.gender,
                name: `${values.firstName} ${values.lastName}`,
                quantity: values.quantity,
                amount: values.amount,
              });

              if (response) {
                resetForm();
                Swal.fire({
                  position: "center",
                  icon: "success",
                  title:
                    "Registration successful, kindly check your email for your ticket.",
                  showConfirmButton: false,
                  timer: 3500,
                }).then(() => {
                  navigate("/");
                });
              }
              return response;
            } catch (error) {
              console.log(error, "error");
                Swal.fire({
                  position: "center",
                  icon: "error",
                  title: "Registration failed, Please try again",
                  showConfirmButton: true,
                  timer: 3500,
                })
            }
        }}
        validate={(values) => {
          const { firstName, lastName, email, ticketType, quantity } = values;
          const errors = {};
          if (!firstName) errors.firstName = "First Name is required";
          if (!lastName) errors.lastName = "Last Name is required";
          if (!email) errors.email = "Email is required";
          if (!ticketType) errors.ticketType = "Ticket type is required";
          if (!quantity) errors.quantity = "Ticket Quantity is required";
          return errors;
        }}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleSubmit,
          handleReset,
          isSubmitting,
        }) => (
          <form className="paidRegisterForm">
            <div className="group nameGroup">
              <div className="formGroup">
                <label htmlFor="firstName" name="firstName">
                  First Name
                </label>
                <input
                  type="text"
                  name="firstName"
                  value={values.firstName}
                  onChange={handleChange}
                />

                {errors.firstName && touched.firstName && (
                  <p className="errorText">{errors.firstName}</p>
                )}
              </div>

              <div className="formGroup">
                <label htmlFor="lastName" name="lastName">
                  Last Name
                </label>
                <input
                  type="text"
                  name="lastName"
                  value={values.lastName}
                  onChange={handleChange}
                />
                {errors.lastName && touched.lastName && (
                  <p className="errorText">{errors.lastName}</p>
                )}
              </div>
            </div>

            <div className="group contactGroup">
              <div className="formGroup">
                <label htmlFor="email" name="email">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={values.email}
                  onChange={handleChange}
                />
                {errors.email && touched.email && (
                  <p className="errorText">{errors.email}</p>
                )}
              </div>

              <div className="formGroup">
                <label htmlFor="phone" name="phone">
                  Number
                </label>
                <input
                  type="text"
                  name="phone"
                  value={values.phone}
                  onChange={handleChange}
                />
              </div>
            </div>

            <div className=" radioGroup">
              <div className="maleRadioGroup">
                <Field type="radio" name="gender" value="male" />
                <label htmlFor="male">Male</label>
              </div>

              <div className="femaleRadioGroup">
                <Field type="radio" name="gender" value="female" />
                <label htmlFor="female">Female</label>
              </div>
            </div>

            {/* Ticket Form Group */}
            <div className="ticketSelection">
              <div className="selectGroup">
                <label>Ticket type</label>
                <select
                  name="ticketType"
                  value={values.ticketType}
                  onChange={handleChange}
                  defaultValue={""}
                >
                  <option disabled value="">
                    Select ticket type
                  </option>
                  <option value="regular" name="ticketType">
                    Regular ₦1,000
                  </option>
                  <option value="vip" name="ticketType">
                    VIP (Table of 5) ₦100,000
                  </option>
                  <option value="vvip" name="ticketType">
                    VVIP (Table of 10) ₦250,000
                  </option>
                </select>
                {errors.ticketType && touched.ticketType && (
                  <p className="errorText">{errors.ticketType}</p>
                )}
              </div>

              <div className="ticketQuantityGroup">
                <label htmlFor="quantity" name="quantity" className="qtyHead">
                  Ticket Quantity
                </label>
                <input
                  className="qtySelector"
                  type="text"
                  name="quantity"
                  value={values.quantity}
                  onChange={handleChange}
                />
                {errors.quantity && touched.quantity && (
                  <p className="errorText">{errors.quantity}</p>
                )}
              </div>
            </div>

            <button
              disabled={isSubmitting}
              type="button"
              onClick={handleSubmit}
              className="registerBtn"
            >
              {isSubmitting ? "In Progress" : "Register"}
            </button>

            <Link to="/" className="homeLink">
              Go home
            </Link>
          </form>
        )}
      </Formik>
    </div>
  );
};

export default PaidRegistrationForm;
