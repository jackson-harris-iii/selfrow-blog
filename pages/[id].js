import React from 'react'
import Layout from '../Components/Layout'
import Prismic, { RichText, Date } from 'prismic-reactjs';
import {MDBContainer, MDBRow, MDBCol, MDBView, } from 'mdbreact'
import { client, linkResolver } from '../prismic-configuration';

 const StaticSitePage = (props) => {
	console.log(props)
	if(props.page.data.video_header.type == "video")
	{return (
		<Layout>
			<MDBContainer className="mt-5">
				{/* <Link href="/">
				<MDBIcon icon="backward" />
			</Link> */}
				{console.log(props.page)}
				<MDBRow className="">
					<MDBCol md="8" className="d-flex justify-content-center mb-4 mx-auto">
						<MDBView hover className="rounded z-depth-0 mb-4" waves>
							<div className="mt-5" dangerouslySetInnerHTML={{ __html: props.page.data.video_header.html }} />
							{/* <MDBIframe src={props.post.data.video_header.embed_url}/> */}
						</MDBView>
					</MDBCol>
					<MDBCol lg="10" className="mx-auto">
						<h1 className="font-playfair-d mb-4 font-weight-bolder">{RichText.render(props.page.data.title)}</h1>

						<h2>{RichText.render(props.page.data.author)}</h2>
						<br />
						<br />
						{RichText.render(props.page.data.post_body)}
					</MDBCol>
				</MDBRow>
			</MDBContainer>
		</Layout>
	);}

	else {		
	return (
		<Layout>
			<MDBContainer className="mt-5">
				{/* <Link href="/">
				<MDBIcon icon="backward" />
			</Link> */}
				{console.log(props.page)}
				<MDBRow className="">
					<MDBCol md="8" className="mt-5 d-flex justify-content-center mb-4 mx-auto">
						<MDBView hover className="rounded z-depth-0 mb-4" waves>
							<img
								className="img-fluid z-depth-0 postImage"
								src={props.page.data.main_image.url}
								style={{ maxHeight: '50vh' }}
							/>
						</MDBView>
					</MDBCol>
					<MDBCol lg="10" className="mx-auto">
						{/* <h1 className="font-playfair-d mb-4 font-weight-bolder">{RichText.render(props.page.data.title)}</h1>

						<h2>{RichText.render(props.page.data.author)}</h2>
						<br />
						<br /> */}
						{RichText.render(props.page.data.post_body)}
					</MDBCol>
				</MDBRow>
			</MDBContainer>
		</Layout>
	);}
}

StaticSitePage.getInitialProps = async ({ query }) => {
	console.log(query);
	const uid = query.id;
	const page = await client.getByUID('static_page', uid);

	return { page };
};

export default StaticSitePage;