import React from 'react'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'

const NEDetails = ({ nerdoc }) => {
  return (
    <Card className="customCard" style={{ width: '18rem' }}>
        <Card.Header><strong>{nerdoc.api_docid}</strong></Card.Header>
        <Card.Body>
            <Card.Title>{nerdoc.document_text}</Card.Title>
            <Card.Text><b>Text from Doc || Named Entity</b></Card.Text>
            {nerdoc.named_entities.map((doc) => (
              <Card.Text> {doc[0]} || {doc[1]}</Card.Text>
            ))}
        </Card.Body>
        <Button variant="primary">View all Entities</Button>
    </Card>
  )
}

export default NEDetails