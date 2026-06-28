/**
 * MatewLogic — centrálna konfigurácia webu.
 * Jediný zdroj pravdy pre názov firmy, kontakt, sociálne siete a služby.
 * Hodnoty označené ako [DOPLNIŤ] treba nahradiť reálnymi údajmi firmy.
 */

export const site = {
  name: "MatewLogic",
  legalName: "MatewLogic", // [DOPLNIŤ: presný obchodný názov / meno SZČO podľa registra]
  domain: "matewlogic.com",
  url: "https://matewlogic.com",
  locale: "sk_SK",
  lang: "sk",

  // Krátky popis pre SEO / Open Graph
  description:
    "Slovenská digitálna agentúra. Tvoríme webstránky, kreatívny obsah a AI automatizácie, ktoré malým a stredným firmám pomáhajú vyzerať profesionálne a rásť online.",

  slogan: "Logika za vaším rastom.",
  tagline: "Digitálna agentúra novej generácie",

  contact: {
    email: "ahoj@matewlogic.com", // [DOPLNIŤ: reálny kontaktný e-mail]
    phone: "", // [DOPLNIŤ: telefónne číslo, napr. +421 9xx xxx xxx]
  },

  social: {
    instagram: {
      handle: "@matew_logic",
      url: "https://instagram.com/matew_logic",
    },
  },

  /** Údaje o prevádzkovateľovi — povinné podľa SK/EÚ legislatívy (GDPR, zákon o ochrane spotrebiteľa). */
  operator: {
    name: "MatewLogic", // [DOPLNIŤ: obchodné meno podľa živnostenského/obchodného registra]
    address: "", // [DOPLNIŤ: sídlo / miesto podnikania]
    ico: "", // [DOPLNIŤ: IČO]
    dic: "", // [DOPLNIŤ: DIČ]
    icDph: "", // [DOPLNIŤ: IČ DPH, ak je platiteľom]
    register:
      "", // [DOPLNIŤ: zápis v registri, napr. Okresný úrad ..., číslo živnostenského registra]
    email: "ahoj@matewlogic.com", // [DOPLNIŤ]
    phone: "", // [DOPLNIŤ]
    supervisoryAuthority:
      "Slovenská obchodná inšpekcia (SOI), Inšpektorát SOI pre príslušný kraj",
    dataProtectionAuthority:
      "Úrad na ochranu osobných údajov Slovenskej republiky, Hraničná 12, 820 07 Bratislava",
  },

  legalUpdatedAt: "2026-06-23",
} as const;

export type ServiceId = "web" | "content" | "ai";

export interface Service {
  id: ServiceId;
  /** Poradové číslo pre vizuálnu narážku */
  index: string;
  slug: string; // budúca sub-stránka /sluzby/<slug>
  href: string;
  /** Krátky štítok */
  eyebrow: string;
  title: string;
  /** Pútavá veta pre majiteľa firmy (nie technický žargón) */
  tagline: string;
  description: string;
  bullets: string[];
  /** Vizuálna téma sekcie */
  theme: "dark" | "light";
  /** Voliteľný obrázok/ukážka (cesta v /public). Ak chýba, použije sa vektorový vizuál. */
  image?: string;
}

