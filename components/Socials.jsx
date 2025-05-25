import Link from "next/link";
import {
  FaLinkedinIn,
  FaYoutube,
  FaTwitter,
  FaFacebook,
  FaInstagram,
  FaGithub,
} from "react-icons/fa";

const socials = [
  { icon: <FaGithub />, path: "https://github.com/Oyasikelly" },
  { icon: <FaLinkedinIn />, path: "https://www.linkedin.com/in/oyasi-kelly" },
  // { icon: <FaYoutube />, path: "" },
  { icon: <FaTwitter />, path: "https://x.com/kelscode101?s=09" },
  { icon: <FaFacebook />, path: "https://web.facebook.com/oyasi.kelly" },
  { icon: <FaInstagram />, path: "https://www.instagram.com/kellyzoyasi2000" },
];

export default function Socials({ containerStyles, iconStyles }) {
  return (
    <div className={containerStyles}>
      {socials.map((social, index) => (
        <Link href={social.path} key={index} className={iconStyles}>
          {social.icon}
        </Link>
      ))}
    </div>
  );
}
