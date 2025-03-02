import HomeContactForm from "../form/HomeContactForm";


export default function Contact() {
    return (
        <section className="relative z-10 py-20 bg-[#1e2a44] text-white" style={{ backgroundImage: "url('/images/home-banner.jpg')" }}>
            <div className="absolute inset-0 bg-black bg-opacity-50 z-[-1]"></div>

            <div className="container">
                <div className="flex justify-start col-span-2">
                    <div className="p-12 bg-primary bg-opacity-50">
                        <h1 className="text-3xl font-bold mb-6">Contact Us</h1>
                        <HomeContactForm />
                    </div>
                </div>
            </div>
        </section>
    )
}