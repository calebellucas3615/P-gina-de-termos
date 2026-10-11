export const PRIVACY_POLICY_EN = {
  appName: "Controle Financeiro PRO",
  appUrl: "https://control-finance-pro.netlify.app",
  lastUpdated: "October 11, 2026",
  effectiveDate: "October 11, 2026",
  contactEmail: "controlefinanceiropro@gmail.com",
  subtitle: "Absolute privacy: Google authentication and exclusive synchronization to your personal Google Drive folder.",
  lead: "This Privacy Policy clearly, comprehensively, and transparently details how Controle Financeiro PRO processes user information, in strict compliance with the Google API Services User Data Policy (including the Limited Use requirements), Google Identity Services, Google Drive API guidelines, and data protection legislation.",
  sections: [
    {
      id: "identificacao",
      number: "01",
      title: "Application Identification and Client-Side Architecture",
      summary: "About Controle Financeiro PRO, official domain, and private serverless design.",
      content: [
        "Controle Financeiro PRO (available at the official URL https://control-finance-pro.netlify.app) is a personal financial management web application built from the ground up on the principle of complete user privacy.",
        "Unlike traditional financial apps that store all users' financial records on central third-party servers, Controle Financeiro PRO runs on a 100% Client-Side architecture directly inside the user's web browser.",
        "The application maintains no backend servers for user tracking and does not store your finances in any external databases. All persistent storage is managed locally in your browser (LocalStorage) and synchronized in an encrypted format directly to your private Google Drive account."
      ]
    },
    {
      id: "dados-coletados",
      number: "02",
      title: "Information Collected & Google OAuth Scopes",
      summary: "Explicit inventory of data accessed via Google OAuth and user-managed financial entries.",
      content: [
        "To enable secure login and automatic multi-device synchronization across computers and mobile devices, Controle Financeiro PRO utilizes Google OAuth 2.0 and requests strictly the following permission scopes:"
      ],
      subsections: [
        {
          title: "A. Google Identity Information (Scopes: 'openid', 'email', 'profile')",
          paragraphs: [
            "When you click 'Connect with Google Drive and Start', the application requests basic identity permissions solely for:",
          ],
          items: [
            "Google Email Address: Used for login verification and to mathematically bind your personal lifetime license key.",
            "Display Name and Full Name: Used solely for greeting and visual identification in the top navigation bar.",
            "Profile Picture (Avatar): Used exclusively to display your user avatar within the application interface.",
            "Google Subject ID: An internal numeric identifier used to validate active user sessions."
          ]
        },
        {
          title: "B. Restricted Google Drive Permission (Scope: 'https://www.googleapis.com/auth/drive.file')",
          paragraphs: [
            "Controle Financeiro PRO deliberately uses the restricted 'drive.file' scope, which is the most secure and restricted permission level offered by Google. This scope grants permission EXCLUSIVELY to create, read, and modify files and folders created by this application itself:",
          ],
          items: [
            "Dedicated App Folder: The application creates a private folder named 'Finanças Pessoais App' in the root of your personal Google Drive.",
            "Financial Data File ('financas_data.json'): Created and maintained exclusively by the app to store your transactions, accounts, credit cards, expenses, income, budgets, investments, and goals.",
            "License File ('financas_licenca.json'): Created to store your lifetime license verification record.",
            "COMPLETE DATA ISOLATION: Controle Financeiro PRO DOES NOT have permission, access, read capabilities, or visibility into ANY other file, photo, document, spreadsheet, or folder on your Google Drive. It can only interact with files it created itself."
          ]
        },
        {
          title: "C. User Financial Records",
          paragraphs: [
            "To organize your personal finances, the application manages the records you enter voluntarily:",
          ],
          items: [
            "Transactions: expense and income amounts, dates, descriptions, categories, subcategories, and credit card installment splits.",
            "Accounts and Wallets: account names (e.g., 'Checking Account', 'Cash', 'Investments') and starting balances.",
            "Credit Cards: card names, credit limits, invoice closing and due dates.",
            "Vehicles: vehicle labels and associated fuel and maintenance logs.",
            "Budgets and Goals: monthly spending limits and personal savings milestones."
          ]
        }
      ]
    },
    {
      id: "finalidade-uso",
      number: "03",
      title: "Purpose of Data Processing and Strict Usage",
      summary: "How and why data is processed. Never sold, never used for advertising.",
      content: [
        "Data is processed exclusively to deliver the functionality requested by the user:",
        "1. Authentication & Licensing: Your Google email and identity profile are used to authenticate your session and validate your lifetime license key.",
        "2. Personal Cloud Synchronization: Restricted Google Drive permissions are used to read and write the backup file 'financas_data.json', enabling seamless access across your desktop, laptop, tablet, and mobile phone.",
        "3. Financial Analytics: Expense, revenue, and investment records are computed locally in your browser to render interactive charts, monthly reports, and balance summaries.",
        "PROHIBITION OF ADVERTISING & COMMERCIAL TRANSFERS: Controle Financeiro PRO NEVER uses Google user data for advertising (including personalized or interest-based ads), never transfers data to data brokers, and never trains third-party artificial intelligence models with your records."
      ]
    },
    {
      id: "google-limited-use",
      number: "04",
      title: "Google API Services User Data Policy Compliance (Limited Use)",
      summary: "Mandatory verbatim statement adhering to Google's Limited Use requirements.",
      highlight: true,
      content: [
        "Controle Financeiro PRO strictly adheres to the policies established in the Google API Services User Data Policy, including all Limited Use requirements.",
        "Formal Limited Use Compliance Statement:",
        "\"Controle Financeiro PRO's use and transfer to any other app of information received from Google APIs will adhere to the Google API Services User Data Policy, including the Limited Use requirements.\"",
        "In practical implementation:",
        "• We do not transfer information received from Google APIs to third parties, unless strictly necessary to provide or improve prominent core features in the user interface, compliant with applicable laws, or as part of a merger/acquisition.",
        "• We do not use or transfer Google user data for serving ads, including retargeted or interest-based advertising.",
        "• We do not allow humans to read data received from Google APIs unless we have obtained your prior affirmative consent (for example, upon your direct technical support request), it is strictly required by law, necessary for investigating security abuse, or the data is aggregated and anonymized."
      ]
    },
    {
      id: "seguranca-armazenamento",
      number: "05",
      title: "Security, Storage and Encryption Safeguards",
      summary: "How your information is protected on your device and inside Google Drive.",
      content: [
        "Your financial records are safeguarded by both our serverless architecture and Google's world-class security infrastructure:",
        "• Secure HTTPS Communication: All interactions with the Google Drive API occur over Google's encrypted TLS/HTTPS channels.",
        "• No Password Storage: Controle Financeiro PRO never handles or stores your Google account password. Authentication is managed directly by Google Identity Services.",
        "• Temporary Short-Lived Tokens: Google Drive access tokens expire automatically after 60 minutes and exist solely in the browser's active tab memory (SessionStorage).",
        "• Cloud Storage in Your Own Drive: The 'financas_data.json' file is stored in your personal Google Drive, protected by your own Google credentials and Two-Factor Authentication (2FA)."
      ]
    },
    {
      id: "compartilhamento-terceiros",
      number: "06",
      title: "Third-Party Data Sharing & Disclosures",
      summary: "Your data is never sold or shared with commercial entities.",
      content: [
        "Controle Financeiro PRO does NOT sell, rent, monetize, or trade your personal or financial records with any third party.",
        "The only external infrastructure services involved are:",
        "• Google APIs (Google LLC): For identity verification (OAuth 2.0) and syncing backup files inside your own Google Drive.",
        "• Netlify: For serving the static HTML, CSS, and JavaScript application files.",
        "No personal financial entries are ever sent to Netlify or any third-party databases."
      ]
    },
    {
      id: "retencao-exclusao",
      number: "07",
      title: "Data Retention, Export, and Permanent Deletion",
      summary: "Complete user control: how to delete your data at any time.",
      content: [
        "Because all data is stored on your device and inside your own Google Drive, you retain complete autonomy to export or delete your information at any moment:",
        "How to delete your data permanently:",
        "1. In the Application: Click the 'Zerar Tudo' (Reset All) button (trash icon) in the top or sidebar menu to immediately erase all local transactions.",
        "2. In Google Drive: Go to https://drive.google.com, find the folder 'Finanças Pessoais App', and delete it. Once you empty the Google Drive trash, all cloud copies of financas_data.json and financas_licenca.json are permanently removed.",
        "3. In Your Browser: You can clear website storage (Cache & LocalStorage) through your browser settings at any time.",
        "4. Support Request: You may also email our customer support team at controlefinanceiropro@gmail.com for full guidance on data removal."
      ]
    },
    {
      id: "revogacao-google",
      number: "08",
      title: "How to Revoke Google Account Access",
      summary: "Step-by-step instructions to disconnect the app from Google Security.",
      content: [
        "You can revoke permissions granted to Controle Financeiro PRO at any time through Google's centralized account portal:",
        "1. Open the official Google Account Security permissions page: https://myaccount.google.com/permissions",
        "2. Under 'Apps with access to your account', locate 'Controle Financeiro PRO'.",
        "3. Click on the app and select 'Remove Access' or 'Delete all connections'.",
        "Once access is revoked, the app will instantly lose all ability to access your Google Drive or identity credentials."
      ]
    },
    {
      id: "direitos-lgpd",
      number: "09",
      title: "User Rights & Data Protection Compliance",
      summary: "Full guarantee of your statutory rights over your personal data.",
      content: [
        "In accordance with applicable data privacy regulations, you enjoy full rights over your data:",
        "• Confirmation and Access: Confirm what information is processed and export it at any time in structured JSON format via the 'Export Backup' button.",
        "• Rectification: Modify or correct any transaction record directly within the application.",
        "• Deletion & Consent Withdrawal: Erase all data and disconnect Google permissions at your convenience.",
        "• Portability: Download your financial entries in a standard machine-readable JSON backup file."
      ]
    },
    {
      id: "cookies-armazenamento",
      number: "10",
      title: "Cookies and Local Storage",
      summary: "Use strictly limited to essential operational storage on your device.",
      content: [
        "Controle Financeiro PRO does not use third-party tracking cookies for advertising.",
        "We utilize only standard browser storage technologies:",
        "• LocalStorage: To store UI preferences (dark/light mode, selected month) and your working financial dataset.",
        "• SessionStorage: To keep the temporary Google OAuth token active during your browser session, cleared automatically when you close the tab."
      ]
    },
    {
      id: "alteracoes",
      number: "11",
      title: "Modifications to this Privacy Policy",
      summary: "How policy updates are communicated.",
      content: [
        "We may update this Privacy Policy from time to time to reflect product enhancements or changes in Google API guidelines.",
        "When material modifications occur, we will update the 'Last Updated' date at the top of this document.",
        "We encourage you to review this page periodically to remain informed about how your data is protected."
      ]
    },
    {
      id: "suporte",
      number: "12",
      title: "Customer Support & Contact",
      summary: "Official customer service handled exclusively by email.",
      content: [
        "Customer support for Controle Financeiro PRO is provided exclusively via email by our support team.",
        "For technical questions, license activation assistance, or inquiries regarding this Privacy Policy, please contact our official support email:",
        "• Official Support Email: controlefinanceiropro@gmail.com",
        "• Application Domain: https://control-finance-pro.netlify.app",
        "Our customer support team will respond to your email as swiftly as possible."
      ]
    }
  ]
};

