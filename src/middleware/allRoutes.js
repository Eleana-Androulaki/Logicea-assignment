import React from "react";
import { Navigate } from "react-router-dom";
import Home from "../pages/Home";
import Joke from "../pages/Joke";


const routes = [
	{
		path: "/",
		exact: true,
		name: 'Home',
		main: () => <Home />
	},
	{
		path: "/joke",
		exact: true,
		name: 'Joke',
		main: () => <Joke />
	},
	{
		path: "/joke/:id",
		exact: true,
		name: 'Joke',
		main: () => <Joke />
	},
	{
		path: "*",
		exact:true,
		name: 'No match',
		main: () => <Navigate replace to="/" />
	}
	
];

export { routes };
