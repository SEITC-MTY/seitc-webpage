import React from 'react';
import { FaTiktok, FaInstagram, FaLinkedin, FaFacebook } from 'react-icons/fa';

interface SocialMediaIconProps {
  header: string;
  content: string;
}

const SocialMediaIcon: React.FC<SocialMediaIconProps> = ({ header, content }) => {
  const getIcon = () => {
    switch (header) {
      case 'facebook':
        return <FaFacebook size={24} />;
      case 'tiktok':
        return <FaTiktok size={24} />;
      case 'linkedin':
        return <FaLinkedin size={24} />;
      case 'instagram':
        return <FaInstagram size={24} />;
      default:
        return null;
    }
  };

  return (
    <li>
      <a 
        href={content} 
        target="_blank" 
        rel="noopener noreferrer"
        className="hover:opacity-75 transition-opacity"
      >
        {getIcon()}
      </a>
    </li>
  );
};

/* SocialMediaIcon.propTypes = {
    header: PropTypes.string,
    content: PropTypes.string,
};

SocialMediaIcon.propTypes.defaultProps = {
    header: '',
    content: '',
}; */ 

export default SocialMediaIcon;