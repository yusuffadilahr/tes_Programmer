import React from 'react';
import pangkas from '../assets/pangkas.jpg';


const BodyContent = () => {
    return (
        <div className="content">
            <div className="container">
                <h5>Tren Pangkas Rambut</h5>
                <p className='has-text-justified'>
                    Pangkas rambut atau salon potong rambut telah hadir di Indonesia selama bertahun-tahun dan masih ada hingga saat ini. Jasa pangkas rambut merupakan industri yang cukup populer di Indonesia, dan dapat ditemukan di berbagai tempat, baik di perkotaan maupun di daerah pedesaan.

                    Salon potong rambut biasanya menyediakan berbagai layanan, termasuk pemotongan rambut pria dan wanita, perawatan rambut, pewarnaan rambut, styling, dan layanan lainnya terkait perawatan dan penataan rambut. Beberapa salon potong rambut mungkin juga menawarkan jasa tambahan seperti perawatan wajah, manicure, dan pedicure.

                    Di Indonesia, banyak salon potong rambut dapat ditemukan di pusat perbelanjaan, pusat kota, dan area komersial lainnya. Selain itu, ada juga salon potong rambut yang beroperasi secara independen di lingkungan perumahan atau di pinggir jalan.

                    Hadirnya pangkas rambut di Indonesia merupakan bukti adopsi tren kecantikan dan perawatan diri yang terus berkembang di masyarakat. Meskipun demikian, perlu diingat bahwa informasi yang saya sampaikan berdasarkan pengetahuan saya hingga September 2021, dan kondisi industri dapat berubah seiring waktu.
                </p>
                <figure>
                    <img src={pangkas} />
                    <figcaption>
                        Gambar 1: Katalog Pangkas Rambut
                    </figcaption>
                </figure>
                <h6>Transformasi Digital dalam Industri Pangkas Rambut</h6>
                <p className='has-text-justified'>
                    Transformasi digital telah membawa perubahan signifikan dalam industri pangkas rambut. Salon potong rambut modern kini menyediakan aplikasi mobile yang memudahkan pelanggan untuk memesan janji temu dengan mudah. Selain itu, teknologi pemindaian wajah juga digunakan untuk memberikan simulasi visual tentang gaya rambut yang paling sesuai dengan fitur wajah pelanggan. Inovasi teknologi ini memberikan pengalaman yang lebih efisien dan personal dalam layanan pangkas rambut.
                </p>
            </div>
        </div>
    );
}

export default BodyContent;