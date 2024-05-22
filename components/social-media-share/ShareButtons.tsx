import React from 'react';
import { TwitterShareButton, LinkedinShareButton, FacebookShareButton } from 'react-share';
import { FaTwitter, FaLinkedin, FaFacebook } from 'react-icons/fa';

const ShareButtons = ({ url, title }) => {
  return (
    <div>
      <TwitterShareButton url={url} title={title}>
        <FaTwitter /> Share on Twitter
      </TwitterShareButton>
      <LinkedinShareButton url={url} title={title}>
        <FaLinkedin /> Share on LinkedIn
      </LinkedinShareButton>
      <FacebookShareButton url={url} quote={title}>
        <FaFacebook /> Share on Facebook
      </FacebookShareButton>
    </div>
  );
};

export default ShareButtons;
