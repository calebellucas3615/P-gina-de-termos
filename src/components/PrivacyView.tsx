import React, { useState } from "react";
import { PRIVACY_POLICY_PT, LegalSection } from "../data/privacyContentPt";
import { PRIVACY_POLICY_EN } from "../data/privacyContentEn";
import {
  Search,
  ExternalLink,
  Copy,
  Check,
  ShieldCheck,
  HardDrive,
  Lock,
  Mail,
  CheckCircle2
} from "lucide-react";

interface PrivacyViewProps {
  lang: "pt" | "en";
  activeSection: string;
  onSectionVisible?: (id: string) => void;
}

export const PrivacyView: React.FC<PrivacyViewProps> = ({
  lang,
}) => {
  const policy = lang === "pt" ? PRIVACY_POLICY_PT : PRIVACY_POLICY_EN;
  const [searchQuery, setSearchQuery] = useState("");
  const [copiedSectionId, setCopiedSectionId] = useState<string | null>(null);

  const handleCopySection = (section: LegalSection) => {
    let textToCopy = `${section.number}. ${section.title}\n\n`;
    textToCopy += section.content.join("\n\n");
    if (section.subsections) {
      section.subsections.forEach((sub) => {
        textToCopy += `\n\n--- ${sub.title} ---\n`;
        if (sub.paragraphs) textToCopy += sub.paragraphs.join("\n") + "\n";
        if (sub.items) textToCopy += sub.items.map((it) => `• ${it}`).join("\n") + "\n";
      });
    }
    navigator.clipboard.writeText(textToCopy);
    setCopiedSectionId(section.id);
    setTimeout(() => setCopiedSectionId(null), 2000);
  };

  const filteredSections = policy.sections.filter((s) => {
    if (!searchQuery.trim()) return true;
    const query = searchQuery.toLowerCase();
    const matchTitle = s.title.toLowerCase().includes(query);
    const matchContent = s.content.some((c) => c.toLowerCase().includes(query));
    const matchSummary = s.summary.toLowerCase().includes(query);
    const matchSubs = s.subsections?.some((sub) =>
      sub.title.toLowerCase().includes(query) ||
      sub.items?.some((i) => i.toLowerCase().includes(query)) ||
      sub.paragraphs?.some((p) => p.toLowerCase().includes(query))
    );
    return matchTitle || matchContent || matchSummary || matchSubs;
  });

  return (
    <div className="space-y-6">
      {/* Document Header Card */}
      <section className="bg-white rounded-xl border border-slate-200 p-6 md:p-8 shadow-xs">
        <div className="flex flex-wrap items-center gap-2 text-xs text-blue-700 font-semibold tracking-wide uppercase mb-3">
          <span>{policy.appName}</span>
          <span aria-hidden="true">·</span>
          <span>Google Identity & Drive API</span>
          <span aria-hidden="true">·</span>
          <span>Arquitetura 100% Client-Side</span>
        </div>

        <h1 className="text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight mb-3">
          {lang === "pt"
            ? "Política de Privacidade Oficial"
            : "Official Privacy Policy"}
        </h1>

        {/* Clean unboxed metadata with typographic separators */}
        <div className="flex flex-wrap items-center gap-2 text-xs text-slate-500 mb-6">
          <span>
            {lang === "pt" ? "Domínio Oficial" : "Official Domain"}:{" "}
            <a
              href={policy.appUrl}
              target="_blank"
              rel="noreferrer"
              className="text-blue-600 font-medium hover:underline inline-flex items-center gap-1"
            >
              {policy.appUrl}
              <ExternalLink className="w-3 h-3" />
            </a>
          </span>
          <span aria-hidden="true">·</span>
          <span>
            {lang === "pt" ? "Última Atualização" : "Last Updated"}:{" "}
            <span className="font-semibold text-slate-700">{policy.lastUpdated}</span>
          </span>
          <span aria-hidden="true">·</span>
          <span>
            {lang === "pt" ? "Escopo Restrito" : "Restricted Scope"}: <code className="text-blue-700 bg-blue-50 px-1 py-0.5 rounded text-[11px]">drive.file</code>
          </span>
        </div>

        <p className="text-sm md:text-base text-slate-700 leading-relaxed bg-slate-50 border border-slate-200 rounded-lg p-4 mb-6">
          {policy.lead}
        </p>

        {/* Key Architectural Commitment Highlight */}
        <div className="bg-emerald-50/70 border border-emerald-200/80 rounded-lg p-4 flex items-start gap-3 text-xs md:text-sm text-emerald-950">
          <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
          <div className="space-y-1">
            <p className="font-semibold">
              {lang === "pt"
                ? "Isolamento Absoluto dos Dados Financeiros"
                : "Complete Financial Data Isolation"}
            </p>
            <p className="text-emerald-800 leading-relaxed">
              {lang === "pt"
                ? "O Controle Financeiro PRO opera sem banco de dados em servidores externos. A conexão com o Google solicita exclusivamente o escopo restrito drive.file para salvar o arquivo de backup 'financas_data.json' na pasta privada 'Finanças Pessoais App' do seu próprio Google Drive. O aplicativo não tem permissão para visualizar nem acessar nenhum outro arquivo da sua conta."
                : "Controle Financeiro PRO operates without any external centralized database. Google authorization strictly requests the restricted 'drive.file' scope to sync 'financas_data.json' within the private 'Finanças Pessoais App' folder in your personal Google Drive. The application has zero access or visibility into any other files in your account."}
            </p>
          </div>
        </div>

        {/* Quick Search inside Policy */}
        <div className="mt-6 pt-5 border-t border-slate-100 flex items-center justify-between gap-4">
          <div className="relative flex-1 max-w-md">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder={
                lang === "pt"
                  ? "Pesquisar cláusula (ex: Google Drive, Limited Use, Exclusão, LGPD)..."
                  : "Search policy clauses (e.g., Google Drive, Limited Use, Deletion)..."
              }
              className="w-full pl-9 pr-4 py-2 bg-slate-50 hover:bg-slate-100/70 focus:bg-white text-xs md:text-sm text-slate-900 border border-slate-200 rounded-lg focus:outline-hidden focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-colors"
            />
          </div>
          {searchQuery && (
            <button
              type="button"
              onClick={() => setSearchQuery("")}
              className="text-xs text-slate-500 hover:text-slate-800 underline cursor-pointer"
            >
              {lang === "pt" ? "Limpar busca" : "Clear search"}
            </button>
          )}
        </div>
      </section>

      {/* Sections List */}
      {filteredSections.length === 0 ? (
        <div className="bg-white rounded-xl border border-slate-200 p-8 text-center text-slate-500">
          <p className="text-sm">
            {lang === "pt"
              ? "Nenhuma cláusula encontrada com esse termo de busca."
              : "No clauses found matching your search query."}
          </p>
        </div>
      ) : (
        filteredSections.map((section) => (
          <article
            key={section.id}
            id={section.id}
            className={`rounded-xl border transition-all p-6 md:p-8 scroll-mt-24 ${
              section.highlight
                ? "bg-blue-50/40 border-blue-200 ring-1 ring-blue-500/10 shadow-xs"
                : "bg-white border-slate-200 shadow-xs"
            }`}
          >
            {/* Clause Top Header */}
            <div className="flex items-start justify-between gap-4 pb-3 mb-4 border-b border-slate-100">
              <div className="flex items-center gap-3">
                <span className="font-mono text-xs font-bold px-2 py-1 bg-slate-100 text-slate-700 rounded-md">
                  {section.number}
                </span>
                <h2 className="text-lg md:text-xl font-bold text-slate-900 tracking-tight">
                  {section.title}
                </h2>
              </div>
              <button
                type="button"
                onClick={() => handleCopySection(section)}
                className="flex items-center gap-1.5 px-2.5 py-1 text-xs font-medium text-slate-600 hover:text-slate-900 bg-slate-50 hover:bg-slate-100 border border-slate-200 rounded-lg transition-colors cursor-pointer shrink-0"
                title={lang === "pt" ? "Copiar esta cláusula" : "Copy this clause"}
              >
                {copiedSectionId === section.id ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-600" />
                    <span className="text-emerald-700 font-semibold">
                      {lang === "pt" ? "Copiado!" : "Copied!"}
                    </span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5 text-slate-500" />
                    <span>{lang === "pt" ? "Copiar" : "Copy"}</span>
                  </>
                )}
              </button>
            </div>

            {/* Summary */}
            <p className="text-xs md:text-sm text-slate-500 italic mb-5">
              {section.summary}
            </p>

            {/* Main Content Paragraphs */}
            <div className="space-y-3 text-sm md:text-[15px] text-slate-700 leading-relaxed">
              {section.content.map((paragraph, idx) => {
                const isGoogleQuote =
                  paragraph.includes("Google API Services User Data Policy") ||
                  paragraph.includes("Política de Dados do Usuário dos Serviços de API do Google");

                if (isGoogleQuote && paragraph.startsWith('"') || paragraph.startsWith('\"')) {
                  return (
                    <blockquote
                      key={idx}
                      className="bg-white border border-blue-200 rounded-lg p-4 my-3 text-slate-900 font-medium text-sm md:text-base shadow-xs"
                    >
                      <p className="italic">{paragraph}</p>
                      <div className="mt-2 pt-2 border-t border-slate-100 flex items-center justify-between text-xs text-blue-700">
                        <span className="font-semibold">
                          Google Trust & Safety Verbatim Requirement
                        </span>
                        <a
                          href="https://developers.google.com/terms/api-services-user-data-policy"
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex items-center gap-1 hover:underline font-semibold"
                        >
                          developers.google.com
                          <ExternalLink className="w-3 h-3" />
                        </a>
                      </div>
                    </blockquote>
                  );
                }

                return <p key={idx}>{paragraph}</p>;
              })}
            </div>

            {/* Subsections if available */}
            {section.subsections && (
              <div className="mt-6 pt-5 border-t border-slate-100 space-y-6">
                {section.subsections.map((sub, sIdx) => (
                  <div key={sIdx} className="bg-slate-50/60 rounded-lg p-4 border border-slate-100">
                    <h3 className="text-sm md:text-base font-bold text-slate-900 mb-2 flex items-center gap-2">
                      {sIdx === 0 ? (
                        <Lock className="w-4 h-4 text-blue-600" />
                      ) : sIdx === 1 ? (
                        <HardDrive className="w-4 h-4 text-indigo-600" />
                      ) : (
                        <ShieldCheck className="w-4 h-4 text-slate-600" />
                      )}
                      <span>{sub.title}</span>
                    </h3>

                    {sub.paragraphs && (
                      <div className="space-y-2 text-xs md:text-sm text-slate-600 mb-3">
                        {sub.paragraphs.map((p, pIdx) => (
                          <p key={pIdx}>{p}</p>
                        ))}
                      </div>
                    )}

                    {sub.items && (
                      <ul className="space-y-2 mt-2">
                        {sub.items.map((item, itemIdx) => (
                          <li
                            key={itemIdx}
                            className="flex items-start gap-2 text-xs md:text-sm text-slate-700 leading-normal"
                          >
                            <span className="w-1.5 h-1.5 rounded-full bg-slate-400 mt-2 shrink-0" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                ))}
              </div>
            )}

            {/* Special links for section 08 (Google revoke) */}
            {section.id === "revogacao-google" && (
              <div className="mt-5 p-3.5 bg-blue-50/70 rounded-lg border border-blue-200/60 flex items-center justify-between text-xs md:text-sm">
                <span className="text-blue-900 font-medium">
                  {lang === "pt"
                    ? "Painel de segurança para gerenciar conexões Google:"
                    : "Security portal to manage connected Google apps:"}
                </span>
                <a
                  href="https://myaccount.google.com/permissions"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-blue-700 hover:bg-blue-800 text-white font-semibold rounded-lg text-xs transition-colors shrink-0"
                >
                  <span>Google Permissions</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            )}

            {/* Support section card */}
            {section.id === "suporte" && (
              <div className="mt-5 p-4 bg-slate-900 text-white rounded-lg flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <div className="text-xs text-slate-400 font-medium">
                    {lang === "pt" ? "Equipe de Atendimento Exclusivo por E-mail" : "Customer Support Team (Email Only)"}
                  </div>
                  <div className="text-sm font-bold font-mono text-white mt-0.5">
                    controlefinanceiropro@gmail.com
                  </div>
                </div>
                <a
                  href="mailto:controlefinanceiropro@gmail.com?subject=Controle%20Financeiro%20PRO%20-%20Suporte"
                  className="inline-flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-500 text-white text-xs font-semibold rounded-lg transition-colors shrink-0"
                >
                  <Mail className="w-3.5 h-3.5" />
                  <span>{lang === "pt" ? "Contatar Equipe de Suporte" : "Email Support Team"}</span>
                </a>
              </div>
            )}
          </article>
        ))
      )}
    </div>
  );
};
