import React from "react";

import User from "./User";

export default class UserList extends React.Component {
	render(){
		if(Object.getOwnPropertyNames(this.props.users).length === 0){
			return (<div></div>)
		}
		var userNodes = this.props.users.map(function(user){
			return (
				<User name={user.name} email={user.email} id={user.id}>
					{user.name}
				</User>
			)
		})
		return (
			<div>
				<h1>Users</h1>
				{userNodes}
			</div>
		)
	}
}