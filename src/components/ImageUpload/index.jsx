/* eslint-disable react/prop-types */
import ImageUploading from "react-images-uploading";
import { MdDeleteForever } from "react-icons/md";
import { useState } from "react";

const ImageUploader = ({ label, onFileUpload, multiple = false, error }) => {
  const [images, setImages] = useState([]);
  const maxNumber = multiple ? 69 : 1;

  const onChange = (imageList) => {
    setImages(imageList);
    onFileUpload(imageList);
  };

  return (
    <ImageUploading
      multiple={multiple}
      value={images}
      onChange={onChange}
      maxNumber={maxNumber}
      dataURLKey="data_url"
    >
      {({
        imageList,
        onImageUpload,
        onImageRemoveAll,
        onImageRemove,
        isDragging,
        dragProps,
      }) => (
        <div className="upload__image-wrapper">
          {label && (
            <p className="text-sm font-medium leading-6 text-gray-900 mb-1">
              {label}
            </p>
          )}
          <button
            type="button"
            {...dragProps}
            style={isDragging ? { color: "red" } : undefined}
            onClick={onImageUpload}
            className={`btn w-full border-dashed border-2 bg-transparent shadow-none py-14 pt-11 font-normal text-sm text-gray-400 hover:bg-transparent hover:text-gray-800 ${
              error && "input-error"
            }`}
          >
            click or drop here to upload file
          </button>
          {error && (
            <span className="text-error text-sm ms-1 mt-1 font-semibold">
              {error?.msg}
            </span>
          )}

          {imageList.length > 0 && (
            <div className="border mt-3 p-3 rounded-md">
              {multiple && imageList.length > 0 && (
                <button
                  type="button"
                  onClick={onImageRemoveAll}
                  className="btn mb-3 w-full btn-sm text-xs"
                >
                  <MdDeleteForever className="text-xl" />
                  Remove All Files
                </button>
              )}

              <div className="grid grid-cols-4 gap-4">
                {imageList.map((image, index) => (
                  <div key={index} className="image-item h-20 relative group">
                    <img
                      src={image["data_url"]}
                      alt={image["data_url"]}
                      className="h-full object-cover"
                    />
                    <div className="image-item__btn-wrapper">
                      <button
                        type="button"
                        onClick={() => onImageRemove(index)}
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
          )}
        </div>
      )}
    </ImageUploading>
  );
};

export default ImageUploader;
