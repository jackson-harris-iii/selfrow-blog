import React from 'react';
import { MDBRow, MDBCol, MDBCard, MDBCardBody, MDBMask, MDBIcon, MDBView, MDBBtn, MDBContainer } from 'mdbreact';
import { RichText, Date } from 'prismic-reactjs';
import Prismic from 'prismic-javascript';
import { client, linkResolver, hrefResolver } from '../../prismic-configuration';
import Link from 'next/link';
import Layout from '../../Components/Layout';
import PostPreview from '../../Components/PostPreview';


const Blog = (props) => {
	return (
		<Layout>
			<MDBContainer className="mb-5 mt-5">
				{/* <h2 className="heading-responsive-large font-weight-bold text-left mb-5 sr-blue">Recent Posts</h2> */}
				<MDBRow className="pt-4 justify-content-center">
					{props.posts.results.map((post) => {
						return <PostPreview key={post.uid} info={post} />;
					})}
				</MDBRow>
			</MDBContainer>
		</Layout>
	);
};

Blog.getInitialProps = async (context) => {
	const home = await client.getSingle('blog_home');
	const posts = await client.query(Prismic.Predicates.at('document.type', 'post'), {
		orderings: '[my.post.date desc]',
	});
	const topicsinfogroups = await client.query(
		Prismic.Predicates.at('document.type', 'info_group'),
		{
			orderings: '[my.post.date]',
		}
		// Prismic.Predicates.at('document.tags', ['homepage'],['topics section']), {
		// 	orderings: '[my.post.date]',
		// 	}
	);

	console.log(topicsinfogroups);

	return { home, posts, topicsinfogroups };
};

export default Blog;
