import React from 'react'
import color from '../../../assets/scss/_colors.scss'
import { DualRing } from 'react-spinners-css'
import './_spinner.scss'

const Spinner = ({ loading }) => {
    return loading ? (
        <div className='spinner'>
            <DualRing className='dual-ring' color={color.sweet_red} />
        </div>
    ) : null
}
export default Spinner