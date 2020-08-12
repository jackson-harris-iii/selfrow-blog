import React from 'react';
import Prismic from 'prismic-javascript';
import { RichText, Date } from 'prismic-reactjs';
import { client } from '../prismic-configuration';
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
	MDBCardTitle,
	MDBCardText,
	MDBIconm,
	MDBView,
} from 'mdbreact';
import Moment from 'moment';

const MindPage = (props) => {
	// const date = Date(props.post.data.date);
	// const formattedDate = Moment(date).format('LL');

	return (
		<Layout>
			<MDBContainer className="mt-5">
				<MDBRow>
					{/* text section */}
					<MDBCol md="6" xl="5" className="mb-4 my-auto">
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

					<MDBCol md="6" xl="5" className="mb-4 my-auto">
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
				</MDBRow>
			</MDBContainer>

			<MDBContainer className="mt-5">{/* <Link href="/">
				<MDBIcon icon="backward" />
			</Link> */}</MDBContainer>
		</Layout>
	);
};

MindPage.getInitialProps = async (context) => {
	
	const posts = await client.query(Prismic.Predicates.at('document.type', 'post'), {
		orderings: '[my.post.date desc]',
	});

	return { posts };
};

export default MindPage;
