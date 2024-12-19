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
  { icon: <FaGithub />, path: "" },
  { icon: <FaLinkedinIn />, path: "" },
  { icon: <FaYoutube />, path: "" },
  { icon: <FaTwitter />, path: "" },
  { icon: <FaFacebook />, path: "" },
  { icon: <FaInstagram />, path: "" },
  { icon: <FaGithub />, path: "" },
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
