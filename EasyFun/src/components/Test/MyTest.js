import React from 'react';

class Test extends React.Component {
	constructor(prop){
		super(prop);
		this.state = {
			arr:[1,2,3]
		}
	}
	
	render(){
		return (
			<div>
				{
					this.state.map((item,index) => {
						return (
							<p key={index}>{item}</p>
						)
					})
				}
			</div>
		)
	}
	
}
export default Test;
