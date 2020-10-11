import React from 'react';
import { MDBRow, MDBCol, MDBCardBody, MDBIcon, MDBBtn, MDBView, MDBMask } from 'mdbreact';
import { RichText, Date } from 'prismic-reactjs'; 
import { client, linkResolver, hrefResolver } from '../prismic-configuration';
import Link from 'next/link';
import { useRouter } from 'next/router';	

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

	const router = useRouter()

	return (
		<section className="text-center my-5">
			<hr />
			<h2 className="font-weight-bold my-5 sr-blue display-1">Points of Interest</h2>

			<MDBRow className="d-flex justify-content-center flex-row-reverse mt-5">
				{
					props.infoGrps.forEach((grp) => {
						<Group key={grp.id} info={grp} />;
					})
					// ((info_group) => {
					// return <Group key={info_group.uid} info={info_group} />;
					// })
				}
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
				{/* text section */}
				<MDBCol md="6" xl="5" className="mb-4 my-auto">
					<MDBCardBody className="pb-0">
						<h3 className="font-weight-bold mb-3 sr-blue font-playfair-d display-4">MIND</h3>
						<p className="font-weight-bold text-left">
							“Iron rusts from disuse, stagnant water loses its purity, and in cold weather becomes frozen; even so does
							inaction sap the vigors of the mind.”
							<br />
							<br />- Leonardo da Vinci
						</p>
						<MDBBtn
							size="lg"
							className="font-weight-bold font-oswald sr-orange2 sr-teal-bg"
							rounded
							onClick={() => router.push('/mind')}
						>
							See Posts
						</MDBBtn>
					</MDBCardBody>
				</MDBCol>
			</MDBRow>

			<MDBRow className="d-flex justify-content-center mt-5 ">
				<MDBCol md="6" xl="5" className="mb-4 my-auto">
					<MDBView className="overlay rounded" waves>
						<img
							src="https://images.prismic.io/selfrow-blog/402a4894-3eef-4f3a-a865-f9a295c4fdf4_Body.png?auto=compress,format"
							alt="body home image"
							className="img-fluid"
						/>
						{/* <a href="#!"></a> */}
					</MDBView>
				</MDBCol>
				<MDBCol md="6" xl="5" className="mb-4 my-auto">
					<MDBCardBody className="pb-0">
						<h4 className="font-weight-bold mb-3 sr-blue font-playfair-d display-4">BODY</h4>
						<p className="font-weight-bold text-left">
							“The body is the instrument of our hold on the world.” <br />
							<br />
							― Simone de Beauvoir, The Second Sex
						</p>
						<MDBBtn
							size="lg"
							className="font-weight-bold font-oswald sr-orange2 sr-teal-bg"
							rounded
							onClick={() => router.push('/body')}
						>
							See Posts
						</MDBBtn>
					</MDBCardBody>
				</MDBCol>
			</MDBRow>

			<MDBRow className="d-flex justify-content-center flex-row-reverse mt-5">
				<MDBCol md="6" xl="5" className="mb-4 my-auto">
					<MDBView className="overlay rounded" waves>
						<img
							src="https://images.prismic.io/selfrow-blog/8d9c4e63-b370-49ae-a78b-81201340262a_Service.png?auto=compress,format"
							alt=""
							className="img-fluid"
						/>
						{/* <a href="#!">
							<MDBMask overlay="white-slight" />
						</a> */}
					</MDBView>
				</MDBCol>
				<MDBCol md="6" xl="5" className="mb-4 my-auto">
					<MDBCardBody className="pb-0">
						<h4 className="font-weight-bold mb-3 sr-blue font-playfair-d display-4">SERVICE</h4>
						<p className="font-weight-bold text-left">
							“I slept and dreamt that life was joy. I awake and saw that life was service. I acted and behold, service
							was joy.”
							<br />
							<br /> -Rabindranath Tagore
						</p>
						<MDBBtn
							size="lg"
							className="font-weight-bold font-oswald sr-orange2 sr-teal-bg"
							rounded
							onClick={() => router.push('/service')}
						>
							See Posts
						</MDBBtn>
					</MDBCardBody>
				</MDBCol>
			</MDBRow>
		</section>
	);
};

export default InfoGroup;
