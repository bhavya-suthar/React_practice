import { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import Cropper from "react-easy-crop";

const ImageCropper = ({
  showModal,
  setShowModal,
  handleClose,
  handleShow,
  image,
  onCropDone,onCropCancel
}) => {
  const [crop, setCrop] = useState({ x: 0, y: 0 });
  const [zoom, setZoom] = useState(1);
  const [cropShape, setCropShape] = useState("square");
  const [croppedArea, setCroppedArea] = useState(null);

  const onCropComplete = (croppedAreaPercentage, croppedAreaPixel) => {
    setCroppedArea(croppedAreaPixel);
  };

  const handleRadioChange =(e)=>{
    setCropShape(e.target.value)
  }
  return (
    <>
      <Modal
        size="md"
        show={showModal}
        onHide={() => handleClose()}
        // aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Edit Image
          </Modal.Title>
        </Modal.Header>
        <Modal.Body style={{height:"230px"}}>
          {/* {image && <img src={image} alt="Selected" style={{ maxWidth: "100%" }} />} */}
          <Cropper
            image={image}
            aspect={1 / 1}
            zoom={zoom}
            crop={crop}
            maxZoom={4}
            onCropChange={setCrop}
            onZoomChange={setZoom}
            onCropComplete={onCropComplete}
            cropShape={cropShape}
            style={{
              containerStyle:{
                width:"250px",
                height:"250px",
                margin:"10px 10px 10px 130px"
               }
            }}
          />
        </Modal.Body>
            <div className="container d-flex gap-3 p-3 mt-5">
              <div className="d-flex gap-2">
                <input type="radio" name="shap" value="square" checked={cropShape === "square"} onChange={handleRadioChange}/><label>Square</label>
              </div>
              <div className="d-flex gap-2">
                <input type="radio" name="shap" value="round" checked={cropShape === "round"} onChange={handleRadioChange}/><label>Round</label>

              </div>
            </div>
        <Modal.Footer>
            <div className="container d-flex gap-3 justify-content-end">
              <button className="btn-primary rounded-2 border-0 p-2 text-black" onClick={()=>{
                onCropDone(croppedArea);
                setCropShape(cropShape)
                handleClose()
                document.getElementById('addpicture').value=""
              }}>Upload Image</button>
              <button className="btn-primary rounded-2 border-0 p-2 text-black" onClick={onCropCancel}>Cancel</button>
            </div>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default ImageCropper;
