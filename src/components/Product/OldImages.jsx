/* eslint-disable react/prop-types */
import { MdDeleteForever } from "react-icons/md";

const OldImages = ({ images, setOldImages }) => {
  const removeAllImages = () => {
    setOldImages([]);
  };

  const removeImage = (index) => {
    // Use filter to create a new array excluding the image at the specified index
    const updatedImages = images.filter((_, i) => i !== index);

    // Update the state with the new array
    setOldImages(updatedImages);
  };

  if (images?.length > 0) {
    return (
      <div className="border rounded-sm p-2 mb-2">
        <button
          type="button"
          onClick={removeAllImages}
          className="btn mb-3 w-full btn-sm text-xs"
        >
          <MdDeleteForever className="text-xl" />
          Remove All Files
        </button>
        <div className="grid grid-cols-4 gap-4">
          {images?.map((image, i) => (
            <div key={i} className="image-item h-20 relative group">
              <img src={image} alt={image} className="h-full object-cover" />
              <div className="image-item__btn-wrapper">
                <button
                  type="button"
                  onClick={() => removeImage(i)}
                  className="hidden group-hover:block absolute top-0 left-0 right-0 bottom-0 bg-gray-200 bg-opacity-90 transition-all"
                >
                  <div className="flex items-center justify-center">
                    <MdDeleteForever className="text-xl" />
                  </div>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
};

export default OldImages;
