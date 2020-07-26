import React from 'react';
import { RichText, Date } from 'prismic-reactjs';
import { client } from '../prismic-configuration';
import Link from 'next/link';
import Layout from "../Components/Layout"
import { MDBJumbotron, MDBBtn, MDBContainer, MDBRow, MDBCol,  MDBCardImage, MDBCardBody, MDBCardTitle, MDBCardText, MDBIcon } from "mdbreact";


const Post = (props) => (
	<Layout>
		<MDBContainer className="mt-5">
			{/* <Link href="/">
				<MDBIcon icon="backward" />
			</Link> */}
			<MDBRow className="">
				<MDBCol size="12" className="d-flex justify-content-center mb-4">
					<img className="img-fluid z-depth-2" src={props.post.data.post_main_image.url} />
				</MDBCol>
				<MDBCol>
					<h1 className="font-playfair-d mb-4">{RichText.render(props.post.data.title)}</h1>

					<h2>{RichText.render(props.post.data.author)}</h2>

					<span>{Date(props.post.data.date).toString()}</span>

					{RichText.render(props.post.data.post_body)}
				</MDBCol>
			</MDBRow>
		</MDBContainer>
	</Layout>
);

Post.getInitialProps = async (context) => {
	const { uid } = context.query;
	const post = await client.getByUID('post', uid);

	return { post };
};

export default Post;
