import React from "react";

const CarouselSection = () => {
  return (
    <div>
      <div className="grid grid-cols-3 gap-4 items-center p-10">
        <div className="mb-4">
          <img
            src="https://www.wockhardthospitals.com/wp-content/uploads/2019/11/2971635.jpg"
            className="min-w-full h-auto rounded-lg"
            alt=""
          />
        </div>

        <div className="mb-4">
          <img
            src="https://www.fortishealthcare.com/blog/wp-content/uploads/2014/07/blog_24.png"
            className="min-w-full h-auto rounded-full"
            alt=""
          />
        </div>
        <div className="mb-4">
          <img
            src="https://www.1mg.com/articles/wp-content/uploads/2019/06/blood-donation.jpg"
            className="min-w-full h-auto rounded-full"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default CarouselSection;
