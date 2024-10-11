import React from "react";
import {
  Button,
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
} from "@headlessui/react";
import { FaWhatsapp } from "react-icons/fa";
import { FaTelegram } from "react-icons/fa";
import { FaViber } from "react-icons/fa";
import { FaTelegramPlane } from "react-icons/fa";

const ChatButton = () => {
  return (
    <Menu as="div" className="relative inline-block text-left">
      <div>
        <MenuButton className="fixed bottom-6 right-5 justify-center gap-x-1.5 rounded-full bg-white p-3 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-primary-60 z-10">
          <FaWhatsapp size={42} className="social-icon " />
        </MenuButton>
      </div>

      <MenuItems
        transition
        className="fixed right-6 bottom-[100px] p-3 z-10 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-200 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
      >
        <div className="py-1 flex flex-col gap-2">
          <div>
            <p className="block py-1 px-1  text-lg text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900">
              Звʼязок з нами:
            </p>
          </div>
          <button type="button" className="btn btn-telegram w-full ">
            <a
              href="https://t.me/asywe"
              className="flex items-center justify-center gap-2"
            >
              Telegram{" "}
              <FaTelegramPlane size={32} className="social-icon color-white" />
            </a>
          </button>
          <button
            type="button"
            className="btn btn-whatsapp w-full flex items-center justify-center gap-2"
          >
            <a
              href="https://t.me/asywe"
              className="flex items-center justify-center gap-2"
            >
              Whatsapp <FaWhatsapp size={32} className="social-icon " />
            </a>
          </button>
          <button
            type="button"
            className="btn btn-viber w-full flex items-center justify-center gap-2"
          >
            <a
              href="https://t.me/asywe"
              className="flex items-center justify-center gap-2"
            >
              Viber <FaViber size={32} className="social-icon" />
            </a>
          </button>
          {/* <MenuItem>
            <a
              href="#"
              className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900"
            >
              Account settings
            </a>
          </MenuItem>
          <MenuItem>
            <a
              href="#"
              className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900"
            >
              Support
            </a>
          </MenuItem>
          <MenuItem>
            <a
              href="#"
              className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900"
            >
              License
            </a>
          </MenuItem> */}
        </div>
      </MenuItems>
    </Menu>
  );
};

export default ChatButton;
