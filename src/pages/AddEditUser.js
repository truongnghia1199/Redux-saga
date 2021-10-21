import { MDBBtn, MDBInput, MDBValidation } from "mdb-react-ui-kit";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router";
import { v4 as uuidv4 } from "uuid";
import { addUserStart } from "../redux/actions";

const initialState = {
  id: uuidv4(),
  firstName: "",
  lastName: "",
  gender: "",
  email: "",
  address: "",
  phone: "",
  role: "",
};

const AddEditUser = () => {
  const [fromValue, setFromValue] = useState(initialState);
  const { firstName, lastName, gender, email, address, phone, role } =
    fromValue;
  const history = useHistory();
  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
    if (firstName && lastName && gender && email && address && phone && role) {
      dispatch(addUserStart(fromValue));
      setTimeout(() => history.push("/"), 500);
      alert("Add thanh cong");
    }
  };
  const onInputChange = (e) => {
    let { name, value } = e.target;
    setFromValue({ ...fromValue, [name]: value });
  };
  return (
    <MDBValidation
      className="row g-3"
      style={{ marginTop: "100px" }}
      noValidate
      onSubmit={handleSubmit}
    >
      <p className="fs-2 fw-bold">Add User Detail</p>
      <div
        style={{
          margin: "auto",
          padding: "15px",
          maxWidth: "400px",
          alignContent: "center",
        }}
      >
        <MDBInput
          value={firstName}
          name="firstName"
          type="text"
          onChange={onInputChange}
          required
          label="First Name"
          validation="Please provide the first name"
          invalid
        />
        <br />
        <MDBInput
          value={lastName}
          name="lastName"
          type="text"
          onChange={onInputChange}
          required
          label="Last Name"
          validation="Please provide the last name"
          invalid
        />
        <br />
        <MDBInput
          value={gender}
          name="gender"
          type="text"
          onChange={onInputChange}
          required
          label="Gender"
          validation="Please provide gender"
          invalid
        />
        <br />
        <MDBInput
          value={email}
          name="email"
          type="email"
          onChange={onInputChange}
          required
          label="Email"
          validation="Please provide email"
          invalid
        />
        <br />
        <MDBInput
          value={address}
          name="address"
          type="text"
          onChange={onInputChange}
          required
          label="Address"
          validation="Please provide address"
          invalid
        />
        <br />
        <MDBInput
          value={phone}
          name="phone"
          type="text"
          onChange={onInputChange}
          required
          label="Phone"
          validation="Please provide phone"
          invalid
        />
        <br />
        <MDBInput
          value={role}
          name="role"
          type="text"
          onChange={onInputChange}
          required
          label="Role"
          validation="Please provide role"
          invalid
        />
        <br />
        <div className="col-12">
          <MDBBtn style={{ marginRight: "10px" }} type="submit">
            Add
          </MDBBtn>
          <MDBBtn onClick={() => history.push("/")} color="danger">
            Go Back
          </MDBBtn>
        </div>
      </div>
    </MDBValidation>
  );
};

export default AddEditUser;
