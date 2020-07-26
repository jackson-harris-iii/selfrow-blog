import React from 'react';
import { MDBRow, MDBCol, MDBCardBody, MDBIcon, MDBBtn, MDBView, MDBMask } from 'mdbreact';

const ProjectsPage = () => {
	return (
		<section className="text-center my-5">
			<h2 className="h1-responsive font-weight-bold my-5">Topics</h2>

			<MDBRow className="d-flex justify-content-center flex-row-reverse ">
				<MDBCol md="6" xl="5" className="mb-4">
					<MDBView className="overlay rounded z-depth-2" waves>
						<img src="https://mdbootstrap.com/img/Photos/Others/laptop-sm.jpg" alt="" className="img-fluid" />
						<a href="#!">
							<MDBMask overlay="white-slight" />
						</a>
					</MDBView>
				</MDBCol>
				<MDBCol md="6" xl="5" className="mb-4">
					<MDBCardBody className="pb-0">
						<a href="#!" className="green-text">
							<h5 className="font-weight-bold mt-2 mb-3">
								<MDBIcon fas icon="chart-line" className="pr-2" />
								Marketing
							</h5>
						</a>
						<h4 className="font-weight-bold mb-3">Title of the news</h4>
						<p>
							Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit cupidatat
							proident voluptatem quia numquam.
						</p>
						<MDBBtn color="success" rounded>
							MDBView more
						</MDBBtn>
					</MDBCardBody>
				</MDBCol>
			</MDBRow>

			<MDBRow className="d-flex justify-content-center mt-5 ">
				<MDBCol md="6" xl="5" className="mb-4">
					<MDBView className="overlay rounded z-depth-2" waves>
						<img src="https://mdbootstrap.com/img/Photos/Others/laptop-sm.jpg" alt="" className="img-fluid" />
						<a href="#!">
							<MDBMask overlay="white-slight" />
						</a>
					</MDBView>
				</MDBCol>
				<MDBCol md="6" xl="5" className="mb-4">
					<MDBCardBody className="pb-0">
						<a href="#!" className="green-text">
							<h5 className="font-weight-bold mt-2 mb-3">
								<MDBIcon fas icon="chart-line" className="pr-2" />
								Marketing
							</h5>
						</a>
						<h4 className="font-weight-bold mb-3">Title of the news</h4>
						<p>
							Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit cupidatat
							proident voluptatem quia numquam.
						</p>
						<MDBBtn color="success" rounded>
							MDBView more
						</MDBBtn>
					</MDBCardBody>
				</MDBCol>
			</MDBRow>

			<MDBRow className="d-flex justify-content-center flex-row-reverse mt-5">
				<MDBCol md="6" xl="5" className="mb-4">
					<MDBView className="overlay rounded z-depth-2" waves>
						<img src="https://mdbootstrap.com/img/Photos/Others/laptop-sm.jpg" alt="" className="img-fluid" />
						<a href="#!">
							<MDBMask overlay="white-slight" />
						</a>
					</MDBView>
				</MDBCol>
				<MDBCol md="6" xl="5" className="mb-4">
					<MDBCardBody className="pb-0">
						<a href="#!" className="green-text">
							<h5 className="font-weight-bold mt-2 mb-3">
								<MDBIcon fas icon="chart-line" className="pr-2" />
								Marketing
							</h5>
						</a>
						<h4 className="font-weight-bold mb-3">Title of the news</h4>
						<p>
							Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit cupidatat
							proident voluptatem quia numquam.
						</p>
						<MDBBtn color="success" rounded>
							MDBView more
						</MDBBtn>
					</MDBCardBody>
				</MDBCol>
			</MDBRow>
		</section>
	);
};

export default ProjectsPage;
