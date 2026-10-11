export interface LegalSection {
  id: string;
  number: string;
  title: string;
  summary: string;
  content: string[];
  subsections?: {
    title: string;
    items?: string[];
    paragraphs?: string[];
  }[];
  highlight?: boolean;
}

export const PRIVACY_POLICY_PT = {
  appName: "Controle Financeiro PRO",
  appUrl: "https://control-finance-pro.netlify.app",
  lastUpdated: "11 de Outubro de 2026",
  effectiveDate: "11 de Outubro de 2026",
  contactEmail: "controlefinanceiropro@gmail.com",
  subtitle: "Privacidade absoluta: autenticação Google e sincronização exclusiva na pasta do seu próprio Google Drive.",
  lead: "Esta Política de Privacidade descreve de forma clara, suficiente e transparente como o Controle Financeiro PRO lida com os dados dos seus usuários, em total conformidade com a Google API Services User Data Policy (incluindo os requisitos de Uso Limitado - Limited Use), as diretrizes do Google Identity Services e da Google Drive API, além da Lei Geral de Proteção de Dados (LGPD - Lei nº 13.709/2018).",
  sections: [
    {
      id: "identificacao",
      number: "01",
      title: "Identificação da Aplicação e Arquitetura",
      summary: "Sobre o Controle Financeiro PRO, domínio oficial e arquitetura privada cliente-servidor.",
      content: [
        "O Controle Financeiro PRO (disponível no endereço oficial https://control-finance-pro.netlify.app) é uma aplicação web de gestão financeira pessoal concebida sob um princípio fundamental de privacidade total do usuário.",
        "Diferente de sistemas tradicionais que armazenam os registros financeiros de todos os clientes em bancos de dados centralizados de terceiros, o Controle Financeiro PRO opera com uma arquitetura 100% Client-Side (executada diretamente no navegador do usuário).",
        "A aplicação não possui servidores próprios para coleta de dados de navegação e não armazena suas finanças em bancos de dados externos. Todo o armazenamento persistente é feito no próprio navegador (LocalStorage) e sincronizado de forma criptografada diretamente na conta privada do Google Drive do próprio usuário."
      ]
    },
    {
      id: "dados-coletados",
      number: "02",
      title: "Dados Coletados e Escopos do Google OAuth",
      summary: "Detalhamento explícito de todas as informações acessadas via Google e dos dados financeiros salvos.",
      content: [
        "Para possibilitar o login seguro e a sincronização entre computadores e celulares, o Controle Financeiro PRO utiliza o protocolo Google OAuth 2.0 e solicita exclusivamente os seguintes escopos de autorização:"
      ],
      subsections: [
        {
          title: "A. Dados de Identidade do Google (Escopos: 'openid', 'email', 'profile')",
          paragraphs: [
            "Quando você clica em 'Conectar com Google Drive e Iniciar', o aplicativo solicita permissões básicas de identidade para:",
          ],
          items: [
            "Endereço de E-mail Google: utilizado para identificação de login e para vincular matematicamente a sua chave de licença vitalícia individual de acesso.",
            "Nome e Nome de Exibição: utilizado apenas para saudação e identificação visual na barra superior da aplicação.",
            "Foto de Perfil (Avatar): utilizada exclusivamente para exibição da sua foto de usuário na interface.",
            "Identificador Único Google (Google Subject ID): código numérico para validação da sessão de login."
          ]
        },
        {
          title: "B. Permissão Restrita de Google Drive (Escopo: 'https://www.googleapis.com/auth/drive.file')",
          paragraphs: [
            "O Controle Financeiro PRO utiliza intencionalmente o escopo restrito 'drive.file', que é o nível de permissão mais seguro e limitado oferecido pelo Google. Esse escopo concede permissão EXCLUSIVAMENTE para ler e gravar arquivos e pastas criados pelo próprio aplicativo:",
          ],
          items: [
            "Pasta Dedicada Criada pelo App: o aplicativo cria uma pasta privada nomeada 'Finanças Pessoais App' na raiz do seu Google Drive.",
            "Arquivo de Dados ('financas_data.json'): arquivo gerado e mantido exclusivamente pelo aplicativo para sincronizar seus lançamentos, contas, cartões, despesas, receitas, orçamentos, investimentos e metas.",
            "Arquivo de Licença ('financas_licenca.json'): arquivo gerado para salvar o comprovante da sua ativação de licença vitalícia.",
            "ISOLAMENTO ABSOLUTO: O Controle Financeiro PRO NÃO tem permissão, acesso, leitura, modificação ou capacidade de visualização sobre NENHUM outro arquivo, foto, documento, planilha ou pasta presente no seu Google Drive. Ele enxerga unicamente o que ele mesmo criou."
          ]
        },
        {
          title: "C. Registros Financeiros Gerenciados pelo Usuário",
          paragraphs: [
            "Para organizar suas finanças, o aplicativo manipula os dados que você mesmo cadastra voluntariamente:",
          ],
          items: [
            "Lançamentos: despesas, receitas, valores, datas, descrições, categorias, subcategorias e parcelamentos de cartão.",
            "Contas e Carteiras: nomes de contas (ex: 'Conta Corrente', 'Carteira', 'Investimentos') e saldos iniciais.",
            "Cartões de Crédito: nomes de cartões, limites cadastrados, dias de fechamento e vencimento de fatura.",
            "Veículos: modelos e gastos com combustível e manutenção vinculados.",
            "Orçamentos e Metas: limites mensais de gastos e objetivos de poupança estipulados por você."
          ]
        }
      ]
    },
    {
      id: "finalidade-uso",
      number: "03",
      title: "Finalidade e Uso Exclusivo das Informações",
      summary: "Como e por que usamos os dados. Nunca usamos para anúncios nem vendemos dados.",
      content: [
        "Os dados são utilizados exclusivamente para viabilizar as funcionalidades da ferramenta solicitadas pelo usuário:",
        "1. Autenticação e Licenciamento: O e-mail e a identidade Google são utilizados para autenticar o acesso e validar a ativação da licença vitalícia adquirida.",
        "2. Sincronização em Nuvem Pessoal: A permissão restrita do Google Drive é utilizada para ler e gravar o arquivo de backup 'financas_data.json', permitindo que o usuário acesse seus dados atualizados em qualquer computador, celular ou tablet.",
        "3. Cálculos Financeiros: Os dados de receitas, despesas e investimentos são processados no navegador para gerar gráficos estatísticos, relatórios mensais e saldos consolidados.",
        "PROIBIÇÃO DE MONETIZAÇÃO E ANÚNCIOS: O Controle Financeiro PRO NÃO utiliza dados de usuários do Google para veiculação de anúncios (incluindo retargeting ou anúncios personalizados), não transfere informações para corretores de dados (data brokers) e não treina modelos de inteligência artificial de terceiros com seus dados."
      ]
    },
    {
      id: "google-limited-use",
      number: "04",
      title: "Conformidade com a Google API Services User Data Policy (Uso Limitado)",
      summary: "Declaração expressa e mandatória de cumprimento das regras de Limited Use do Google.",
      highlight: true,
      content: [
        "O Controle Financeiro PRO cumpre integralmente todas as exigências estabelecidas na Google API Services User Data Policy, incluindo as diretrizes de Uso Limitado (Limited Use Requirements).",
        "Declaração Formal de Adesão ao Uso Limitado:",
        "\"O uso e a transferência para qualquer outro aplicativo de informações recebidas de APIs do Google pelo Controle Financeiro PRO seguirão a Política de Dados do Usuário dos Serviços de API do Google (Google API Services User Data Policy), incluindo os requisitos de Uso Limitado (Limited Use).\"",
        "Em aplicação prática das regras de Uso Limitado:",
        "• Não transferimos dados recebidos de APIs do Google para terceiros, exceto quando estritamente necessário para prestar ou aprimorar os recursos essenciais do aplicativo que são evidentes na interface do usuário, em conformidade com as leis aplicáveis, ou como parte de uma reorganização societária.",
        "• Não utilizamos nem transferimos dados de usuários do Google para veicular anúncios, propagandas ou ações comerciais.",
        "• Não permitimos que pessoas humanas leiam os dados recebidos de APIs do Google, a menos que tenhamos obtido consentimento prévio e explícito do usuário (por exemplo, durante um suporte técnico solicitado), seja exigido por lei, para fins de investigação de segurança de abuso, ou os dados sejam agregados e anonimizados."
      ]
    },
    {
      id: "seguranca-armazenamento",
      number: "05",
      title: "Segurança, Armazenamento e Criptografia",
      summary: "Como suas informações estão protegidas no seu dispositivo e no Google Drive.",
      content: [
        "A segurança das suas finanças é garantida tanto pela arquitetura sem servidor do aplicativo quanto pela infraestrutura de ponta do Google:",
        "• Comunicação HTTPS Segura: Todas as trocas de informação entre o aplicativo e a API do Google Drive ocorrem através de canais criptografados via protocolo TLS/HTTPS oficial do Google.",
        "• Sem Acesso a Senhas: O Controle Financeiro PRO nunca tem acesso nem armazena sua senha do Google. O login é mediado diretamente pela janela segura do Google Identity Services.",
        "• Tokens Temporários: O token de acesso ao Google Drive expira automaticamente após 60 minutos e é mantido apenas na memória da sessão ativa do navegador (SessionStorage).",
        "• Backup Criptografado no Google Drive: O arquivo 'financas_data.json' fica hospedado na sua conta particular do Google Drive, protegido pelas mesmas credenciais e verificação em duas etapas (2FA) da sua conta Google."
      ]
    },
    {
      id: "compartilhamento-terceiros",
      number: "06",
      title: "Compartilhamento de Informações com Terceiros",
      summary: "Seus dados não são vendidos nem compartilhados com terceiros.",
      content: [
        "O Controle Financeiro PRO NÃO vende, NÃO aluga, NÃO comercializa e NÃO transfere seus dados pessoais ou registros financeiros para terceiros.",
        "Os únicos serviços externos acionados pela aplicação são:",
        "• Google APIs (Google LLC): Para validação da autenticação (OAuth 2.0) e para sincronização do arquivo de backup no seu próprio Google Drive.",
        "• Netlify: Para entrega dos arquivos estáticos HTML, CSS e JavaScript da aplicação web.",
        "Nenhum dado financeiro ou de identificação pessoal é transmitido ao Netlify ou a qualquer outro servidor externo."
      ]
    },
    {
      id: "retencao-exclusao",
      number: "07",
      title: "Retenção, Controle e Exclusão Definitiva de Dados",
      summary: "Você tem autonomia total: como excluir seus dados a qualquer momento.",
      content: [
        "Como os dados são de sua propriedade exclusiva e ficam no seu dispositivo e no seu Google Drive, você possui autonomia e controle absoluto para gerenciar, exportar ou excluir suas informações quando desejar:",
        "Como excluir seus dados de forma imediata:",
        "1. No Aplicativo: Você pode clicar no botão 'Zerar Tudo' (ícone de lixeira) no menu superior ou lateral para apagar instantaneamente todos os lançamentos locais.",
        "2. No seu Google Drive: Basta acessar https://drive.google.com com sua conta, localizar a pasta 'Finanças Pessoais App' e deletá-la. Ao deletar a pasta e esvaziar a lixeira do Drive, todas as cópias em nuvem dos arquivos financas_data.json e financas_licenca.json são eliminadas permanentemente.",
        "3. Limpeza do Navegador: Você pode limpar os dados do site (Cache e LocalStorage) através das configurações do seu navegador a qualquer instante.",
        "4. Solicitação via Suporte: Você também pode enviar um e-mail para nossa equipe de atendimento em controlefinanceiropro@gmail.com solicitando orientações completas para exclusão."
      ]
    },
    {
      id: "revogacao-google",
      number: "08",
      title: "Como Revogar o Acesso à Conta Google",
      summary: "Instruções passo a passo para desconectar o aplicativo no painel de segurança do Google.",
      content: [
        "Você pode revogar a permissão concedida ao Controle Financeiro PRO a qualquer momento diretamente no painel de segurança do Google:",
        "1. Acesse o painel oficial de permissões de segurança da sua Conta Google: https://myaccount.google.com/permissions",
        "2. Na lista de 'Apps com acesso à sua conta', localize 'Controle Financeiro PRO'.",
        "3. Clique sobre o aplicativo e escolha a opção 'Remover acesso' ou 'Excluir todas as conexões'.",
        "Após revogar a permissão, o aplicativo perderá imediatamente a autorização para se comunicar com o seu Google Drive ou acessar seus dados de identidade."
      ]
    },
    {
      id: "direitos-lgpd",
      number: "09",
      title: "Direitos do Usuário sob a LGPD",
      summary: "Garantias da Lei Geral de Proteção de Dados (Lei nº 13.709/2018).",
      content: [
        "Em conformidade com a Lei Geral de Proteção de Dados (LGPD - Lei 13.709/2018), asseguramos a você o pleno exercício dos seus direitos:",
        "• Confirmação e Acesso: Confirmar quais dados são manipulados e exportá-los em formato JSON a qualquer momento através do botão 'Exportar Backup'.",
        "• Correção: Modificar ou retificar qualquer registro financeiro diretamente na interface do aplicativo.",
        "• Eliminação e Revogação: Eliminar todos os seus dados e retirar o consentimento de autenticação do Google a qualquer momento.",
        "• Portabilidade: Baixar uma cópia completa dos seus dados em arquivo JSON compatível e legível por máquina."
      ]
    },
    {
      id: "cookies-armazenamento",
      number: "10",
      title: "Cookies e Armazenamento Local",
      summary: "Uso exclusivo de tecnologias locais necessárias para a operação da aplicação.",
      content: [
        "O Controle Financeiro PRO não utiliza cookies de terceiros para rastreamento de navegação ou publicidade.",
        "Utilizamos exclusivamente recursos técnicos do próprio navegador:",
        "• LocalStorage: Para guardar suas configurações locais de tela (tema visual claro/escuro, mês selecionado) e cópia de trabalho dos seus registros.",
        "• SessionStorage: Para manter o token temporário da sessão Google ativo durante o uso da aba, o qual é apagado automaticamente ao fechar o navegador."
      ]
    },
    {
      id: "alteracoes",
      number: "11",
      title: "Atualizações desta Política de Privacidade",
      summary: "Como eventuais revisões são divulgadas.",
      content: [
        "Podemos revisar esta Política de Privacidade para refletir eventuais atualizações de recursos do aplicativo ou mudanças nas diretrizes de APIs do Google.",
        "Sempre que alterações relevantes ocorrerem, atualizaremos a data de 'Última Atualização' no cabeçalho deste documento.",
        "Recomendamos que você consulte esta página periodicamente para manter-se informado."
      ]
    },
    {
      id: "suporte",
      number: "12",
      title: "Atendimento e Suporte ao Usuário",
      summary: "Canal oficial de suporte técnico e atendimento exclusivamente por e-mail.",
      content: [
        "O suporte ao usuário do Controle Financeiro PRO é realizado exclusivamente por e-mail pela nossa equipe de atendimento.",
        "Para dúvidas sobre o uso do aplicativo, esclarecimentos sobre esta Política de Privacidade, ativação de licença ou solicitações relativas a dados, entre em contato através do nosso e-mail oficial:",
        "• E-mail Oficial de Atendimento: controlefinanceiropro@gmail.com",
        "• Aplicação: Controle Financeiro PRO (https://control-finance-pro.netlify.app)",
        "Nossa equipe de suporte responderá ao seu contato por e-mail com a máxima brevidade possível."
      ]
    }
  ]
};

