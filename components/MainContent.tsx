import React from 'react';

interface Activity {
  title: string;
  color: string;
}

const MainContent: React.FC = () => {
  const activities: Activity[] = [
    { title: 'Rides', color: 'bg-secondary' },
    { title: 'What to bring', color: 'bg-tertiary' },
    { title: 'Stage program', color: 'bg-quaternary' },
    { title: 'What to buy', color: 'bg-quinary' },
    { title: 'How to donate', color: 'bg-purple-600' },
    { title: 'Sponsors', color: 'bg-primary' },
  ];

  return (
    <section className="py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row">
          {/* Key Info */}
          <div className="w-full md:w-1/3 mb-8 md:mb-0">
            <h2 className="text-3xl font-bold mb-4">KEY INFO</h2>
            <div className="space-y-2">
              <p className="font-bold text-xl">19 October 2024</p>
              <p className="font-bold text-xl">12noon - 9pm</p>
              <p className="font-bold text-xl">Gregory Park, Milton</p>
            </div>
          </div>
          
          {/* Activities */}
          <div className="w-full md:w-2/3">
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {activities.map((activity, index) => (
                <div key={index} className={`${activity.color} p-6 flex items-center justify-center`}>
                  <h3 className="text-xl font-bold text-white text-center">{activity.title}</h3>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MainContent;