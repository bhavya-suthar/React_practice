import React, { useState } from "react";
import FileInput from "./FileInput";
import ImageCropper from "./ImageCropper";

const ReactImageCrop = () => {
  const [showModal, setShowModal] = useState(false);
  const [image, setImage] = useState("");
  console.log("🚀 ~ ReactImageCrop ~ image:", image);
  const { ImgAfterCrop, setImgAfterCrop } = useState("");

  const onImageSelected = (selectedImage) => {
    setImage(selectedImage);
  };

  const handleClose = () => {
    document.getElementById("addpicture").value = "";
    setShowModal(false);
  };

  const handleShow = () => {
    setShowModal(true);
  };

  const onCropDone = (imgCroppedArea) => {
    const canvasEle = document.createElement("canvas");
    canvasEle.width = imgCroppedArea.width;
    canvasEle.height = imgCroppedArea.height;
    const context = canvasEle.getContext("2d");

    let imageObj1 = new Image();
    imageObj1.src = image;
    imageObj1.onload = function () {
      context.drawImage(
        imageObj1,
        imgCroppedArea.x,
        imgCroppedArea.y,
        imgCroppedArea.width,
        imgCroppedArea.height,
        0,
        0,
        imgCroppedArea.width,
        imgCroppedArea.height
      );

      const dataURL = canvasEle.toDataURL("image/jpeg");
      setImgAfterCrop(dataURL);
    };
  };

  const onCropCancel = () => {
    setImage("");
  };

  return (
    <div>
      <FileInput
        ImgAfterCrop={ImgAfterCrop}
        showModal={showModal}
        setShowModal={setShowModal}
        handleClose={handleClose}
        handleShow={handleShow}
        onImageSelected={onImageSelected}
        setImage={image}
      />
      <ImageCropper
        setImgAfterCrop={setImgAfterCrop}
        onCropDone={onCropDone}
        onCropCancel={onCropCancel}
        showModal={showModal}
        setShowModal={setShowModal}
        handleClose={handleClose}
        handleShow={handleShow}
        image={image}
      />
    </div>
  );
};

export default ReactImageCrop;
