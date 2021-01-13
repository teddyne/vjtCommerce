import React from 'react'
import { withLayout } from '../layouts/container'
import { 
    gql,
    useQuery
} from '@apollo/client'

function User() {
    const userQuery = gql`
    {
        users {
            id,
            firstname,
            lastname,
            email,
            phoneNumber
     }
    }
    `;
    const { loading, data } = useQuery(userQuery);
    if (loading) return <p>Loading...</p>;
    return (
        data.users.map(user => (
              <div key={`${user.id}-item`}>
                {user.firstname} {user.lastname}
              </div>
        ))
    )
}
export default withLayout(User)