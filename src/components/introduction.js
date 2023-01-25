import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'

function Introduction(props) {
    // console.log('Parameter kiriman: ', props.name)
  return (
    <Form>
      <Form.Group as={Row} className="mb-3" controlID="formHorizontalEmail">
        <Form.Label column sm={2}>
          Email
        </Form.Label>
        <Col sm={10}>
          <Form.Control type="email" placeholder="Email" />
        </Col>
      </Form.Group>

      <Form.Group as={Row} className="mb-3" controlID="formHorizontalPassword">
        <Form.Label column sm={2}>
          Password
        </Form.Label>
        <Col sm={10}>
          <Form.Control type="password" placeholder="Email" />
        </Col>
      </Form.Group>
      <Form.Group as={Row} className="mb-3">
        <Col sm={{ span:10, offset:2}}>
          <Button type="sumbit">Sign in</Button>
        </Col>
      </Form.Group>
    </Form>
  );
}

export default Introduction;
