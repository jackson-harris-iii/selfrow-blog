import React from 'react';
import { MDBRow, MDBCol, MDBCard, MDBCardBody, MDBMask, MDBIcon, MDBView, MDBBtn, MDBContainer } from 'mdbreact';
import { RichText, Date } from 'prismic-reactjs';
import { client, linkResolver, hrefResolver } from '../prismic-configuration';
import Link from 'next/link';

const Teaser = (props) => {
  return (
		<MDBCol lg="4" md="12" className="mb-lg-0 mb-4">
			<MDBView hover className="rounded z-depth-2 mb-4" waves>
				<img className="img-fluid" src={props.info.data.post_main_image.url} alt="" />
				<MDBMask overlay="white-slight" />
			</MDBView>

			<h4 className="font-weight-bolder mb-2 sr-blue font-oswald text-left">
				{RichText.asText(props.info.data.title)}
			</h4>

			<p className="text-left">{RichText.asText(props.info.data.preview_blurb).slice(0, 69)}...</p>
			<Link href={hrefResolver(props.info)} as={linkResolver(props.info)} passHref prefetch>
				<a>
					<MDBBtn color="#EC440C" rounded size="lg" className="font-weight-bold font-oswald sr-orange2 float-left sr-teal-bg">
						Read more
					</MDBBtn>
				</a>
			</Link>
		</MDBCol>
	);
}

const PostsTeaser = (props) => {
	return (
		<MDBContainer>
			<h2 className="heading-responsive-large font-weight-bold text-left mb-5 sr-blue">Recent Posts</h2>
			<MDBRow>
				{props.recentPosts.slice(0, 3).map((post) => {
					return <Teaser key={post.uid} info={post} />;
				})}

				{/* <MDBCol lg="4" md="12" className="mb-lg-0 mb-4">
					<MDBView hover className="rounded z-depth-2 mb-4" waves>
						<img className="img-fluid" src="https://mdbootstrap.com/img/Photos/Others/images/81.jpg" alt="" />
						<MDBMask overlay="white-slight" />
					</MDBView>

					<h4 className="font-weight-bold mb-2 sr-teal text-left">
						<strong>Title of the news</strong>
					</h4>

					<p className="sr-blue text-left">Nam libero tempore, cum soluta nobis est eligendi optio...</p>
					<MDBBtn color="#EC440C" rounded size="md" className="float-left sr-orange1-bg">
						Read more
					</MDBBtn>
				</MDBCol> */}

				{/* <MDBCol lg="4" md="12" className="mb-lg-0 mb-4">
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
				</MDBCol> */}
			</MDBRow>

			<MDBRow>
				<MDBCol className="text-right mt-5-md sr-blue">
					<a>
						<h2 className="font-playfair-d text-right mb-5-md font-italic d-inline">all posts >> </h2>
					</a>
					{/* <MDBIcon icon="angle-double-right" className="d-inline" /> */}
				</MDBCol>
			</MDBRow>
		</MDBContainer>
	);
};

export default PostsTeaser;
