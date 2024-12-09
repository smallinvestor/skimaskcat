import React, { useState, useRef, useEffect } from "react";
import { fabric } from "fabric";
import {
  Upload,
  RotateCw,
  Download,
  Trash,
  FlipHorizontal,
  ArrowUp,
  ArrowDown,
} from "lucide-react";

import mask1 from "../assets/green-mask.png";
import mask2 from "../assets/l-green-mask.png";
// import mask3 from "../assets/l-purple-mask.jpg";
// import mask4 from "../assets/pink-mask.jpg";
// import mask5 from "../assets/purple-mask.jpg";
// import mask6 from "../assets/yellow-mask.jpg";

const images = [
  mask1,
  mask2,
  //  mask3, mask4, mask5, mask6
];

const MemeMaker = () => {
  const [canvas, setCanvas] = useState(null);
  const [imageType, setImageType] = useState("poses");
  const [stickerImages, setStickerImages] = useState(images);
  const [selectedObject, setSelectedObject] = useState(null);
  const [backgroundImage, setBackgroundImage] = useState(null);
  const canvasRef = useRef(null);
  const fileInputRef = useRef(null);

  useEffect(() => {
    const canvasContainer = canvasRef.current.parentElement;
    const containerWidth = canvasContainer.clientWidth;
    const isMobile = window.innerWidth <= 767;
    const canvasWidth = isMobile
      ? window.innerWidth
      : Math.min(containerWidth * 0.9, 600);
    const canvasHeight = isMobile ? canvasWidth : canvasWidth; // Keep it square on mobile

    const newCanvas = new fabric.Canvas(canvasRef.current, {
      width: canvasWidth,
      height: canvasHeight,
    });
    setCanvas(newCanvas);

    // Add event listeners for object selection
    newCanvas.on("selection:created", handleObjectSelected);
    newCanvas.on("selection:updated", handleObjectSelected);
    newCanvas.on("selection:cleared", handleSelectionCleared);

    return () => {
      newCanvas.dispose();
    };
  }, []);

  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        fabric.Image.fromURL(event.target.result, (img) => {
          const isMobile = window.innerWidth <= 767;
          const maxWidth = isMobile ? window.innerWidth : 600;
          const maxHeight = isMobile ? window.innerWidth : 600;
          let newWidth = img.width;
          let newHeight = img.height;

          if (newWidth > maxWidth) {
            newHeight = (maxWidth / newWidth) * newHeight;
            newWidth = maxWidth;
          }

          if (newHeight > maxHeight) {
            newWidth = (maxHeight / newHeight) * newWidth;
            newHeight = maxHeight;
          }

          // Update canvas size
          canvas.setWidth(newWidth);
          canvas.setHeight(newHeight);

          // Clear the canvas and set the background image
          canvas.clear();
          canvas.setBackgroundImage(img, canvas.renderAll.bind(canvas), {
            scaleX: newWidth / img.width,
            scaleY: newHeight / img.height,
          });
          setBackgroundImage(img);

          // Center the canvas in its container
          const canvasContainer = canvasRef.current.parentElement;
          if (canvasContainer) {
            canvasContainer.style.display = "flex";
            canvasContainer.style.justifyContent = "center";
            canvasContainer.style.alignItems = "center";
          }
        });
      };
      reader.readAsDataURL(file);
    }
  };

  const handleAddSticker = (stickerSrc) => {
    if (!backgroundImage) {
      alert("Please upload a background image first.");
      return;
    }

    fabric.Image.fromURL(stickerSrc, (img) => {
      // Set the sticker size to 150x150
      img.scaleToWidth(150);
      img.scaleToHeight(150);

      // Center the sticker on the canvas
      img.set({
        left: canvas.width / 2 - 75,
        top: canvas.height / 2 - 75,
      });

      canvas.add(img);
      canvas.setActiveObject(img);
      canvas.renderAll();
    });
  };

  const handleReset = () => {
    canvas.clear();
    fileInputRef.current.value = "";
    setBackgroundImage(null);
  };

  const handleDownload = () => {
    const dataURL = canvas.toDataURL({
      format: "png",
      quality: 1,
    });
    const link = document.createElement("a");
    link.href = dataURL;
    link.download = "skicat_meme.png";
    link.click();
  };

  const handleObjectSelected = (e) => {
    setSelectedObject(e.selected[0]);
  };

  const handleSelectionCleared = () => {
    setSelectedObject(null);
  };

  const handleDeleteSticker = () => {
    if (selectedObject) {
      canvas.remove(selectedObject);
      canvas.renderAll();
      setSelectedObject(null);
    }
  };

  const handleMirrorSticker = () => {
    if (selectedObject) {
      selectedObject.set("flipX", !selectedObject.flipX);
      canvas.renderAll();
    }
  };

  const handleBringToFront = () => {
    if (selectedObject) {
      canvas.bringToFront(selectedObject);
      canvas.renderAll();
    }
  };

  const handleSendToBack = () => {
    if (selectedObject) {
      canvas.sendToBack(selectedObject);
      canvas.renderAll();
    }
  };

  return (
    <div className="meme-generator">
      <h1>MASK UR PFP</h1>
      <p class="m-tag">
        Upload your profile picture - select a ski mask - size it and download
        it!
      </p>
      <div className="meme-content">
        <div className="canvas-and-controls-container">
          <div className="meme-canvas">
            <canvas ref={canvasRef} />
            <input
              ref={fileInputRef}
              type="file"
              accept="image/*"
              onChange={handleFileUpload}
              style={{ display: "none" }}
            />
            {!backgroundImage && (
              <button
                onClick={() => fileInputRef.current.click()}
                className="upload-button centered-upload"
              >
                <Upload className="icon" /> Upload Image
              </button>
            )}
            {selectedObject && (
              <div className="sticker-controls">
                <button
                  onClick={handleDeleteSticker}
                  className="control-button"
                >
                  <Trash size={20} />
                </button>
                <button
                  onClick={handleMirrorSticker}
                  className="control-button"
                >
                  <FlipHorizontal size={20} />
                </button>
                <button onClick={handleBringToFront} className="control-button">
                  <ArrowUp size={20} />
                </button>
                <button onClick={handleSendToBack} className="control-button">
                  <ArrowDown size={20} />
                </button>
              </div>
            )}
          </div>
          <div className="meme-controls">
            <div className="sticker-menu">
              <div className="sticker-grid">
                {stickerImages.map((img, index) => (
                  <button
                    key={index}
                    onClick={() => handleAddSticker(img)}
                    className="sticker-button"
                    disabled={!backgroundImage}
                  >
                    <img
                      src={img}
                      alt={`${index + 1}`}
                      className="pose-preview"
                    />
                  </button>
                ))}
              </div>
            </div>
            <div className="action-buttons">
              <button onClick={handleReset} className="reset-button">
                <RotateCw className="icon" /> Reset
              </button>
              <button onClick={handleDownload} className="download-button">
                <Download className="icon" /> Download
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MemeMaker;
