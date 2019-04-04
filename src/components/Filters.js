import React from 'react';
import { css } from 'emotion';
import {
	RangeFilter,
	RefinementListFilter,
	NumericRefinementListFilter,
	DynamicRangeFilter,
} from 'searchkit';

const buttonStyles = css`
	padding: 15px;
	border: 0;
	outline: 0;
	display: none;
	position: fixed;
	border-radius: 2px;
	background: #08c;
	bottom: 10px;
	left: 50%;
	z-index: 20;
	transform: translateX(-50%);
	@media (max-width: 576px) {
		display: block;
	}
`;

const filterWrapper = isVisible => css`
	position: sticky;
	top: 80px;
	border: 1px solid #e8e8e8;
	background: white;
	overflow-y: scroll;
	height: calc(100vh - 80px);
	> div {
		margin: 30px auto;
		width: 90%;
	}
	@media (max-width: 576px) {
		display: ${isVisible ? 'block' : 'none'};
		position: fixed;
		width: 100%;
		top: 70px;
		height: calc(100vh - 70px);
	}
`;

const AllFilters = () => (
	<>
		<RefinementListFilter
			id="authors"
			title="Authors"
			field="authors.keyword"
			operator="OR"
			size={10}
		/>
		<RefinementListFilter
			field="language_code.keyword"
			title="Language Code"
			id="languages"
			size={10}
		/>
		<RangeFilter
			min={1880}
			max={2019}
			field="original_publication_year"
			id="publicationYear"
			title="Publication Year"
			showHistogram
		/>
		<DynamicRangeFilter
			field="average_rating_rounded"
			id="rating"
			title="Ratings"
			showHistogram
		/>
		<NumericRefinementListFilter
			id="booksCount"
			title="Books Count"
			field="books_count"
			options={[
				{ title: 'All' },
				{ title: 'up to 50', from: 0, to: 50 },
				{ title: '51 to 100', from: 51, to: 100 },
				{ title: '100 or more', from: 101, to: 10000 },
			]}
		/>
	</>
);

class Filters extends React.Component {
	constructor() {
		super();
		this.state = {
			isVisible: false,
		};
	}

	handleMobileView = () => {
		this.setState(prevState => ({
			isVisible: !prevState.isVisible,
		}));
	};

	render() {
		const { isVisible } = this.state;
		return (
			<div>
				<button type="button" onClick={this.handleMobileView} className={buttonStyles}>
					{`Show ${isVisible ? 'Results' : 'Filters'}`}
				</button>
				<div className={filterWrapper(isVisible)}>
					<AllFilters />
				</div>
			</div>
		);
	}
}

export default Filters;
