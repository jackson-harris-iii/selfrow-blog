import React from 'react';
import { MDBRow, MDBCol, MDBCard, MDBCardBody, MDBMask, MDBIcon, MDBView, MDBBtn, MDBContainer } from 'mdbreact';
import { RichText, Date } from 'prismic-reactjs';
import Prismic from 'prismic-javascript';
import { client, linkResolver, hrefResolver } from '../../prismic-configuration';
import Link from 'next/link';
import Layout from '../../Components/Layout';

const Post = (props) => {
	if (props.info.data.video_header.type == 'video') {
		return (
			<MDBCol lg="4" md="12" className="mb-lg-0 my-4 mt-5 pt-4">
				<Link href={linkResolver(props.info)} as={linkResolver(props.info)} passHref prefetch>
					<a>
						<MDBView hover className=" z-depth-0 mb-4" waves>
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
						<MDBBtn
							color="#EC440C"
							size="lg"
							className="font-weight-bold font-oswald sr-orange2 float-left sr-teal-bg"
						>
							Read more
						</MDBBtn>
					</a>
				</Link>
			</MDBCol>
		);
	} else {
		return (
			<MDBCol lg="4" md="12" className="mb-lg-0 my-4">
				<Link href={linkResolver(props.info)} as={linkResolver(props.info)} passHref prefetch>
					<a>
						<MDBView hover className="z-depth-0 mb-4" waves>
							<img className="img-fluid" src={props.info.data.post_main_image.url} alt="" />
							<MDBMask overlay="white-slight" />
						</MDBView>
					</a>
				</Link>

				<h4 className="font-weight-bolder mb-2 fc-pink1 font-oswald text-left">
					{RichText.asText(props.info.data.title)}
				</h4>

				<p className="text-left">{RichText.asText(props.info.data.post_body).slice(0, 69)}...</p>
				<Link href={linkResolver(props.info)} as={linkResolver(props.info)} passHref prefetch>
					<a>
						<MDBBtn
							color="#EC440C"
							size="lg"
							className="font-weight-bold font-oswald sr-orange2 float-left sr-teal-bg"
						>
							Read more
						</MDBBtn>
					</a>
				</Link>
			</MDBCol>
		);
	}
};

const Blog = (props) => {
	return (
		<Layout>
			<MDBContainer className="mb-5 mt-5">
				{/* <h2 className="heading-responsive-large font-weight-bold text-left mb-5 sr-blue">Recent Posts</h2> */}
				<MDBRow className="pt-4">
					{props.posts.results.map((post) => {
						return <Post key={post.uid} info={post} />;
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
