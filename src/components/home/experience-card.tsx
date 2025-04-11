'use client'

import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { cn } from "@/lib/utils"
import Image from 'next/image'

const companies = [
  {
    name: 'Lenze',
    logo: '/images/aidp.jpg',
    roles: [
      { title: 'Senior Software Engineer', period: '08/2022 - Present' },
      { title: 'Software Engineer', period: '04/2021 - 07/2022' },
    ],
    description: [
      `Building NUPANO, the intelligent Open Automation Platform which enables the integration, management and protection of innovative technological applications that are tailored to machines.`,
      `I work on the entire application stack including frontend, backend, infrastructure, and other moving parts. I do feature development, maintain necessary libraries and platform code, refine requirements and plan task implementations.`,
    ],
    image: '/images/aidp.jpg',
    imageCaption: 'At Lenze Mechatronics Competence Center, Extertal, Germany'
  },
  {
    name: 'Honeywell',
    logo: '/images/aidp.jpg',
    roles: [
      { title: 'Software Developer', period: '01/2020 - 03/2021' },
    ],
    description: [
      'Worked on industrial automation solutions and embedded system applications.',
      'Collaborated with global teams to implement feature enhancements and performance optimizations.',
    ],
    image: '/images/aidp.jpg',
    imageCaption: 'Honeywell Office'
  },
  {
    name: 'CauseCode',
    logo: '/images/aidp.jpg',
    roles: [
      { title: 'Frontend Developer', period: '2018 - 2019' },
    ],
    description: [
      'Built reusable UI components using React and integrated REST APIs.',
      'Worked closely with designers and clients to develop scalable frontend apps.',
    ],
    image: '/images/aidp.jpg',
    imageCaption: 'CauseCode Workspace'
  },
  {
    name: 'IBM',
    logo: '/images/aidp.jpg',
    roles: [
      { title: 'Intern Developer', period: '2017 - 2018' },
    ],
    description: [
      'Part of the cloud services team responsible for deploying microservices.',
      'Assisted in writing test cases and maintaining legacy systems.',
    ],
    image: '/images/aidp.jpg',
    imageCaption: 'IBM Campus'
  }
]

export default function Experience() {
  return (
    <div className='pb-20'>
      <div className="container">
        <div className="text-center">
          <p className="text-accent text-sm mb-2">Work</p>
          <h2 className="text-4xl font-bold text-background mb-5">Professional Experience</h2>
        </div>
        <div className="flex bg-black text-white rounded-3xl overflow-hidden">
          <Tabs defaultValue="Lenze" className="flex w-full">
            {/* Sidebar */}
            <TabsList className="flex flex-col h-full w-[240px] bg-[#1d1d1d] p-0 justify-start">
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
                    src={company.logo}
                    alt={company.name}
                    width={50}
                    height={50}
                    className="rounded-full object-cover"
                  />
                  <span className="font-medium">{company.name}</span>
                </TabsTrigger>
              ))}
            </TabsList>

            {/* Content */}
            <div className="flex-1 ">
              {companies.map((company) => (
                <TabsContent key={company.name} value={company.name} className="w-full mt-0 border-0 h-full">
                  <Card className="text-background bg-transparent rounded-r-3xl p-8 border-0 border-transparent">
                    <CardContent className="flex items-center flex-col lg:flex-row gap-6 p-0 h-full" >
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
                      <div className="flex-shrink-0">
                        <Image
                          src={company.image}
                          alt={`${company.name} Office`}
                          width={300}
                          height={400}
                          className="rounded-2xl shadow-lg rotate-2"
                        />
                        <p className="text-center text-xs text-gray-400 mt-2">
                          {company.imageCaption}
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>
              ))}
            </div>
          </Tabs>
        </div>
      </div>
    </div>
  )
}
