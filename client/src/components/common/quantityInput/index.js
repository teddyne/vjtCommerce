import React from 'react'
import InputGroup from 'react-bootstrap/InputGroup'
import Button from 'react-bootstrap/Button'
import FormControl from 'react-bootstrap/FormControl'

import './_quantityInput.scss'

const QuantityInput = ({ quantity, isShowText, onClickMinus, onClickAdd }) => {

  return (
    <div className='quantity-input'>
      <span>{isShowText ? 'Số Lượng' : ''}</span>
      <InputGroup>
        <InputGroup.Prepend>
          <Button variant='outline-secondary' disabled={quantity === 1} onClick={onClickMinus}>-</Button>
        </InputGroup.Prepend>
        <FormControl className='quantity' aria-describedby='basic-addon1' value={quantity} />
        <InputGroup.Prepend>
          <Button variant='outline-secondary' disabled={quantity > 4} onClick={onClickAdd}>+</Button>
        </InputGroup.Prepend>
      </InputGroup>
    </div>
  )
}

QuantityInput.defaultProps = {
  isShowText: true
}
export default QuantityInput