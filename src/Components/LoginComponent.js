import React from  'react';
import './Loginform.css';

function Loginform() {
    function SubmitButton() {
        console.log('The event works')
        
    };
    
    return(
       <div className='Loginform'>
          <p style={{fontSize:'40px', paddingLeft:'49px'}}>The Weather App</p>
            <p><input style={{margin:'20px',width:'350px', height:'30px'}} type='text' name='' placeholder='Enter your username'></input></p>
             <button style={{fontSize:'30px', marginLeft:'150px'}} onClick={SubmitButton()}>Login in</button>
       </div>
    );
}

export default Loginform