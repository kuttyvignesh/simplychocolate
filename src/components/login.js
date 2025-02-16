import React, { Component } from 'react';

class Uncontrolledform extends Component{
    handleSubmit=(event)=>{
        event.preventDefault();
        const formData={
            name: this.nameInput.value,
            email: this.emailInput.value,
            company: this.company.value,
            message:this.messageInput.value
        };
        console.log('form Data Submitting',formData);
    };
    render(){
        return(
            <div className='login'>
                
                <center><form className='form' onSubmit={this.handleSubmit}>
                    <div className='name'>
                    <div>
                        <label htmlFor="name" ></label>
                        <input
                            className='name-box'
                            type="text"
                            id="name"
                            name="name"
                            ref={(input)=>(this.nameInput=input)}
                            required
                            placeholder='name'
                            />
                            
                    </div>
                    <div>
                        <label htmlFor="email"> </label>
                        <input
                            className='email'
                            type="email"
                            id="email"
                            email="email"
                            ref={(input)=>(this.emailInput=input)}
                            required
                            placeholder='E-Mail'
                            />
                            
                    </div>
                    </div><br></br>
                    <div>
                        <label htmlFor="company"></label>
                        <input 
                            className='company'
                            type="text"
                            id="text"
                            comapny="company"
                            ref={(input)=>(this.companyInput=input)}
                            required
                            placeholder='Company'
                            />
                            
                    </div><br></br>
                    <div>
                    <textarea 
                    class="form-control" 
                    rows="4"
                    type="text"
                    message="message" 
                    ref={(input)=>(this.messageInput=input)}
                     >Message</textarea>
                    </div><br></br>
                    <div>
                        
<div>
            <button className='button loginbtn'> submit</button>
</div>
                    </div>
                    
                </form></center>
            </div>
        )
    }
}  

export default Uncontrolledform;