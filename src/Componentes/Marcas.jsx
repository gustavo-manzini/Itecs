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