import React from "react";
import { NavLink } from "react-router-dom";

interface Props {}

const SubNav = (props: Props) => {
	console.log(props.child);

	// return <div className="child">{props.child.name}</div>;
	return (
		<NavLink to={`/${props.parent.slug}/${props.child.slug}`}>
			{props.child.name}
		</NavLink>
	);
};

export default SubNav;
