import React from "react";
import { FaFacebook, FaTelegramPlane, FaGithub, } from "react-icons/fa";

const icons = [
  { icon: <FaFacebook />, url: "https://www.facebook.com/profile.php" },
  { icon: <FaTelegramPlane />, url: "https://t.me/ilesov1" },
  { icon: <FaGithub />, url: "https://github.com/Nazar-Xan" },
];

function Footer() {
  return (
    <div className="bg-slate-900 h-16 z-20 flex items-center">
      <div className="app flex items-center w-full justify-between text-slate-300">
        <div className="text-sm font-semibold">{new Date().getFullYear()} Ilesov Nazarbek™</div>
        <div className="flex items-center">
          {icons.map((item) => (
            <a href={item.url} className="text-lg ml-6">{item.icon}</a>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Footer;