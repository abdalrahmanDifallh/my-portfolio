"use client";

import { motion } from "framer-motion";
import { FaFacebook, FaLinkedin, FaGithub, FaTwitter, FaInstagram, FaEnvelope } from "react-icons/fa";

const socialLinks = [
  { name: "Facebook", icon: FaFacebook, url: "https://www.facebook.com/share/1bjk6qaRX1/" },
  { name: "LinkedIn", icon: FaLinkedin, url: "https://www.linkedin.com/in/abd-ulrahman-daifallah-77053a214" },
  { name: "GitHub", icon: FaGithub, url: "https://github.com/abdalrahmanDifallh" },
  { name: "Twitter", icon: FaTwitter, url: "#" },
  { name: "Instagram", icon: FaInstagram, url: "#" },
  { name: "Email", icon: FaEnvelope, url: "#" },
];

export default function SocialBar() {
  return (
    <div className="flex justify-center gap-8 z-10 py-10">
      {socialLinks.map((link, index) => (
        <motion.a
          key={index}
          href={link.url}
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.2, y: -5 }}
          whileTap={{ scale: 0.9 }}
          className="text-4xl text-gray-400 hover:text-cyan-400 transition-colors duration-300"
        >
          <link.icon />
        </motion.a>
      ))}
    </div>
  );
}