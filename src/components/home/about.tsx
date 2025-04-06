import Image from "next/image";

export default function About() {
  return (
    <div className="pb-28">
      <div className="container relative justify-center flex">
        <div className="grid grid-cols-3 md:gap-8 lg:gap-x-20 items-center">
          <div className="col-span-2">
            <p className="text-accent text-sm mb-2">MORE ABOUT ME</p>
            <h2 className="text-4xl font-bold text-background mb-5">About Me</h2>
            <p className="text-background">I'm a Frontend Developer with hands-on experience building responsive, scalable, and user-focused web applications using React.js, Next.js, and Redux Toolkit. I specialize in transforming complex requirements into clean, maintainable, and performant interfaces—combining modern design principles with practical development skills.</p>
            <p className="text-background">Over the years, I’ve contributed to diverse projects like job boards, learning platforms, dashboards, and cross-platform apps. My work involves implementing role-based authentication, state management, and API integration using tools like NextAuth.js, TanStack Query, Axios, and InversifyJS for clean service architecture.</p>
            <p className="text-background">I’m passionate about writing reusable components with <strong>Tailwind CSS</strong>, enhancing developer experience through modular code, and continuously learning new technologies to stay sharp in a fast-evolving ecosystem.</p>
            <p className="text-background">Outside of coding, you’ll often find me <strong>unwinding with a game of cricket</strong> or catching a match. Whether I’m playing with friends or watching a close chase, cricket is my go-to for recharging. It’s my way of balancing screen time with some real-time excitement.</p>
            <p className="text-background">My approach to development is simple: <strong>"Build it right, make it last, and keep it user-focused."</strong>  </p>
          </div>
          <div className="border-2 border-[#f5f5f5] rounded-full rounded-l-none overflow-hidden flex justify-center items-center">
            <Image src={"/images/aidp.jpg"} alt="Hero Image" width={300} height={300} className="w-full rounded-full rounded-l-none" />
          </div>
        </div>
      </div>
    </div>
  )
}

