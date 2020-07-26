import React, { Component } from 'react';
import {
	MDBNavbar,
	MDBNavbarBrand,
	MDBNavbarNav,
	MDBNavItem,
	MDBNavLink,
	MDBCollapse,
	MDBContainer,
	MDBHamburgerToggler,
	MDBNavbarToggler,
} from 'mdbreact';
import Link from 'next/link';

class NavbarPage extends Component {
	state = {
		// collapse1: false,
		// collapseID: '',
		isOpen: false,
	};

	toggleCollapse = (collapseID) => () => {
		this.setState((prevState) => ({ collapseID: prevState.collapseID !== collapseID ? collapseID : '' }));
	};

	toggleSingleCollapse = (collapseId) => {
		this.setState({
			...this.state,
			[collapseId]: !this.state[collapseId],
    });
    this.setState({ isOpen: !this.state.isOpen });
	};

	render() {
		return (
			<MDBNavbar
				style={{
					height: `80px`,
					zIndex: `100`,
				}}
				light
				className="sr-orange2 z-depth-0"
				expand="md"
			>
				<MDBContainer className="sr-orange2">
					<MDBNavbarBrand className="white-text py-0">
						<img src="/oars-large-2020.png" height="80" alt="" />
					</MDBNavbarBrand>
					<MDBNavbarToggler>
						<MDBHamburgerToggler
							color="#016367"
							id="hamburger1"
							onClick={() => this.toggleSingleCollapse('collapse1')}
						/>
					</MDBNavbarToggler>
					<MDBCollapse isOpen={this.state.collapse3} isOpen={this.state.isOpen} navbar>
						<MDBNavbarNav right>
							<MDBNavItem>
								<Link href="/">
									<a className="nav-link font-oswald nav-font font-weight-bolder">Mind</a>
								</Link>
							</MDBNavItem>
							<MDBNavItem>
								<Link href="#!">
									<a className="nav-link font-oswald nav-font font-weight-bolder">Body</a>
								</Link>
							</MDBNavItem>
							<MDBNavItem>
								<Link href="#!">
									<a className="nav-link font-oswald nav-font font-weight-bolder">Service</a>
								</Link>
							</MDBNavItem>
							<MDBNavItem>
								<Link href="#!">
									<a className="nav-link font-oswald nav-font font-weight-bolder">About</a>
								</Link>
							</MDBNavItem>
							<MDBNavItem>
								<Link href="#!">
									<a className="nav-link font-oswald nav-font font-weight-bolder">Contact</a>
								</Link>
							</MDBNavItem>
						</MDBNavbarNav>
					</MDBCollapse>
				</MDBContainer>
			</MDBNavbar>
		);
	}
}

export default NavbarPage;