import React from "react";
import SubNav from "../SubNav/SubNav";
import { Route, Link, NavLink } from "react-router-dom";

interface Props {}

const Nav = (props: Props) => {
	console.log(props.item);
	console.log("children: ");

	return (
		<div>
			<div className="name">
				<NavLink to={`/${props.item.slug}`}>{props.item.name}</NavLink>
			</div>
			{/* At first the children were inside the parent but that doesnt work for the submenu. so they got moved */}
			{/* {props.item.children.map(child => {
				// return <SubNav child={child} key={child.slug} />;
				return (
					<Route
						path={`/${props.item.slug}`}
						render={props => (
							<SubNav child={child} key={child.slug} {...props} />
						)}
					/>
				);
			})} */}
		</div>
	);
};

export default Nav;
