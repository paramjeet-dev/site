import React from 'react';
import { Link } from 'react-router-dom';
import Card from '../ui/Card';
import SectionTitle from '../ui/SectionTitle';
import { FiArrowRight } from 'react-icons/fi';

const DepartmentsGrid = ({ departments = [] }) => {
  // Map department names to slugs for routing
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
    <section id="departments" className="py-16 bg-gray-50">
      <div className="container-custom px-4 sm:px-6 lg:px-8">
        <SectionTitle 
          subtitle="Academic Excellence"
          title="Our Departments"
          centered
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {departments.map((dept) => {
            const slug = getDepartmentSlug(dept.name);
            
            return (
              <Card key={dept.id} className="h-full flex flex-col">
                <div className="flex items-start gap-4 mb-4">
                  <div className="flex-1 min-w-0">
                    <h3 className="text-lg sm:text-xl font-bold mb-1 bg-gradient-to-r from-[#0F1E3A] to-[#2E9E6F] bg-clip-text text-transparent line-clamp-2">
                      {dept.name}
                    </h3>
                    <p className="text-xs sm:text-sm font-medium bg-gradient-to-r from-[#2E9E6F] to-[#E6B325] bg-clip-text text-transparent">
                      {dept.shortName}
                    </p>
                  </div>
                </div>

                <p className="text-text-muted text-xs sm:text-sm mb-4 line-clamp-3 flex-grow">
                  {dept.description}
                </p>

                <Link
                  to={`/departments/${slug}`}
                  className="mt-4 inline-flex items-center justify-center w-full bg-gradient-to-r from-[#2E9E6F] to-[#E6B325] text-white font-bold px-4 py-3 rounded-lg text-sm hover:from-[#E6B325] hover:to-[#2E9E6F] transition-all duration-300 shadow-md hover:shadow-lg group"
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