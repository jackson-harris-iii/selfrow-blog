import React from 'react'
import Prismic from 'prismic-javascript'
import { RichText, Date } from 'prismic-reactjs'
import { client } from '../prismic-configuration'

import {MDBContainer, MDBRow, MDBCol, MDBJumbotron, MDBSticky} from 'mdbreact'
import Layout from '../Components/Layout';
import PostsTeaser from '../Components/PostsTeaser'
import TopicsSection from '../Components/TopicsSection'

const BlogHome = (props) => (
	<div className="sr-orange2-bg mh-100">
		<Layout>
		<MDBContainer>
			<MDBJumbotron className="sr-orange2-bg z-depth-0">
				<h1 className="home-hero sr-blue font-raleway mt-5">SELFROW</h1>
				<h2 className="sr-blue font-playfair-d font-italic">Articles, resources and community for freelancers.</h2>
			</MDBJumbotron>
		</MDBContainer>
		<MDBContainer className="sr-orange2-bg">
			<PostsTeaser />
			<TopicsSection />
		</MDBContainer>

		{/* <img src={props.home.data.image.url} alt="avatar image" />
    <h1>{RichText.asText(props.home.data.headline)}</h1>
    <p>{RichText.asText(props.home.data.description)}</p> */}
		</Layout>
	</div>
);

BlogHome.getInitialProps = async context => {
  const home = await client.getSingle('blog_home')

  return { home }
}

export default BlogHome