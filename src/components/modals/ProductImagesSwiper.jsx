/* eslint-disable react/prop-types */

import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Navigation, Thumbs } from "swiper/modules";
import Button from "../Buttons/Button";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

const ProductImagesSwiper = ({ images }) => {
  return (
    <>
      <dialog id="productImagesSwiperModal" className="modal">
        <div className="modal-box">
          <h3 className="font-bold text-lg border-b pb-3 mb-3">
            Product Images
          </h3>

          <div>
            <Swiper
              style={{
                "--swiper-navigation-color": "#fff",
                "--swiper-pagination-color": "#fff",
              }}
              loop={images?.length > 0 && true}
              spaceBetween={10}
              navigation={true}
              modules={[FreeMode, Navigation, Thumbs]}
              className="mySwiper2"
            >
              {images?.map((image, i) => (
                <SwiperSlide key={i}>
                  <img src={image} />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

          <form method="dialog" className="mt-3">
            <Button
              title={"Close"}
              type={"submit"}
              extraClasses={"btn-outline"}
            />
          </form>
        </div>

        <form method="dialog" className="modal-backdrop">
          <button id="closeButton">close</button>
        </form>
      </dialog>
    </>
  );
};

export default ProductImagesSwiper;
