import React from 'react'

const Emoji = props => {
    const emojis = []
    for (let index = 0; index < props.times; index++) {
        emojis.push(
            <span
            className='emoji'
            role='img'
            aria-label={props.label ? props.label : ''}
            aria-hidden={props.label ? 'false' : 'true'}
            >
                {props.symbol}
            </span>
        )
    }
    return emojis
}

Emoji.defaultProps = {
    times: 1
}

export default Emoji