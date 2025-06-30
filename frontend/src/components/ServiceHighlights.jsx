import { FaShippingFast, FaLeaf, FaMapMarkerAlt } from 'react-icons/fa';

const highlights = [
  {
    icon: <FaShippingFast size={28} className="text-gray-800" />,
    title: 'Complimentary Shipping',
    description: 'Enjoy free delivery on all orders with no minimums.',
  },
  {
    icon: <FaLeaf size={28} className="text-gray-800" />,
    title: 'Consciously Crafted',
    description: 'Responsibly made products using ethical materials.',
  },
  {
    icon: <FaMapMarkerAlt size={28} className="text-gray-800" />,
    title: 'Come and Say Hi',
    description: 'Visit our nearest store and get a personal styling experience.',
    link: '/store-locator', // Change to actual route
  },
];

const ServiceHighlights = () => {
  return (
    <section className="w-full py-20 px-6 md:px-10 lg:px-20 bg-gray-50 text-gray-800 ">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center max-w-6xl mx-auto">
        {highlights.map((item, idx) => (
          <div key={idx} className="flex flex-col items-center gap-4">
            <div className="mb-2">{item.icon}</div>
            {item.link ? (
              <a
                href={item.link}
                className="text-sm underline hover:text-black transition"
              >
                {item.title}
              </a>
            ) : (
              <p className="text-sm font-medium">{item.title}</p>
            )}
            <p className="text-xs text-gray-600">{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ServiceHighlights;
