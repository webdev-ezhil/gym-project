import React from 'react';
import "./Footer.css";
import { Row } from 'react-bootstrap';


const Footer = () => {
  return (
    <Row>
   
    <div>
      <body>
	<footer class="footer">
		<div class="container row">
			<div class="footer-col">
				<h4>company</h4>
        <ul>
              <li><a href="/Workout">workout</a></li>
              <li><a href="/Diet">diet</a></li>
              <li><a href="/Contact">contact</a></li>
              <li><a href="/About">about us</a></li>
            </ul>
			</div>
			<div class="footer-col">
				<h4>get help</h4>
				<ul>
					<li><a href="#">FAQ</a></li>
					<li><a href="#">shipping</a></li>
					<li><a href="#">returns</a></li>
					<li><a href="#">order status</a></li>
					<li><a href="#">payment options</a></li>
				</ul>
			</div>
			<div class="footer-col">
				<h4>online shop</h4>
				<ul>
					<li><a href="#">download</a></li>
					<li><a href="#">changelog</a></li>
					<li><a href="#">github</a></li>
					<li><a href="#">all version</a></li>
				</ul>
			</div>
			<div class="footer-col">
				
			</div>
		</div>
	</footer>
</body>
    </div> 
    </Row>

  );
};

export default Footer;


