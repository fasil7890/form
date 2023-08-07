import React, { useState } from "react";
import "./AddEdite.css";

const AddEdit = ({setData}) => {
  // Function to generate a random order number
  const generateOrderNumber = () => {
    return Date.now().toString(); // Using the timestamp as the order number
  };

  const [formData, setFormData] = useState({
    date: new Date().toISOString().slice(0, 10), // Get current date in the format "YYYY-MM-DD"
    orderNo: generateOrderNumber(),
    machine: "",
    clientName: "",
    address: "",
    phoneNo: "",
    workName: "",
    noOfCopies: "",
    wastage: "",
    finalQuantity: "",
    ctp: "",
    lamination: "",
    noOfPlates: "",
    printingColor: "",
    printingInstructions: "",
    paperSize: "",
    gsm: "",
    cuttingInstructions: "",
    binding: "",
    typeOfWork: "",
    otherDetails: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setData(formData);

  };

  console.log("form data",formData,"@@@@");

  const getFormData = async (e) => {
    const {
      date,
      orderNo,
      machine,
      clientName,
      address,
      phoneNo,
      workName,
      noOfCopies,
      wastage,
      finalQuantity,
      ctp,
      lamination,
      noOfPlates,
      printingColor,
      printingInstructions,
      paperSize,
      gsm,
      cuttingInstructions,
      binding,
      typeOfWork,
      otherDetails,
    } = formData;

    e.preventDefault();
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        date,
        orderNo,
        machine,
        clientName,
        address,
        phoneNo,
        workName,
        noOfCopies,
        wastage,
        finalQuantity,
        ctp,
        lamination,
        noOfPlates,
        printingColor,
        printingInstructions,
        paperSize,
        gsm,
        cuttingInstructions,
        binding,
        typeOfWork,
        otherDetails,
      }),
    };
    const res = await fetch(
      "https://job-card-81703-default-rtdb.firebaseio.com/UserData.json",
      options
    );
    console.log(res);
    if (res) {
      alert("Message Sent");
    } else {
      alert("Error");
    }
  };

  return (
    <div className="add-edit">
      <div className="add-title">
        <h1>Job Card</h1>
      </div>
      <div className="add-form">
        <form onSubmit={handleSubmit} className="form-width" method="POST">
          <div className="form-gap">
            <label className="add-label" htmlFor="date">
              Date
            </label>
            <input
              value={formData.date}
              onChange={handleChange}
              className="add-input"
              type="date"
              name="date"
            />
            <br />
          </div>

          <div className="form-gap">
            <label className="add-label" htmlFor="order-no">
              Order No
            </label>
            <input
              value={formData.orderNo}
              onChange={handleChange}
              className="add-input"
              type="number"
              name="orderNo"
            />
            <br />
          </div>

          <div className="form-gap">
            <label className="add-label" htmlFor="machine">
              Machine
            </label>
            <input
              value={formData.machine}
              onChange={handleChange}
              className="add-input"
              type="text"
              name="machine"
            />
            <br />
          </div>

          <div className="form-gap">
            <label className="add-label" htmlFor="client-name">
              Client Name
            </label>
            <input
              value={formData.clientName}
              onChange={handleChange}
              className="add-input"
              type="text"
              name="clientName"
            />
            <br />
          </div>

          <div className="form-gap">
            <label className="add-label" htmlFor="address">
              Address
            </label>
            <input
              value={formData.address}
              onChange={handleChange}
              className="add-input"
              type="text"
              name="address"
            />
            <br />
          </div>

          <div className="form-gap">
            <label className="add-label" htmlFor="phone-no">
              Phone Number
            </label>
            <input
              value={formData.phoneNo}
              onChange={handleChange}
              className="add-input"
              type="number"
              name="phoneNo"
            />
            <br />
          </div>

          <div className="form-gap">
            <label className="add-label" htmlFor="work-name">
              Work Name
            </label>
            <input
              value={formData.workName}
              onChange={handleChange}
              className="add-input"
              type="text"
              name="workName"
            />
            <br />
          </div>

          <div className="form-gap">
            <label className="add-label" htmlFor="no-of-copies">
              No.of Copies
            </label>
            <input
              value={formData.noOfCopies}
              onChange={handleChange}
              className="add-input"
              type="number"
              name="noOfCopies"
            />
            <br />
          </div>

          <div className="form-gap">
            <label className="add-label" htmlFor="wastage">
              Wastage
            </label>
            <input
              value={formData.wastage}
              onChange={handleChange}
              className="add-input"
              type="text"
              name="wastage"
            />
            <br />
          </div>

          <div className="form-gap">
            <label className="add-label" htmlFor="final-quantity">
              Final Quantity
            </label>
            <input
              value={formData.finalQuantity}
              onChange={handleChange}
              className="add-input"
              type="text"
              name="finalQuantity"
            />
            <br />
          </div>

          <div className="form-gap">
            <label className="add-label" htmlFor="ctp">
              CTP
            </label>
            <input
              value={formData.ctp}
              onChange={handleChange}
              className="add-input"
              type="text"
              name="ctp"
            />
            <br />
          </div>

          <div className="form-gap">
            <label className="add-label" htmlFor="lamination">
              Lamination
            </label>
            <select
              value={formData.lamination}
              onChange={handleChange}
              className="add-input"
              name="lamination"
            >
              <option>Choose Yes/No</option>
              <option value="yes">Yes</option>
              <option value="no">No</option>
            </select>
            <br />
          </div>

          <div className="form-gap">
            <label className="add-label" htmlFor="no-of-plates">
              No.of Plates
            </label>
            <input
              value={formData.noOfPlates}
              onChange={handleChange}
              className="add-input"
              type="text"
              name="noOfPlates"
            />
            <br />
          </div>

          <div className="form-gap">
            <label className="add-label" htmlFor="printing-color">
              Printing Colour
            </label>
            <input
              value={formData.printingColor}
              onChange={handleChange}
              className="add-input"
              type="text"
              name="printingColor"
            />
            <br />
          </div>

          <div className="form-gap">
            <label className="add-label" htmlFor="printing-instructions">
              Printing Instructions
            </label>
            <input
              value={formData.printingInstructions}
              onChange={handleChange}
              className="add-input"
              type="text"
              name="printingInstructions"
            />
            <br />
          </div>

          <div className="form-gap">
            <label className="add-label" htmlFor="paper-size">
              Paper Size
            </label>
            <input
              value={formData.secondPaperSize}
              onChange={handleChange}
              className="add-input"
              type="text"
              name="paperSize"
            />
            <br />
          </div>

          <div className="form-gap">
            <label className="add-label" htmlFor="gsm">
              GSM
            </label>
            <input
              value={formData.gsm}
              onChange={handleChange}
              className="add-input"
              type="text"
              name="gsm"
            />
            <br />
          </div>

          {/* <div className="form-gap">
            <label className="add-label" htmlFor="lamination">
              Lamination
            </label>
            <select
              value={data.secondLamination}
              onChange={handleChange}
              className="add-input"
              name="secondLamination"
            >
              <option> Choose Yes/No</option>
              <option value="yes">Yes</option>
              <option value="no">No</option>
            </select>
            <br />
          </div> */}

          <div className="form-gap">
            <label className="add-label" htmlFor="cutting-instructions">
              Cutting Instructions
            </label>
            <input
              value={formData.cuttingInstructions}
              onChange={handleChange}
              className="add-input"
              type="text"
              name="cuttingInstructions"
            />
            <br />
          </div>

          <div className="form-gap">
            <label className="add-label" htmlFor="binding">
              Binding
            </label>
            <select
              value={formData.binding}
              onChange={handleChange}
              className="add-input"
              name="binding"
            >
              <option>Choose One</option>
              <option value="perfect">Perfect</option>
              <option value="stiching">Stiching</option>
              <option value="stapler">Stapler</option>
            </select>
            <br />
          </div>

          <div className="form-gap">
            <label className="add-label" htmlFor="type-of-work">
              Type of Work
            </label>
            <input
              value={formData.typeOfWork}
              onChange={handleChange}
              className="add-input"
              type="text"
              name="typeOfWork"
            />
            <br />
          </div>

          <div className="form-gap">
            <label className="add-label" htmlFor="other-details">
              Other Details
            </label>
            <input
              value={formData.otherDetails}
              onChange={handleChange}
              className="add-input"
              type="textarea"
              name="otherDetails"
            />
            <br />
          </div>
          <div className="form-button">
            <button onClick={getFormData} type="submit">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddEdit;
