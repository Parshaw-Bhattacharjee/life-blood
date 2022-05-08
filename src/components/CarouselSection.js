import React from "react";

const CarouselSection = () => {
  return (
    <div>
      <div class="grid grid-cols-3 gap-4 items-center p-10">
        <div class="mb-4">
          <img
            src="https://www.wockhardthospitals.com/wp-content/uploads/2019/11/2971635.jpg"
            class="min-w-full h-auto rounded-lg"
            alt=""
          />
        </div>

        <div class="mb-4">
          <img
            src="https://www.fortishealthcare.com/blog/wp-content/uploads/2014/07/blog_24.png"
            class="min-w-full h-auto rounded-full"
            alt=""
          />
        </div>
        <div class="mb-4">
          <img
            src="https://www.1mg.com/articles/wp-content/uploads/2019/06/blood-donation.jpg"
            class="min-w-full h-auto rounded-full"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default CarouselSection;
