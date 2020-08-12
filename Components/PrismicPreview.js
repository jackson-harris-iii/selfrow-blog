import React from 'react';
import Head from 'next/head';

const PrismicPreview = () => {
	return (
			<Head>
				<script
					dangerouslySetInnerHTML={{
						__html: `
            window.prismic = {
            endpoint: 'https://selfrow-blog.cdn.prismic.io/api/v2'
          };`,
					}}
				/>
				<script type="text/javascript" src="https://static.cdn.prismic.io/prismic.min.js?new=true"></script>
		</Head>
	);
}

export default PrismicPreview