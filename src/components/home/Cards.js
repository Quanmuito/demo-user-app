import React from 'react';
import { Card } from 'react-bootstrap';

export default function Cards({ user }) {
    return (
        <Card className="card">            
            <div className="card__img">
                <div className="card__img-text">{ user.name.charAt(0) }</div>
            </div>
            <Card.Body className="card__body">
                <div className="card__body-title">
                    { user.name }
                </div>

                <div className="card__body-subtitle">
                    @{ user.username }
                </div>

                
                <div className="card__body-text">
                    <a href={"/" + user.id}>
                        {user.website}
                    </a>
                </div>
                

                <a href={ "/" + user.id }>
                    <div className="card__body-button">
                        <div className="card__body-button-text">
                            MORE DETAILS
                        </div>
                    </div>
                </a>
            </Card.Body>
        </Card>
    )
}