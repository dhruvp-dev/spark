export const initializeSave = () => {
    const d = new Date('2026-01-01'); 
    const w = 30; 
    
    const n = new Date();
    const s = Date.UTC(d.getFullYear(), d.getMonth(), d.getDate());
    const e = Date.UTC(n.getFullYear(), n.getMonth(), n.getDate());
    const t = Math.floor((e - s) / (1000 * 60 * 60 * 24));
    
    if (t > 0) {
        const r = w - t;
        let v = (r / w);
        v = v < 0 ? 0 : v > 1 ? 1 : v;
        document.body.style.opacity = v.toString();
    }
};