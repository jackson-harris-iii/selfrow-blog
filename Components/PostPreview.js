import React from 'react'
import { MDBCol, MDBBtn, MDBView, MDBMask} from 'mdbreact'
import Link from 'next/link'
import Prismic from 'prismic-javascript';
import { client, linkResolver, hrefResolver } from '../prismic-configuration';
import { RichText, Date } from 'prismic-reactjs';

const PostPreview = (props) => {
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
						<MDBBtn color="#EC440C" size="lg" className="font-weight-bold font-oswald sr-orange2 float-left sr-teal-bg">
							Read more
						</MDBBtn>
					</a>
				</Link>
			</MDBCol>
		);
	} else {
		return (
			<MDBCol lg="4" md="8" className="mb-lg-0 my-4">
				<Link href={linkResolver(props.info)} as={linkResolver(props.info)} passHref prefetch>
					<a>
						<MDBView hover className="z-depth-0 mb-4" waves>
							<img
								className="img-fluid mx-auto"
								src={props.info.data.post_main_image.url}
								alt=""
								style={{ maxHeight: '50vh' }}
								center
							/>
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
						<MDBBtn color="#EC440C" size="lg" className="font-weight-bold font-oswald sr-orange2 float-left sr-teal-bg">
							Read more
						</MDBBtn>
					</a>
				</Link>
			</MDBCol>
		);
	}
};

export default PostPreview;