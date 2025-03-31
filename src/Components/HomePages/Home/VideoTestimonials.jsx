import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import styles from "./VideoTestimonials.module.css";
import person1 from "../../assets copy/Images/person1.png";
import person2 from "../../assets copy/Images/person2.png";
import person3 from "../../assets copy/Images/person3.png";
import person4 from "../../assets copy/Images/person4.png";
import play from "../../assets copy/Images/play.png";
import audio from "../../assets copy/Images/audio.png";

const data = [
  { image: person1, name: "This Kumar", designation: "CEO, Street Smart 222" },
  { image: person2, name: "That Kumari", designation: "CEO, Be Bee 444" },
  { image: person3, name: "Those Kumar", designation: "Co Founder, Smart 555" },
  {
    image: person4,
    name: "These Kumari",
    designation: "Co Founder, To For 666",
  },
];

const VideoTestimonials = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>
        Real Stories, Real Impact: Our Users Share Their Experience
      </h1>

      <Swiper
        modules={[Autoplay]}
        spaceBetween={20}
        slidesPerView={4}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        loop={true}
        breakpoints={{
          320: { slidesPerView: 1 },
          640: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
      >
        {data.map((item, index) => (
          <SwiperSlide key={index} className={styles.slide}>
            {/* wrap it with (a tag) for moving out to another site if video is available  */}
            <div className={styles.card}>
              <img src={item.image} alt={item.name} className={styles.image} />
              <div className={styles.overlayPlayIcon}>
                <img src={play} alt="Play" className={styles.playIcon} />
              </div>
              <div className={styles.overlayAudioIcon}>
                <img src={audio} alt="audio" className={styles.audioIcon} />
              </div>
              <h3 className={styles.name}>{item.name}</h3>
              <p className={styles.designation}>{item.designation}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default VideoTestimonials;
