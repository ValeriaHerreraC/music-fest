import React, {useState} from 'react'
import { Modal } from "./Modal";
import "../css/artists.css"

export const Artists = (props) => {

  const [show, setShow] = useState(false);

  const handleClose = () =>{setShow(false)};
  const handleShow = () => {setShow(true)};

  return (
    <>
    <div className="card" onClick={handleShow}>
      <img src={props.image} className="card-img-top image" />
      <div className="card-body">
        <p className="card-text name">{props.name}</p>
      </div>
    </div>
    {/*<Modal show={show} handleClose={handleClose}/> */}
    {show && <Modal handleClose={handleClose}/>}
    </>
  )
}
;