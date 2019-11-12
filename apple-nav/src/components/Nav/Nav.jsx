import React from "react";
import SubNav from "../SubNav/SubNav";

interface Props {}

const Nav = (props: Props) => {
	console.log(props.item);
	console.log("children: ");

	return (
		<div className="nav">
			{props.item.children.map(child => {
				return <SubNav child={child} key={child.slug} />;
			})}
		</div>
	);
};

export default Nav;
