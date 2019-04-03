import React from 'react';
import { css } from 'emotion';
import {
	HierarchicalMenuFilter,
	RangeFilter,
	RefinementListFilter,
	NumericRefinementListFilter,
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
		<HierarchicalMenuFilter
			fields={['type.raw', 'genres.raw']}
			title="Categories"
			id="categories"
			size={10}
		/>
		<RangeFilter
			min={0}
			max={100}
			field="metaScore"
			id="metascore"
			title="Metascore"
			showHistogram
		/>
		<RangeFilter
			min={0}
			max={10}
			field="imdbRating"
			id="imdbRating"
			title="IMDB Rating"
			showHistogram
		/>
		<RefinementListFilter
			id="actors"
			title="Actors"
			field="actors.raw"
			operator="OR"
			size={10}
		/>

		<RefinementListFilter field="languages.raw" title="Languages" id="languages" size={10} />
		<RefinementListFilter
			translations={{ 'facets.view_more': 'View more writers' }}
			id="writers"
			title="Writers"
			field="writers.raw"
			operator="OR"
			size={10}
		/>
		<RefinementListFilter
			id="countries"
			title="Countries"
			field="countries.raw"
			operator="OR"
			size={10}
		/>
		<NumericRefinementListFilter
			id="runtimeMinutes"
			title="Length"
			field="runtimeMinutes"
			options={[
				{ title: 'All' },
				{ title: 'up to 20', from: 0, to: 20 },
				{ title: '21 to 60', from: 21, to: 60 },
				{ title: '60 or more', from: 61, to: 1000 },
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
