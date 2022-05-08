import React from "react";

const CarouselSection = () => {
  return (
    <div>
      <Carousel>
        <div>
          <img
            src="https://www.sriramakrishnahospital.com/wp-content/uploads/2021/06/Blood-Donation-1.jpg"
            alt=""
          />
          <p className="legend">Legend 1</p>
        </div>
        <div>
          <img
            src="https://stanfordbloodcenter.org/wp-content/uploads/2020/06/Blood-facts_10-illustration-graphics__canteen.png"
            alt=""
          />
          <p className="legend">Legend 2</p>
        </div>
        <div>
          <img
            src="https://www.blog.123coimbatore.com/uploads/blog-images/27-04-2019_04-34-37_blood-donation-india.jpg"
            alt=""
          />
          <p className="legend">Legend 3</p>
        </div>
      </Carousel>
    </div>
  );
};

export default CarouselSection;
