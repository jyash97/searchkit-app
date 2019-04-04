import React from 'react';
import { css } from 'emotion';
import { ResultCard, SelectedFilters } from '@appbaseio/reactivesearch';

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

	.card {
		height: auto;
		box-shadow: none;
		border-radius: 0;
		border: 1px solid #e8e8e8;
		&:hover {
			box-shadow: none;
		}
		@media (max-width: 420px) {
			width: 100%;
			margin-bottom: 20px;
		}
	}
`;

const Results = () => {
	return (
		<div className={container}>
			<SelectedFilters />
			<ResultCard
				pagination
				componentId="results"
				react={{
					and: [
						'authors',
						'language',
						'publicationYear',
						'rating',
						'bookCount',
						'search',
					],
				}}
				dataField="title.keyword"
				innerClass={{ listItem: 'card' }}
				renderData={res => ({ image: res.image, title: res.original_title })}
			/>
		</div>
	);
};

export default Results;