export const TERMS_OF_SERVICE_PT = {
  appName: "Controle Financeiro PRO",
  lastUpdated: "11 de Outubro de 2026",
  sections: [
    {
      id: "termos-aceite",
      number: "01",
      title: "Aceitação dos Termos",
      content: [
        "Ao acessar e utilizar o Controle Financeiro PRO (disponível em https://control-finance-pro.netlify.app), você concorda com estes Termos de Serviço e com a nossa Política de Privacidade. Caso discorde de qualquer disposição, não utilize a ferramenta."
      ]
    },
    {
      id: "termos-versao-previa",
      number: "02",
      title: "Versão Prévia e Acesso Antecipado",
      content: [
        "O Controle Financeiro PRO é disponibilizado com Licença Vitalícia inclusa, proporcionando acesso a um software em evolução e aprimoramento contínuo.",
        "Por se tratar de um produto em constante evolução, melhorias, novos recursos e ajustes de interface continuarão sendo entregues sem cobranças adicionais ou mensalidades.",
        "O usuário reconhece que ajustes pontuais e correções podem ocorrer e serão priorizados nas atualizações subsequentes."
      ]
    },
    {
      id: "termos-isencao",
      number: "03",
      title: "Isenção de Responsabilidade Financeira",
      content: [
        "O Controle Financeiro PRO é uma ferramenta exclusivamente organizacional e de apoio ao controle orçamentário pessoal.",
        "AVISO IMPORTANTE: O Controle Financeiro PRO NÃO é um banco, corretora de valores ou consultoria de investimentos. O aplicativo NÃO realiza transferências financeiras reais, NÃO custodia dinheiro e NÃO fornece recomendações de investimento financeiro. Todos os cálculos dependem unicamente dos valores informados pelo próprio usuário."
      ]
    },
    {
      id: "termos-google-drive",
      number: "04",
      title: "Uso do Google Drive e Responsabilidade sobre Backups",
      content: [
        "A sincronização na nuvem utiliza a infraestrutura do Google Drive do próprio usuário, na pasta 'Finanças Pessoais App'.",
        "O usuário é responsável pela manutenção da segurança da sua própria conta Google, bem como por zelar pela não exclusão inadvertida da pasta de arquivos no seu Google Drive pessoal.",
        "O aplicativo também disponibiliza a função manual 'Exportar Backup' em formato JSON para cópia de segurança adicional a qualquer instante."
      ]
    },
    {
      id: "termos-suporte",
      number: "05",
      title: "Atendimento e Suporte Exclusivo por E-mail",
      content: [
        "O suporte do aplicativo é realizado exclusivamente por e-mail através da equipe de atendimento em: controlefinanceiropro@gmail.com.",
        "Dúvidas, relatos de erros, solicitações de ativação de licença e sugestões de novos recursos devem ser encaminhados para esse canal oficial."
      ]
    },
    {
      id: "termos-legislacao",
      number: "06",
      title: "Legislação Aplicável",
      content: [
        "Estes termos são regidos pelas leis da República Federativa do Brasil, em conformidade com o Marco Civil da Internet (Lei nº 12.965/2014) e a Lei Geral de Proteção de Dados (Lei nº 13.709/2018)."
      ]
    }
  ]
};
