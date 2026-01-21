import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { HeartIcon } from '@heroicons/react/24/outline';
import { getApiPath } from '../config/paths';

interface AboutProps {
    isDarkMode?: boolean;
}

const About: React.FC<AboutProps> = ({ isDarkMode = false }) => {
    const { t } = useTranslation();
    const [version, setVersion] = useState<string>('0.3');

    useEffect(() => {
        // Fetch version from the deployed app
        fetch(getApiPath('version'))
            .then((response) => response.json())
            .then((data) => {
                if (data.version) {
                    setVersion(data.version);
                }
            })
            .catch((error) => {
                console.error('Error fetching version:', error);
                // Keep default version if fetch fails
            });
    }, []);

    return (
        <div className="w-full px-2 sm:px-4 lg:px-6 pt-4 pb-8">
            <div className="w-full">
                <div className="flex items-center mb-4">
                    <h2 className="text-2xl font-light">
                        {t('about.title', 'About')}
                    </h2>
                </div>

                <div className="max-w-2xl mx-auto">
                    {/* Logo and Version */}
                    <div className="text-center mb-8">
                        <div className="flex justify-center mb-4">
                            <img
                                src={
                                    isDarkMode
                                        ? '/wide-logo-light.png'
                                        : '/wide-logo-dark.png'
                                }
                                alt="todo"
                                className="h-16 w-auto"
                            />
                        </div>
                        <p className="text-lg text-gray-600 dark:text-gray-400">
                            {t('about.version', 'Version')} {version}
                        </p>
                    </div>

                    {/* Description */}
                    <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6 mb-8">
                        <p className="text-gray-700 dark:text-gray-300 text-center leading-relaxed">
                            {t(
                                'about.description',
                                'Self-hosted task management with hierarchical organization, multi-language support, and Telegram integration. Built with love for productivity enthusiasts.'
                            )}
                        </p>
                    </div>

                    {/* Appreciation */}
                    <div className="text-center mb-8">
                        <div className="flex items-center justify-center mb-4">
                            <HeartIcon className="h-6 w-6 text-red-500 mr-2" />
                            <span className="text-lg font-medium text-gray-900 dark:text-white">
                                {t('about.madeWithLove', 'Made with love')}
                            </span>
                        </div>
                        <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                            {t(
                                'about.appreciation',
                                'Thank you for using todo! Your support helps keep this project alive and growing. If you find it useful, consider supporting the development.'
                            )}
                        </p>
                    </div>

                    {/* Support Links */}
                    <div className="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 p-6 mb-8">
                        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4 text-center">
                            {t(
                                'about.supportDevelopment',
                                'Support Development'
                            )}
                        </h3>
                        <div className="grid grid-cols-2 gap-4">
                            <a
                                href="https://www.patreon.com/ChrisVeleris"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center justify-center px-4 py-3 bg-orange-600 hover:bg-orange-700 text-white rounded-lg transition-colors duration-200 font-medium"
                            >
                                <svg
                                    className="w-5 h-5 mr-2"
                                    viewBox="0 0 24 24"
                                    fill="currentColor"
                                >
                                    <path d="M0 .5h4.219v23H0V.5zM15.384.5c4.767 0 8.616 3.718 8.616 8.313 0 4.596-3.85 8.313-8.616 8.313-4.767 0-8.615-3.717-8.615-8.313C6.769 4.218 10.617.5 15.384.5z" />
                                </svg>
                                Patreon
                            </a>
                            <a
                                href="https://coff.ee/chrisveleris"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center justify-center px-4 py-3 bg-yellow-600 hover:bg-yellow-700 text-white rounded-lg transition-colors duration-200 font-medium"
                            >
                                <svg
                                    className="w-5 h-5 mr-2"
                                    viewBox="0 0 24 24"
                                    fill="currentColor"
                                >
                                    <path d="M20.216 6.415l-.132-.666c-.119-.598-.388-1.163-.766-1.623a4.44 4.44 0 0 0-1.209-.982c-.621-.37-1.294-.646-1.975-.804-.681-.158-1.375-.158-2.056 0-.682.158-1.354.434-1.975.804a4.44 4.44 0 0 0-1.209.982c-.378.46-.647 1.025-.766 1.623l-.132.666a.75.75 0 0 0 .735.885h8.568a.75.75 0 0 0 .735-.885zM11.5 9.5h1v8h-1v-8zM9 9.5h1v8H9v-8zM14 9.5h1v8h-1v-8z" />
                                </svg>
                                Buy Me a Coffee
                            </a>
                        </div>
                    </div>

                    {/* Community Links */}
                    <div className="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 p-6 mb-8">
                        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4 text-center">
                            {t('about.community', 'Community')}
                        </h3>
                        <div className="grid grid-cols-2 gap-4">
                            <a
                                href="#"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center justify-center px-4 py-3 bg-green-600 hover:bg-green-700 text-white rounded-lg transition-colors duration-200 font-medium"
                            >
                                <svg
                                    className="w-5 h-5 mr-2"
                                    viewBox="0 0 24 24"
                                    fill="currentColor"
                                >
                                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                                </svg>
                                Official Website
                            </a>
                        </div>
                    </div>

                    {/* Footer */}
                    <div className="text-center mt-12 pt-8 border-t border-gray-200 dark:border-gray-700">
                        <p className="text-sm text-gray-500 dark:text-gray-400">
                            {t('about.builtBy', 'Built by')} Chris Veleris
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
