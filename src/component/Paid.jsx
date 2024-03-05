import React from 'react'
import '../styles/Paid.css'


const Paid = () => {
  return (
    <>
    <div className="top">
    <img className='dog' src="./images/dog.jpg" alt="" />
    <div className="top-text">
    <p><i>Kon take d breed wey u like 
        <br />
        Dis wan no dey bite
        <br />
        your best friend</i>
    </p>
    </div>
    </div>
    

    <div className="table">
    <table border="10">
        <tbody><tr>
            <th>DOGS AVAILABLE</th>
            <th>LOCATION</th>
            <th>BREED</th>
            <th>AGE</th>
        </tr>
        <tr>
            <td>Bull</td>
            <td>Lagos mainland</td>
            <td> mastif</td>
            <th>16 mnth</th>
        </tr>
        <tr>
            <td>Beagle</td>
            <td>abuja</td>
            <td>mixed </td>
            <td>1y/3m</td>
        </tr>
        <tr>
            <td>German Sherpard</td>
            <td>Ikorodu</td>
            <td>pure breed</td>
            <th>7 wks</th>
        </tr>
    </tbody></table>

    <ul>
        <strong>
         <li>Email: etimdavid407@gmail.com</li>
         <li>Phone: (+234) 9293-8788</li>
         <li>GitHub: github.com/dave407</li>
         <li>32 agoro street by Luth. </li>
        </strong>
    </ul>

    </div>
    </>
    )
}

export default Paid