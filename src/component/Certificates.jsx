import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation,Pagination } from "swiper";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import CertiCard from './CertiCard'
// api data 
import data from '../apidata/CerificatApi'


const Certificates = () => {
    return (
        <>
            <div className="container main">
                <h2 className="heading">Certificates</h2>
                <Swiper
                    slidesPerView={3}
                    spaceBetween={30}
                    freeMode={true}
                    breakpoints={{
                        0: {
                          spaceBetween:10,
                          slidesPerView: 1,
                        },
                        480: {
                          spaceBetween:10,
                          slidesPerView: 1,
                        },
                        768: {
                          spaceBetween:15,
                          slidesPerView: 2,
                        },
                        1024: {
                          spaceBetween:15,
                          slidesPerView: 3,
                        },
                        1280: {
                          spaceBetween:20,
                          slidesPerView: 3,
                        },
                        
                      }}
                    autoplay={{
                      delay: 2500,
                      disableOnInteraction: false,
                    }}
                    pagination={{
                      clickable: true,
                    }}
                    navigation={true}
                    modules={[Autoplay, Pagination, Navigation]}
                    className=" swiper-container"
          >
                {
                    data.map(item => <SwiperSlide  className="Card" key={item.id}>
                        <CertiCard data={item} />
                    </SwiperSlide>)
                }
            </Swiper>
        </div>

        </>
    )
   
}

export default Certificates
