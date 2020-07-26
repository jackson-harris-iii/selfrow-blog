import React from 'react';
import { MDBRow, MDBCol, MDBCard, MDBCardBody, MDBMask, MDBIcon, MDBView, MDBBtn, MDBContainer } from 'mdbreact';

const PostsTeaser = () => {
	return (
		<MDBContainer>
			<h2 className="h1-responsive font-weight-bold text-left mb-5 sr-blue">Recent Posts</h2>
			<MDBRow>
				<MDBCol lg="4" md="12" className="mb-lg-0 mb-4">
					<MDBView hover className="rounded z-depth-2 mb-4" waves>
						<img className="img-fluid" src="https://mdbootstrap.com/img/Photos/Others/images/81.jpg" alt="" />
						<MDBMask overlay="white-slight" />
					</MDBView>

					<h4 className="font-weight-bold mb-2 text-left">
						<strong>Title of the news</strong>
					</h4>

					<p className="text-left">Nam libero tempore, cum soluta nobis est eligendi optio...</p>
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
						<h2 className="font-playfair-d text-right mb-5-md font-italic d-inline">All Posts </h2>
					</a>
					<MDBIcon icon="angle-double-right" className="d-inline" />
				</MDBCol>
			</MDBRow>
		</MDBContainer>
	);
};

export default PostsTeaser;
