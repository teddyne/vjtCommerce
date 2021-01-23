import React from 'react'
import InputGroup from 'react-bootstrap/InputGroup'
import Button from 'react-bootstrap/Button'
import FormControl from 'react-bootstrap/FormControl'

import './scss/_qualityInput.scss'

const QualityInput = () => {
    return (
      <div className="quality-input">
          <span>Số Lượng</span>
        <InputGroup className="mt-3">
          <InputGroup.Prepend>
            <Button variant="outline-secondary">-</Button>
          </InputGroup.Prepend>
          <FormControl className="quality" aria-describedby="basic-addon1" value={1} />
          <InputGroup.Prepend>
            <Button variant="outline-secondary">+</Button>
          </InputGroup.Prepend>
        </InputGroup>
      </div>
    )
}

export default QualityInput