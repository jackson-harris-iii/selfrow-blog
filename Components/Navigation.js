import React, { useState, Component } from 'react';
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
	MDBIcon,
	MDBBtn,
	MDBRow,
	MDBCol,
} from 'mdbreact';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';
import { useRouter } from 'next/router';

const NavbarPage = (props) => {
	// state = {
	// 	// collapse1: false,
	// 	// collapseID: '',
	// 	isOpen: false, 
	// };

	const [collapseID, setCollapseID] = useState('')
	const [isCollapsed1, setIsCollapsed1] = useState(false)
	const router = useRouter();

	// toggleCollapse = (collapseID) => () => {
	// 	this.setState((prevState) => ({ collapseID: prevState.collapseID !== collapseID ? collapseID : '' }));
	// };

	// toggleSingleCollapse = (collapseId) => {
	// 	this.setState({
	// 		...this.state,
	// 		[collapseId]: !this.state[collapseId],
  //   });
  //   this.setState({ isOpen: !this.state.isOpen });
	// };


		return (
			<MDBNavbar
				style={{
					marginTop: '0px',
					zIndex: `100`,
					position: 'absolute',
					width: '100vw',
					backdropFilter: 'blur(8px)',
					backgroundColor: 'rgba(216, 156, 96, .7)',
				}}
				light
				className="sr-orange2 z-depth-0 border-bottom border-dark"
				expand="md"
			>
				<MDBContainer className="sr-orange2">
					<MDBNavbarBrand className="white-text py-0">
						<Link href="/">
							<a>
								<img src="/oars-large-2020.png" height="80" alt="" />
							</a>
						</Link>
					</MDBNavbarBrand>
					<MDBNavbarToggler>
						<MDBHamburgerToggler
							color="#016367"
							id="hamburger1"
							onClick={() => setIsCollapsed1((isCollapsed1) => !isCollapsed1)}
						/>
					</MDBNavbarToggler>
					<MDBCollapse className="nav-blur" isOpen={isCollapsed1} navbar>
						<MDBNavbarNav className="dropdown-menu-right">
							<MDBNavItem>
								<Link href="/mind">
									<a className="nav-link font-oswald nav-font font-weight-bolder">Mind</a>
								</Link>
							</MDBNavItem>
							<MDBNavItem>
								<Link href="/body">
									<a className="nav-link font-oswald nav-font font-weight-bolder">Body</a>
								</Link>
							</MDBNavItem>
							<MDBNavItem>
								<Link href="/service">
									<a className="nav-link font-oswald nav-font font-weight-bolder">Service</a>
								</Link>
							</MDBNavItem>
							<MDBNavItem>
								<Link href="/about">
									<a className="nav-link font-oswald nav-font font-weight-bolder">About</a>
								</Link>
							</MDBNavItem>
							<MDBNavItem>
								<Link href={`${router.pathname}?contact=contact`} as={router.pathname}>
									<a className="nav-link font-oswald nav-font font-weight-bolder">Contact</a>
								</Link>
							</MDBNavItem>
							<MDBNavItem className="my-auto">
								<MDBContainer>
									<MDBRow>
										<MDBCol>
											<a href="https://www.facebook.com/selfrowblog" target="blank">
												{/* <MDBIcon size="2x" fab icon="facebook" /> */}
												<FontAwesomeIcon icon={["fab", "facebook"]} />
											</a>
										</MDBCol>
										<MDBCol>
											<a href="https://instagram.com/selfrow_official" target="blank">
												<MDBIcon size="2x" fab fa icon="instagram" />
											</a>
										</MDBCol>
									</MDBRow>
								</MDBContainer>
							</MDBNavItem>
						</MDBNavbarNav>
					</MDBCollapse>
				</MDBContainer>
			</MDBNavbar>
		);
	}

export default NavbarPage;
