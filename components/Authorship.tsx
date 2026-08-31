// components/CampaignLandingPage.tsx
import React from 'react';
import * as motion from 'framer-motion/client';

const CampaignLandingPage = () => {
  // Animation variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  const fadeInLeft = {
    hidden: { opacity: 0, x: -30 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6 } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2
      }
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 text-gray-800 overflow-x-hidden">
      {/* Header Section */}
      <motion.header 
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative bg-gray-100 py-16 px-4 border-b-4 border-red-600"
      >
        <div className="container mx-auto text-center">
          <motion.h1 
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-5xl md:text-6xl font-bold mb-4 text-red-600"
          >
            BUILD OUR CITY
            <br />
            STRONGER FOR EVERYONE
          </motion.h1>
          <motion.div 
            initial={{ width: 0 }}
            animate={{ width: 96 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="h-1 bg-red-600 mx-auto mt-4"
          ></motion.div>
        </div>
      </motion.header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        {/* Together We Will Achieve Change Section */}
        <motion.section 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
          className="mb-16 bg-white rounded-lg shadow-sm border border-red-600 p-8 md:p-12"
        >
          <div className="max-w-4xl mx-auto text-center">
            <motion.h2 
              variants={fadeInUp}
              className="text-4xl md:text-5xl font-bold text-red-600 mb-6"
            >
              TOGETHER WE WILL ACHIEVE CHANGE
            </motion.h2>
            <motion.p 
              variants={fadeInUp}
              className="text-gray-700 text-lg mb-8 leading-relaxed"
            >
              Mentorship creates the opportunity to learn, grow and move forward with confidence. 
              Through meaningful guidance and shared experience, we can turn ideas into action.
            </motion.p>
            <motion.div 
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="text-left max-w-md mx-auto mb-8 space-y-3"
            >
              <motion.div variants={fadeInLeft} className="flex items-start gap-3">
                <span className="text-red-600 text-xl font-bold">•</span>
                <span className="text-gray-700">Personalized guidance and support</span>
              </motion.div>
              <motion.div variants={fadeInLeft} className="flex items-start gap-3">
                <span className="text-red-600 text-xl font-bold">•</span>
                <span className="text-gray-700">Career and leadership development</span>
              </motion.div>
              <motion.div variants={fadeInLeft} className="flex items-start gap-3">
                <span className="text-red-600 text-xl font-bold">•</span>
                <span className="text-gray-700">Practical knowledge and experience</span>
              </motion.div>
            </motion.div>
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-red-600 text-white px-8 py-3 rounded font-bold hover:bg-red-700 transition inline-flex items-center gap-2"
            >
              START MENTORSHIP →
            </motion.button>
          </div>
        </motion.section>

        {/* Issues Section */}
        <motion.section 
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16"
        >
          {[
            'AFFORDABLE HOUSING',
            'PUBLIC SAFETY & POLICE REFORM',
            'CITY BUDGET & REVENUE',
            'JOBS & WORKERS',
            'ENVIRONMENTAL JUSTICE',
            'HEALTH CARE'
          ].map((title, index) => (
            <motion.div 
              key={index}
              variants={fadeInUp}
              whileHover={{ y: -5, boxShadow: "0 10px 30px rgba(0,0,0,0.1)" }}
              transition={{ duration: 0.3 }}
              className="bg-white p-6 rounded-lg shadow-sm border-l-4 border-red-600"
            >
              <h2 className="text-xl font-bold text-gray-800 mb-3">{title}</h2>
              <p className="text-gray-600 text-sm">
                Pulvinar sapien et ligula ullamcorper. Eget mi proin sed libero enim sed. 
                Euismod elementum nisi quis eleifend quam adipiscing vitae.
              </p>
            </motion.div>
          ))}
        </motion.section>

        {/* Experience Section */}
        <motion.section 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="mb-16 bg-white rounded-lg p-8 shadow-sm border border-red-600"
        >
          <motion.h2 
            variants={fadeInUp}
            className="text-3xl font-bold text-center text-red-600 mb-8"
          >
            LET MY EXPERIENCE WORK FOR OUR CITY
          </motion.h2>
          
          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {[
              { label: 'INRO', title: 'FOR A BETTER ECONOMY', desc: 'Quisque id diam vel quam elementum pulvinar. In arcu cursus euismod quis.' },
              { label: '2010S', title: 'THE HELP YOU NEED', desc: 'Dictum at tempor commodo ullamcorper a lacus vestibulum sed.' },
              { label: '2000S', title: 'COMMON SENSE SOLUTIONS', desc: 'Integer vitae justo eget magna. Rhoncus dolor purus non enim.' },
              { label: '2023RD', title: 'DEFENDING OUR VALUES', desc: 'Mauris sit amet massa vitae tortor condimentum lacinia quis.' }
            ].map((item, index) => (
              <motion.div 
                key={index}
                variants={fadeInUp}
                whileHover={{ y: -5, boxShadow: "0 10px 30px rgba(0,0,0,0.1)" }}
                transition={{ duration: 0.3 }}
                className="bg-gray-50 p-6 rounded-lg shadow-md border border-gray-200"
              >
                <div className="text-red-600 font-bold text-2xl mb-2">{item.label}</div>
                <h3 className="font-bold text-lg mb-2 text-gray-800">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.section>

        {/* Stats Section */}
        <motion.section 
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16 bg-white p-8 rounded-lg shadow-sm border border-red-600"
        >
          {[
            { number: '15+', label: 'Years in politics' },
            { number: '140', label: 'City area' },
            { number: '200+', label: 'Successful Programs' },
            { number: '12.3+', label: 'People in the city' }
          ].map((stat, index) => (
            <motion.div 
              key={index}
              variants={fadeInUp}
              className="text-center"
            >
              <motion.div 
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-4xl font-bold text-gray-800"
              >
                {stat.number}
              </motion.div>
              <div className="text-sm text-gray-600">{stat.label}</div>
            </motion.div>
          ))}
        </motion.section>

        {/* CTA Sections */}
        <motion.div 
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-8 mb-16"
        >
          <motion.div 
            variants={fadeInUp}
            whileHover={{ y: -5, boxShadow: "0 10px 30px rgba(0,0,0,0.1)" }}
            transition={{ duration: 0.3 }}
            className="bg-white p-8 rounded-lg shadow-sm border border-red-600"
          >
            <h3 className="text-2xl font-bold text-gray-800 mb-4">BECOME A VOLUNTEER</h3>
            <p className="text-gray-600 mb-6">
              Duis aute irure dolor in reprehenderit in voluptate velit esse cillum 
              dolore eu fugiat nulla pariatur
            </p>
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-red-600 text-white px-8 py-3 rounded font-bold hover:bg-red-700 transition"
            >
              READ MORE
            </motion.button>
          </motion.div>

          <motion.div 
            variants={fadeInUp}
            whileHover={{ y: -5, boxShadow: "0 10px 30px rgba(0,0,0,0.1)" }}
            transition={{ duration: 0.3 }}
            className="bg-white p-8 rounded-lg shadow-sm border border-red-600"
          >
            <h3 className="text-2xl font-bold text-gray-800 mb-4">CONTRIBUTE TO BETH MURPHY</h3>
            <p className="text-gray-600 mb-6">
              Duis aute irure dolor in reprehenderit in voluptate velit esse cillum 
              dolore eu fugiat nulla pariatur
            </p>
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-red-600 text-white px-8 py-3 rounded font-bold hover:bg-red-700 transition"
            >
              READ MORE
            </motion.button>
          </motion.div>
        </motion.div>

        {/* Events Section */}
        <motion.section 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="mb-16"
        >
          <motion.h3 
            variants={fadeInUp}
            className="text-2xl font-bold text-center text-red-600 mb-6"
          >
            FIND US AT THESE EVENTS
          </motion.h3>
          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-3 gap-4"
          >
            {['WORLD CONGRESS – VIRTUAL', 'WORLD CONGRESS – VIRTUAL', 'ELECTION DAY IS COMING'].map((event, index) => (
              <motion.div 
                key={index}
                variants={fadeInUp}
                whileHover={{ y: -5, boxShadow: "0 10px 30px rgba(0,0,0,0.1)" }}
                transition={{ duration: 0.3 }}
                className="bg-white p-4 rounded-lg shadow-sm border border-red-600 text-center"
              >
                <div className={`font-bold ${index === 2 ? 'text-red-600' : 'text-gray-800'}`}>
                  {event}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.section>

        {/* Latest News Section */}
        <motion.section 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="mb-16"
        >
          <motion.h3 
            variants={fadeInUp}
            className="text-2xl font-bold text-center text-red-600 mb-6"
          >
            LATEST NEWS
          </motion.h3>
          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-4"
          >
            {['2019', '2021', '2019', '2022'].map((year, index) => (
              <motion.div 
                key={index}
                variants={fadeInUp}
                whileHover={{ y: -5, boxShadow: "0 10px 30px rgba(0,0,0,0.1)" }}
                transition={{ duration: 0.3 }}
                className="bg-white p-4 rounded-lg shadow-sm border border-red-600"
              >
                <div className="text-sm text-gray-500 mb-2">JUNE 23, 2018</div>
                <div className="font-bold text-gray-800 mb-2">CORONAVIRUS DISEASE {year}</div>
                <motion.button 
                  whileHover={{ x: 5 }}
                  className="text-red-600 text-sm font-semibold hover:text-red-700 transition"
                >
                  READ MORE →
                </motion.button>
              </motion.div>
            ))}
          </motion.div>
        </motion.section>

        {/* Newsletter Section */}
        <motion.section 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="bg-white p-8 rounded-lg shadow-sm border border-red-600 mb-8"
        >
          <motion.h3 
            variants={fadeInUp}
            className="text-2xl font-bold text-center text-red-600 mb-4"
          >
            SUBSCRIBE TO OUR NEWSLETTER
          </motion.h3>
          <motion.p 
            variants={fadeInUp}
            className="text-center text-gray-600 mb-6"
          >
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum 
            dolore eu fugiat nulla pariatur
          </motion.p>
          <motion.div 
            variants={fadeInUp}
            className="max-w-md mx-auto flex flex-col sm:flex-row gap-4"
          >
            <input 
              type="email" 
              placeholder="Enter your email" 
              className="flex-1 px-4 py-3 rounded border border-gray-300 bg-gray-50 text-gray-800 focus:outline-none focus:border-red-600"
            />
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-red-600 text-white px-6 py-3 rounded font-bold hover:bg-red-700 transition"
            >
              Submit
            </motion.button>
          </motion.div>
        </motion.section>

        {/* Footer */}
        <motion.footer 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="border-t-2 border-red-600 pt-8 pb-4"
        >
          <div className="grid md:grid-cols-2 gap-4 text-sm">
            <div className="text-gray-600">
              <div className="font-bold text-gray-800">EVENTS</div>
            </div>
            <div className="text-right text-gray-600">
              <div>GRAPHIC DESIGN BY: [INSERT NAME]</div>
              <div>DESIGNED BY: [INSERT NAME]</div>
            </div>
          </div>
        </motion.footer>
      </main>
    </div>
  );
};

export default CampaignLandingPage;