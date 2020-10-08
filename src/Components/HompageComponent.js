import React from 'react';
import './Loginform.css';

function Homepage() {
    function SearchButton() {
        
    }
    return(
    <div className='Loginform'>   
            <p style={{fontSize:'40px', paddingLeft:'49px'}}>Temp 25degrees</p>
            <p><input style={{margin:'20px',width:'350px', height:'30px'}} type='text' name='' placeholder='enter your cities name'></input></p>
            <button style={{fontSize:'30px', marginLeft:'150px'}} onClick={SearchButton()}>Search</button>
    </div>
    );
}

export default Homepage