import React, { useState, useEffect } from "react";

import Nav from "../Nav/Nav";
import menuItems from "../../menu-data";
import { Route } from "react-router-dom";
import SubNav from "../SubNav/SubNav";

interface Props {}

const NavWrapper = (props: Props) => {
	const [items, setItems] = useState([]);

	useEffect(() => {
		// AJAX request could go here
		setItems(menuItems);
	}, []);

	return (
		<>
			<div className="nav-wrapper">
				{items.map(item => {
					return (
						<>
							<Nav item={item} key={item.slug} />
						</>
					);
				})}
			</div>
			<div className="sub-wrapper">
				{items.map(item => {
					return item.children.map(child => {
						return (
							<Route
								path={`/${item.slug}`}
								render={props => (
									<SubNav
										child={child}
										parent={item}
										key={child.slug}
										{...props}
									/>
								)}
							/>
						);
					});
				})}
			</div>
			<h1>🍎🤮🍏</h1>
		</>
	);
};

export default NavWrapper;
