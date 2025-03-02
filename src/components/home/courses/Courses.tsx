import CourseBox from "../CourseBox"


const sampleCourses = [
    {
        id: '1',
        title: 'Introduction to Web Development',
        description: 'Learn the basics of HTML, CSS, and JavaScript to build modern websites.',
        image: '/images/courses.jpg'
    },
    {
        id: '2',
        title: 'Advanced React Techniques',
        description: 'Master advanced React concepts like hooks, context, and performance optimization.',
        image: '/images/courses.jpg'
    },
    {
        id: '3',
        title: 'Full-Stack Development with Node.js',
        description: 'Build scalable web applications using Node.js, Express, and MongoDB.',
        image: '/images/courses.jpg'
    }
]

export default function Courses() {
    return (
        <section className="py-14 bg-gray-50">
            <CourseBox courses={sampleCourses} />
        </section>
    )
}