export const TERMS_OF_SERVICE_EN = {
  appName: "Controle Financeiro PRO",
  lastUpdated: "October 11, 2026",
  sections: [
    {
      id: "termos-aceite",
      number: "01",
      title: "Acceptance of Terms",
      content: [
        "By accessing and using Controle Financeiro PRO (available at https://control-finance-pro.netlify.app), you agree to be bound by these Terms of Service and our Privacy Policy. If you do not agree with any provision herein, you must refrain from using the platform."
      ]
    },
    {
      id: "termos-versao-previa",
      number: "02",
      title: "Early Access & Ongoing Evolution",
      content: [
        "Controle Financeiro PRO is offered with an included Lifetime License, granting early access to software undergoing continuous evolution.",
        "New tools, feature enhancements, and UI refinements will continue to be rolled out without extra fees or recurring subscriptions.",
        "Users acknowledge that ongoing refinements may occur and are prioritized in subsequent updates."
      ]
    },
    {
      id: "termos-isencao",
      number: "03",
      title: "Financial Disclaimer",
      content: [
        "Controle Financeiro PRO is strictly an organizational and personal budgeting tool.",
        "IMPORTANT NOTICE: Controle Financeiro PRO is NOT a bank, broker, or financial advisor. The app does NOT execute real money transfers, does NOT hold user funds, and does NOT provide financial investment advice. All financial figures are based entirely on user-entered values."
      ]
    },
    {
      id: "termos-google-drive",
      number: "04",
      title: "Google Drive Usage & Backup Responsibility",
      content: [
        "Cloud synchronization utilizes the user's personal Google Drive infrastructure inside the 'Finanças Pessoais App' folder.",
        "Users are responsible for safeguarding their Google Account credentials and ensuring they do not accidentally delete the app folder in their Drive.",
        "The app also provides an 'Export Backup' button to save JSON backup copies locally at any time."
      ]
    },
    {
      id: "termos-suporte",
      number: "05",
      title: "Customer Support Exclusively via Email",
      content: [
        "Customer service and support are handled exclusively by email through our dedicated team at: controlefinanceiropro@gmail.com.",
        "Questions, bug reports, and license queries should be directed to this official channel."
      ]
    },
    {
      id: "termos-legislacao",
      number: "06",
      title: "Governing Law",
      content: [
        "These Terms are governed by applicable internet civil rights frameworks and data protection laws."
      ]
    }
  ]
};
