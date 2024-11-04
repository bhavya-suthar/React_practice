import React from "react";
import { Button } from "react-bootstrap";
import { TbCameraPlus } from "react-icons/tb";

const FileInput = ({
  showModal,
  setShowModal,
  handleClose,
  handleShow,
  onImageSelected,
  ImgAfterCrop,
}) => {
  const onChooseImg = () => {
    document.getElementById("addpicture").click();
  };

  const handleOnImgChange = (e) => {
    const file = e.target.files[0];
    console.log("🚀 ~ handleOnImgChange ~ file:", file);
    if (file) {
      const reader = new FileReader();
      console.log("🚀 ~ handleOnImgChange ~ reader:", reader);
      reader.readAsDataURL(file);
      reader.onload = () => {
        onImageSelected(reader.result);
        handleShow();
      };
    }
  };
  return (
    <>
      <div className="container">
        <h1 className="d-flex justify-content-center">Image Cropper</h1>
        <div className="d-flex justify-content-center m-5">
          <button className="bg-white p-4 border-0 position-relative">
            <img
              className="imgWrapper"
              src={
                ImgAfterCrop
                  ? ImgAfterCrop
                  : "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
              }
            />
            <label htmlFor="" className="spanCamera" onClick={onChooseImg}>
              <span>
                <TbCameraPlus
                  style={{ height: "45px", width: "45px", padding: "5px" }}
                />
              </span>
            </label>
          </button>

          <input
            type="file"
            name="addpicture"
            id="addpicture"
            accept="image/*"
            className="d-none"
            onChange={handleOnImgChange}
          />
        </div>
      </div>
    </>
  );
};

export default FileInput;
