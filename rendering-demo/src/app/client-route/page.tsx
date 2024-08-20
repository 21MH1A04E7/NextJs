"use client";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useTheme } from "@/components/themeProvider";

// Client-side component for rendering the client route
import ClientFunction from "@/utils/client-utils";

export default function ClientRoute() {
  console.log("client side rendering");
  const theme=useTheme();
  const result=ClientFunction()

  const settings = {
    dots: true,
  };
  return (
    <>
      <h1 style={{color:theme.colors.primary}}>Client Route Rendering {result}</h1>
      <div className="image-slider-container">
        <Slider {...settings}>
          <div>
            <img src="https://picsum.photos/400/200" />
          </div>
          <div>
            <img src="https://picsum.photos/400/200" />
          </div>
          <div>
            <img src="https://picsum.photos/400/200" />
          </div>
          <div>
            <img src="https://picsum.photos/400/200" />
          </div>
        </Slider>
      </div>
    </>
  );
}
