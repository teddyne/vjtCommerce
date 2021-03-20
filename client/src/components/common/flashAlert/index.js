import React from 'react'
import Alert from 'react-bootstrap/Alert'

const FlashAlert = ({ type }) => {
    const [show, setShow] = useState(true)

    const onClose = () => {
        setTimeout(() => setShow(false), 3000)
    }

    if (show) {
        return show ?
        (
            <Alert variant={type} onClose={onClose} dismissible>
                <Alert.Heading>Oh snap! You got an error!</Alert.Heading>
                <p>
                Change this and that and try again. Duis mollis, est non commodo
                luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit.
                Cras mattis consectetur purus sit amet fermentum.
                </p>
            </Alert>
        ) : null
    }
}
export default FlashAlert