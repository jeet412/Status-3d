const categories = [
    { title: 'Shirts', image: '/assets/categories/shirt.webp' },
    { title: 'Trousers', image: '/assets/categories/shirt.webp' },
    { title: 'Suits', image: '/assets/categories/shirt.webp' },
    { title: 'Ethnic', image: '/assets/categories/shirt.webp' },
    { title: 'Casuals', image: '/assets/categories/shirt.webp' },
    { title: 'Fabrics', image: '/assets/categories/shirt.webp' },
  ];
  
  const CategoryGrid = () => {
    return (
      <section className="w-full py-16 px-6 md:px-12 lg:px-20">
        <h2 className="text-2xl mb-10 text-center">Shop by Category</h2>
  
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4">
          {categories.map((cat, idx) => (
            <a
              key={idx}
              href={`/category/${cat.title.toLowerCase()}`}
              className="block text-center group"
            >
              <div className="relative w-full h-[200px] overflow-hidden bg-gray-100 flex items-center justify-center">
                <img
                  src={cat.image}
                  alt={cat.title}
                  className="max-h-full max-w-full object-contain transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <p className="mt-3 text-sm md:text-base font-medium text-gray-800 group-hover:underline">
                {cat.title}
              </p>
            </a>
          ))}
        </div>
      </section>
    );
  };
  
  export default CategoryGrid;
  