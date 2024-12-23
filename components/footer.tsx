import Link from "next/link";
import {
  FaInstagram,
  FaFacebookSquare,
  FaLinkedin,
  FaTwitter,
} from "react-icons/fa";
import { IoLogoSkype } from "react-icons/io";
import { FaPinterest } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-[#2B2347] text-[#FFFFFF] py-8 w-full">
      <div className="w-full max-w-full grid grid-cols-1 md:grid-cols-4 gap-8 px-6">
        {/* Menu */}
        <div>
          <h4 className="font-normal mb-3 text-base leading-[19.68px]">Menu</h4>
          <ul className="space-y-1 text-base">
            <li>New arrivals</li>
            <li>Best sellers</li>
            <li>Recently viewed</li>
            <li>Popular this week</li>
            <li>All products</li>
          </ul>
        </div>

        {/* Categories */}
        <div>
          <h4 className="font-normal text-base leading-[19.68px] mb-3">
            Categories
          </h4>
          <ul className="space-y-1 text-sm">
            <li>Crockery</li>
            <li>Furniture</li>
            <li>Homeware</li>
            <li>Plant pots</li>
            <li>Chairs</li>
          </ul>
        </div>

        {/* Company */}
        <div>
          <h4 className="font-normal text-base leading-[19.68px] mb-3">
            Our company
          </h4>
          <ul className="space-y-1 text-sm">
            <li>About us</li>
            <li>Vacancies</li>
            <li>Contact us</li>
            <li>Privacy</li>
            <li>Returns policy</li>
          </ul>
        </div>

        {/* Mailing List */}
        <div>
          <h4 className="font-normal text-base leading-[19.68px] mb-3">
            Join our mailing list
          </h4>
          <div className="flex items-center border border-gray-300 w-full max-w-md">
            <div>
              <img src="/images/input2.png" alt="" width={800} height={800} />
            </div>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="flex justify-between items-center border-t border-[#3A3357] mt-4 mb-2 px-6 py-2 pt-4 w-full">
        <div className="text-left text-base">
          Copyright 2022 Avion LTD
        </div>
        <div className="flex gap-4">
          <Link href={"https://www.instagram.com"}>
            <FaInstagram size={20} />
          </Link>
          <Link href={"https://www.facebook.com"}>
            <FaFacebookSquare size={20} />
          </Link>
          <Link href={"https://www.linkedin.com"}>
            <FaLinkedin size={20} />
          </Link>
          <Link href={"https://www.twitter.com"}>
            <FaTwitter size={20} />
          </Link>
          <Link href="skype:username?chat">
            <IoLogoSkype size={20} />
          </Link>
          <Link href="https://www.pinterest.com">
            <FaPinterest size={20} />
          </Link>
        </div>
      </div>
    </footer>
  );
}
