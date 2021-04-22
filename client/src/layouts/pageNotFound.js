import React from 'react'
import { useHistory } from 'react-router-dom'
import SoloButton from '../components/common/button'

import './scss/_pageNotFound.scss'

const PageNotFound = ({ h1, h2}) => {
	const history = useHistory()
	const goToHome = () => {
		history.push('/')
	}

    return (
		<div id="notfound">
			<div class="notfound">
				<div class="notfound-404">
					<h1>{h1}</h1>
					<h2>{h2}</h2>
				</div>
		        <SoloButton btnStyle='sweet-red' onClick={goToHome} text={'GO TO HOME'} />
			</div>
		</div>
    )
}
export default PageNotFound