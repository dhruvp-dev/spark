import logo from "../assets/spark_logo.png";


const Footer = () => {
  return (
    <footer className="bg-off-white text-dark pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-24">
          <div className="space-y-8">
            <img alt="Logo" className="h-20" src={logo} />
            <p className="text-dark/50 text-sm font-medium leading-relaxed">
              Innovating for the future, one spark at a time. Your partner in digital transformation.
            </p>
            <div className="flex gap-4">
              <SocialIcon d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
              <SocialIcon d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
            </div>
          </div>
          
          <FooterLinks title="Navigation" links={['Home', 'About Us', 'Our Services', 'Why Choose Us']} />
          <FooterLinks title="Expertise" links={['Custom Software', 'Cloud Infrastructure', 'Digital Strategy', 'Global Staffing']} />
          
          <div>
            <h4 className="font-black text-xs uppercase tracking-[0.2em] mb-8">Newsletter</h4>
            <div className="flex flex-col gap-4">
              <input className="bg-transparent border-b-2 border-dark/10 py-2 text-sm font-bold focus:border-brand outline-none" placeholder="Enter email" />
              <button className="bg-dark text-white py-3 text-[10px] font-black uppercase tracking-widest hover:bg-brand transition-all">Join Now</button>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-black/5 flex flex-col md:flex-row justify-between items-center text-[10px] font-bold uppercase tracking-widest text-dark/30">
          <div>© {new Date().getFullYear()} Spark Que Tech Solutions.</div>
          <div className="flex gap-8">
            <a href="#" className="hover:text-dark">Privacy Policy</a>
            <a href="#" className="hover:text-dark">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

const SocialIcon = ({ d }) => (
  <a href="#" className="w-10 h-10 border border-black/10 flex items-center justify-center hover:bg-brand hover:text-white transition-all">
    <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d={d}></path></svg>
  </a>
);

const FooterLinks = ({ title, links }) => (
  <div>
    <h4 className="font-black text-xs uppercase tracking-[0.2em] mb-8">{title}</h4>
    <ul className="space-y-4 text-dark/50 text-xs font-bold uppercase tracking-widest">
      {links.map(l => <li key={l}><a href="#" className="hover:text-brand transition-colors">{l}</a></li>)}
    </ul>
  </div>
);

export default Footer;