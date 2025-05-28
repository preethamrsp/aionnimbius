import React from 'react';

const magentoupgrade: React.FC = () => {
  return (
    <div className="pt-24 px-6 md:px-12 lg:px-32 pb-20 text-slate-800">
     {/* Title */}
<h1 className="text-3xl md:text-5xl font-bold text-center my-10">
  Magento Upgrade Service for an Online Store on <span className="italic">AWS</span>
</h1>


      {/* Intro Paragraph */}
      <p className="text-lg text-center text-slate-600 max-w-3xl mx-auto mb-12">
        Discover how we carried out a Magento upgrade on AWS from version 2.3 to version 2.4 with minimal downtime for the client’s platform.
      </p>

      {/* Section: Our Customer */}
      <div className="mb-12">
        <h2 className="text-2xl font-semibold text-slate-900 mb-2">Our Customer</h2>
        <p className="text-slate-600">
          Gorgany is a huge retail, wholesale & distribution company of outdoor equipment in Ukraine. The company specializes in the wholesale trade of goods for tourism, mountaineering, skiing, and active recreation.
        </p>
      </div>

      {/* Section: The Obstacles They Faced */}
      <div>
        <h2 className="text-2xl font-semibold text-slate-900 mb-2">The Obstacles They Faced</h2>
        <p className="text-slate-600">
          The client needed to transition from Magento 2.3 to 2.4 with minimal downtime, and avoiding any potential technical difficulties during the migration. As interruption could directly lead to decreased purchases, making a seamless upgrade was crucial to ensure operational continuity and prevent negative commercial impacts.
        </p>
      </div>
    </div>
  );
};

export default magentoupgrade;
