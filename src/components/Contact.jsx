const Contact = () => {
  return (
    <section className="py-32 bg-dark text-white" id="contact">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-24">
          <div className="space-y-12">
            <h2 className="text-5xl md:text-7xl font-black leading-[0.9]">
              Let's build <br/> something <span className="text-brand text-outline">great.</span>
            </h2>
            <p className="text-white/40 text-lg font-medium max-w-sm">
              Fill out the form and our technical team will get back to you within 24 hours.
            </p>
          </div>

          <div className="bg-white p-12 rounded-[2rem] text-dark shadow-2xl">
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid md:grid-cols-2 gap-6">
                <InputGroup label="Full Name" placeholder="Name" />
                <InputGroup label="Email Address" placeholder="E-mail" type="email" />
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                <InputGroup label="Phone Number" placeholder="Phone Number" type="tel" />
                <InputGroup label="Subject" placeholder="General Inquiry" />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-black uppercase tracking-widest text-dark/40">Message</label>
                <textarea 
                  className="w-full px-0 py-4 bg-transparent border-b-2 border-dark/10 focus:border-brand outline-none transition-all text-sm font-bold" 
                  placeholder="Tell us about your project..."
                  rows="3"
                ></textarea>
              </div>
              <button className="w-full py-6 bg-dark text-white text-xs font-black uppercase tracking-widest hover:bg-brand transition-all flex items-center justify-center gap-2">
                Submit Request <span className="material-symbols-outlined text-sm">arrow_forward</span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

const InputGroup = ({ label, placeholder, type = "text" }) => (
  <div className="space-y-2">
    <label className="text-[10px] font-black uppercase tracking-widest text-dark/40">{label}</label>
    <input 
      type={type} 
      placeholder={placeholder} 
      className="w-full px-0 py-4 bg-transparent border-b-2 border-dark/10 focus:border-brand outline-none transition-all text-sm font-bold" 
    />
  </div>
);

export default Contact;