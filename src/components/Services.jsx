const ServiceCard = ({ icon, title, desc, tags, img }) => (
  <div className="group flex flex-col border border-black/5 rounded-[2.5rem] overflow-hidden bg-white hover:border-brand/30 transition-all duration-500">
    <div className="p-10 flex-1">
      <div className="w-14 h-14 bg-off-white flex items-center justify-center rounded-2xl mb-8 group-hover:bg-brand group-hover:text-white transition-colors duration-500">
        <span className="material-symbols-outlined text-3xl">{icon}</span>
      </div>
      <h3 className="text-2xl font-black mb-4 leading-tight">{title}</h3>
      <p className="text-dark/50 text-sm leading-relaxed mb-8 font-medium">{desc}</p>
      <div className="flex flex-wrap gap-2">
        {tags.map(tag => (
          <span key={tag} className="px-3 py-1 bg-off-white border border-black/5 rounded-full text-[10px] font-bold uppercase tracking-wider text-dark/60">
            {tag}
          </span>
        ))}
      </div>
    </div>
    <div className="h-48 overflow-hidden grayscale group-hover:grayscale-0 transition-all duration-700">
      <img alt={title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" src={img} />
    </div>
  </div>
);

const Services = () => {
  const serviceData = [
    {
      icon: "language",
      title: "Web Development",
      desc: "High-performance, scalable web applications built with the latest frameworks and focused on user experience.",
      tags: ["React", "Next.js", "Tailwind"],
      img: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=800"
    },
    {
      icon: "trending_up",
      title: "Digital Marketing & SEO",
      desc: "Data-driven strategies to boost your online presence and ensure your brand reaches the right audience.",
      tags: ["Growth", "Ads", "Analytics"],
      img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800"
    },
    {
      icon: "database",
      title: "Data Analytics & CRM",
      desc: "Unlocking insights from your data and optimizing customer relationships to drive smarter business decisions.",
      tags: ["Python", "Salesforce", "BI"],
      img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      icon: "groups",
      title: "IT Staff Augmentation",
      desc: "Bridge your talent gap with our elite pool of developers and engineers who integrate seamlessly into your team.",
      tags: ["Dedicated", "Vetted", "Global"],
      img: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=800"
    }
  ];

  return (
    <section className="py-32 bg-off-white" id="services">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
          <div className="max-w-2xl">
            <div className="inline-block px-3 py-1 mb-6 bg-dark text-white text-[10px] font-bold uppercase tracking-[0.2em]">
              // Expertise //
            </div>
            <h2 className="text-5xl md:text-7xl font-black leading-none">Our Core <span className="">Services.</span></h2>
          </div>
          <p className="text-dark/50 max-w-xs text-sm font-medium mb-2 border-l-2 border-brand pl-4">
            We provide end-to-end technical solutions designed for the modern digital landscape.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {serviceData.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;