import React, {useState} from 'react'
import { Modal } from "./Modal";
import "../css/artists.css"

export const Artists = (props) => {

  const [show, setShow] = useState(false);

  const handleClose = () =>{setShow(false)};
  const handleShow = () => {setShow(true)};

  return (
    <>
    <tr className='filas'>
      <th scope="row">
        {props.id}
      </th>
      <td>
        <img className='image' src={props.image} onClick={handleShow}/>
        {show && <Modal isOpen={show} closeModal={handleClose}/>}
      </td>
      <td>
        <p className='name'>{props.name}</p>
      </td>
      <td>
        <img className='edit' src='../public/editar.png'/>
        <img className='delete' src='../public/eliminar.png'/>
      </td>
    </tr>
    
    </>
    
  )
}
;