import React, { useState, useEffect} from 'react'
import { axiosWithAuth } from '../src/utils/axiosWtihAuth'
import FriendForm from '../src/FriendForm'
import FriendsCard from '../src/FriendsCard'

const Friends = (props) => {
    const [friends, setFriends] = useState([]);

    useEffect(() => {
        axiosWithAuth()
        .get('/friends')
        .then(res => {
            setFriends(res.data)
        })
        .catch(err => {
            console.log(err)
        })
    },[])

    return (
        <div>
            <FriendForm />
            <FriendsCard key = {friends.id} friends={friends} />
        </div>
    )
}

export default Friends;
