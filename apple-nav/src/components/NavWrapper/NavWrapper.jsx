import React, { useState, useEffect } from "react";

import Nav from "../Nav/Nav";
import menuItems from "../../menu-data";

interface Props {}

const NavWrapper = (props: Props) => {
	const [items, setItems] = useState([]);

	useEffect(() => {
		// AJAX request could go here
		setItems(menuItems);
	}, []);

	return (
		<div className="wrapper">
			{items.map(item => {
				return <Nav item={item} key={item.slug} />;
			})}
		</div>
	);
};

export default NavWrapper;
