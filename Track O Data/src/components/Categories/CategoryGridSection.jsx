

export default function CategoryGridSection({title, more, products, image}) {
  return (
    <div className="bg-gray-300 dark:bg-background dark:text-white shadow-[6px_6px_12px_#c5c5c5,-6px_-6px_12px_#ffffff] dark:shadow-[6px_6px_12px_#1a232b,-10px_-10px_20px_#313c4a] rounded-2xl p-6">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-bold uppercase">{title}</h3>
        <a href="#" className="text-gray-500 text-sm">
          {more}
        </a>
      </div>

      <div className="mb-6">
        <img
          src={image}
          alt="Best Speaker 2023"
          className="w-full h-32 object-cover rounded-lg"
        />
      </div>

      <div className="grid grid-cols-2 gap-4">
        {products.map((product, index) => (
          <button
            key={index}
            onClick={() => console.log(`Clicked on ${product.name}`)}
            className="text-center p-5 rounded-2xl hover:bg-gray-300 hover:shadow-[6px_6px_12px_#c5c5c5,-6px_-6px_12px_#ffffff] dark:hover:shadow-[6px_6px_12px_#1a232b,-10px_-10px_20px_#313c4a] transition-all duration-200 cursor-pointer group">
            <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center text-2xl mb-2 mx-auto group-hover:bg-green-100 group-hover:scale-130 transition-all duration-200">
              {product.icon}
            </div>
            <h4 className="font-bold text-sm group-hover:text-green-600 transition-colors">
              {product.name}
            </h4>
            <p className="text-gray-500 text-xs group-hover:text-gray-700 transition-colors">
              {product.items}
            </p>
          </button>
        ))}
      </div>
    </div>
  );
}
