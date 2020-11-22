import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './styleProfile.scss';
import Picture from './Picture';
import Detail from './Detail';

export default function Profile() {    
    const { id } = useParams();
    const [user, setUser] = useState([]);

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
        .then(response => response.json())
        .then(json => setUser(json))
    }, [id])

    if (user.length !== 0) {
        return (
            <div>
                <Picture name={ user.name } />

                <Detail
                    isOpen={true}
                    title='Personal information'
                    info={{
                        name: user.name,
                        username: user.username,
                        email: user.email,
                        phone: user.phone,
                        website: user.website
                    }}
                />
                
                <br></br>

                <Detail
                    isOpen={false}
                    title='Address'
                    info={{
                        street: user.address.street,
                        suite: user.address.suite,
                        city: user.address.city,
                        zipcode: user.address.zipcode
                    }}
                />

                <br></br>

                <Detail
                    isOpen={false}
                    title='Company'
                    info={{
                        title: user.company.name,
                        description: user.company.catchPhrase + user.company.bs,
                    }}
                />
            </div>
        )
    }
    else {
        return (<div></div>)
    }
}
