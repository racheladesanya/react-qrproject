import React from 'react';
import './App.css';
// import HelloWorld from './components/Helloworld';
// import HelloWorld2 from './components/HelloWorld2';
// import HelloWorld3 from './components/HelloWorld3';
// import HelloWorld4 from './components/HelloWorld4';
//import HelloWorld7 from './components/HelloWorld7/HelloWorld7';
//import HelloWorld8 from './components/HelloWorld8';
//import HelloWorld9 from './components/HelloWorld9';

import Email from './components/Email';
import Sms from './components/sms';
import Url from './components/url';



const App: React.FC = () => {
    return (
        <div className="Container">
            <div className="Column1">
                <Sms />
            </div>
            <div className="Column2">
                <Url />
            </div>
            <div className="Column3">
                <Email />
            </div>
        </div>
    );
}

export default App;