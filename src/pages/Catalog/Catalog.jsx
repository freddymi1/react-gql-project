import React from 'react';
import { PAGINATE_PATHS } from '../../services/queries/PathsQueries';
import { useQuery } from '@apollo/client';
import { CatalogComponent } from './components/CatalogComponent';




const Catalog = () => {
	const { loading: pathsLoading, error: pathsError, data: pathsData } = useQuery(PAGINATE_PATHS(1, 20));

	if(pathsLoading) return( <h1>LOADING PATHS</h1> );
	if(pathsError) return ( <h1>ERROR GETTING PATHS</h1> );



	return (
		<>
			<CatalogComponent paths={ pathsData.paths } />
		</>
	)
}

export default Catalog
