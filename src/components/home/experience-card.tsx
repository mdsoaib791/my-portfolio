'use client'
import { motion } from "framer-motion";

import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { cn } from "@/lib/utils";
import Image from 'next/image';
import Link from "next/link";

const companies = [
  {
    name: 'FirstBit Digital Technology',
    companyUrl: 'https://www.bsitsoftware.com/',
    icon: '/images/fbit-icon.png',
    logo: '/images/fbit-logo.svg',
    roles: [
      { title: 'Frontend Developer', period: `Full-time | Dec 2021 to Present (3 years 5 months)` },
    ],
    description: [
      `Experienced Frontend Developer with a strong background in React.js, Next.js, and TypeScript, specializing in building dynamic, scalable, and responsive web applications. Proficient in Redux Toolkit Query, TanStack React Query, and shadcn for efficient state management and UI development.`,
    ],
    image: '/images/aidp.jpg',
    imageCaption: 'At Lenze Mechatronics Competence Center, Extertal, Germany'
  },
  {
    name: 'Bsit Software Services',
    companyUrl: 'https://www.bsitsoftware.com/',
    icon: '/images/bsit-logo.png',
    logo: '/images/bsit-logo.png',
    roles: [
      { title: 'Frontend Developer', period: `Full-time | May 2019 to Dec 2021 (2 years 8 months)` },
    ],
    description: [
      'Experienced Frontend Developer with a strong background in React.js, Next.js, and TypeScript, specializing in building dynamic, scalable, and responsive web applications. Proficient in Redux Toolkit Query, TanStack React Query, and shadcn for efficient state management and UI development.',
    ],
    image: '/images/aidp.jpg',
    imageCaption: 'Honeywell Office'
  },

]

export default function Experience() {
  return (

    <motion.div

      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }} // Triggers when the card is 30% in view
      transition={{ duration: 0.5 }}
    >
      <div className="pb-20">
        <div className="container">
          <div className="text-center">
            <p className="text-accent text-sm mb-2">Work</p>
            <h2 className="text-4xl font-bold text-background mb-5 pb-4">Professional Experience</h2>
          </div>
          <div className="flex bg-black text-white rounded-3xl overflow-hidden">
            <Tabs defaultValue="FirstBit Digital Technology" className="flex w-full">
              {/* Sidebar */}
              <TabsList className="flex flex-col h-full w-[340px] bg-[#1d1d1d] p-0 justify-start">
                {companies.map((company) => (
                  <TabsTrigger
                    key={company.name}
                    value={company.name}
                    className={cn(
                      'flex items-center gap-4 px-3 py-8 w-full justify-start text-xl rounded-md transition-all text-background relative',
                      'hover:bg-primary/15',
                      'data-[state=active]:bg-primary/15 data-[state=active]:text-background',
                      'data-[state=active]:before:absolute data-[state=active]:before:left-0 data-[state=active]:before:top-0 data-[state=active]:before:bottom-0 data-[state=active]:before:w-[4px] data-[state=active]:before:bg-background'
                    )}
                  >
                    <Image
                      src={company.icon}
                      alt={company.name}
                      width={100}
                      height={100}
                      className="rounded-full object-contain p-2 bg-background shadow-md w-16 h-16"
                    />
                    <span className="font-medium">{company.name}</span>
                  </TabsTrigger>
                ))}
              </TabsList>

              {/* Content */}
              <div className="flex-1">
                {companies.map((company) => (
                  <TabsContent key={company.name} value={company.name} className="w-full mt-0 border-0 h-full">
                    <Card className="text-background bg-transparent rounded-r-3xl p-8 border-0 border-transparent">
                      <CardContent className="flex items-center flex-col lg:flex-row gap-6 p-0 h-full">
                        {/* Text Section */}
                        <div className="flex-1">
                          <h2 className="text-xl font-bold mb-2">{company.name}</h2>
                          <div className="space-y-3 text-sm">
                            {company.roles.map((role, index) => (
                              <div key={index}>
                                <p className="text-blue-400 font-semibold">{role.title}</p>
                                <p className="text-gray-400">{role.period}</p>
                              </div>
                            ))}
                            {company.description.map((line, idx) => (
                              <p key={idx} className={idx === 0 ? 'pt-2' : ''}>{line}</p>
                            ))}
                          </div>
                        </div>

                        {/* Image Section */}
                        <Link
                          href={company.companyUrl}
                          title={company.name}
                          target="_blank"
                          className="flex-shrink-0 bg-background flex flex-col justify-center items-center p-4 rounded-2xl shadow-lg rotate-2 transition-all"
                        >
                          <Image
                            src={company.logo}
                            alt={`${company.name} Office`}
                            width={300}
                            height={400}
                            className="rounded-2xl object-contain"
                          />
                          <p className="text-center text-xs text-gray-400 mt-2">{company.name}</p>
                        </Link>
                      </CardContent>
                    </Card>
                  </TabsContent>
                ))}
              </div>
            </Tabs>
          </div>
        </div>
      </div>
    </motion.div>
  )
}
