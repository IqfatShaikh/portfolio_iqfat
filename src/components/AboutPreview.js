import Link from 'next/link';

export default function AboutPreview() {
  return (
    <section className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-8">
            About Me
          </h2>
          
          <div className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-8 shadow-lg max-w-3xl mx-auto">
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
              I'm a passionate <span className="text-blue-600 dark:text-blue-400 font-semibold">Frontend Developer</span> with 
              a keen eye for creating intuitive and visually appealing user interfaces. I have a strong passion for 
              <span className="text-purple-600 dark:text-purple-400 font-semibold"> UI design</span> and love turning 
              complex problems into simple, beautiful solutions.
            </p>
            
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-8">
              I'm constantly <span className="text-indigo-600 dark:text-indigo-400 font-semibold">learning</span> and 
              <span className="text-green-600 dark:text-green-400 font-semibold"> building web applications</span> using 
              modern technologies, staying up-to-date with the latest trends and best practices in frontend development.
            </p>
            
            <Link 
              href="/about"
              className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl"
            >
              Read More
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}