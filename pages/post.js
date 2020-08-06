import React from 'react';
import { RichText, Date } from 'prismic-reactjs';
import { client } from '../prismic-configuration';
import Link from 'next/link';
import Layout from "../Components/Layout"
import { MDBJumbotron, MDBBtn, MDBContainer, MDBRow, MDBCol,  MDBCardImage, MDBCardBody, MDBCardTitle, MDBCardText, MDBIcon } from "mdbreact";
import Moment from "moment"


const Post = (props) => {
	const date = Date(props.post.data.date);
	const formattedDate = Moment(date).format('LL');

	return (
	
		<Layout>
		<MDBContainer className="mt-5">
			{/* <Link href="/">
				<MDBIcon icon="backward" />
			</Link> */}
			<MDBRow className="">
				<MDBCol md="8" className="d-flex justify-content-center mb-4 mx-auto">
					<img className="img-fluid z-depth-0" src={props.post.data.post_main_image.url} />
				</MDBCol>
				<MDBCol lg="10" className="mx-auto">
					<h1 className="font-playfair-d mb-4 font-weight-bolder">{RichText.render(props.post.data.title)}</h1>

					<h2>{RichText.render(props.post.data.author)}</h2>

					<span>{formattedDate}</span>
					
					<br/><br/>
					{RichText.render(props.post.data.post_body)}
				</MDBCol>
			</MDBRow>
		</MDBContainer>
		</Layout>
	)	
};

Post.getInitialProps = async (context) => {
	const { uid } = context.query;
	const post = await client.getByUID('post', uid);

	return { post };
};

export default Post;
