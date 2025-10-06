import React from 'react';
import SocialMediaIcon from './SocialMediaIcon';

const Footer = () => {
  const socialLinks = [
    { header: 'facebook', content: 'https://facebook.com' },
    { header: 'twitter', content: 'https://twitter.com' },
    { header: 'linkedin', content: 'https://linkedin.com' },
    { header: 'instagram', content: 'https://instagram.com' },
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
                <SocialMediaIcon
                  key={link.header}
                  header={link.header}
                  content={link.content}
                />
              ))}
            </ul>
          </div>
        </div>
        
      </div>
    </footer>
  );
};

export default Footer;