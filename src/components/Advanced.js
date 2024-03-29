import React from "react";
import { Switch, Route } from "react-router";
import { NavLink } from "react-router-dom";
import Authenticity from "./advanced/Authenticity";
import ChatbotPage from "./advanced/ChatBot";
import StoreMap from "./advanced/StoreMap";

class Advanced extends React.Component {
	render() {
		return (
			<div>
				<nav className="bg-teal">
					<ul className="max-w-2xl mx-auto flex">
						<li>
							<NavLink to="/advanced"
								exact
								className="p-2 flex flex-col group"
								activeClassName="children:w-4/5"
							>
								Authenticity
								<div className="rounded-full bg-white h-1 w-2 mx-auto group-hover:w-4/5 group-active:w-4/5 transition-all"></div>
							</NavLink>
						</li>
						<li>
							<NavLink to="/advanced/storemap"
								exact
								className="p-2 flex flex-col group"
								activeClassName="children:w-4/5"
							>
								Store Map
								<div className="rounded-full bg-white h-1 w-2 mx-auto group-hover:w-4/5 group-active:w-4/5 transition-all"></div>
							</NavLink>
						</li>
						<li>
							<NavLink to="/advanced/chatbot"
								exact
								className="p-2 flex flex-col group"
								activeClassName="children:w-4/5"
							>
								Chat Bot
								<div className="rounded-full bg-white h-1 w-2 mx-auto group-hover:w-4/5 group-active:w-4/5 transition-all"></div>
							</NavLink>
						</li>
					</ul>
				</nav>
				<Switch>
					<Route path="/advanced/storemap" component={StoreMap} />
					<Route path="/advanced/chatbot" component={ChatbotPage} />
					<Route path="/advanced">
						<Authenticity name='Cory Evans' />
					</Route>
				</Switch>
			</div>
		);
	}
}

export default Advanced;