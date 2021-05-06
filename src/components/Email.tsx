import React, { useState } from 'react';
const Email: React.FC= () => {
    const QRCode = require('qrcode.react');

    const [mail, setMail] = useState('');
    const [subject, setSubject] = useState('');
    const [body, setBody] = useState('');

    const [showCode, setShowCode] = useState(true);

    const ShowMail = (event: any) => {
        setMail(event.target.value)
    }

    const ShowSub = (event: any) => {
        setSubject(event.target.value)
    }

    const ShowBody = (event: any) => {
        setBody(event.target.value)
    }

    return (
        <div>
                    <div className="title">E-MAIL</div>
                    <div className="subtitle">-----------------------------------------------------------------</div>


                    <div className="field">
                        <label className="label">Mail To</label>
                        <div className="control">
                            <input className="input" type="text" placeholder="Enter email" onInput={ShowMail} />
                        </div>
                    </div>
                    
                {/*this is to create text area "body" where the message to be sent is entered. I added a place holder that will be replaced by the actual message on input*/}
                    <div className="field">
                        <label className="label">Subject</label>
                        <div className="control">
                            <input className="input" type="text" placeholder="Enter Subject" onInput={ShowSub} />
                        </div>
                    </div>

                {/*this is to create text area "body" where the message to be sent is entered. I added a place holder that will be replaced by the actual message on input*/}
                    <div className="field">
                        <label className="label">Body</label>
                        <div className="control">
                            <textarea className="textarea" placeholder="Type Message" onInput={ShowBody}></textarea>
                        </div>
                    </div>

                    <div>

                        <div>
                             {/* this line is to generate the qr code which will carry out the action of sending the 
                             typed message to specified email with a subject. the size of the qr code is also specified */}
                            <QRCode value={`mailto:${mail}?subject=${subject}&body=${body}.`} size={256} />
                        </div>
                    </div>
             </div>

    )
}

export default Email;