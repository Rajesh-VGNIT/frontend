import React from 'react'
import './AddTenantCustomer.css';

const AddTenantCustomer = () => {
  return (
    <div className='addtenant'>
    <div className="containeer">
    <header>Tuc Info</header>
    <hr/>

    <form>
        <div className="form first">
            <div className="details personal">

                <div className="fields">
                    <div className="input-field">
                        <label>Name<span style={{color:"red"}}>*</span></label>
                        <input type="text" name="name" placeholder="Enter Your Name" required />
                    </div>

                    <div className="input-field">
                        <label>OTP Charges Type<span style={{color:"red"}}>*</span></label>
                        <input type="text"  placeholder="" required />
                    </div>

                    <div className="input-field">
                        <label>Trans Charges Type<span style={{color:"red"}}>*</span></label>
                        <input type="text"  placeholder="" required />
                    </div>

                    <div className="input-field">
                    <label>Promo Charges Type<span style={{color:"red"}}>*</span></label>
                    <input type="text"  placeholder="" required />
                </div>

                <div className="input-field">
                    <label>Govt. Charges Type<span style={{color:"red"}}>*</span></label>
                    <input type="text"  placeholder="" required />
                </div>

                <div className="input-field">
                    <label>SIM Route Charges Type<span style={{color:"red"}}>*</span></label>
                    <input type="text" placeholder="" required/>
                </div>

                <div className="input-field">
                <label>Default Charges Type<span style={{color:"red"}}>*</span></label>
                <input type="text"  placeholder="" required />
            </div>

            <div className="input-field">
                <label>Billing Type<span style={{color:"red"}}>*</span></label>
                <input type="text"  placeholder="PREPAID" required />
            </div>

            <div className="input-field">
                <label>Validity<span style={{color:"red"}}>*</span></label>
                <input type="text" placeholder="No.of Days" required/>
            </div>

            <div className="input-field">
                <label>Mask Phone<span style={{color:"red"}}>*</span></label>
                <input type="text" placeholder="" required/>
            </div>

                   
                </div>
            </div>
            <hr/>
          
            {/*<!-- -----------------Step2------------------ -->*/}

            <div className="details ID">
                <span className="title">Licenses</span>

                <div className="fields">
                <div className="input-field">
                <label>Child TUC<span style={{color:"red"}}>*</span>(0)</label>
                <input type="text"  placeholder="Enter Child TUC" required />
            </div>

            <div className="input-field">
                <label>SMPPS<span style={{color:"red"}}>*</span>(0)</label>
                <input type="text" placeholder="0" required/>
            </div>

            <div className="input-field">
                <label>SMS API<span style={{color:"red"}}>*</span>(1)</label>
                <input type="text" placeholder="1" required/>
            </div>
                   
                </div>
                <hr/>

 {/*<!-- -----------------Button------------------ -->*/}
                
                    <div className="btnu">
                         <button type='cancel'>Cancel</button>
                        <input type="submit" value="Create"/>
                    </div>
                   
                </div>
            </div> 
      
</form>
</div>

    </div>
  )
}

export default AddTenantCustomer;