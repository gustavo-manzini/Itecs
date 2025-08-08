import React, {useState} from "react";

const brands = [
    { name: "Apple", img: "/brands/Apple.webp"},
    { name: "Google Pixel", img: "/brands/Google-pixel.webp"},
    { name: "Samsung", img: "/brands/Samsung.webp"},
    { name: "Xiaomi", img: "/brands/Xiaomi.webp"},
    { name: "Oppo", img: "/brands/Oppo.webp"},
    { name: "Realme", img: "/brands/Realme.png"},
    { name: "OnePlus", img: "/brands/OnePlus.webp"},
    { name: "Vivo", img:"/brands/Vivo.webp"},
];

const VISIBLE = 5;

const BrandSlider = () => {
    const [start, setStart] = useState(0);

    const handlePrev = () => {
        setStart((prev) => Math.max(prev -1, 0));
    };

    const handleNext = () => {
        setStart((prev) => Math.min(prev + 1, brands.length - VISIBLE));
    };
    return(
        <div className="brand-slider-container">
            <h2>Selecciona la Marca</h2>
            <div className="brand-slider-controls slider-btn">
                <button onClick={handlePrev} disabled={start === 0}>&lt;</button>
                <div className="brand-slider">
                    {brands.slice(start, start + VISIBLE).map((brand, index) => (
                        <div key={index} className="brand-card">
                            <img src={brand.img} alt={brand.name} />
                        </div>
                    ))}
                </div>
                <button onClick={handleNext} disabled={start >= brands.length - VISIBLE}>&gt;</button>
            </div>
        </div>
    )
}

export default BrandSlider;