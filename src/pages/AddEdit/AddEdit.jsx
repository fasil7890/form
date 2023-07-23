import React,{useState} from 'react'
import "./AddEdite.css";

const AddEdit = () => {
  const [data,setData]=useState({
    date:"",
    orderNo:"",
    machine:"",
    clientName:"",
    address:"",
    phoneNo:"",
    workName:"",
    noOfCopies:"",
    wastage:"",
    finalQuantity:"",
    ctp:"",
    lamination:"",
    noOfPlates:"",
    printingColor:"",
    printingInstructions:"",
    paperSize:"",
    gsm:"",
    cuttingInstructions:"",
    binding:"",
    typeOfWork:"",
    otherDetails:""
  })
  

  const handleChange=(e)=>{
    const {name,value} = e.target;
    setData(prevState=>({
      ...prevState,
      [name]:value
    }))
  }

  const handleSubmit = (e)=>{
    e.preventDefault()
    console.log(data);
}

  return (
    <div className='add-edit'>
      <div className="add-title">
        <h1>Job Card</h1>
      </div>
      <div className="add-form">
        <form onSubmit={handleSubmit} className='form-width' >
           <div className='form-gap' >
          <label className='add-label' htmlFor="date">Date</label>
          <input value={data.date} onChange={handleChange} className='add-input' type="date" name="date" /><br />
          </div>
      

          <div className='form-gap' >
          <label className='add-label'  htmlFor="order-no">Order No</label>
          <input value={data.orderNo} onChange={handleChange} className='add-input' type="number" name='orderNo' /><br />
          </div>


          <div className='form-gap' >
          <label className='add-label' htmlFor="machine">Machine</label>
          <input value={data.machine} onChange={handleChange} className='add-input' type="text" name="machine" /><br />
          </div>
        

          <div className='form-gap' >
          <label className='add-label' htmlFor="client-name">Client Name</label>
          <input value={data.clientName} onChange={handleChange} className='add-input' type="text" name="clientName" /><br />
          </div>
        

          <div className='form-gap' >
          <label className='add-label' htmlFor="address">Address</label>
          <input value={data.address} onChange={handleChange} className='add-input' type="text" name="address" /><br />
          </div>
         

          <div className='form-gap' >
          <label className='add-label' htmlFor="phone-no">Phone Number</label>
          <input value={data.phoneNo} onChange={handleChange} className='add-input' type="number" name="phoneNo" /><br />
          </div>
       

          <div className='form-gap' >
          <label className='add-label' htmlFor="work-name">Work Name</label>
          <input value={data.workName} onChange={handleChange} className='add-input' type="text" name="workName" /><br />
          </div>
         

          <div className='form-gap' >
          <label className='add-label' htmlFor="no-of-copies">No.of Copies</label>
          <input value={data.noOfCopies} onChange={handleChange} className='add-input' type="number" name="noOfCopies" /><br />
          </div>

          <div className='form-gap' >
          <label className='add-label' htmlFor="wastage">Wastage</label>
          <input value={data.wastage} onChange={handleChange} className='add-input' type="text" name="wastage" /><br />
          </div>

          <div className='form-gap' >
          <label className='add-label' htmlFor="final-quantity">Final Quantity</label>
          <input value={data.finalQuantity} onChange={handleChange} className='add-input' type="text" name="finalQuantity" /><br />
          </div>

          <div className='form-gap' >
          <label className='add-label' htmlFor="ctp">CTP</label>
          <input value={data.ctp} onChange={handleChange} className='add-input' type="text" name="ctp" /><br />
          </div>

          <div className='form-gap' >
          <label className='add-label' htmlFor="lamination">Lamination</label>
          <select value={data.lamination} onChange={handleChange} className='add-input' name="lamination">
            <option  >Choose Yes/No</option>
            <option  value="yes">Yes</option>
            <option  value="no">No</option>
          </select><br />
          </div>

          <div className='form-gap' >
          <label className='add-label' htmlFor="no-of-plates">No.of Plates</label>
          <input value={data.noOfPlates} onChange={handleChange} className='add-input' type="text" name="noOfPlates" /><br />
          </div>

          <div className='form-gap' >
          <label className='add-label' htmlFor="printing-color">Printing Colour</label>
          <input value={data.printingColor} onChange={handleChange} className='add-input' type="text" name="printingColor" /><br />
          </div>

          <div className='form-gap' >
          <label className='add-label' htmlFor="printing-instructions">Printing Instructions</label>
          <input value={data.printingInstructions} onChange={handleChange} className='add-input' type="text" name="printingInstructions" /><br />
          </div>

          <div className='form-gap' >
          <label className='add-label' htmlFor="paper-size">Paper Size</label>
          <input value={data.secondPaperSize} onChange={handleChange} className='add-input' type="text" name="paperSize" /><br />
          </div>

          <div className='form-gap' >
          <label className='add-label' htmlFor="gsm">GSM</label>
          <input value={data.gsm} onChange={handleChange} className='add-input' type="text" name="gsm" /><br />
          </div>

          <div className='form-gap' >
          <label className='add-label' htmlFor="lamination">Lamination</label>
          <select value={data.secondLamination} onChange={handleChange} className='add-input' name="secondLamination">
            <option > Choose Yes/No</option>
            <option value="yes">Yes</option>
            <option value="no">No</option>
          </select><br />
          </div>

          <div className='form-gap' >
          <label className='add-label' htmlFor="cutting-instructions">Cutting Instructions</label>
          <input value={data.cuttingInstructions} onChange={handleChange} className='add-input' type="text" name="cuttingInstructions" /><br />
          </div>

          <div className='form-gap' >
          <label className='add-label' htmlFor="binding">Binding</label>
          <select value={data.binding} onChange={handleChange} className='add-input' name="binding">
            <option>Choose One</option>
            <option value="perfect">Perfect</option>
            <option value="stiching">Stiching</option>
            <option value="stapler">Stapler</option>
          </select><br />
          </div>

          <div className='form-gap' >
          <label className='add-label' htmlFor="type-of-work">Type of Work</label>
          <input value={data.typeOfWork} onChange={handleChange} className='add-input' type="text" name="typeOfWork" /><br />
          </div>

          <div className='form-gap' >
          <label className='add-label' htmlFor="other-details">Other Details</label>
          <input value={data.otherDetails} onChange={handleChange} className='add-input' type="textarea" name="otherDetails" /><br />
          </div>
         <div className="form-button">
          <button type='submit'>Submit</button>
         </div>
        </form>
      </div>
    </div>
  )
}

export default AddEdit