import * as React from 'react';

import { faPhoneAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import './styles.scss';

export const App = () => {
	return (
		<div className="main">
			<div className="App">
				<div className="container">
					<div className="logo-container">
						<img
							className="logo"
							src="https://res.cloudinary.com/dcw7kvha3/image/upload/v1581598748/dc-logo_bnnhlg.png"
							alt="Design Consciously"
						/>
					</div>
					<div className="description">
						<p>
							We design experiences for soulful businesses by blending a
							pragmatic approach with creativity
						</p>
						<p>New Website coming soon</p>
						<p>
							Get in touch with us at{' '}
							<a href="mailto:hello@corina.com">hello@corina.com</a>
						</p>
					</div>
				</div>
			</div>
			<div className="area">
				<ul className="circles">
					<li />
					<li />
					<li />
					<li />
					<li />
					<li />
					<li />
					<li />
					<li />
					<li />
				</ul>
			</div>
			<a className="phone-icon" href="tel:+447777777777">
				<FontAwesomeIcon icon={faPhoneAlt} size="1x" />
				<div className="phone-number">07777777777</div>
			</a>
		</div>
	);
};

export default App;
