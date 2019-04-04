import React from 'react';
import { SearchBox } from 'searchkit';
import { css } from 'emotion';

const navbarStyles = css`
	padding: 0 25px;
	background: #08c;
	height: 70px;
	display: grid;
	grid-template-columns: auto auto;
	align-items: center;
	position: sticky;
	top: 0px;
	z-index: 20;
	grid-gap: 20px;
	box-shadow: 0 2px 4px rgba(0, 0, 0, 0.4);

	.logo {
		color: white;
		font-size: 1em;
		font-weight: bold;
		cursor: pointer;
	}
`;

const Navbar = () => {
	return (
		<div className={navbarStyles}>
			<div className="logo">Logo</div>
			<SearchBox
				searchOnChange
				queryOptions={{ analyzer: 'standard' }}
				queryFields={['title^5', 'authors']}
				placeholder="Search movie title"
			/>
		</div>
	);
};

export default Navbar;
