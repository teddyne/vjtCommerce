import React, { useState } from 'react'
import InputGroup from 'react-bootstrap/InputGroup'
import Button from 'react-bootstrap/Button'
import FormControl from 'react-bootstrap/FormControl'
import { QualityActionEnum } from './enums/enum'

import './scss/_qualityInput.scss'

const QualityInput = () => {
  const [quality, setQuality] = useState(1)

  const handleChangeQuality = (action) => {
    setQuality(action === QualityActionEnum.Add ? quality + 1 : quality - 1)
  }

  return (
      <div className="quality-input">
          <span>Số Lượng</span>
        <InputGroup className="mt-3">
          <InputGroup.Prepend>
            <Button variant="outline-secondary" disabled={quality === 1} onClick={() => handleChangeQuality(QualityActionEnum.Minus)}>-</Button>
          </InputGroup.Prepend>
          <FormControl className="quality" aria-describedby="basic-addon1" value={quality} />
          <InputGroup.Prepend>
            <Button variant="outline-secondary" disabled={quality > 4} onClick={() => handleChangeQuality(QualityActionEnum.Add)}>+</Button>
          </InputGroup.Prepend>
        </InputGroup>
      </div>
  )
}

export default QualityInput