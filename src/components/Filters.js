import React from 'react';
import { css } from 'emotion';
import { MultiList, DynamicRangeSlider, RangeSlider, SingleRange } from '@appbaseio/reactivesearch';

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
		<MultiList
			dataField="authors.keyword"
			showSearch={false}
			title="Authors"
			componentId="authors"
		/>
		<MultiList
			dataField="language_code.keyword"
			showSearch={false}
			title="Language"
			componentId="language"
		/>
		<DynamicRangeSlider
			dataField="average_rating_rounded"
			componentId="ratings"
			title="Ratings"
			tooltipTrigger="hover"
			showHistogram={false}
		/>
		<RangeSlider
			dataField="original_publication_year"
			range={{
				start: 1850,
				end: 2019,
			}}
			rangeLabels={{
				start: '1850',
				end: '2019',
			}}
			componentId="publicationYear"
			title="Publication Year"
			tooltipTrigger="hover"
		/>
		<SingleRange
			componentId="bookCount"
			dataField="books_count"
			data={[
				{ start: 0, end: 50, label: 'Up to 50' },
				{ start: 51, end: 100, label: '50 to 100' },
				{ start: 100, end: 10000, label: '100 or more' },
			]}
			title="Book Counts"
			showSearch={false}
			showCheckbox={false}
			placeholder="Filter meetups"
			showFilter
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
