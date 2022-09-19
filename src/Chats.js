import React from 'react'
import "./Chats.css";
import Chat from "./Chat"

function Chats() {
  return (
    <div className="chats">
        <Chat
            name="Anisul Islam"
            message="Yo What's up"
            timestamp="1 min ago"
            profilePic="https://scontent.fdac27-2.fna.fbcdn.net/v/t1.6435-9/185941053_1441665546168902_4282767193747384096_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=rEYDrA8OJGUAX8LeVDr&_nc_ht=scontent.fdac27-2.fna&oh=00_AT8k0dKRd52aLTpGn6NRQEZ2VTFsJZ3xYmGDgFU1WLgnGw&oe=6349E7D6"
        />
        <Chat
            name="Another Prof"
            message="I'm good, what's about you"
            timestamp="1.10 min ago"
            profilePic="https://scontent.fdac27-2.fna.fbcdn.net/v/t1.6435-9/185941053_1441665546168902_4282767193747384096_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=rEYDrA8OJGUAX8LeVDr&_nc_ht=scontent.fdac27-2.fna&oh=00_AT8k0dKRd52aLTpGn6NRQEZ2VTFsJZ3xYmGDgFU1WLgnGw&oe=6349E7D6"
        />
    </div>
  )
}

export default Chats