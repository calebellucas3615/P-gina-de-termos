import React from "react";
import { ShieldCheck, Mail, ExternalLink } from "lucide-react";

interface FooterProps {
  lang: "pt" | "en";
  onTabChange: (tab: "privacy" | "terms") => void;
}

export const Footer: React.FC<FooterProps> = ({ lang, onTabChange }) => {
  return (
    <footer className="mt-16 bg-white border-t border-slate-200 py-12 text-slate-600">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Col 1: Brand & Identity */}
          <div className="md:col-span-2 space-y-3">
            <div className="flex items-center gap-2 text-base font-bold text-slate-900">
              <ShieldCheck className="w-5 h-5 text-blue-600" />
              <span>Controle Financeiro PRO</span>
            </div>
            <p className="text-xs text-slate-500 leading-relaxed max-w-sm">
              {lang === "pt"
                ? "Sistema de gestão financeira pessoal com arquitetura 100% privada: autenticação Google segura e sincronização restrita exclusiva no seu próprio Google Drive."
                : "Personal finance management application with a 100% private architecture: secure Google authentication and restricted backup directly inside your personal Google Drive."}
            </p>
            <div className="text-xs text-slate-500">
              <a
                href="https://control-finance-pro.netlify.app"
                target="_blank"
                rel="noreferrer"
                className="hover:text-blue-600 underline inline-flex items-center gap-1"
              >
                https://control-finance-pro.netlify.app
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>

          {/* Col 2: Navigation Links */}
          <div className="space-y-2.5">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900">
              {lang === "pt" ? "Documentos Oficiais" : "Official Documents"}
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <button
                  type="button"
                  onClick={() => onTabChange("privacy")}
                  className="hover:text-slate-900 cursor-pointer"
                >
                  {lang === "pt" ? "Política de Privacidade" : "Privacy Policy"}
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onTabChange("terms")}
                  className="hover:text-slate-900 cursor-pointer"
                >
                  {lang === "pt" ? "Termos de Uso" : "Terms of Service"}
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Support */}
          <div className="space-y-2.5">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900">
              {lang === "pt" ? "Atendimento e Suporte" : "Customer Support"}
            </h4>
            <div className="space-y-1.5 text-xs text-slate-600">
              <p>{lang === "pt" ? "Equipe de Atendimento Oficial" : "Official Support Team"}</p>
              <p className="flex items-center gap-1.5 font-mono text-slate-800">
                <Mail className="w-3.5 h-3.5 text-slate-400" />
                <a href="mailto:controlefinanceiropro@gmail.com" className="hover:underline">
                  controlefinanceiropro@gmail.com
                </a>
              </p>
              <p className="text-[11px] text-slate-400 pt-1">
                {lang === "pt"
                  ? "Atendimento ao cliente realizado exclusivamente por e-mail."
                  : "Customer assistance handled exclusively via email."}
              </p>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <p>
            &copy; 2026 Controle Financeiro PRO. {lang === "pt" ? "Todos os direitos reservados." : "All rights reserved."}
          </p>
          <div className="flex items-center gap-4 text-slate-500">
            <a
              href="https://developers.google.com/terms/api-services-user-data-policy"
              target="_blank"
              rel="noreferrer"
              className="hover:underline inline-flex items-center gap-1"
            >
              Google Limited Use Policy
              <ExternalLink className="w-2.5 h-2.5" />
            </a>
            <span>·</span>
            <a
              href="https://myaccount.google.com/permissions"
              target="_blank"
              rel="noreferrer"
              className="hover:underline inline-flex items-center gap-1"
            >
              Google Permissions
              <ExternalLink className="w-2.5 h-2.5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
