import React from 'react';
import Prismic from 'prismic-javascript';
import { RichText, Date } from 'prismic-reactjs';
import { client, linkResolver } from '../prismic-configuration';
import Link from 'next/link';
import Layout from '../Components/Layout';
import {
	MDBJumbotron,
	MDBBtn,
	MDBContainer,
	MDBRow,
	MDBCol,
	MDBCardImage,
	MDBCardBody,
	MDBView,
} from 'mdbreact';
import Moment from 'moment';
import PostPreview from '../Components/PostPreview';

const MindPage = (props) => {
	// const date = Date(props.post.data.date);
	// const formattedDate = Moment(date).format('LL');

	return (
		<Layout>
			<MDBContainer className="mt-5">
				<MDBRow className="justify-content-center">
					{/* text section */}

					<MDBCol md="6" xl="5" className="mb-4 my-auto ml-md-n5 mr-md-5">
						<MDBView className="overlay rounded " waves>
							<img
								src="https://images.prismic.io/selfrow-blog/d8130055-13d5-4bec-a421-fd3f3a521a99_Mind.png?auto=compress,format"
								alt=""
								className="img-fluid"
							/>
							{/* <a href="#!">
							<MDBMask overlay="white-slight" />
						</a> */}
						</MDBView>
					</MDBCol>

					<MDBCol md="6" xl="5" className="mb-4 my-auto mr-md-0 order-md-first">
						<MDBCardBody className="pb-0">
							<h3 className="font-weight-bold mb-3 sr-blue font-playfair-d display-4">MIND</h3>
							<p className="font-weight-bold text-left">
								“Iron rusts from disuse, stagnant water loses its purity, and in cold weather becomes frozen; even so
								does inaction sap the vigors of the mind.”
								<br />
								<br />- Leonardo da Vinci
							</p>
						</MDBCardBody>
					</MDBCol>
				</MDBRow>
				<hr />
				<MDBRow className="pt-4 justify-content-center">
					{props.posts.results.map((post) => {
						return <PostPreview key={post.uid} info={post} />;
					})}
				</MDBRow>
			</MDBContainer>

			<MDBContainer className="mt-5">{/* <Link href="/">
				<MDBIcon icon="backward" />
			</Link> */}</MDBContainer>
		</Layout>
	);
};

MindPage.getInitialProps = async (context) => {
	
	const posts = await client.query([Prismic.Predicates.at('document.type', 'post'), Prismic.Predicates.at('document.tags', ['mind'])], {
		orderings: '[my.post.date desc]',
	});

	return { posts };
};

export default MindPage;
