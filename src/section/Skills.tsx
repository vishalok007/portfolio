import { useState } from "react";
import SectionTitle from "../components/SectionTitle";
import SkillCard from "../components/SkillCard";
import { portfolio } from "../constants/portfolio";
import {
  Bot,
  Brain,
  Cpu,
  Zap,
  Flame,
  BarChart3,
  Eye,
  Server,
  Database,
  Table,
  Code2,
  Layout,
  Terminal
} from "lucide-react";

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState("All");

  const categories = ["All", ...portfolio.skillsCategories.map((c) => c.category)];

  // Map icon name string to Lucide React Node
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case "Bot": return <Bot className="w-6 h-6" />;
      case "Brain": return <Brain className="w-6 h-6" />;
      case "Cpu": return <Cpu className="w-6 h-6" />;
      case "Zap": return <Zap className="w-6 h-6" />;
      case "Flame": return <Flame className="w-6 h-6" />;
      case "BarChart3": return <BarChart3 className="w-6 h-6" />;
      case "Eye": return <Eye className="w-6 h-6" />;
      case "Server": return <Server className="w-6 h-6" />;
      case "Database": return <Database className="w-6 h-6" />;
      case "Table": return <Table className="w-6 h-6" />;
      case "Code2": return <Code2 className="w-6 h-6" />;
      case "Layout": return <Layout className="w-6 h-6" />;
      default: return <Terminal className="w-6 h-6" />;
    }
  };

  const filteredCategories = activeCategory === "All"
    ? portfolio.skillsCategories
    : portfolio.skillsCategories.filter((c) => c.category === activeCategory);

  return (
    <section id="skills" className="relative py-24 bg-black text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionTitle
          subtitle="Technical Expertise"
          title="Tools & Frameworks I Master"
        />

        {/* Category Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all duration-200 ${
                activeCategory === cat
                  ? "bg-white text-black font-semibold shadow-lg shadow-white/10"
                  : "bg-white/5 border border-white/10 text-white/70 hover:text-white hover:bg-white/10"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Skills Grid */}
        <div className="space-y-12">
          {filteredCategories.map((catGroup) => (
            <div key={catGroup.category} className="space-y-6">
              {activeCategory === "All" && (
                <div className="flex items-center gap-3">
                  <h3 className="text-xl font-medium text-white/90 font-mono tracking-wide">
                    // {catGroup.category}
                  </h3>
                  <div className="flex-1 h-px bg-white/10" />
                </div>
              )}

              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {catGroup.skills.map((skill) => (
                  <SkillCard
                    key={skill.name}
                    icon={getIcon(skill.icon)}
                    title={skill.name}
                    description={skill.description}
                    level={skill.level}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}