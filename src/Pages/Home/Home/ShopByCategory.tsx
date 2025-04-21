const ShopByCategory = () => {
    // Categories data
    const categories = [
        {
            id: 1,
            name: "Electronics",
            icon: "fa-solid fa-microchip",
            image: "https://readdy.ai/api/search-image?query=modern%20electronics%20gadgets%20collection%20including%20smartphones%2C%20laptops%2C%20headphones%20arranged%20aesthetically%20on%20minimalist%20light%20gray%20background%2C%20product%20photography%2C%20ultra%20high%20resolution%2C%20detailed%20texture&width=300&height=200&seq=13&orientation=landscape"
        },
        {
            id: 2,
            name: "Fashion",
            icon: "fa-solid fa-tshirt",
            image: "https://readdy.ai/api/search-image?query=premium%20fashion%20items%20including%20clothes%2C%20shoes%2C%20accessories%20arranged%20aesthetically%20on%20minimalist%20light%20gray%20background%2C%20product%20photography%2C%20ultra%20high%20resolution%2C%20detailed%20texture&width=300&height=200&seq=14&orientation=landscape"
        },
        {
            id: 3,
            name: "Home & Kitchen",
            icon: "fa-solid fa-home",
            image: "https://readdy.ai/api/search-image?query=modern%20home%20and%20kitchen%20appliances%20and%20decor%20arranged%20aesthetically%20on%20minimalist%20light%20gray%20background%2C%20product%20photography%2C%20ultra%20high%20resolution%2C%20detailed%20texture&width=300&height=200&seq=15&orientation=landscape"
        },
        {
            id: 4,
            name: "Beauty",
            icon: "fa-solid fa-spa",
            image: "https://readdy.ai/api/search-image?query=premium%20beauty%20and%20skincare%20products%20arranged%20aesthetically%20on%20minimalist%20light%20gray%20background%2C%20product%20photography%2C%20ultra%20high%20resolution%2C%20detailed%20texture&width=300&height=200&seq=16&orientation=landscape"
        }
    ];

    return (
        <div>

            {/* Categories Section */}
            <div className="container mx-auto px-4 py-16">
                <h2 className="text-3xl font-bold mb-8 text-center">Shop by Category</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {categories.map((category) => (
                        <div key={category.id} className="group relative cursor-pointer overflow-hidden rounded-lg shadow-sm transition-all duration-300 hover:shadow-md">
                            <div className="h-48 overflow-hidden">
                                <img
                                    src={category.image}
                                    alt={category.name}
                                    className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                                />
                            </div>
                            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-6 text-white">
                                <h3 className="text-xl font-bold mb-1">{category.name}</h3>
                                <div className="flex items-center">
                                    <span className="text-sm">Shop Now</span>
                                    <i className="fas fa-arrow-right ml-2 transition-transform group-hover:translate-x-1"></i>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ShopByCategory;
