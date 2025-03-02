import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function HomeBanner() {
    return (
        <div
            className="relative py-[100px] md:py-[150px] lg:py-[300px] bg-cover bg-center"
            style={{ backgroundImage: `url("/images/banner.jpg")` }}
        >
            <div className="absolute inset-0 bg-black bg-opacity-50"></div>
            <div className="container relative">
                <div className="max-w-xl lg:max-w-3xl">
                    <h1 className="text-3xl md:text-4xl lg:text-6xl font-bold text-white mb-4">
                        Welcome to PreSkool
                    </h1>
                    <p className="text-xl text-white mb-8">
                        We provide innovative solutions for your business needs. Discover how we can help you grow and succeed in today's competitive market.
                    </p>
                    <div className="space-x-4">
                        <Link
                            href="/contact"
                        ><Button size="lg">Contact Us</Button>
                        </Link>
                        <Link
                            href="tel:+1234567890"

                        ><Button variant="outline" size="lg">Call Us</Button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
