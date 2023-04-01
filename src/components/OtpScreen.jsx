import React, { useState } from 'react'
import './Style.css'
function OtpScreen() {
    const [numOne,setNumOne] = useState(0);
    const [numTwo,setNumTwo] = useState(0);
    const [numThree,setNumThree] = useState(0);
    const [numFour,setNumFour] = useState(0);
    const [numFive,setNumFive] = useState(0);
    const [numSix,setNumSix] = useState(0);

    const printData = () =>{
        console.log(numOne,numTwo,numThree,numFour,numFive,numSix);
    }
    return (
        <>
            <div className="logo"><p>Logo</p></div>
            <h3>Verification</h3>
            <div className="container">
                <div className='otpinfo'>
                    <p>SMS OTP</p><p>Sent on: 77777-77777</p>
                </div>
                <div className="code-container">
                    <input type="number" className="code" value={numOne}  onChange={(e)=>{setNumOne(e.target.value)}}/>
                    <input type="number" className="code" value={numTwo}  onChange={(e)=>{setNumTwo(e.target.value)}}/>
                    <input type="number" className="code" value={numThree}  onChange={(e)=>{setNumThree(e.target.value)}}/>
                    <input type="number" className="code" value={numFour}  onChange={(e)=>{setNumFour(e.target.value)}}/>
                    <input type="number" className="code" value={numFive}  onChange={(e)=>{setNumFive(e.target.value)}}/>
                    <input type="number" className="code" value={numSix}  onChange={(e)=>{setNumSix(e.target.value)}}/>
                </div>
                <small className="info">
                  Entered Wrong Details?<strong> Re-enter</strong>
                </small>

                <div>
                    <button type="button" className="btn btn-primary" onClick={printData}>Verify</button>
                </div>

                

            </div>
            <p className='goBack'>Go back to Home</p>
            </>

    )
}

export default OtpScreen
