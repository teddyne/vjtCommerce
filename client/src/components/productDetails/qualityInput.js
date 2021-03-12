import React, { useContext } from 'react'
import InputGroup from 'react-bootstrap/InputGroup'
import Button from 'react-bootstrap/Button'
import FormControl from 'react-bootstrap/FormControl'
import { QualityActionEnum } from './enums/enum'
import { Context } from '../../store/store'
import { INCREASE_ITEM_QUANTITY, DECREASE_ITEM_QUANTITY } from '../../store/action'

import './scss/_qualityInput.scss'

const QualityInput = () => {
  const [state, dispatch] = useContext(Context)

  const handleChangeQuality = (action) => {
    dispatch({ type: action === QualityActionEnum.Add ? INCREASE_ITEM_QUANTITY : DECREASE_ITEM_QUANTITY })
  }

  return (
      <div className="quality-input">
          <span>Số Lượng</span>
        <InputGroup className="mt-3">
          <InputGroup.Prepend>
            <Button variant="outline-secondary" disabled={state.itemQuantity === 1} onClick={() => handleChangeQuality(QualityActionEnum.Minus)}>-</Button>
          </InputGroup.Prepend>
          <FormControl className="quality" aria-describedby="basic-addon1" value={state.itemQuantity} />
          <InputGroup.Prepend>
            <Button variant="outline-secondary" disabled={state.itemQuantity > 4} onClick={() => handleChangeQuality(QualityActionEnum.Add)}>+</Button>
          </InputGroup.Prepend>
        </InputGroup>
      </div>
  )
}

export default QualityInput