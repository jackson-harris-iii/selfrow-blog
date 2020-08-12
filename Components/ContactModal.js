import React, { useState, useEffect } from 'react';
import {
	MDBContainer,
	MDBBtn,
	MDBModal,
	MDBModalBody,
	MDBModalHeader,
	MDBModalFooter,
	MDBRow,
	MDBCol,
	MDBIcon,
} from 'mdbreact';
import axios from 'axios';
import Link from 'next/link';
import { useRouter } from 'next/router';

const ModalPage = () => {
	const router = useRouter();

	const [status, setStatus] = useState({
		submitted: false,
		submitting: false,
		info: { error: false, msg: null },
	});
	const [inputs, setInputs] = useState({
		email: '',
		message: '',
	});
	const [visible, setVisible] = useState({
		isVisible: false,
	});

	const checkModal = () => {
		if (router.query.contact) {
			setVisible({
				isVisible: true,
			});
		}
	};

	const handleServerResponse = (ok, msg) => {
		if (ok) {
			setStatus({
				submitted: true,
				submitting: false,
				info: { error: false, msg: msg },
			});
			setInputs({
				email: '',
				message: '',
			});
		} else {
			setStatus({
				info: { error: true, msg: msg },
			});
		}
	};
	const handleOnChange = (e) => {
		e.persist();
		setInputs((prev) => ({
			...prev,
			[e.target.id]: e.target.value,
		}));
		setStatus({
			submitted: false,
			submitting: false,
			info: { error: false, msg: null },
		});
	};
	const handleOnSubmit = (e) => {
		e.preventDefault();
		setStatus((prevStatus) => ({ ...prevStatus, submitting: true }));
		axios({
			method: 'POST',
			url: 'https://formspree.io/mvowlqbq',
			data: inputs,
		})
			.then((response) => {
				handleServerResponse(true, 'Thank you, your message has been submitted.');
			})
			.catch((error) => {
				handleServerResponse(false, error.response.data.error);
			});
	};

	const modalToggle = async () => {
		if (router.query.contact) {
			router.push(`${router.pathname}`);
		}
	};

	return (
		<MDBContainer>
			<MDBModal isOpen={!!router.query.contact} toggle={modalToggle}>
				<MDBModalHeader toggle={modalToggle} className={'border-0'} />
				<MDBModalBody>
					<MDBRow className={'justify-content-center'}>
						<MDBCol size="10">
							<form onSubmit={handleOnSubmit}>
								<p className="h2 text-center mb-4 font-rubik lc-black">Contact Us</p>
								<label htmlFor="name" className="lc-blue1 font-karla">
									Your name
								</label>
								<input type="text" id="defaultFormContactNameEx" className="form-control" />
								<br />
								<label htmlFor="email" className="lc-blue1 font-karla">
									Email
								</label>
								<input
									type="email"
									id="email"
									className="form-control"
									name="_replyto"
									onChange={handleOnChange}
									required
									value={inputs.email}
								/>
								<br />
								<label htmlFor="defaultFormContactSubjectEx" className="lc-blue1 font-karla">
									Company
								</label>
								<input type="text" id="defaultFormContactSubjectEx" className="form-control" />
								<br />
								<label htmlFor="defaultFormContactMessageEx" className="lc-blue1 font-karla" htmlFor="message">
									Your message
								</label>
								<textarea
									id="message"
									name="message"
									onChange={handleOnChange}
									required
									value={inputs.message}
									className="form-control"
									rows="3"
								/>
								<div className="text-center mt-4">
									<MDBBtn color="blue darker-2" outline type="submit" disabled={status.submitting}>
										Send
										<MDBIcon far icon="paper-plane" className="ml-2" />
									</MDBBtn>
									{status.info.error && <div className="error">Error: {status.info.msg}</div>}
									{!status.info.error && status.info.msg && <p>{status.info.msg}</p>}
								</div>
							</form>
						</MDBCol>
					</MDBRow>
				</MDBModalBody>
				{/* <MDBModalFooter>
						<Link href={`${router.pathname}`}>
							<a>
								<MDBBtn color="secondary">Close</MDBBtn>
							</a>
						</Link>
						<MDBBtn color="primary">Save changes</MDBBtn>
					</MDBModalFooter> */}
			</MDBModal>
		</MDBContainer>
	);
};

export default ModalPage;
