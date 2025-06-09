import React from 'react';
import f from './assets/f.png';
import s from './assets/s.png';
import t from './assets/t.png';

const App = () => {
  return (
    <div className='container '>
      
      <div className='upper'>

        <div className='first'>
            <h1 className='head'>Transparent</h1>
            <p className='tail'>STAY IN THE KNOW</p>
            <div className='flex  gap-1 w-6 h-6' >              
              <img src={f} alt=''/>
              <img src={s} alt=''/>
              <img src={t} alt=''/>
            </div>
        </div>

        <div className='second'>
          <h1 className='topic'>PRODUCT</h1>
          <ul className='under'>
            <li>Live Conversation Platform</li>
            <li>Dialer</li>
            <li>Salesfloor</li>
            <li>Analytics</li>
            <li>Call Library</li>
            <li>Pricing</li>
          </ul>
        </div>

        <div className='third'>
          <h1 className='topic'>SOLUTIONS</h1>
          <ul className='under'>
            <li>Build Pipeline</li>
            <li>Increase Call Volume</li>
            <li>Decrease Ramp-time</li>
            <li>Coach</li>
            <li>For Sales Reps</li>
            <li>For Managers</li>
            <li>For Sales Leaders</li>
            <li>For Sales Operations</li>
          </ul>
        </div>

         <div className='fourth '>
          <h1 className='topic'>COMPANY</h1>
          <ul className='under'>
            <li>About us</li>
          </ul>
        </div>
    
      </div>

      

      <div className=' stunderline  lower'>
        <div className='fir'>
          <p>2024 Transparent. All Rights Reserved.</p>
          <ul className='list'>
            <li>Privacy policy</li>
            <li>Terms of service</li>
            <li>Technical Security</li>
          </ul>
        </div>
        <p>This Privacy Policy supplements our Terms of Service and any capitalized terms used, but not defined in this Privacy Policy, have the meaning given to them in our Terms of Service. Users can access the Services via our website at transparent.com. By using our Services, you are consenting to the collection, transfer, processing, storage, disclosure and other uses described in this privacy Policy.</p>
      </div>


    </div>
  )
}

export default App