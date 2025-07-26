const brands = [
    { name: "Apple", img: "/public/brands/Apple.webp"},
    { name: "Google Pixel", img: "/public/brands/Google-pixel.webp"},
    { name: "Samsung", img: "/public/brands/Samsung.webp"},
    { name: "Xiaomi", img: "/public/brands/Xiaomi.webp"},
    { name: "Oppo", img: "/public/brands/Oppo.webp"},
    { name: "Realme", img: "/public/brands/Realme.png"},
    { name: "OnePlus", img: "/public/brands/OnePlus.webp"},
    { name: "Vivo", img:"/public/brands/Vivo.webp"},
    { name: "Poco", img: "/public/brands/Poco.webp"},
];

const BrandSlider = () => {
    return(
        <div className="brand-slider-container">
            <h2>Selecciona la Marca</h2>
            <div className="brand-slider">
                {brands.map((brand, index) => (
                    <div key={index} className="brand-card">
                        <img src={brand.img} alt={brand.name} />
                    </div>
                ))}
            </div>
        </div>
    )
}

export default BrandSlider;