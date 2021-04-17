import React from "react";
import {
Box,
Container,
Row,
Column,
FooterLink,
Heading,
} from "./FooterStyles";

const Footer = () => {
return (
	<Box>
	<h1 style={{ color: "green",
				textAlign: "center",
				marginTop: "-50px" }}>
	</h1>
	<Container>
		<Row>
		<Column>
			<Heading>Causes</Heading>
			<FooterLink href="#">Medical crowdfunding</FooterLink>
			<FooterLink href="#">Cancer Crowdfunding</FooterLink>
			<FooterLink href="#">Education Crowdfunding</FooterLink>
		</Column>
		<Column>
			<Heading>How it works?</Heading>
			<FooterLink href="#">Fundraising for NGOs</FooterLink>
			<FooterLink href="#">Corporates</FooterLink>
			<FooterLink href="#">Browse Fundraiser</FooterLink>
			<FooterLink href="#">What is Crowdfunding?</FooterLink>
		</Column>
		<Column>
			<Heading>About Us</Heading>
			<FooterLink href="#">Team Ketto</FooterLink>
			<FooterLink href="#">In The News</FooterLink>
			<FooterLink href="#">Our Partners</FooterLink>
			<FooterLink href="#">Careers</FooterLink>
		</Column>
		<Column>
			<Heading>Support</Heading>
			<FooterLink href="#">Medical Finance</FooterLink>
			<FooterLink href="#">FAQs & Help Center</FooterLink>
			<FooterLink href="#">Fundraising Tips</FooterLink>
			<FooterLink href="#">Fundraiser Video</FooterLink>
			<FooterLink href="#">Plans & Pricing</FooterLink>
			<FooterLink href="#">Contact Us</FooterLink>
		</Column>

{/* 
        <Column>
			<Heading>Support</Heading>
			<FooterLink href="#">
			<i className="fab fa-facebook-f">
				<span style={{ marginLeft: "10px" }}>
				Facebook
				</span>
			</i>
			</FooterLink>
			<FooterLink href="#">
			<i className="fab fa-instagram">
				<span style={{ marginLeft: "10px" }}>
				Instagram
				</span>
			</i>
			</FooterLink>
			<FooterLink href="#">
			<i className="fab fa-twitter">
				<span style={{ marginLeft: "10px" }}>
				Twitter
				</span>
			</i>
			</FooterLink>
			<FooterLink href="#">
			<i className="fab fa-youtube">
				<span style={{ marginLeft: "10px" }}>
				Youtube
				</span>
			</i>
			</FooterLink>
		</Column> */}



		</Row>
	</Container>
	</Box>
);
};
export {Footer};
