import React, { useState, useEffect, useRef } from 'react';
import { FiCalendar, FiArrowRight } from 'react-icons/fi';
import { Link } from 'react-router-dom';

const NewsSection = ({ news = [], notices = [], admissions = [] }) => {
  const eventsScrollRef = useRef(null);
  const [scrollSpeed] = useState(1);
  const [isHovering, setIsHovering] = useState(false);

  const sampleNotices = [
    { id: 1, title: 'Proposal for filling up of One vacant post of Associate Professor (ECE) on Deputy Basis', date: '2026-02-23' },
    { id: 2, title: 'Registration for Annual Athletic Meet (25th - 26th Feb, 2026)', date: '2026-02-22' },
    { id: 3, title: 'Pariksha Pe Charcha Report 2026', date: '2026-02-13' },
    { id: 4, title: 'Budget Quest 2026 - Activity Report', date: '2026-02-13' },
    { id: 5, title: 'Ph.d Viva Voce of Mr. Vinod Chauhan', date: '2026-02-11' },
    { id: 6, title: 'Scholarship Notice, Academic Session Jan-June 2026', date: '2026-02-10' },
    { id: 7, title: 'Student Struck-Off List Session Jan-June, 2026', date: '2026-02-03' },
    { id: 8, title: 'Examination Registration for Session Jan-June, 2026', date: '2026-02-03' }
  ];

  const sampleNewsEvents = [
    { id: 1, title: 'Annual Technical Fest 2026', date: '2026-03-15', description: 'Join us for the biggest technical festival of the year with workshops, competitions, and guest lectures.' },
    { id: 2, title: 'Industry Visit to Maruti Suzuki', date: '2026-03-10', description: 'Industrial visit for final year students to Maruti Suzuki manufacturing plant.' },
    { id: 3, title: 'Guest Lecture on AI & ML', date: '2026-03-05', description: 'Guest lecture by Dr. Rajesh Kumar from IIT Delhi on recent advances in AI.' },
    { id: 4, title: 'Campus Placement Drive - Infosys', date: '2026-02-28', description: 'Campus recruitment drive for 2026 batch. Register by Feb 25.' },
    { id: 5, title: 'Workshop on IoT', date: '2026-02-25', description: 'Hands-on workshop on Internet of Things for second year students.' },
    { id: 6, title: 'Sports Meet 2026', date: '2026-02-20', description: 'Annual sports meet with competitions in cricket, football, and athletics.' }
  ];

  const sampleAdmissions = [
    { id: 1, title: 'B.Tech Admissions 2026-27', date: 'Applications open till March 31, 2026', description: 'Admissions open for Computer Engineering, Mechanical Engineering, Civil Engineering, and more.' },
    { id: 2, title: 'M.Tech Admissions 2026-27', date: 'GATE qualified candidates apply by April 15, 2026', description: 'Specializations in Computer Engineering, Advanced Manufacturing Technology, and Power Systems.' },
    { id: 3, title: 'Diploma Admissions 2026-27', date: 'Based on 10th merit, apply by May 30, 2026', description: 'Diploma in Mechanical Engineering and Civil Engineering.' },
    { id: 4, title: 'Scholarship Applications', date: 'Apply by March 15, 2026', description: 'Merit-cum-means scholarships available for deserving students.' }
  ];

  const displayNotices = notices.length > 0 ? notices : sampleNotices;
  const displayNewsEvents = news.length > 0 ? news : sampleNewsEvents;
  const displayAdmissions = admissions.length > 0 ? admissions : sampleAdmissions;

  useEffect(() => {
    const scrollContainer = eventsScrollRef.current;
    if (!scrollContainer || isHovering) return;

    let animationFrame;
    const scroll = () => {
      if (scrollContainer && !isHovering) {
        if (scrollContainer.scrollTop + scrollContainer.clientHeight >= scrollContainer.scrollHeight) {
          scrollContainer.scrollTop = 0;
        } else {
          scrollContainer.scrollTop += scrollSpeed;
        }
      }
      animationFrame = requestAnimationFrame(scroll);
    };

    animationFrame = requestAnimationFrame(scroll);
    return () => cancelAnimationFrame(animationFrame);
  }, [scrollSpeed, isHovering]);

  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'short', day: 'numeric' };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  return (
    <section className="py-16 bg-gray-50 dark:bg-[#0a0f1f] transition-colors duration-300">
      <div className="container-custom px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-[#0F1E3A] to-[#2E9E6F] dark:from-white dark:to-[#2E9E6F] bg-clip-text text-transparent mb-4">
            Latest Updates
          </h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Stay informed with the latest news, notices, and admission information
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">

          {/* News & Events */}
          <div className="rounded-xl overflow-hidden h-[600px] flex flex-col
            bg-white dark:bg-[#0F1E3A]
            border border-gray-200 dark:border-white/10
            shadow-lg hover:shadow-xl transition-all">

            <div className="bg-gradient-to-r from-[#E6B325] to-[#d4a520] text-[#0F1E3A] p-4">
              <h3 className="text-xl font-bold">News & Events</h3>
            </div>

            <div
              ref={eventsScrollRef}
              className="divide-y divide-gray-200 dark:divide-white/10 flex-1 overflow-y-auto"
              onMouseEnter={() => setIsHovering(true)}
              onMouseLeave={() => setIsHovering(false)}
            >
              {displayNewsEvents.map((item) => (
                <div key={item.id} className="p-4 hover:bg-gray-50 dark:hover:bg-white/5 transition">
                  <h4 className="font-bold text-gray-900 dark:text-white mb-2">
                    {item.title}
                  </h4>
                  <p className="text-sm text-gray-600 dark:text-gray-300 mb-2 line-clamp-2">
                    {item.description}
                  </p>
                  <p className="text-xs text-gray-500 flex items-center gap-1">
                    <FiCalendar className="text-[#E6B325]" />
                    {formatDate(item.date)}
                  </p>
                </div>
              ))}
            </div>

            <div className="p-4 border-t border-gray-200 dark:border-white/10 text-center">
              <Link to="/events" className="text-[#2E9E6F] hover:text-[#E6B325] font-semibold inline-flex items-center gap-1">
                View All Events <FiArrowRight />
              </Link>
            </div>
          </div>

          {/* Notices */}
          <div className="rounded-xl overflow-hidden h-[600px] flex flex-col
            bg-white dark:bg-[#0F1E3A]
            border border-gray-200 dark:border-white/10
            shadow-lg hover:shadow-xl transition-all">

            <div className="bg-gradient-to-r from-[#0F1E3A] to-[#1a2f54] text-white p-4">
              <h3 className="text-xl font-bold">Notices</h3>
            </div>

            <div className="divide-y divide-gray-200 dark:divide-white/10 flex-1 overflow-y-auto">
              {displayNotices.map((notice) => (
                <div key={notice.id} className="p-4 hover:bg-gray-50 dark:hover:bg-white/5 transition">
                  <p className="text-sm font-medium text-gray-800 dark:text-gray-200 mb-2 line-clamp-2">
                    {notice.title}
                  </p>
                  <p className="text-xs text-gray-500 flex items-center gap-1">
                    <FiCalendar className="text-[#E6B325]" />
                    {formatDate(notice.date)}
                  </p>
                </div>
              ))}
            </div>

            <div className="p-4 border-t border-gray-200 dark:border-white/10 text-center">
              <Link to="/notices" className="text-[#2E9E6F] hover:text-[#E6B325] font-semibold inline-flex items-center gap-1">
                View All Notices <FiArrowRight />
              </Link>
            </div>
          </div>

          {/* Admissions */}
          <div className="rounded-xl overflow-hidden h-[600px] flex flex-col
            bg-white dark:bg-[#0F1E3A]
            border border-gray-200 dark:border-white/10
            shadow-lg hover:shadow-xl transition-all">

            <div className="bg-gradient-to-r from-[#2E9E6F] to-[#1e6b4c] text-white p-4">
              <h3 className="text-xl font-bold">Admissions</h3>
            </div>

            <div className="divide-y divide-gray-200 dark:divide-white/10 flex-1 overflow-y-auto">
              {displayAdmissions.map((item) => (
                <div key={item.id} className="p-4 hover:bg-gray-50 dark:hover:bg-white/5 transition">
                  <h4 className="font-bold text-gray-900 dark:text-white mb-2">
                    {item.title}
                  </h4>
                  <p className="text-sm text-gray-600 dark:text-gray-300 mb-2">
                    {item.description}
                  </p>
                  <p className="text-xs text-gray-500 flex items-center gap-1">
                    <FiCalendar className="text-[#2E9E6F]" />
                    {item.date}
                  </p>
                </div>
              ))}
            </div>

            <div className="p-4 border-t border-gray-200 dark:border-white/10 text-center">
              <Link
                to="/admission-status"
                className="bg-gradient-to-r from-[#2E9E6F] to-[#1e6b4c] hover:from-[#1e6b4c] hover:to-[#2E9E6F] text-white font-semibold px-6 py-2 rounded-lg transition-all inline-flex items-center gap-2"
              >
                Apply Now <FiArrowRight />
              </Link>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default NewsSection;