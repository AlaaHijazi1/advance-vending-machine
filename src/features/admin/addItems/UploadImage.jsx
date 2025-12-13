import Label from "../../../component/Label";
import image from "../../../assets/images/upload-image.png";

function UploadImage({ handleImage, imagePreview }) {
  return (
    <>
      <Label htmlFor="image" text="Upload Image" />
      <div className="upload-image-wrapper">
        <label htmlFor="image" className="upload-image-label">
          <img
            src={imagePreview ? imagePreview : image}
            alt="upload image"
            width={80}
          />
        </label>
        <input
          type="file"
          id="image"
          accept="image/*"
          className="upload-image-input"
          onChange={handleImage}
        />
      </div>
    </>
  );
}

export default UploadImage;
