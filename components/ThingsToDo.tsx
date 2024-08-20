import React from 'react';

interface Activity {
  title: string;
  description: string;
  icon: React.ReactNode;
  color: string;
}

const ThingsToDo: React.FC = () => {
  const activities: Activity[] = [
    {
      title: "Facepainting & Art",
      description: "It must have more than one answer.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-12 h-12">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-5-9c.83 0 1.5-.67 1.5-1.5S7.83 8 7 8s-1.5.67-1.5 1.5S6.17 11 7 11zm3-4c.83 0 1.5-.67 1.5-1.5S10.83 4 10 4s-1.5.67-1.5 1.5S9.17 7 10 7zm5 0c.83 0 1.5-.67 1.5-1.5S15.83 4 15 4s-1.5.67-1.5 1.5S14.17 7 15 7zm3 4c.83 0 1.5-.67 1.5-1.5S18.83 8 18 8s-1.5.67-1.5 1.5S17.17 11 18 11z" />
        </svg>
      ),
      color: "bg-yellow-400",
    },
    {
      title: "Emergency Vehicles",
      description: "It must apply to more than one person.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-12 h-12">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z" />
        </svg>
      ),
      color: "bg-green-500",
    },
    {
      title: "Movie",
      description: "It requires some statistical methods to answer.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-12 h-12">
          <path d="M18 4l2 4h-3l-2-4h-2l2 4h-3l-2-4H8l2 4H7L5 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V4h-4z" />
        </svg>
      ),
      color: "bg-orange-400",
    },
  ];

  return (
    <section className="bg-tertiary py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-white mb-4">Things to do</h2>
        <p className="text-xl text-center text-white mb-8">Add your group&apos;s statistical question here.</p>
        <div className="flex flex-wrap justify-center gap-8">
          {activities.map((activity, index) => (
            <div key={index} className={`w-full sm:w-64 ${activity.color} rounded-t-full pt-8 pb-4 px-4 text-center relative overflow-hidden`}>
              <div className="absolute top-4 left-1/2 transform -translate-x-1/2 text-white">
                {activity.icon}
              </div>
              <h3 className="text-2xl font-bold mt-12 mb-2 text-white">{activity.title}</h3>
              <p className="text-sm text-white">{activity.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ThingsToDo;