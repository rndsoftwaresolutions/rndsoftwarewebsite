import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';

export function Footer() {
  const services = [
    'Web Development',
    'Mobile App Development',
    'CRM Integration',
    'SEO Optimization',
    'Meta & Google Ads',
    'Custom Software',
  ];

  const quickLinks = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About Us' },
    { path: '/services', label: 'Services' },
    { path: '/portfolio', label: 'Portfolio' },
    { path: '/contact', label: 'Contact' },
  ];

  return (
    <footer className="bg-slate-950 border-t border-blue-900/30 mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="bg-gradient-to-br from-blue-500 to-blue-700 p-2 rounded-lg">
                <span className="text-xl font-bold">R&D</span>
              </div>
              <span className="text-lg font-bold bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
                Software Solutions
              </span>
            </div>
            <p className="text-gray-400 text-sm">
              Building Smart Digital Solutions for Growing Businesses. We transform ideas into powerful digital experiences.
            </p>
            <div className="flex gap-3">
              <a href="https://www.facebook.com/profile.php?id=61585869575151" className="p-2 rounded-lg bg-blue-900/20 hover:bg-blue-900/40 transition-colors">
                <Facebook size={18} />
              </a>
              <a href="https://x.com/rndsoftwaresol" className="p-2 rounded-lg bg-blue-900/20 hover:bg-blue-900/40 transition-colors">
                <Twitter size={18} />
              </a>
              <a href="https://www.linkedin.com/in/rndsoftwaresolutions/" className="p-2 rounded-lg bg-blue-900/20 hover:bg-blue-900/40 transition-colors">
                <Linkedin size={18} />
              </a>
              <a href="https://www.instagram.com/rndsoftwaresolutions/" className="p-2 rounded-lg bg-blue-900/20 hover:bg-blue-900/40 transition-colors">
                <Instagram size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-blue-400">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-gray-400 hover:text-blue-400 transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-blue-400">Services</h3>
            <ul className="space-y-2">
              {services.map((service) => (
                <li key={service}>
                  <Link
                    to="/services"
                    className="text-gray-400 hover:text-blue-400 transition-colors text-sm"
                  >
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-blue-400">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2 text-sm">
                <Mail size={16} className="text-blue-400 mt-1 flex-shrink-0" />
                <a href="mailto:rndsoftwaresolution@gmail.com" className="text-gray-400 hover:text-blue-400 transition-colors">
                  rndsoftwaresolution@gmail.com
                </a>
              </li>
              <li className="flex items-start gap-2 text-sm">
                <Phone size={16} className="text-blue-400 mt-1 flex-shrink-0" />
                <a href="tel:+917889440384" className="text-gray-400 hover:text-blue-400 transition-colors">
                  +91 9680074485
                </a>
              </li>
              <li className="flex items-start gap-2 text-sm">
                <MapPin size={16} className="text-blue-400 mt-1 flex-shrink-0" />
                <span className="text-gray-400">
                  Address: Jaipur, Rajasthan 302018
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-blue-900/30">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-500 text-sm">
              © {new Date().getFullYear()} R&D Software Solutions. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm">
              <a href="#" className="text-gray-500 hover:text-blue-400 transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-500 hover:text-blue-400 transition-colors">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
