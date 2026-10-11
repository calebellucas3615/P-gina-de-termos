import React, { useState, useEffect } from "react";
import { Header } from "./components/Header";
import { TableOfContents } from "./components/TableOfContents";
import { PrivacyView } from "./components/PrivacyView";
import { TermsView } from "./components/TermsView";
import { Footer } from "./components/Footer";
import { PRIVACY_POLICY_PT } from "./data/privacyContentPt";
import { PRIVACY_POLICY_EN } from "./data/privacyContentEn";
import {
  ShieldCheck,
  FileText,
  Printer,
  ChevronRight
} from "lucide-react";

export default function App() {
  const [currentTab, setCurrentTab] = useState<"privacy" | "terms">("privacy");
  const [lang, setLang] = useState<"pt" | "en">("pt");
  const [activeSection, setActiveSection] = useState<string>("identificacao");

  const policy = lang === "pt" ? PRIVACY_POLICY_PT : PRIVACY_POLICY_EN;

  const handleSelectSection = (id: string) => {
    setActiveSection(id);
    if (currentTab !== "privacy") {
      setCurrentTab("privacy");
    }
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleToggleLang = () => {
    setLang((prev) => (prev === "pt" ? "en" : "pt"));
  };

  useEffect(() => {
    const handleHash = () => {
      const hash = window.location.hash.replace("#", "");
      if (hash) {
        if (hash === "terms") {
          setCurrentTab("terms");
        } else {
          setActiveSection(hash);
        }
      }
    };
    handleHash();
    window.addEventListener("hashchange", handleHash);
    return () => window.removeEventListener("hashchange", handleHash);
  }, []);

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 flex flex-col font-sans">
      {/* Top Bar following Top Bar Contract */}
      <Header
        currentTab={currentTab}
        onTabChange={setCurrentTab}
        lang={lang}
        onLangToggle={handleToggleLang}
      />

      {/* Main Content Area */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 pt-6 pb-12">
        {/* Navigation Breadcrumb & Document Mode Tabs */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 mb-6 border-b border-slate-200">
          <div className="flex items-center gap-1.5 text-xs text-slate-500">
            <span>Controle Financeiro PRO</span>
            <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
            <span className="font-semibold text-slate-800">
              {currentTab === "privacy"
                ? lang === "pt"
                  ? "Política de Privacidade"
                  : "Privacy Policy"
                : lang === "pt"
                ? "Termos de Uso"
                : "Terms of Service"}
            </span>
          </div>

          {/* Interactive Document Switcher Tabs (Functional Buttons) */}
          <div className="flex items-center gap-1 p-1 bg-slate-200/70 rounded-lg shrink-0">
            <button
              type="button"
              onClick={() => setCurrentTab("privacy")}
              className={`flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold rounded-md transition-all cursor-pointer ${
                currentTab === "privacy"
                  ? "bg-white text-blue-900 shadow-xs"
                  : "text-slate-600 hover:text-slate-900"
              }`}
            >
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>{lang === "pt" ? "Política de Privacidade" : "Privacy Policy"}</span>
            </button>

            <button
              type="button"
              onClick={() => setCurrentTab("terms")}
              className={`flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold rounded-md transition-all cursor-pointer ${
                currentTab === "terms"
                  ? "bg-white text-blue-900 shadow-xs"
                  : "text-slate-600 hover:text-slate-900"
              }`}
            >
              <FileText className="w-3.5 h-3.5" />
              <span>{lang === "pt" ? "Termos de Uso" : "Terms of Service"}</span>
            </button>
          </div>
        </div>

        {/* Content Layout: 2-Column Split for Privacy, 1-Column for Terms */}
        {currentTab === "privacy" ? (
          <div className="flex flex-col lg:flex-row gap-8 items-start">
            {/* Sticky Navigation Index on Desktop */}
            <TableOfContents
              sections={policy.sections}
              activeSection={activeSection}
              onSelectSection={handleSelectSection}
              lang={lang}
            />

            {/* Main Policy Clauses */}
            <div className="flex-1 min-w-0 w-full">
              <PrivacyView
                lang={lang}
                activeSection={activeSection}
                onSectionVisible={setActiveSection}
              />
            </div>
          </div>
        ) : (
          <div className="max-w-4xl mx-auto w-full">
            <TermsView lang={lang} />
          </div>
        )}
      </main>

      {/* Floating Action Bar (Print only, no-print) */}
      <div className="no-print fixed bottom-5 right-5 z-30 flex items-center gap-2">
        <button
          type="button"
          onClick={() => window.print()}
          title={lang === "pt" ? "Imprimir ou Salvar PDF" : "Print or Save PDF"}
          className="p-3 bg-white hover:bg-slate-50 text-slate-700 hover:text-slate-900 rounded-full shadow-md border border-slate-200 transition-all cursor-pointer flex items-center justify-center"
        >
          <Printer className="w-4 h-4" />
        </button>
      </div>

      {/* Clean Footer */}
      <Footer lang={lang} onTabChange={setCurrentTab} />
    </div>
  );
}
