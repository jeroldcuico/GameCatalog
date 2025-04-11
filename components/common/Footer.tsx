import React from "react";

export default function Footer() {
  return (
    <>
    <footer className="bg-gray-800 text-white ">
        <div className="p-4 flex flex-col md:flex-row items-start justify-between max-w-7xl mx-auto">
            <div className="text-xl font-bold  dark:text-white w-full md:w-auto text-center md:text-left">
            Vapour
            </div>
            <div className="flex space-x-4 ml-4">
                <a href="#" className="text-sm hover:text-gray-400">About</a>
                <a href="#" className="text-sm hover:text-gray-400">Privacy Policy</a>
                <a href="#" className="text-sm hover:text-gray-400">Terms of Service</a>
                <a href="#" className="text-sm hover:text-gray-400">Contact</a>
            </div>
            
        
        </div>
        <p className="flex items-center justify-center"> © {new Date().getFullYear()} Vapour. All rights reserved.</p>
    </footer>
    </>
  );
}
