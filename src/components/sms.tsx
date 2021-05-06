import React, { useState } from 'react';
/* there is need to create constant variables that will be implemented later. if not the variable used will not be recognised */
const Sms: React.FC = () => {

    const QRCode = require('qrcode.react');

    const [number, setSms] = useState('');

    const ShowSMS = (event: any) => {
        setSms(event.target.value);
    }
    
    const [message, setMessage] = useState('');

    const ShowMessage = (event: any) => {
        setMessage (event.target.value);
    }  



    return (
        <div>
            {/* the lines of code below is used to add title and subtitle */}
            <div className="title">SMS</div>
            <div className="subtitle">-----------------------------------------------------------------</div>

            {/* the block below creates a field where the recipients phone number is inputed. the place holder "enter phone" will be replaced by the recipients phone number on input */}
            <div className="field">
                <div className="label">Recipient's number</div>
                <div className="control">
                    <input className="input" type="text" placeholder="Enter phone" onInput={ShowSMS} />
                </div>
            </div>
            
            {/*this is to create text area "message" where the message to be sent is entered. I added a place holder that will be replaced by the actual message on input*/}
            <div className="field">
                <div className="label">Message</div>
                <div className="control">
                    <textarea className="textarea" placeholder="Type Message" onInput={ShowMessage}></textarea>
                </div>
            </div>

                
            <div>
                {/* this line is to generate the qr code which will send the written message to the specified phone nuber. the size of the qr code is also specified */}
                <QRCode value={`SMS:${number}:${message}`} size={256} />
            </div>
        </div >
    )
}


export default Sms;