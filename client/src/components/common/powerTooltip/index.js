import React from 'react'
import Tooltip from 'react-bootstrap/Tooltip'
import OverlayTrigger from 'react-bootstrap/OverlayTrigger'

const PowerTooltip = (props) => {
    const { title } = props
    const renderTooltip = (props) => {
        return (
        <Tooltip id="button-tooltip" {...props}>
            {title}
        </Tooltip>
        )
    }
    return (
        <OverlayTrigger
            placement={props.placement}
            delay={props.delay}
            overlay={renderTooltip}>
            {props.children}
        </OverlayTrigger>
    )
}
export default PowerTooltip