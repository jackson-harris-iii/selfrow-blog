import React from 'react';
import { MDBRow, MDBCol, MDBCardBody, MDBIcon, MDBBtn, MDBView, MDBMask } from 'mdbreact';
import { RichText, Date } from 'prismic-reactjs'; 
	

const Group = (props) => {
	
	return (
		<div>
			{/* image section  */}
			{console.log(props)}
			<MDBCol md="6" xl="5" className="mb-4 my-auto">
				<MDBView className="overlay rounded " waves>
					<img src="mind.png" alt="" className="img-fluid" />
					<a href="#!">
						<MDBMask overlay="white-slight" />
					</a>
				</MDBView>
			</MDBCol>
			{/* text section */}
			<MDBCol md="6" xl="5" className="mb-4 my-auto">
				<MDBCardBody className="pb-0">
					<h3 className="font-weight-bold mb-3 sr-blue font-playfair-d">{RichText.asText(props.info.data.heading)}</h3>
					<p>
						Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit cupidatat
						proident voluptatem quia numquam.
					</p>
					<MDBBtn size="lg" className="font-weight-bold font-oswald sr-orange2 sr-teal-bg" rounded>
						See Posts
					</MDBBtn>
				</MDBCardBody>
			</MDBCol>
		</div>
	);	
}

const InfoGroup = (props) => {

	return (
		<section className="text-center my-5">
			<h2 className="heading-responsive-large font-weight-bold my-5 sr-blue">Topics</h2>

			<MDBRow>
				{
					// console.log(props)

					props.groups.forEach((group) => {
						// console.log(group)

						return <Group info={group} />;
					})
					// ((info_group) => {
					// return <Group key={info_group.uid} info={info_group} />;
					// })
				}
			</MDBRow>

			<MDBRow className="d-flex justify-content-center mt-5 ">
				<MDBCol md="6" xl="5" className="mb-4 my-auto">
					<MDBView className="overlay rounded" waves>
						<img src="body.png" alt="" className="img-fluid" />
						<a href="#!"></a>
					</MDBView>
				</MDBCol>
				<MDBCol md="6" xl="5" className="mb-4 my-auto">
					<MDBCardBody className="pb-0">
						<h4 className="font-weight-bold mb-3 sr-blue font-playfair-d">BODY</h4>
						<p>
							Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit cupidatat
							proident voluptatem quia numquam.
						</p>
						<MDBBtn size="lg" className="font-weight-bold font-oswald sr-orange2 sr-teal-bg" rounded>
							See Posts
						</MDBBtn>
					</MDBCardBody>
				</MDBCol>
			</MDBRow>

			<MDBRow className="d-flex justify-content-center flex-row-reverse mt-5">
				<MDBCol md="6" xl="5" className="mb-4 my-auto">
					<MDBView className="overlay rounded" waves>
						<img src="service.png" alt="" className="img-fluid" />
						<a href="#!">
							<MDBMask overlay="white-slight" />
						</a>
					</MDBView>
				</MDBCol>
				<MDBCol md="6" xl="5" className="mb-4 my-auto">
					<MDBCardBody className="pb-0">
						<h4 className="font-weight-bold mb-3 sr-blue font-playfair-d">SERVICE</h4>
						<p>
							Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit cupidatat
							proident voluptatem quia numquam.
						</p>
						<MDBBtn size="lg" className="font-weight-bold font-oswald sr-orange2 sr-teal-bg" rounded>
							See Posts
						</MDBBtn>
					</MDBCardBody>
				</MDBCol>
			</MDBRow>
		</section>
	);
};

export default InfoGroup;