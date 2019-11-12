import React from "react";

interface Props {}

const SubNav = (props: Props) => {
	console.log(props.child);

	return props.child.name;
};

export default SubNav;
