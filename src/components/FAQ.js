import React from "react";
import { connect } from "react-redux";
import { LOAD_FAQ_DATA, UPDATE_FAQ_SEARCH_FIELD } from "../contants/actionTypes";

const mapStateToProps = state => ({
	faq: state.faq
})

const mapDispatchToProps = dispatch => ({
	updateSearchField: query =>
		dispatch({ type: UPDATE_FAQ_SEARCH_FIELD, payload: query }),
	loadFAQData: faqs =>
		dispatch({ type: LOAD_FAQ_DATA, payload: faqs })
})


class FAQ extends React.Component {
	constructor() {
		super()
		this.enabledCORSRef = React.createRef()
		this.onSearchChange = event => {
			this.props.updateSearchField(event.target.value)
		}
	}
	componentDidMount() {
		fetch(
			(process.env.PUBLIC_URL ? process.env.PUBLIC_URL : '') + '/data/faqs.json',
			{
				headers: {
					'Content-Type': 'application/json',
					'Accept': 'application/json'
				}
			}
		).then(resp => resp.json())
			.then(data => {
				this.props.loadFAQData(data)
			})

	}
	render() {
		return (<div className="bg-green-100 px-8 py-4">
			<div className="max-w-[900px] mx-auto">
				<div>
					<input type="text" placeholder="search"
						className="placeholder-shown:italic w-full"
						value={this.props.faq.query}
						onChange={this.onSearchChange}
					/>
				</div>
				<ul className="mt-4 grid gap-4">
					{this.props.faq.faqs.filter(faqFilterFunc(this.props.faq.query)).map((faq, i) => (
						<li key={i} className="bg-yellow-100 shadow flex flex-col space-y-4 p-4">
							{faqEntry(faq)}
						</li>
					))}
				</ul>
			</div>
		</div>)
	}
}

function faqEntry({ question, answer }) {
	return (<>
		<h3>{question}</h3>
		<p>{answer}</p>
	</>
	)
}

function faqFilterFunc(query) {
	return (faq) => {
		return faq.question.toLowerCase().includes(query.toLowerCase()) || faq.answer.toLowerCase().includes(query.toLowerCase())
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(FAQ);