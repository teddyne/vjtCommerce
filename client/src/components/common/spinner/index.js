import React from 'react'
import color from '../../../assets/scss/_colors.scss'
import { DualRing } from 'react-spinners-css'
import './_spinner.scss'

const Spinner = () => {
    return (
        <div className='spinner'>
            <DualRing color={color.sweet_red} />
        </div>
    )
}
export default Spinner