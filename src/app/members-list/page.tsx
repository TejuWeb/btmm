import { dataStore, Registration } from "@/lib/data-store";

const hardcodedMembers = [
  { name: "राहुल कांबळे", village: "मुख्य गाव", date: "25 मार्च 2025" },
  { name: "प्रिया गायकवाड", village: "शिवाजी नगर", date: "22 मार्च 2025" },
  { name: "अमोल वाघमारे", village: "आंबेडकर चौक", date: "18 मार्च 2025" },
  { name: "सुनीता भोसले", village: "मुख्य गाव", date: "15 मार्च 2025" },
  { name: "विकास जाधव", village: "बुद्ध विहार जवळ", date: "10 मार्च 2025" },
  { name: "नितीन सोनवणे", village: "सिद्धार्थ नगर", date: "05 मार्च 2025" },
];

export default function MembersListPage() {
  const [dynamicMembers, setDynamicMembers] = React.useState<Registration[]>([]);

  React.useEffect(() => {
    setDynamicMembers(dataStore.getRegistrations());
  }, []);

  const allMembers = [
    ...dynamicMembers.map(m => ({ 
      name: m.name, 
      village: m.address.length > 20 ? m.address.substring(0, 20) + "..." : m.address, 
      date: m.date,
      isPending: m.status === 'pending'
    })),
    ...hardcodedMembers
  ];
  return (
    <div className="min-h-screen bg-slate-50 dark:bg-[#0a0e1a] py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <Link href="/" className="inline-flex items-center gap-2 text-foreground/40 hover:text-accent-blue transition-colors mb-12 group">
          <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" />
          <span>परत जा</span>
        </Link>
        
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-8 mb-12">
          <div>
            <h1 className="text-4xl md:text-5xl font-extrabold text-primary-navy dark:text-white mb-4">
              सक्रिय <span className="text-accent-blue">सभासद</span>
            </h1>
            <p className="text-foreground/60 text-lg">
              मंडळाचे अधिकृत नोंदणीकृत सभासद.
            </p>
          </div>
          <div className="bg-white dark:bg-white/5 p-4 rounded-2xl shadow-sm border border-slate-100 dark:border-white/10 flex items-center gap-3 w-full md:w-64">
            <Search size={18} className="text-foreground/30" />
            <input type="text" placeholder="शोधा..." className="bg-transparent border-none outline-none text-sm w-full" />
          </div>
        </div>

        <div className="grid gap-4 overflow-hidden">
          <div className="hidden md:grid grid-cols-4 px-8 py-4 text-[10px] font-bold text-foreground/30 uppercase tracking-widest border-b border-slate-100 dark:border-white/5">
            <div className="col-span-2">सभासदाचे नाव</div>
            <div>गाव / विभाग</div>
            <div className="text-right">नोंदणी दिनांक</div>
          </div>
          {allMembers.map((member, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.05 }}
              className="bg-white dark:bg-white/5 p-6 md:px-8 md:py-6 rounded-[2rem] border border-slate-100 dark:border-white/10 shadow-sm flex flex-col md:grid md:grid-cols-4 md:items-center gap-4 group hover:border-accent-blue/30 transition-all hover:shadow-xl hover:shadow-accent-blue/5"
            >
              <div className="col-span-2 flex items-center gap-6">
                <div className="w-12 h-12 bg-accent-blue/10 text-accent-blue rounded-2xl flex items-center justify-center font-bold text-lg group-hover:bg-accent-blue group-hover:text-white transition-all">
                  {member.name[0]}
                </div>
                <div>
                  <h3 className="font-bold text-lg text-primary-navy dark:text-white group-hover:text-accent-blue transition-colors flex items-center gap-2">
                    {member.name}
                    <div className={`flex items-center gap-1 text-[8px] font-bold ${('isPending' in member && member.isPending) ? 'text-amber-500 bg-amber-500/10' : 'text-green-500 bg-green-500/10'} px-2 py-0.5 rounded-full uppercase tracking-tighter`}>
                      <UserCheck size={10} />
                      {('isPending' in member && member.isPending) ? 'प्रलंबित' : 'अधिकृत'}
                    </div>
                  </h3>
                  <p className="text-foreground/30 text-xs md:hidden">{member.village}</p>
                </div>
              </div>
              <div className="hidden md:block">
                <span className="text-sm font-semibold text-foreground/50">{member.village}</span>
              </div>
              <div className="text-right flex items-center justify-between md:justify-end gap-4">
                <span className="text-xs text-foreground/30 md:hidden font-bold uppercase tracking-widest">नोंदणी:</span>
                <span className="text-sm font-medium text-foreground/40">{member.date}</span>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 bg-gradient-to-br from-primary-navy to-accent-blue p-10 rounded-[3rem] text-white text-center">
            <h3 className="text-2xl font-bold mb-4">तुम्हाला तुमचे नाव दिसत नाहीये?</h3>
            <p className="text-white/70 mb-8">नवीन नोंदणीसाठी खालील बटण दाबा.</p>
            <Link href="/register">
                <button className="px-10 py-4 bg-white text-primary-navy font-bold rounded-2xl shadow-xl hover:bg-gold hover:text-white transition-all">
                    नोंदणी करा
                </button>
            </Link>
        </div>
      </div>
    </div>
  );
}