export const services: Service[] = [
  {
    id: "web",
    index: "01",
    slug: "webstranky",
    href: "/sluzby/webstranky",
    eyebrow: "Webstránky",
    title: "Web, ktorý predáva za vás",
    tagline:
      "Pekná stránka je len začiatok. My staviame weby, ktoré návštevníkov menia na zákazníkov.",
    description:
      "Navrhneme a postavíme moderný, rýchly web na mieru vašej firme. Bez šablón, ktoré vyzerajú ako všetko ostatné. Vy získate online vizitku, ktorej ľudia uveria a z ktorej vám chodia dopyty.",
    bullets: [
      "Dizajn na mieru, ktorý zaujme na prvý pohľad",
      "Bleskové načítanie a bezchybný mobil",
      "Pripravené na Google a vyhľadávanie (SEO)",
    ],
    theme: "dark",
    image: "/portfolio-web-v2.png",
  },
  {
    id: "content",
    index: "02",
    slug: "kreativny-obsah",
    href: "/sluzby/kreativny-obsah",
    eyebrow: "Kreatívny obsah a vizualizácie",
    title: "Obsah, na ktorý sa nedá nepozrieť",
    tagline:
      "V mori príspevkov musíte vyniknúť. Vytvoríme vizuály a obsah, ktoré zastavia palec pri scrollovaní.",
    description:
      "Od fotiek a grafiky cez krátke videá až po 3D vizualizácie produktov. Pripravíme vám obsah, ktorý buduje značku, drží jednotný štýl a funguje na sociálnych sieťach aj na webe.",
    bullets: [
      "Vizuály a grafika v jednotnom štýle značky",
      "Krátke videá a reels, ktoré ľudí zaujmú",
      "3D vizualizácie produktov a priestorov",
    ],
    theme: "dark",
    image: "/portfolio-content-v1.png",
  },
  {
    id: "ai",
    index: "03",
    slug: "ai-automatizacie",
    href: "/sluzby/ai-automatizacie",
    eyebrow: "AI automatizácie",
    title: "Nechajte rutinu robiť umelú inteligenciu",
    tagline:
      "Šetrite hodiny každý týždeň. Automatizujeme opakujúce sa úlohy, aby ste sa mohli venovať tomu podstatnému.",
    description:
      "Napojíme AI na vašu firmu tam, kde to dáva zmysel — od automatických odpovedí zákazníkom, cez spracovanie dopytov a faktúr, až po inteligentných asistentov. Jednoducho a zrozumiteľne, bez technického žargónu.",
    bullets: [
      "Automatické odpovede a chat pre zákazníkov",
      "Spracovanie dopytov, e-mailov a dokumentov",
      "Riešenia napojené priamo na vaše nástroje",
    ],
    theme: "dark",
    image: "/portfolio-ai-v1.png",
  },
];

/** Dôvody „prečo my“ */
export const advantages = [
  {
    title: "Hovoríme ľudsky",
    description:
      "Žiadny technický žargón. Vysvetlíme všetko tak, aby ste presne vedeli, za čo platíte a čo vám to prinesie.",
  },
  {
    title: "Všetko pod jednou strechou",
    description:
      "Web, obsah aj automatizácie od jedného tímu. Nemusíte koordinovať päť firiem — postaráme sa o celok.",
  },
  {
    title: "AI ako náš štandard",
    description:
      "Nepoužívame umelú inteligenciu na efekt. Reálne ňou šetríme váš čas a peniaze v každom projekte.",
  },
  {
    title: "Zameranie na výsledok",
    description:
      "Nerobíme pekné veci do šuplíka. Sledujeme, či vám web a obsah reálne prinášajú zákazníkov.",
  },
];

/** Postup spolupráce */
export const processSteps = [
  {
    step: "01",
    title: "Spoznáme sa",
    description:
      "Nezáväzný hovor, kde pochopíme vašu firmu, ciele a to, čo vás trápi.",
  },
  {
    step: "02",
    title: "Navrhneme riešenie",
    description:
      "Pripravíme jasný plán a cenu vopred. Vždy viete, do čoho idete.",
  },
  {
    step: "03",
    title: "Tvoríme",
    description:
      "Pustíme sa do práce a pravidelne vám ukazujeme priebeh. Vaša spätná väzba je súčasťou procesu.",
  },
  {
    step: "04",
    title: "Spustíme a rastieme",
    description:
      "Spustíme projekt a sme tu aj potom — sledujeme výsledky a ladíme detaily.",
  },
];

export const navLinks = [
  { label: "Služby", href: "#sluzby" },
  { label: "Prečo my", href: "#preco-my" },
  { label: "Postup", href: "#postup" },
  { label: "Kontakt", href: "#kontakt" },
];
