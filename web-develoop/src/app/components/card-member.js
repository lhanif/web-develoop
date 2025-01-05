// CardMember.js
import React from 'react';

const CardMember = ({ image, name, title, socialLinks }) => {
    return (
        <div className="flex flex-col items-center p-4 border sm:p-6 rounded-xl dark:border-gray-700">
            <img className="object-cover w-full rounded-xl aspect-square" src={image} alt={name} />
            <h1 className="mt-4 text-2xl font-semibold text-gray-700 capitalize dark:text-white">{name}</h1>
            <p className="mt-2 text-gray-500 capitalize dark:text-gray-300">{title}</p>
            <div className="flex mt-3 -mx-2">
                {socialLinks.map((link, index) => (
                    <a key={index} href={link.url} className="mx-2 text-gray-600 transition-colors duration-300 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400" aria-label={link.label}>
                        <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d={link.iconPath}></path>
                        </svg>
                    </a>
                ))}
            </div>
        </div>
    );
};

export default CardMember;
