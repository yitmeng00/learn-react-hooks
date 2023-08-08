import React, { useState, useEffect } from "react";

function UserProfile(props) {
    const [user, setUser] = useState(null);

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/users/${props.userId}`)
            .then((response) => response.json())
            .then((data) => setUser(data));
    }, [props.userId]);

    if (!user) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <h1>{user.name}</h1>
            <p>Email: {user.email}</p>
            <p>Phone: {user.phone}</p>
        </div>
    );
}

export default UserProfile;