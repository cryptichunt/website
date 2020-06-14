import React from 'react'

import {
  IoLogoGithub,
  IoLogoInstagram,
  IoLogoTwitter,
  IoLogoFacebook,
  IoIosMail,
} from 'react-icons/io'

import { FaDiscord } from 'react-icons/fa'

export default [
  {
    title: 'Discord',
    icon: <FaDiscord />,
    href: 'https://discord.com/invite/C5Y2CQ5',
  },
  {
    title: 'Twitter',
    icon: <IoLogoTwitter />,
    href: 'https://twitter.com/playcryptocracy',
  },
  {
    title: 'GitHub',
    icon: <IoLogoGithub />,
    href: 'https://github.com/cryptichunt',
  },
  {
    title: 'Facebook',
    icon: <IoLogoFacebook />,
    href: 'https://www.facebook.com/cryptocracyhunt',
  },
  {
    title: 'Instagram',
    icon: <IoLogoInstagram />,
    href: 'https://www.instagram.com/playcryptocracy',
  },
  {
    title: 'Email',
    icon: <IoIosMail />,
    href: 'mailto:admin@cryptichunt.com',
  },
]