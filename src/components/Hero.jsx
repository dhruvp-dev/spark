const Hero = () => (
  <header className="relative pt-40 pb-24 overflow-hidden bg-off-white">
    <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
      <div>
        <div className="inline-flex items-center gap-2 px-3 py-1 mb-8 bg-black text-white text-[10px] font-bold uppercase tracking-[0.2em]">
          // Digital Transformation //
        </div>
        <h1 className="text-6xl md:text-8xl font-black leading-[0.9] mb-8">
          Spark Que <br/><span className="text-black/20">Tech Solutions</span>
        </h1>
        <p className="text-xl text-dark/60 mb-12 max-w-lg leading-relaxed font-medium">
          "Our wish to accomplish your wish." Bridging the gap between complex technology and business success with brutalist precision.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <a href="#contact" className="px-10 py-5 bg-dark text-white text-center text-xs font-black uppercase tracking-widest hover:bg-brand transition-all">
            Get Free Consultation
          </a>
          <a href="#services" className="px-10 py-5 border-2 border-dark text-dark text-center text-xs font-black uppercase tracking-widest hover:bg-dark hover:text-white transition-all">
            Our Services
          </a>
        </div>
      </div>

      <div className="relative grid grid-cols-2 gap-4">
        <div className="bg-white p-2 border border-black/5 aspect-square flex items-center justify-center">
          <span className="material-symbols-outlined text-9xl text-dark/10">terminal</span>
        </div>
        <div className="bg-dark aspect-square flex flex-col justify-end p-8">
          <div className="text-brand text-4xl font-black mb-2">150+</div>
          <div className="text-white/40 text-[10px] font-bold uppercase tracking-widest">Global Projects</div>
        </div>
        <div className="bg-white border border-black/5 aspect-[4/5] overflow-hidden">
          <img alt="Office" className="w-full h-full object-cover grayscale" src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80" />
        </div>
        <div className="bg-brand aspect-[4/5] flex items-center justify-center">
          <span className="material-symbols-outlined text-7xl text-white">bolt</span>
        </div>
      </div>
    </div>
  </header>
);

export default Hero;