import { Button } from "@/components/ui/button";

export default function Banner() {
    return (
        <div id="Home" className="relative pt-[100px] md:pt-[150px] bg-cover bg-center">
            <div className="container relative justify-center flex pb-[100px]">
                <div className="max-w-4xl">
                    <div className="text-center">
                        <h1 className="text-4xl font-bold mb-4 bg-transparent  text-foreground">
                            Hello, I&apos;m <span className="font-extrabold marck-script-regular">Md Soaib Ansari</span>
                        </h1>
                        <p className="text-background">
                            Crafting seamless digital experiences that elevate brands, engage users, and drive results through intuitive design and smart frontend development.
                        </p>
                        <h2 className="text-xl text-background">It&apos;s time to build something amazing!</h2>
                        <div className="flex gap-4 flex-wrap items-center mt-5 pt-4 justify-center">
                            <Button>Learn More</Button>
                            <Button variant={"secondary"}>View My Work</Button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="animate-scaleIn pointer-events-none relative z-10 mx-auto -mt-32 h-96 w-screen max-w-(--breakpoint-2xl) overflow-hidden [mask-image:radial-gradient(50%_50%,white,transparent)] before:absolute before:inset-0 before:bg-[radial-gradient(circle_at_bottom_center,#8350e8,transparent_80%)] before:opacity-60">
                <div className="absolute top-1/2 -left-1/2 z-20 aspect-[1/0.7] w-[200%] rounded-[100%] border-t-4 border-t-[#ffffff] bg-[#0a0a0a44] shadow-[inset_0_2px_20px_#fff,0_-10px_50px_1px_#ffffff6e]"></div>
            </div>
            <div aria-hidden="true" className="pointer-events-none absolute inset-x-0 bottom-0 z-0 h-full bg-linear-to-t from-white opacity-100 dark:from-primary"></div>
        </div>
    );
}
