import React from 'react';
import { MDBRow, MDBCol, MDBCard, MDBCardBody, MDBMask, MDBIcon, MDBView, MDBBtn, MDBContainer } from 'mdbreact';
import { RichText, Date } from 'prismic-reactjs';
import { client, linkResolver, hrefResolver } from '../prismic-configuration';
import Link from 'next/link';

const Teaser = (props) => {

	if (props.info.data.video_header.type == "video" ) {
		return (
			<MDBCol lg="4" md="12" className="mb-lg-0 mb-4 mt-5 pt-4">
				<Link href={hrefResolver(props.info)} as={linkResolver(props.info)} passHref prefetch>
					<a>
						<MDBView hover className="rounded z-depth-0 mb-4" waves>

							<img className="img-fluid" src={props.info.data.video_header.thumbnail_url} alt="" />
							<MDBMask overlay="white-slight" />
						</MDBView>
					</a>
				</Link>

				<h4 className="font-weight-bolder mb-2 sr-blue font-oswald text-left">
					{RichText.asText(props.info.data.title)}
				</h4>

				<p className="text-left">{RichText.asText(props.info.data.preview_blurb).slice(0, 69)}...</p>
				<Link href={linkResolver(props.info)} as={linkResolver(props.info)} passHref prefetch>
					<a>
						<MDBBtn color="#EC440C" rounded size="lg" className="font-weight-bold font-oswald sr-orange2 float-left sr-teal-bg">
							Read more
					</MDBBtn>
					</a>
				</Link>
			</MDBCol>
		)
	}
	else {
		return (
			<MDBCol lg="4" md="8" className="mb-lg-0 mb-4 mx-auto">
				<Link href={linkResolver(props.info)} as={linkResolver(props.info)} passHref prefetch>
					<a>
						<MDBView hover className="rounded z-depth-0 mb-4" waves>

							<img className="img-fluid" src={props.info.data.post_main_image.url} alt="" />
							<MDBMask overlay="white-slight" />
						</MDBView>
					</a>
				</Link>

				<h4 className="font-weight-bolder mb-2 sr-blue font-oswald text-left">
					{RichText.asText(props.info.data.title)}
				</h4>

				<p className="text-left">{RichText.asText(props.info.data.preview_blurb).slice(0, 69)}...</p>
				<Link href={linkResolver(props.info)} as={linkResolver(props.info)} passHref prefetch>
					<a>
						<MDBBtn color="#EC440C" rounded size="lg" className="font-weight-bold font-oswald sr-orange2 float-left sr-teal-bg">
							Read more
					</MDBBtn>
					</a>
				</Link>
			</MDBCol>
		);
	}
  
}

const PostsTeaser = (props) => {
	return (
		<MDBContainer style={{ marginBottom: '10rem!important' }}>
			<h2 className="heading-responsive-large font-weight-bold text-left mb-5 sr-blue">Recent Posts</h2>
			<MDBRow>
				{props.recentPosts.slice(0, 3).map((post) => {
					return <Teaser key={post.uid} info={post} />;
				})}
			</MDBRow>

			<MDBRow>
				<MDBCol className="text-right mt-5-md sr-blue">
					<Link href='/blog'>
						<a>
							<h2 className="font-playfair-d text-right mb-5-md font-italic d-inline">all posts >> </h2>
						</a>
					</Link>
					{/* <MDBIcon icon="angle-double-right" className="d-inline" /> */}
				</MDBCol>
			</MDBRow>
		</MDBContainer>
	);
};

export default PostsTeaser;
