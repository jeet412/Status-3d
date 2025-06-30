  
const Footer = () => {
  return (
    <footer className="w-full bg-white text-black text-sm">
<hr  className="border-t border-gray-300 mt-5 pt-4 text-center text-xs text-gray-500"/> 
      <div className="max-w-7xl mx-auto px-6 pt-12 pb-6 grid grid-cols-2 md:grid-cols-4 gap-8">
        {/* Column 1: Logo / Brand */}
        <div>
          <h3 className="text-xl font-semibold mb-3">CozyCloth</h3>
          <p className="text-gray-600">
            Elevating comfort and style with thoughtfully designed pieces for your cozy era.
          </p>
        </div>

        {/* Column 2: Shop Links */}
        <div>
          <h4 className="font-semibold mb-3">Shop</h4>
          <ul className="space-y-2 text-gray-700">
            <li><a href="/formals" className="hover:underline">Formals</a></li>
            <li><a href="/fabrics" className="hover:underline">Fabrics</a></li>
            <li><a href="/blog" className="hover:underline">Blog</a></li>
            <li><a href="/contact" className="hover:underline">Contact</a></li>
          </ul>
        </div>

        {/* Column 3: Customer */}
        <div>
          <h4 className="font-semibold mb-3">Customer</h4>
          <ul className="space-y-2 text-gray-700">
            <li><a href="/account" className="hover:underline">Account</a></li>
            <li><a href="/cart" className="hover:underline">Cart</a></li>
            <li><a href="/faq" className="hover:underline">FAQ</a></li>
            <li><a href="/support" className="hover:underline">Support</a></li>
          </ul>
        </div>

        {/* Column 4: Follow / Socials */}
        <div>
          <h4 className="font-semibold mb-3">Follow Us</h4>
          <div className="flex gap-4 text-gray-700 text-lg">
            <a href="#"><i className="fab fa-instagram hover:text-black" /></a>
            <a href="#"><i className="fab fa-facebook hover:text-black" /></a>
            <a href="#"><i className="fab fa-twitter hover:text-black" /></a>
          </div>
          <p className="text-xs text-gray-500 mt-4">Stay updated on new arrivals & exclusive drops</p>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-gray-300 mt-10 pt-4 text-center text-xs text-gray-500 flex items-center justify-center">
  © 2025 CozyCloth. All rights reserved.
</div>
    </footer>
    
  );
};

export default Footer;
