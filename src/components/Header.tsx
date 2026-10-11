import React from "react";
import { ShieldCheck, Globe, Mail, Printer } from "lucide-react";

interface HeaderProps {
  currentTab: "privacy" | "terms";
  onTabChange: (tab: "privacy" | "terms") => void;
  lang: "pt" | "en";
  onLangToggle: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  currentTab,
  onTabChange,
  lang,
  onLangToggle,
}) => {
  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-8 h-16">
          {/* Zone 1: Single text element wordmark */}
          <a
            href="#identificacao"
            className="flex items-center gap-2.5 text-lg font-bold tracking-tight text-slate-900 whitespace-nowrap shrink-0 hover:text-blue-700 transition-colors"
          >
            <ShieldCheck className="w-5 h-5 text-blue-600 shrink-0" />
            <span>Controle Financeiro PRO</span>
          </a>

          {/* Zone 2: Clean single-line text navigation links */}
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-600">
            <button
              type="button"
              onClick={() => onTabChange("privacy")}
              className={`hover:text-slate-900 transition-colors whitespace-nowrap shrink-0 pb-1 cursor-pointer ${
                currentTab === "privacy"
                  ? "text-blue-700 font-semibold border-b-2 border-blue-600"
                  : ""
              }`}
            >
              {lang === "pt" ? "Política de Privacidade" : "Privacy Policy"}
            </button>
            <button
              type="button"
              onClick={() => onTabChange("terms")}
              className={`hover:text-slate-900 transition-colors whitespace-nowrap shrink-0 pb-1 cursor-pointer ${
                currentTab === "terms"
                  ? "text-blue-700 font-semibold border-b-2 border-blue-600"
                  : ""
              }`}
            >
              {lang === "pt" ? "Termos de Uso" : "Terms of Service"}
            </button>
            <a
              href="mailto:controlefinanceiropro@gmail.com"
              className="flex items-center gap-1.5 hover:text-slate-900 transition-colors whitespace-nowrap shrink-0 pb-1"
            >
              <Mail className="w-3.5 h-3.5 text-slate-400" />
              <span>{lang === "pt" ? "Suporte" : "Support"}</span>
            </a>
          </nav>

          {/* Zone 3: 1 primary action block with language toggle & print */}
          <div className="flex items-center gap-3 shrink-0">
            <button
              type="button"
              onClick={() => window.print()}
              title={lang === "pt" ? "Imprimir ou Salvar PDF" : "Print or Save PDF"}
              className="hidden sm:flex items-center gap-1.5 px-2.5 py-1.5 text-xs font-medium text-slate-700 hover:text-slate-900 bg-slate-100 hover:bg-slate-200 rounded-lg transition-colors cursor-pointer whitespace-nowrap shrink-0"
            >
              <Printer className="w-3.5 h-3.5 text-slate-500" />
              <span>{lang === "pt" ? "Imprimir" : "Print"}</span>
            </button>

            <button
              type="button"
              onClick={onLangToggle}
              title={lang === "pt" ? "Switch to English" : "Mudar para Português"}
              className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-slate-700 hover:text-slate-900 bg-slate-100 hover:bg-slate-200 rounded-lg transition-colors cursor-pointer whitespace-nowrap shrink-0"
            >
              <Globe className="w-3.5 h-3.5 text-slate-500" />
              <span>{lang === "pt" ? "EN (US)" : "PT (BR)"}</span>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};
