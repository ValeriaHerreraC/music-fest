import { useState } from "react";
import { EditModal } from "./EditModal";

export const Edit = ({ artist }) => {
  const [showEdit, setShowEdit] = useState(false);

  const handleCloseEdit = () => {
    setShowEdit(false);
  };
  const handleShowEdit = () => {
    setShowEdit(true);
  };

  return (
    <>
      <img
        className="edit"
        src="../public/editar.png"
        onClick={handleShowEdit}
      />
      {showEdit && (
        <EditModal
          artist={artist}
          isOpenEdit={showEdit}
          closeEditModal={handleCloseEdit}
        />
      )}
    </>
  );
};
