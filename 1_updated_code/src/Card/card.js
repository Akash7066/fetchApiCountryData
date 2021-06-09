import React from 'react';
import '../style.css';
const Card = (props) => {
	let lang1 = '';
	return (
		<div>
			{props.data && props.data.map(
				(e) => (
					(lang1 = e.languages),
					(
						<div class="card" style={{ width: '33rem', display: 'inline-block', marginLeft: '5%' }}>
							<img class="card-img-top" src={e.flag} />
							<div class="card-body">
								<h5 style={{ paddingTop: '5%', paddingLeft: '5%', fontWeight: 'bolder' }}> {e.name}</h5>
								<p class="small text-muted mb-0 card-text" style={{ color: '#000' }}>
									Capital: {e.capital}, Languages is (
									{lang1.map((ll) => <span style={{ padding: '1px' }}>{ll.iso639_1},</span>)}
									), Region: {e.region}
								</p>
							</div>
						</div>
					)
				)
			)}
		</div>
	);
};
export default Card;
