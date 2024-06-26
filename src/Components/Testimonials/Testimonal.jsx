import Slider from "react-slick";
import TestimonialData from "./TestimonialData";

const Testimonal = () => {
      const settings = {
            dots: true,
            arrows:false,
            infinity: true,
            speed:500,
            slidesToScroll:1,
            autoplay: true,
            autoplaySpeed: 2000,
            cssEase: "linear",
            pauseOnHover: true,
            pauseOnFocus: true,
            responsive: [
                  {
                        breakpoint: 10000,
                        settings:{
                              slidesToShow: 3,
                              slidesToScroll: 1,
                              infinite: true,
                        },
                  },
                  {
                        breakpoint: 1024,
                        settings:{
                              slidesToShow: 2,
                              slidesToScroll: 1,
                              initialSlide: 1,
                        },
                  },
                  {
                        breakpoint: 640,
                        settings:{
                              slidesToShow: 1,
                              slidesToScroll: 1,
                        },
                  },
            ]
         };
  return (
    <div className="py-10">
      <div className="container ">
        {/* header section */}
        <div className="text-center mb-10 max-w-[600px] mx-auto">
          <p data-aos="fade-up" className="text-sm text-primary">
            What are customers are saying
          </p>
          <h1 data-aos="fade-up" className="text-3xl font-bold">
            Testimonials
          </h1>
          <p data-aos="fade-up" className="text-xs text-gray-400">
            Here are the experience of customers shopping at our Black Market.
            They said the products exceeded their expectations, and will
            definitely be back for future purchases.
          </p>
        </div>

        {/* details section */}
        <div data-aos="zoom-in">
        <Slider {...settings}>
        {TestimonialData.map((data) => (
          <div key={data.id} className="flex items-center justify-center gap-4 shadow-lg py-8 px-6 my-6 mx-8 rounded-xl dark:bg-gray-800 bg-primary/10 w-[150px] h-[250px]">
            <img className="w-[100px] h-[100px] rounded-full" src={data.image} alt="image" />
            <div>
              <p className="text-sm text-gray-400">{data.text}</p>
              <h2 className="font-bold text-center">{data.name}</h2>
            </div>
          </div>
        ))}
        </Slider>
        </div>
      </div>
    </div>
  );
};

export default Testimonal;
