import React, { useState } from 'react';
import { Modal, Image, Button } from 'react-bootstrap';
import { useAuth } from '../utils/context/authContext';
import { signOut } from '../utils/auth';

export default function UserProfile() {
  const [show, setShow] = useState(false);
  const { user } = useAuth();

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  console.warn(user);
  return (
    <div className="profileModal">
      <Image
        src={user.fbUser.photoURL}
        alt="User"
        width="60"
        height="60"
        onClick={handleShow}
        roundedCircle
      />
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Image
            src={user.fbUser.photoURL}
            alt="User"
            width="60"
            height="60"
            onClick={handleShow}
            roundedCircle
            className="profilepic"
          />
          <div className="profileDetails">
            <h6>{user.first_name} {user.last_name}</h6>
            <h6>{user.fbUser.email}</h6>
            <h6>{user.bio}</h6>
          </div>
        </Modal.Header>
        <Modal.Footer>
          <div className="signoutbtn">
            <Button variant="danger" onClick={signOut}>
              Sign Out
            </Button>
          </div>
        </Modal.Footer>
      </Modal>
    </div>
  );
}
