import React from 'react';
import { Hits, SelectedFilters, Pagination, NoHits, InitialLoader } from 'searchkit';
import { css } from 'emotion';
import ResultCard from './ResultCard';

const resultWrapper = css`
	.sk-hits {
		display: grid;
		grid-template-columns: repeat(4, 1fr);
		justify-content: center;
		align-items: center;
		grid-gap: 40px;
		@media (max-width: 1240px) {
			grid-template-columns: repeat(3, 1fr);
		}
		@media (max-width: 1024px) {
			grid-template-columns: repeat(2, 1fr);
		}

		@media (max-width: 768px) {
			grid-template-columns: 1fr;
		}
	}
`;

const container = css`
	background: white;
	border: 1px solid #e8e8e8;
	padding: 20px;
	.sk-pagination-navigation.is-numbered {
		width: 100%;
	}

	@media (max-width: 576px) {
		padding: 10px;
	}
`;

const Results = () => {
	return (
		<div className={container}>
			<SelectedFilters />
			<div className={resultWrapper}>
				<Hits
					hitsPerPage={50}
					highlightFields={['title']}
					sourceFilter={['title', 'poster', 'imdbId']}
					itemComponent={ResultCard}
				/>
			</div>
			<Pagination showNumbers />
			<NoHits
				translations={{
					'NoHits.NoResultsFound': 'No movies found were found for {query}',
					'NoHits.DidYouMean': 'Search for {suggestion}',
					'NoHits.SearchWithoutFilters': 'Search for {query} without filters',
				}}
				suggestionsField="title"
			/>
			<InitialLoader component={() => <p>Loading</p>} />
		</div>
	);
};

export default Results;
