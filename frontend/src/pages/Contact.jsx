import { useState } from 'react';
import axios from 'axios';

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });

  const [errors, setErrors] = useState({});
  const [popupVisible, setPopupVisible] = useState(false);
  const [loading, setLoading] = useState(false);

  const validate = () => {
    const newErrors = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegex = /^\d{10}$/;

    if (!formData.firstName.trim()) newErrors.firstName = 'First name is required';
    if (!formData.lastName.trim()) newErrors.lastName = 'Last name is required';
    if (!formData.email.trim()) newErrors.email = 'Email is required';
    else if (!emailRegex.test(formData.email)) newErrors.email = 'Invalid email format';
    if (!formData.phone.trim()) newErrors.phone = 'Phone number is required';
    else if (!phoneRegex.test(formData.phone)) newErrors.phone = 'Phone must be 10 digits';
    if (!formData.message.trim()) newErrors.message = 'Message is required';

    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validate();
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length > 0) return;

    setLoading(true);
    try {
      await axios.post('http://localhost:5000/api/contact', formData);
      setPopupVisible(true);
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        subject: '',
        message: '',
      });
    } catch (error) {
      alert('❌ Failed to send message. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === 'phone' && value && !/^\d*$/.test(value)) return;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div className="relative py-10 px-4">
      <h1 className="text-3xl font-bold text-center mb-2">Contact Us</h1>
      <p className="text-center text-gray-500 mb-10">
        Any question or remarks? Just write us a message!
      </p>

      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-6">
        {/* Contact Info Left */}
        <div className="bg-black text-white p-8 rounded-md shadow-md">
          <h2 className="text-xl font-semibold mb-2">Contact Information</h2>
          <p className="text-sm mb-6">Say something to start a live chat!</p>
          <p className="mb-3"><i className="fas fa-phone mr-2"></i> +1012 3456 789</p>
          <p className="mb-3"><i className="fas fa-envelope mr-2"></i> demo@gmail.com</p>
          <p className="mb-3"><i className="fas fa-map-marker-alt mr-2"></i> 132 Dartmouth Street Boston, MA 02156</p>
          <div className="flex space-x-4 mt-6">
            <i className="fab fa-twitter cursor-pointer"></i>
            <i className="fab fa-instagram cursor-pointer"></i>
            <i className="fab fa-discord cursor-pointer"></i>
          </div>
        </div>

        {/* Form Right */}
        <form onSubmit={handleSubmit} className="bg-white shadow-md rounded-md p-8 space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium">First Name</label>
              <input name="firstName" value={formData.firstName} onChange={handleChange} className="w-full border p-2 rounded" />
              {errors.firstName && <p className="text-red-500 text-sm">{errors.firstName}</p>}
            </div>
            <div>
              <label className="block text-sm font-medium">Last Name</label>
              <input name="lastName" value={formData.lastName} onChange={handleChange} className="w-full border p-2 rounded" />
              {errors.lastName && <p className="text-red-500 text-sm">{errors.lastName}</p>}
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium">Email</label>
            <input name="email" value={formData.email} onChange={handleChange} className="w-full border p-2 rounded" placeholder="Enter your Mail-Id" />
            {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Phone Number</label>
            <div className="flex items-center border rounded">
              <span className="px-3 text-gray-500 bg-gray-100 border-r select-none">+91</span>
              <input name="phone" value={formData.phone} onChange={handleChange} maxLength="10" className="w-full p-2 outline-none" placeholder="Enter contact number" />
            </div>
            {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone}</p>}
          </div>

          <div>
            <label className="block text-sm font-medium">Subject</label>
            <input name="subject" value={formData.subject} onChange={handleChange} className="w-full border p-2 rounded" placeholder="Why the need to contact us?" />
          </div>

          <div>
            <label className="block text-sm font-medium">Message</label>
            <textarea name="message" value={formData.message} onChange={handleChange} className="w-full border p-2 rounded" placeholder="Enter your message here.." rows="4" />
            {errors.message && <p className="text-red-500 text-sm">{errors.message}</p>}
          </div>

          <button type="submit" className="bg-black text-white px-6 py-2 rounded hover:bg-gray-800 transition">
            Send Message
          </button>
        </form>
      </div>

      {/* ✅ Loader */}
      {loading && (
        <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
          <div className="animate-spin rounded-full h-12 w-12 border-t-4 border-white border-opacity-80"></div>
        </div>
      )}

      {/* ✅ Success Popup */}
      {popupVisible && !loading && (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded shadow-md text-center">
            <p className="text-green-600 font-semibold text-lg mb-4">✅ Message sent successfully!</p>
            <button
              className="bg-black text-white px-4 py-2 rounded hover:bg-gray-800"
              onClick={() => setPopupVisible(false)}
            >
              OK
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Contact;
