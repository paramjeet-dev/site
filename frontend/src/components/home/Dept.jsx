import React from 'react';
import { Link } from 'react-router-dom';
import Card from './Card';
import SectionTitle from './SectionTitle';
import { FiArrowRight } from 'react-icons/fi';

const DepartmentsGrid = ({ departments = [] }) => {

  const getDepartmentSlug = (deptName) => {
    const slugMap = {
      'Applied Science': 'applied-science',
      'Civil Engineering': 'civil-engineering',
      'Computer Science (AI & ML)': 'aiml',
      'Computer Science & Engineering': 'computer-engineering',
      'Electronics & Communication Engineering': 'electronics-communication',
      'Electrical Engineering': 'electrical-engineering',
      'Mechanical Engineering': 'mechanical-engineering'
    };
    return slugMap[deptName] || deptName.toLowerCase().replace(/\s+/g, '-');
  };

  return (
    <section
      id="departments"
      className="
        py-16
        bg-gray-50
        dark:bg-[#0a0f1f]
        transition-colors duration-300
      "
    >
      <div className="container-custom px-4 sm:px-6 lg:px-8">

        <SectionTitle 
          subtitle="Academic Excellence"
          title="Our Departments"
          centered
          className="
            [&>p]:text-[#E6B325]
            [&>h2]:text-gray-900 dark:[&>h2]:text-white
          "
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {departments.map((dept) => {
            const slug = getDepartmentSlug(dept.name);

            return (
              <Card
                key={dept.id}
                className="
                  h-full flex flex-col
                  bg-white dark:bg-[#0F1E3A]
                  border border-gray-200 dark:border-white/10
                  shadow-md hover:shadow-xl
                  transition-all duration-300
                  hover:-translate-y-1
                "
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className="flex-1 min-w-0">

                    {/* Title */}
                    <h3 className="
                      text-lg sm:text-xl font-bold mb-1
                      bg-gradient-to-r from-[#0F1E3A] to-[#2E9E6F]
                      dark:from-white dark:to-[#2E9E6F]
                      bg-clip-text text-transparent
                      line-clamp-2
                    ">
                      {dept.name}
                    </h3>

                    {/* Short Name */}
                    <p className="
                      text-xs sm:text-sm font-medium
                      bg-gradient-to-r from-[#2E9E6F] to-[#E6B325]
                      bg-clip-text text-transparent
                    ">
                      {dept.shortName}
                    </p>

                  </div>
                </div>

                {/* Description */}
                <p className="
                  text-xs sm:text-sm mb-4 line-clamp-3 flex-grow
                  text-gray-600 dark:text-gray-300
                ">
                  {dept.description}
                </p>

                {/* Button */}
                <Link
                  to={`/departments/${slug}`}
                  className="
                    mt-4 inline-flex items-center justify-center w-full
                    bg-gradient-to-r from-[#2E9E6F] to-[#E6B325]
                    hover:from-[#E6B325] hover:to-[#2E9E6F]
                    text-white font-semibold
                    px-4 py-3 rounded-lg text-sm
                    transition-all duration-300
                    shadow-md hover:shadow-lg
                    group
                  "
                >
                  <span>Explore Department</span>
                  <FiArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>

              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default DepartmentsGrid;