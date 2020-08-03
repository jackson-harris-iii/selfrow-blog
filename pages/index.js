import React from 'react'
import Prismic from 'prismic-javascript'
import { RichText, Date } from 'prismic-reactjs'
import { client } from '../prismic-configuration'

import {MDBContainer, MDBRow, MDBCol, MDBJumbotron, MDBSticky} from 'mdbreact'
import Layout from '../Components/Layout';
import PostsTeaser from '../Components/PostsTeaser'
import InfoGroup from '../Components/InfoGroup'

const BlogHome = (props) => (
	<Layout>
		<MDBContainer>
			<MDBJumbotron className="sr-orange2-bg z-depth-0">
				<h1 className="home-hero sr-blue font-raleway mt-5">SELFROW</h1>
				<h2 className="sr-teal font-playfair-d font-italic">Thoughts about Mind, Body, and Service.</h2>
			</MDBJumbotron>
		</MDBContainer>

		<MDBContainer className="sr-orange2-bg">
			{console.log(props.posts.results)
			
			}
			<PostsTeaser recentPosts={props.posts.results} />
			<InfoGroup infoGrps={props.topicsinfogroups.results} />
		</MDBContainer>

		{/* <img src={props.home.data.image.url} alt="avatar image" />
    <h1>{RichText.asText(props.home.data.headline)}</h1>
    <p>{RichText.asText(props.home.data.description)}</p> */}
	</Layout>
);

BlogHome.getInitialProps = async context => {
  const home = await client.getSingle('blog_home')
  const posts = await client.query(Prismic.Predicates.at('document.type', 'post'), {
		orderings: '[my.post.date desc]',
	});
	const topicsinfogroups = await client.query(
		Prismic.Predicates.at('document.type', 'info_group'), {
			orderings: '[my.post.date]',
			}
		// Prismic.Predicates.at('document.tags', ['homepage'],['topics section']), {
		// 	orderings: '[my.post.date]',
		// 	}	
	);
	
	console.log(topicsinfogroups);

  return { home, posts, topicsinfogroups };
}

export default BlogHome