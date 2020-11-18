import React from "react";
import Search from "../../components/home/search";
import { isEmpty } from 'lodash';
import Layout from "../../components/layout";
import Carousel from "../../components/home/carousel";
import SEO from "../../components/seo";
import { getOgImage } from "../../utils/functions";

const FrontPage = ( props ) => {

	console.log(props.pageContext);
	const {
		      pageContext: {
			      //page: { title, seo, uri },
			      categories,
			      categoryName,
			      postSearchData: { products, options }
		      }
	      } = props;

	return (
		<Layout>
			{
				! isEmpty( props.pageContext ) ? (
					<>
						<Carousel categories={ categories }/>
						<Search
							products={ products }
							initialProducts={ products }
							engine={ options }
							category={ categoryName }
							categories={ categories }
						/>
					</>
				) : (
					<div>Something went wrong</div>
				)
			}
		</Layout>
	)
};
export default FrontPage;

