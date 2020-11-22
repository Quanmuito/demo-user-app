import React, { useState } from 'react';
import { Card, ListGroup, Collapse, Button } from 'react-bootstrap';

export default function Detail({ isOpen, title, info }) {
    const [open, setOpen] = useState(isOpen);
    const content = [];

    if (info) {
        Object.keys(info).forEach(key => {
            content.push(
                <ListGroup.Item key={key}>
                    <div className="row">
                        <div className="col col-lg-3">
                            <div className="detail__body-title">{ key.toLocaleUpperCase() }</div>
                        </div>
                        <div className="col">
                            <div className="detail__body-text">{ info[key] }</div>
                        </div>
                    </div>
                </ListGroup.Item>
            )
        });
    }    

    return (
        <div className="detail">
            <Card.Header className="detail__header">
                <Card.Title >
                    <strong className="detail__header-title">{ title }</strong>
                </Card.Title>
                <Button
                    onClick={() => setOpen(!open)}
                    aria-controls="collapse-text"
                    aria-expanded={open}
                >
                    {open ? '-' : '+'}
                </Button>
            </Card.Header>
            <Collapse in={open}>
                <div id="collapse-text">
                    <Card.Body className="detail__body">                        
                        <ListGroup variant="flush">
                            { content }
                        </ListGroup>
                    </Card.Body>
                </div>
            </Collapse>
        </div>
    )
}
