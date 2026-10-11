import React from "react";
import { TERMS_OF_SERVICE_PT } from "../data/privacyContentPt";
import { TERMS_OF_SERVICE_EN } from "../data/privacyContentEn";
import { AlertTriangle, ExternalLink, Mail } from "lucide-react";

interface TermsViewProps {
  lang: "pt" | "en";
}

export const TermsView: React.FC<TermsViewProps> = ({ lang }) => {
  const terms = lang === "pt" ? TERMS_OF_SERVICE_PT : TERMS_OF_SERVICE_EN;

  return (
    <div className="space-y-6">
      <section className="bg-white rounded-xl border border-slate-200 p-6 md:p-8 shadow-xs">
        <div className="flex flex-wrap items-center gap-2 text-xs text-blue-700 font-semibold tracking-wide uppercase mb-3">
          <span>{terms.appName}</span>
          <span aria-hidden="true">·</span>
          <span>Regras de Utilização</span>
          <span aria-hidden="true">·</span>
          <span>Versão Prévia & Google Drive</span>
        </div>

        <h1 className="text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight mb-3">
          {lang === "pt" ? "Termos de Uso e Serviço" : "Terms of Service"}
        </h1>

        <div className="flex flex-wrap items-center gap-2 text-xs text-slate-500 mb-6">
          <span>
            {lang === "pt" ? "Domínio Oficial" : "Official Domain"}:{" "}
            <a
              href="https://control-finance-pro.netlify.app"
              target="_blank"
              rel="noreferrer"
              className="text-blue-600 font-medium hover:underline inline-flex items-center gap-1"
            >
              https://control-finance-pro.netlify.app
              <ExternalLink className="w-3 h-3" />
            </a>
          </span>
          <span aria-hidden="true">·</span>
          <span>
            {lang === "pt" ? "Última Atualização" : "Last Updated"}:{" "}
            <span className="font-semibold text-slate-700">{terms.lastUpdated}</span>
          </span>
        </div>

        <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 text-xs md:text-sm text-amber-900 flex items-start gap-3 mb-4">
          <AlertTriangle className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
          <p className="leading-relaxed">
            {lang === "pt"
              ? "Isenção Financeira: O Controle Financeiro PRO é um software de organização de finanças pessoais. O aplicativo não é uma instituição financeira, não realiza transferências monetárias reais e não presta assessoria de investimentos."
              : "Financial Disclaimer: Controle Financeiro PRO is personal budgeting software. It is not a financial institution, does not handle real money transfers, and does not provide investment advisory services."}
          </p>
        </div>

        <div className="bg-slate-50 border border-slate-200 rounded-lg p-4 text-xs md:text-sm text-slate-700 flex items-start gap-3">
          <Mail className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
          <p className="leading-relaxed">
            {lang === "pt"
              ? "Atendimento ao Usuário: O suporte do aplicativo é realizado exclusivamente por e-mail através da equipe de atendimento: controlefinanceiropro@gmail.com."
              : "Customer Support: Technical and user support is provided exclusively via email by our support team: controlefinanceiropro@gmail.com."}
          </p>
        </div>
      </section>

      {terms.sections.map((section) => (
        <article
          key={section.id}
          id={section.id}
          className="bg-white rounded-xl border border-slate-200 p-6 md:p-8 shadow-xs scroll-mt-24"
        >
          <div className="flex items-center gap-3 pb-3 mb-4 border-b border-slate-100">
            <span className="font-mono text-xs font-bold px-2 py-1 bg-slate-100 text-slate-700 rounded-md">
              {section.number}
            </span>
            <h2 className="text-lg md:text-xl font-bold text-slate-900 tracking-tight">
              {section.title}
            </h2>
          </div>

          <div className="space-y-3 text-sm md:text-[15px] text-slate-700 leading-relaxed">
            {section.content.map((paragraph, idx) => (
              <p key={idx}>{paragraph}</p>
            ))}
          </div>
        </article>
      ))}
    </div>
  );
};
