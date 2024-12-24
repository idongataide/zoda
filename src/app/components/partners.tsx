'use client';

import dynamic from 'next/dynamic';
import Image from 'next/image';
import Images from '@/components/Images';




const ClientsCarousel = () => {
  return (
    <div className="clients-grid py-3 row">
        <div className="col-4 col-lg-2 d-flex justify-content-center mb-3">
            <div className="item">
            <Image src={Images.client1} alt="Client 1" width={60} height={60} />
            </div>
        </div>
        <div className="col-4 col-lg-2 d-flex justify-content-center mb-3">
            <div className="item">
            <Image src={Images.client2} alt="Client 2" width={60} height={60} />
            </div>
        </div>
        <div className="col-4 col-lg-2 d-flex justify-content-center mb-3">
            <div className="item">
            <Image src={Images.client3} alt="Client 3" width={60} height={60} />
            </div>
        </div>
        <div className="col-4 col-lg-2 d-flex justify-content-center mb-3">
            <div className="item">
            <Image src={Images.client4} alt="Client 4" width={60} height={60} />
            </div>
        </div>
        <div className="col-4 col-lg-2 d-flex justify-content-center mb-3">
            <div className="item">
            <Image src={Images.client5} alt="Client 5" width={60} height={60} />
            </div>
        </div>
        <div className="col-4 col-lg-2 d-flex justify-content-center mb-3">
            <div className="item">
            <Image src={Images.client6} alt="Client 6" width={60} height={60} />
            </div>
        </div>
        </div>

  );
};

export default ClientsCarousel;
