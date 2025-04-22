import React from 'react';
import { Link } from 'gatsby';
import LinkedInIcon from '../images/svg/icons-linkedin.svg'; // adjust path as needed

const socialLinks = [
  {
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/in/luke-hinrichs-07840529/', 
    icon: LinkedInIcon,
  },
  // Add more platforms as needed
];

const SocialMediaIcons = () => {
  return (
    <ul className="flex justify-center items-center space-x-4">
  {socialLinks.map(({ name, url, icon: Icon }) => (
    <li key={name}>
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className="text-cyan-500 hover:text-cyan-700"
        aria-label={name}
      >
        <Icon className="w-6 h-6 fill-current" />
      </a>
    </li>
  ))}
</ul>
  );
};

export default SocialMediaIcons;
