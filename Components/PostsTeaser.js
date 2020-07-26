import React from 'react';
import { MDBRow, MDBCol, MDBCard, MDBCardBody, MDBMask, MDBIcon, MDBView, MDBBtn } from 'mdbreact';

const PostsTeaser = () => {
	return (
		<MDBCard className="px-5 pb-5 sr-orange2-bg z-depth-0">
			<MDBCardBody className="text-center">
				<h2 className="h1-responsive font-weight-bold text-left my-5 ">Recent posts</h2>
				<MDBRow>
					<MDBCol lg="4" md="12" className="mb-lg-0 mb-4">
						<MDBView hover className="rounded z-depth-2 mb-4" waves>
							<img className="img-fluid" src="https://mdbootstrap.com/img/Photos/Others/images/81.jpg" alt="" />
							<MDBMask overlay="white-slight" />
						</MDBView>

						<h4 className="font-weight-bold mb-2 sr-blue text-left">
							<strong>Title of the news</strong>
						</h4>

						<p className="sr-blue text-left">Nam libero tempore, cum soluta nobis est eligendi optio...</p>
						<MDBBtn color="#EC440C" rounded size="md" className="float-left sr-orange1-bg">
							Read more
						</MDBBtn>
					</MDBCol>

					<MDBCol lg="4" md="12" className="mb-lg-0 mb-4">
						<MDBView hover className="rounded z-depth-2 mb-4" waves>
							<img className="img-fluid" src="https://mdbootstrap.com/img/Photos/Others/images/81.jpg" alt="" />
							<MDBMask overlay="white-slight" />
						</MDBView>

						<h4 className="font-weight-bold mb-2 sr-blue text-left">
							<strong>Title of the news</strong>
						</h4>

						<p className="sr-blue text-left">Nam libero tempore, cum soluta nobis est eligendi optio...</p>
						<MDBBtn color="#EC440C" rounded size="md" className="float-left sr-orange1-bg">
							Read more
						</MDBBtn>
					</MDBCol>

					<MDBCol lg="4" md="12" className="mb-lg-0 mb-4">
						<MDBView hover className="rounded z-depth-2 mb-4" waves>
							<img className="img-fluid" src="https://mdbootstrap.com/img/Photos/Others/images/81.jpg" alt="" />
							<MDBMask overlay="white-slight" />
						</MDBView>

						<h4 className="font-weight-bold mb-2 sr-blue text-left">
							<strong>Title of the news</strong>
						</h4>

						<p className="sr-blue text-left">Nam libero tempore, cum soluta nobis est eligendi optio...</p>
						<MDBBtn color="#EC440C" rounded size="md" className="float-left sr-orange1-bg">
							Read more
						</MDBBtn>
					</MDBCol>
				</MDBRow>
				<MDBRow>
					<MDBCol className="text-right-md mt-5-md sr-blue">
						<a>
							<h2 className="font-playfair-d text-right mb-5 font-italic d-inline">All Posts </h2>
						</a>
						<MDBIcon icon="angle-double-right" className="d-inline" />
					</MDBCol>
				</MDBRow>
			</MDBCardBody>
		</MDBCard>
	);
};

export default PostsTeaser;
