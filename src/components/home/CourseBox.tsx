import Image from 'next/image'
import { ArrowRight } from 'lucide-react'
import { CoursetDto } from '@/dtos/course-dto'


interface CourseBoxProps {
    courses: CoursetDto[]
}

export default function CourseBox({ courses = [] }: CourseBoxProps) {
    return (

        <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-8">Our Featured Courses</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {courses.map((course) => (
                    <div key={course.id} className="bg-white rounded-lg overflow-hidden shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
                        <div className="relative h-48">
                            <Image
                                src={course.image}
                                alt={course.title}
                                layout="fill"
                                objectFit="cover"
                                className="transition-all duration-300 hover:scale-105"
                            />
                        </div>
                        <div className="p-6">
                            <h3 className="text-xl font-semibold mb-2">{course.title}</h3>
                            <p className="text-gray-600 mb-4">{course.description}</p>
                            <button className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors duration-300">
                                Read More
                                <ArrowRight className="ml-2 h-4 w-4" />
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>

    )
}