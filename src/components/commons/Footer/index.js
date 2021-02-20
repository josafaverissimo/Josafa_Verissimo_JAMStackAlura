import React from 'react';
import { FooterWrapper, FooterItemsWrapper } from './styles/';

function FooterItems({ links }) {
  return (
    <FooterItemsWrapper>
      {links.map(link => (
        <a key={link.url} href={link.url} target="_blank">
          <img src={link.icon} />
        </a>
      ))}
    </FooterItemsWrapper>
  )
}

export default function Footer() {
  const myLinks = [
    {
      icon: "/images/github.svg",
      url: "https://github.com/josafaverissimo"
    },
    {
      icon: "/images/twitter.svg",
      url: "https://twitter.com"
    },
    {
      icon: "/images/linkedin.svg",
      url: "https://www.linkedin.com/in/josafaverissimo/"
    }
  ];

  return (
    <FooterWrapper>
      <FooterItems links={myLinks}/>
    </FooterWrapper>
  )
}