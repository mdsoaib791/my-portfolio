import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function Footer() {
    return (
        <footer className="bg-gray-800 text-white">
            <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div>
                        <Image
                            src="/images/logo.svg"
                            alt="School Logo"
                            width={180}
                            height={40}
                            className="h-10 w-auto invert"
                        />
                        <p className="mt-2 text-sm">Empowering minds, shaping futures.</p>
                    </div>
                    <div>
                        <h3 className="text-sm font-semibold uppercase tracking-wider">Useful Links</h3>
                        <ul className="mt-4 space-y-4">
                            <li>
                                <Link href="/about" className="text-base text-gray-300 hover:text-white">
                                    About Us
                                </Link>
                            </li>
                            <li>
                                <Link href="/courses" className="text-base text-gray-300 hover:text-white">
                                    Courses
                                </Link>
                            </li>
                            <li>
                                <Link href="/contact" className="text-base text-gray-300 hover:text-white">
                                    Contact
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-sm font-semibold uppercase tracking-wider">Address</h3>
                        <p className="mt-4 text-base text-gray-300">
                            123 Education Street<br />
                            Cityville, State 12345<br />
                            United States
                        </p>
                    </div>
                </div>
                <div className="mt-8 border-t border-gray-700 pt-8">
                    <p className="text-base text-gray-400 xl:text-center">
                        &copy; 2023  PreSkool. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    )
}

export default Footer
