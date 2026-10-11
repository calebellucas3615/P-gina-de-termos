import React from "react";
import { LegalSection } from "../data/privacyContentPt";
import { CheckCircle2, Star } from "lucide-react";

interface TableOfContentsProps {
  sections: LegalSection[];
  activeSection: string;
  onSelectSection: (id: string) => void;
  lang: "pt" | "en";
}

export const TableOfContents: React.FC<TableOfContentsProps> = ({
  sections,
  activeSection,
  onSelectSection,
  lang,
}) => {
  return (
    <aside className="w-full lg:w-72 shrink-0">
      <div className="sticky top-24 bg-white rounded-xl border border-slate-200 p-4 shadow-xs">
        <div className="flex items-center justify-between pb-3 mb-3 border-b border-slate-100">
          <h3 className="text-xs font-bold uppercase tracking-wider text-slate-500">
            {lang === "pt" ? "Índice de Cláusulas" : "Table of Contents"}
          </h3>
          <span className="text-xs font-mono text-slate-400">
            {sections.length} {lang === "pt" ? "seções" : "sections"}
          </span>
        </div>

        <nav className="space-y-1 max-h-[calc(100vh-180px)] overflow-y-auto pr-1">
          {sections.map((section) => {
            const isActive = activeSection === section.id;
            return (
              <button
                key={section.id}
                type="button"
                onClick={() => onSelectSection(section.id)}
                className={`w-full text-left flex items-start gap-2.5 px-2.5 py-2 rounded-lg text-xs transition-colors cursor-pointer ${
                  isActive
                    ? "bg-blue-50 text-blue-900 font-semibold"
                    : "text-slate-600 hover:text-slate-900 hover:bg-slate-50 font-medium"
                }`}
              >
                <span
                  className={`font-mono text-[11px] shrink-0 mt-0.5 ${
                    isActive ? "text-blue-700" : "text-slate-400"
                  }`}
                >
                  {section.number}
                </span>
                <span className="line-clamp-2 leading-relaxed">
                  {section.title}
                </span>
                {section.highlight && (
                  <span
                    title={
                      lang === "pt"
                        ? "Cláusula obrigatória da Google API Services User Data Policy"
                        : "Mandatory Google Limited Use clause"
                    }
                    className="shrink-0 text-amber-500 mt-0.5"
                  >
                    <Star className="w-3 h-3 fill-amber-400" />
                  </span>
                )}
              </button>
            );
          })}
        </nav>

        <div className="mt-4 pt-3 border-t border-slate-100 text-[11px] text-slate-500 flex items-center gap-1.5">
          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
          <span>{lang === "pt" ? "Google OAuth & Drive API Compliant" : "Google OAuth & Drive API Compliant"}</span>
        </div>
      </div>
    </aside>
  );
};
