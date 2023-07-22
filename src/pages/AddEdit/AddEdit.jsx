import React from 'react'
import "./AddEdite.css";

const AddEdit = () => {
  return (
    <div className='add-edit'>
      <div className="add-title">
        <h1>Job Card</h1>
      </div>
      <div className="add-form">
        <form className='form-width' >
           <div className='form-gap' >
          <label className='add-label' htmlFor="date">Date</label>
          <input className='add-input' type="date" name="date" /><br />
          </div>
      

          <div className='form-gap' >
          <label className='add-label'  htmlFor="order-no">Order No</label>
          <input className='add-input' type="number" /><br />
          </div>


          <div className='form-gap' >
          <label className='add-label' htmlFor="machine">Machine</label>
          <input className='add-input' type="text" name="machine" /><br />
          </div>
        

          <div className='form-gap' >
          <label className='add-label' htmlFor="client-name">Client Name</label>
          <input className='add-input' type="text" name="client-name" /><br />
          </div>
        

          <div className='form-gap' >
          <label className='add-label' htmlFor="address">Address</label>
          <input className='add-input' type="text" name="address" /><br />
          </div>
         

          <div className='form-gap' >
          <label className='add-label' htmlFor="phone-no">Phone Number</label>
          <input className='add-input' type="number" name="phone-no" /><br />
          </div>
       

          <div className='form-gap' >
          <label className='add-label' htmlFor="work-name">Work Name</label>
          <input className='add-input' type="text" name="work-name" /><br />
          </div>
         

          <div className='form-gap' >
          <label className='add-label' htmlFor="no-of-copies">No.of Copies</label>
          <input className='add-input' type="number" name="no-of-copies" /><br />
          </div>

          <div className='form-gap' >
          <label className='add-label' htmlFor="wastage">Wastage</label>
          <input className='add-input' type="text" name="wastage" /><br />
          </div>

          <div className='form-gap' >
          <label className='add-label' htmlFor="final-quantity">Final Quantity</label>
          <input className='add-input' type="text" name="final-quantity" /><br />
          </div>

          <div className='form-gap' >
          <label className='add-label' htmlFor="ctp">CTP</label>
          <input className='add-input' type="text" name="ctp" /><br />
          </div>

          <div className='form-gap' >
          <label className='add-label' htmlFor="lamination">Lamination</label>
          <select className='add-input' name="lamination">
            <option  value="yes">Yes</option>
            <option  value="no">No</option>
          </select><br />
          </div>

          <div className='form-gap' >
          <label className='add-label' htmlFor="no-of-plates">No.of Plates</label>
          <input className='add-input' type="text" name="no-of-plates" /><br />
          </div>

          <div className='form-gap' >
          <label className='add-label' htmlFor="printing-color">Printing Colour</label>
          <input className='add-input' type="text" name="printing-color" /><br />
          </div>

          <div className='form-gap' >
          <label className='add-label' htmlFor="printing-instructions">Printing Instructions</label>
          <input className='add-input' type="text" name="printing-instructions" /><br />
          </div>

          <div className='form-gap' >
          <label className='add-label' htmlFor="paper-size">Paper Size</label>
          <input className='add-input' type="text" name="paper-size" /><br />
          </div>

          <div className='form-gap' >
          <label className='add-label' htmlFor="gsm">GSM</label>
          <input className='add-input' type="text" name="gsm" /><br />
          </div>

          <div className='form-gap' >
          <label className='add-label' htmlFor="lamination">Lamination</label>
          <select className='add-input' name="lamination">
            <option value="yes">Yes</option>
            <option value="no">No</option>
          </select><br />
          </div>

          <div className='form-gap' >
          <label className='add-label' htmlFor="cutting-instructions">Cutting Instructions</label>
          <input className='add-input' type="text" name="cutting-instructions" /><br />
          </div>

          <div className='form-gap' >
          <label className='add-label' htmlFor="binding">Binding</label>
          <select className='add-input' name="binding">
            <option value="perfect">Perfect</option>
            <option value="stiching">Stiching</option>
            <option value="stapler">Stapler</option>
          </select><br />
          </div>

          <div className='form-gap' >
          <label className='add-label' htmlFor="type-of-work">Type of Work</label>
          <input className='add-input' type="text" name="type-of-work" /><br />
          </div>

          <div className='form-gap' >
          <label className='add-label' htmlFor="other-details">Other Details</label>
          <input className='add-input' type="textarea" name="other-details" /><br />
          </div>


        </form>
      </div>
    </div>
  )
}

export default AddEdit