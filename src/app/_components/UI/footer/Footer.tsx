import React from 'react';
import { FaTiktok , FaInstagram, FaLinkedin, FaFacebook } from 'react-icons/fa';

const Footer = () => {
  const socialLinks = [
    { header: 'facebook', content: 'https://www.facebook.com/share/1D97vBEgLj/?mibextid=wwXIfr' },
    { header: 'tiktok', content: 'https://www.tiktok.com/@seitc.mty' },
    { header: 'linkedin', content: 'https://www.linkedin.com/company/seitc/posts/?feedView=all' },
    { header: 'instagram', content: 'https://www.instagram.com/seitc.mty/' },
  ];

  return (
    <footer className="w-full bg-gradient-to-r from-[hsl(217,73%,16%)] via-[hsl(210,69%,27%)] to-[hsl(206,69%,44%)] text-white py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold">SEITC</h3>
            <p className="text-sm">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. 
              Doloremque non numquam iste molestiae asperiores magnam dolor dignissimos facere quia repellat.
            </p>
          </div>
          
          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="/about" className="hover:opacity-75">About Us</a></li>
              <li><a href="/services" className="hover:opacity-75">Services</a></li>
              <li><a href="/contact" className="hover:opacity-75">Contact</a></li>
            </ul>
          </div>
          
          {/* Social Media */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold">Follow Us</h3>
            <ul className="flex space-x-4">
              {socialLinks.map((link) => (
                <li key={link.header}>
                  <a href={link.content} target="_blank" rel="noopener noreferrer">
                    {link.header === 'facebook' && <FaFacebook size={24} />}
                    {link.header === 'tiktok' && <FaTiktok size={24} />}
                    {link.header === 'linkedin' && <FaLinkedin size={24} />}
                    {link.header === 'instagram' && <FaInstagram size={24} />}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        
      </div>
    </footer>
  );
};

export default Footer;