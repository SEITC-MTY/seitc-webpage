import React from 'react';
import PropTypes from 'prop-types';

interface SocialMediaIconProps {
  header: string;
  content: string;
}

const SocialMediaIcon: React.FC<SocialMediaIconProps> = ({ header, content }) => {
  return (
    <li className="hover:opacity-75 transition-opacity">
      <a 
        className="footer__social-media-icon text-white text-xl p-2" 
        href={content} 
        target="_blank" 
        rel="noreferrer"
      >
        <i className={`fa fa-${header}`}></i>
      </a>
    </li>
  );
};

SocialMediaIcon.propTypes = {
    header: PropTypes.string,
    content: PropTypes.string,
};

SocialMediaIcon.propTypes.defaultProps = {
    header: '',
    content: '',
};

export default SocialMediaIcon;