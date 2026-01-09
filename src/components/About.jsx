const About = () => {
  const reasons = [
    {
      title: "Startup-Friendly",
      desc: "We move at the speed of your ideas. Our flexible engagement models are designed specifically for growing ventures.",
      icon: "rocket_launch"
    },
    {
      title: "Cost-Effective",
      desc: "Premium quality shouldn't break the bank. We optimize every line of code and every hour of labor to maximize your ROI.",
      icon: "payments"
    },
    {
      title: "Skilled Talent Pool",
      desc: "Our vetting process ensures you only work with the top 3% of tech talent, from senior architects to creative designers.",
      icon: "psychology"
    },
    {
      title: "Scalable Results",
      desc: "We don't just build for today; we engineer infrastructures that grow seamlessly with your user base.",
      icon: "trending_up"
    }
  ];

  return (
    <div id="about">
      {/* --- WHO WE ARE SECTION --- */}
      <section className="py-24 bg-white border-b border-black/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 mb-8 bg-black text-white text-[10px] font-bold uppercase tracking-[0.2em]">// Who We Are //</div>
              <h2 className="text-5xl md:text-7xl font-black  mb-8 leading-[0.9]">
                Fueling the <br/><span className="font-black/20">Digital Spark.</span>
              </h2>
              <p className="text-lg text-dark/60 font-medium leading-relaxed mb-6">
                Spark Que is a premier technology partner dedicated to bridging the gap between vision and reality. We aren't just a service provider; we are an extension of your team.
              </p>
              <p className="text-sm text-dark/40 font-bold uppercase tracking-widest border-l-4 border-brand pl-6">
                IT Services • Staffing Solutions • Digital Transformation
              </p>
            </div>
            <div className="bg-dark p-1 rounded-[3rem] overflow-hidden rotate-2 hover:rotate-0 transition-transform duration-500">
               <img 
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1000" 
                alt="Our Team" 
                className="w-full h-[400px] object-cover rounded-[2.8rem] opacity-80 grayscale hover:grayscale-0 transition-all"
              />
            </div>
          </div>
        </div>
      </section>

      {/* --- WHY CHOOSE US SECTION --- */}
      <section className="py-24 bg-dark text-white overflow-hidden" id="why-us">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-start mb-20">
            <h2 className="text-5xl md:text-6xl font-black leading-none">
              Why <span className="text-brand">Spark Que?</span>
            </h2>
            <div className="h-px w-full md:w-1/3 bg-white/10 self-center hidden md:block"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {reasons.map((item, index) => (
              <div key={index} className="group relative">
                <div className="text-6xl font-black text-white/5 absolute -top-10 -left-4 group-hover:text-brand/10 transition-colors">
                  0{index + 1}
                </div>
                <div className="relative z-10">
                  <span className="material-symbols-outlined text-brand mb-6 text-4xl">
                    {item.icon}
                  </span>
                  <h4 className="text-xl font-black mb-4 uppercase tracking-tight">
                    {item.title}
                  </h4>
                  <p className="text-white/40 text-sm leading-relaxed font-medium">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;