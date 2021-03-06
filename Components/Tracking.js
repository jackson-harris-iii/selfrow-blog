import React from 'react';
import Head from 'next/head';

const Tracking = () => {
	return (
		<div>
			<Head>
				{/* Favicon */}
				<link rel="shortcut icon" href="/favicon.png" />

				{/* Google Analytics tracking codes */}
				<script async src="https://www.googletagmanager.com/gtag/js?id=UA-168126365-1" />
				<script
					dangerouslySetInnerHTML={{
						__html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'UA-168126365-1');
          `,
					}}
				/>

				{/* Facebook Pixel Tracking */}
				<script
					dangerouslySetInnerHTML={{
						__html: `
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '295359998296253');
            fbq('track', 'PageView');
        `,
					}}
				/>
				{/* <noscript>
					<img
						height="1"
						width="1"
						style="display:none"
						src="https://www.facebook.com/tr?id={your-pixel-id-goes-here}&ev=PageView&noscript=1"
					/>
				</noscript> */}
			</Head>
		</div>
	);
};

export default Tracking;
