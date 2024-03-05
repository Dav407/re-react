import React from 'react'
import '../styles/Footer.css'

const Footer = () => {
  return (
  <footer>
    <div class='first'>
    <img src="./images/dog.jpg" alt="" />
    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rem provident atque hic aut aperiam accusantium ratione illo iusto dolor quae laudantium voluptatem accusamus quidem sed id assumenda fugiat et nam sequi consectetur cumque, qui necessitatibus non? Reprehenderit, nesciunt iure! Maiores?
    </p>
    </div>

    <div className='second' >
    <h4>Product</h4>
    <ul>
        <li>Dog Traning</li>
        <li>Dog Feeds</li>
        <li>Dog Toys </li>
        <li>ERM</li>
        <li>Cross Breeding</li>
    </ul>
    </div>

    <div className='third'>
    <h4>Services</h4>
    <ul>
        <li>E-commerce</li>
        <li>Social Media</li>
        <li>Logistics </li>
        <li>ERM</li>
        <li>School Management App</li>
    </ul>
    </div>
  

    <div className='fifth'>
    <div className='input-container'>
    <input type="search" placeholder='search' />
    <i class="fa-solid fa-magnifying-glass"></i>
    </div>
    <div className='icon-container'>
    <i class="fa-brands fa-facebook"></i>
    <i class="fa-brands fa-github"></i>
    <i class="fa-brands fa-instagram"></i>
    <i class="fa-brands fa-twitter"></i>

    </div>
    </div>

  </footer>
  )
}

export default Footer