import type { ServiceId } from "./site";

export interface ProcessStep {
  step: string;
  title: string;
  description: string;
}

export interface FeatureItem {
  icon: string; // kľúč do iconMap v komponente
  title: string;
  description: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface ServicePageContent {
  id: ServiceId;
  slug: string;
  eyebrow: string;
  image: string;
  seo: {
    title: string;
    description: string;
    keywords: string[];
  };
  hero: {
    titleStart: string;
    titleHighlight: string;
    subtitle: string;
  };
  intro: {
    heading: string;
    paragraphs: string[];
  };
  process: {
    heading: string;
    subtitle: string;
    steps: ProcessStep[];
  };
  features: {
    heading: string;
    subtitle: string;
    items: FeatureItem[];
  };
  useCases: {
    heading: string;
    subtitle: string;
    items: FeatureItem[];
  };
  faq: {
    heading: string;
    items: FaqItem[];
  };
  cta: {
    heading: string;
    text: string;
  };
}

export const servicePages: Record<ServiceId, ServicePageContent> = {
  /* ------------------------------------------------------------------ */
  /*  WEB                                                               */
  /* ------------------------------------------------------------------ */
  web: {
    id: "web",
    slug: "webstranky",
    eyebrow: "Tvorba webstránok",
    image: "/portfolio-web-v2.png",
    seo: {
      title: "Tvorba webstránok na mieru | Moderné weby pre firmy",
      description:
        "Tvorba moderných webstránok na mieru pre firmy na Slovensku a v Česku. Rýchle, responzívne weby optimalizované pre Google (SEO), z ktorých vám chodia dopyty. Nezáväzná konzultácia zdarma.",
      keywords: [
        "tvorba webstránok",
        "tvorba web stránok na mieru",
        "moderné webstránky",
        "responzívny web",
        "firemný web",
        "webstránka pre firmu",
        "SEO optimalizácia",
        "rýchly web",
        "redizajn webu",
        "webová vizitka",
        "tvorba eshopu",
        "webstránky Slovensko",
      ],
    },
    hero: {
      titleStart: "Web, ktorý",
      titleHighlight: "predáva za vás.",
      subtitle:
        "Navrhneme a postavíme moderný, rýchly web na mieru vašej firme — taký, ktorému ľudia uveria a z ktorého vám reálne chodia dopyty.",
    },
    intro: {
      heading: "Vaša najlepšia obchodníčka funguje 24/7",
      paragraphs: [
        "Web je dnes prvé miesto, kde si o vás zákazník urobí názor. Za pár sekúnd sa rozhodne, či vám dôveruje, alebo odíde ku konkurencii. Pekná a prehľadná stránka preto nie je luxus — je to základ dôveryhodnej firmy.",
        "Nerobíme weby zo šablón, ktoré vyzerajú ako tisíc ďalších. Každý projekt staviame na mieru — od dizajnu cez texty až po technické detaily, ktoré rozhodujú o tom, či vás Google ukáže a či návštevník klikne na „dopyt“.",
      ],
    },
    process: {
      heading: "Ako vzniká váš web",
      subtitle:
        "Jasný postup od prvého hovoru po spustenie. Vždy presne viete, v akej fáze sme.",
      steps: [
        {
          step: "01",
          title: "Konzultácia a stratégia",
          description:
            "Spoznáme vašu firmu, ciele a zákazníkov. Navrhneme štruktúru webu tak, aby viedla návštevníka presne tam, kam chcete — k dopytu, hovoru alebo objednávke.",
        },
        {
          step: "02",
          title: "Dizajn na mieru",
          description:
            "Pripravíme moderný vizuálny návrh v štýle vašej značky. Uvidíte, ako bude web vyzerať, ešte pred programovaním — a všetko spolu doladíme.",
        },
        {
          step: "03",
          title: "Vývoj a obsah",
          description:
            "Web naprogramujeme tak, aby bol bleskovo rýchly, bezchybný na mobile a pripravený na Google. Pomôžeme aj s textami a fotkami.",
        },
        {
          step: "04",
          title: "Spustenie a rast",
          description:
            "Web spustíme, zaškolíme vás a sme tu aj potom. Sledujeme výsledky, ladíme detaily a pomáhame vám rásť.",
        },
      ],
    },
    features: {
      heading: "Čo získate",
      subtitle: "Nie len peknú stránku — nástroj, ktorý pracuje pre vašu firmu.",
      items: [
        {
          icon: "browsers",
          title: "Dizajn na mieru",
          description:
            "Jedinečný vzhľad v štýle vašej značky, ktorý zaujme na prvý pohľad a odlíši vás od konkurencie.",
        },
        {
          icon: "lightning",
          title: "Blesková rýchlosť",
          description:
            "Optimalizovaný web sa načíta okamžite. Pomalé stránky strácajú zákazníkov aj body u Googlu.",
        },
        {
          icon: "mobile",
          title: "Dokonalý mobil",
          description:
            "Väčšina ľudí vás otvorí v telefóne. Postaráme sa, aby web vyzeral skvele na každej obrazovke.",
        },
        {
          icon: "search",
          title: "Pripravené na Google",
          description:
            "Technické SEO základy, vďaka ktorým vás zákazníci nájdu, keď hľadajú vaše služby.",
        },
        {
          icon: "shield",
          title: "Bezpečnosť a istota",
          description:
            "Moderné zabezpečenie, HTTPS a spoľahlivý hosting. O technickú stránku sa nemusíte starať.",
        },
        {
          icon: "chart",
          title: "Merateľné výsledky",
          description:
            "Napojenie na analytiku, aby ste videli, koľko ľudí vás navštívi a koľko z nich sa ozve.",
        },
      ],
    },
    useCases: {
      heading: "Čo vám vieme postaviť",
      subtitle: "Od jednoduchej vizitky po web, ktorý zvládne všetko.",
      items: [
        {
          icon: "browsers",
          title: "Firemná webstránka",
          description:
            "Profesionálna prezentácia vašej firmy, služieb a referencií s jasnou výzvou na kontakt.",
        },
        {
          icon: "cart",
          title: "E-shop",
          description:
            "Online predaj s jednoduchou správou produktov, objednávok a platieb.",
        },
        {
          icon: "sparkle",
          title: "Landing page",
          description:
            "Jednostránkový web na mieru kampani alebo produktu, vyladený na maximum dopytov.",
        },
        {
          icon: "browsers",
          title: "Redizajn starého webu",
          description:
            "Zastaraný web premeníme na moderný, rýchly a výkonný — bez straty pozícií v Google.",
        },
      ],
    },
    faq: {
      heading: "Časté otázky",
      items: [
        {
          question: "Koľko stojí tvorba webstránky?",
          answer:
            "Cena závisí od rozsahu — iná je jednoduchá vizitka a iná e-shop. Po nezáväznej konzultácii dostanete jasnú cenovú ponuku vopred, takže presne viete, do čoho idete. Žiadne skryté poplatky.",
        },
        {
          question: "Ako dlho trvá vytvorenie webu?",
          answer:
            "Jednoduchší web zvládneme spravidla za 2–4 týždne, rozsiahlejšie projekty trvajú dlhšie. Konkrétny termín vám povieme po úvodnej konzultácii.",
        },
        {
          question: "Budem si vedieť web sám upravovať?",
          answer:
            "Áno. Web vieme postaviť tak, aby ste si obsah (texty, fotky, články) vedeli jednoducho meniť aj bez programátora. Radi vás zaškolíme.",
        },
        {
          question: "Postaráte sa aj o texty a fotky?",
          answer:
            "Áno. Pomôžeme s textami, ktoré predávajú, aj s vizuálmi. Vieme zabezpečiť fotografie aj grafiku v rámci našej služby kreatívneho obsahu.",
        },
        {
          question: "Bude web fungovať na Googli?",
          answer:
            "Každý web staviame s technickými SEO základmi, aby vás Google vedel správne zaradiť. Vieme zabezpečiť aj dlhodobú SEO starostlivosť a obsah.",
        },
      ],
    },
    cta: {
      heading: "Poďme postaviť web, ktorý vám bude robiť radosť aj zisk",
      text: "Napíšte nám pár viet o vašej firme. Ozveme sa do 24 hodín s nezáväzným návrhom — konzultácia je zadarmo.",
    },
  },

  /* ------------------------------------------------------------------ */
  /*  CONTENT                                                           */
  /* ------------------------------------------------------------------ */
  content: {
    id: "content",
    slug: "kreativny-obsah",
    eyebrow: "Kreatívny obsah a vizualizácie",
    image: "/portfolio-content-v1.png",
    seo: {
      title: "Kreatívny obsah a vizualizácie | Grafika, reels a 3D",
      description:
        "Tvorba kreatívneho obsahu pre firmy — vizuály a grafika, krátke videá a reels, 3D vizualizácie produktov. Obsah, ktorý zastaví palec pri scrollovaní a buduje vašu značku.",
      keywords: [
        "kreatívny obsah",
        "tvorba obsahu na sociálne siete",
        "grafický dizajn",
        "tvorba reels",
        "krátke videá",
        "produktové fotografie",
        "3D vizualizácie",
        "vizualizácie produktov",
        "branding",
        "obsah pre Instagram",
        "social media obsah",
        "video reklama",
      ],
    },
    hero: {
      titleStart: "Obsah, na ktorý",
      titleHighlight: "sa nedá nepozrieť.",
      subtitle:
        "V mori príspevkov musíte vyniknúť. Vytvoríme vizuály, videá a 3D vizualizácie, ktoré zastavia palec pri scrollovaní a predajú vašu značku.",
    },
    intro: {
      heading: "Ľudia nakupujú očami",
      paragraphs: [
        "O tom, či zákazník klikne, zdieľa alebo kúpi, sa rozhoduje za zlomok sekundy. Slabý obsah zapadne, skvelý obsah si ľudia zapamätajú a šíria ďalej. Rozdiel medzi nimi je kvalita a jednotný štýl.",
        "Pripravíme vám obsah, ktorý drží jednotnú tvár značky naprieč webom aj sociálnymi sieťami — od grafiky a fotiek cez pútavé krátke videá až po realistické 3D vizualizácie produktov, ktoré presvedčia ešte pred kúpou.",
      ],
    },
    process: {
      heading: "Ako tvoríme váš obsah",
      subtitle:
        "Od nápadu po hotové vizuály, ktoré môžete hneď použiť.",
      steps: [
        {
          step: "01",
          title: "Pochopíme značku",
          description:
            "Zistíme, kto ste, komu hovoríte a aký dojem chcete vyvolať. Z toho postavíme jednotný vizuálny štýl.",
        },
        {
          step: "02",
          title: "Koncept a scenár",
          description:
            "Navrhneme nápady, kompozície a scenáre pre videá. Schválite si smer ešte pred samotnou tvorbou.",
        },
        {
          step: "03",
          title: "Tvorba a produkcia",
          description:
            "Vytvoríme grafiku, nafotíme alebo natočíme obsah a pripravíme 3D vizualizácie. Všetko v jednotnom štýle značky.",
        },
        {
          step: "04",
          title: "Finalizácia a dodanie",
          description:
            "Doladíme detaily, pripravíme formáty pre web aj sociálne siete a odovzdáme hotový obsah pripravený na zverejnenie.",
        },
      ],
    },
    features: {
      heading: "Čo pre vás vytvoríme",
      subtitle: "Všetko v jednom konzistentnom štýle vašej značky.",
      items: [
        {
          icon: "paint",
          title: "Vizuály a grafika",
          description:
            "Príspevky, bannery, plagáty a grafika v jednotnom štýle, ktorá buduje rozpoznateľnú značku.",
        },
        {
          icon: "film",
          title: "Krátke videá a reels",
          description:
            "Dynamické videá a reels, ktoré zaujmú v prvej sekunde a majú dosah na sociálnych sieťach.",
        },
        {
          icon: "cube",
          title: "3D vizualizácie",
          description:
            "Realistické 3D modely produktov a priestorov, ktoré predávajú ešte predtým, než existujú fyzicky.",
        },
        {
          icon: "camera",
          title: "Produktové fotografie",
          description:
            "Profesionálne fotky produktov, ktoré vyzerajú prémiovo a zvyšujú dôveru aj predaje.",
        },
        {
          icon: "sparkle",
          title: "Jednotný branding",
          description:
            "Farby, písma a štýl, vďaka ktorým vás ľudia spoznajú na prvý pohľad — kdekoľvek.",
        },
        {
          icon: "chat",
          title: "Obsah na sociálne siete",
          description:
            "Pravidelný, pripravený obsah, s ktorým vaše profily ožijú a rastú.",
        },
      ],
    },
    useCases: {
      heading: "Kde vám obsah pomôže",
      subtitle: "Tam, kde potrebujete zaujať a presvedčiť.",
      items: [
        {
          icon: "film",
          title: "Sociálne siete",
          description:
            "Reels a príspevky, ktoré budujú komunitu a privádzajú nových zákazníkov.",
        },
        {
          icon: "cube",
          title: "Predaj produktov",
          description:
            "3D vizualizácie a produktové fotky pre e-shop, Amazon alebo katalóg.",
        },
        {
          icon: "paint",
          title: "Reklamné kampane",
          description:
            "Vizuály a videá na mieru reklamám, ktoré konvertujú a nemíňajú rozpočet nadarmo.",
        },
        {
          icon: "browsers",
          title: "Web a prezentácie",
          description:
            "Obsah, ktorý oživí váš web a urobí z neho zážitok, nie len text.",
        },
      ],
    },
    faq: {
      heading: "Časté otázky",
      items: [
        {
          question: "Potrebujem dodať vlastné materiály?",
          answer:
            "Nie nutne. Vieme tvoriť od nuly — od konceptu cez fotenie či natáčanie až po finálne spracovanie. Ak máte vlastné podklady, radi ich využijeme.",
        },
        {
          question: "Robíte aj jednorazový obsah, alebo len dlhodobo?",
          answer:
            "Oboje. Vieme pripraviť jednorazový balík vizuálov, aj dlhodobo dodávať pravidelný obsah na vaše sociálne siete.",
        },
        {
          question: "Čo sú 3D vizualizácie a kedy sa hodia?",
          answer:
            "Sú to realistické digitálne modely produktov alebo priestorov. Hodia sa, keď chcete ukázať produkt, ktorý ešte nemáte fyzicky, alebo zobraziť interiér či stavbu pred realizáciou.",
        },
        {
          question: "V akých formátoch obsah dostanem?",
          answer:
            "Pripravíme obsah vo všetkých potrebných formátoch — pre Instagram, Facebook, TikTok, web aj tlač. Všetko pripravené na okamžité použitie.",
        },
      ],
    },
    cta: {
      heading: "Dajme vašej značke tvár, ktorú si ľudia zapamätajú",
      text: "Napíšte nám, čo potrebujete prezentovať. Pripravíme návrh aj cenu — nezáväzne a zadarmo.",
    },
  },

  /* ------------------------------------------------------------------ */
  /*  AI                                                                */
  /* ------------------------------------------------------------------ */
  ai: {
    id: "ai",
    slug: "ai-automatizacie",
    eyebrow: "AI automatizácie",
    image: "/portfolio-ai-v1.png",
    seo: {
      title: "AI automatizácie pre firmy | Ušetrite hodiny práce",
      description:
        "AI automatizácie pre malé a stredné firmy. Automatizujeme opakujúce sa úlohy — odpovede zákazníkom, spracovanie dopytov, e-mailov a faktúr. Jednoducho, bez technického žargónu.",
      keywords: [
        "AI automatizácie",
        "automatizácia firmy",
        "umelá inteligencia pre firmy",
        "automatizácia procesov",
        "AI chatbot",
        "automatické odpovede",
        "spracovanie dokumentov AI",
        "automatizácia e-mailov",
        "AI asistent",
        "digitalizácia firmy",
        "úspora času vo firme",
        "AI riešenia na mieru",
      ],
    },
    hero: {
      titleStart: "Nechajte rutinu robiť",
      titleHighlight: "umelú inteligenciu.",
      subtitle:
        "Šetrite hodiny každý týždeň. Automatizujeme opakujúce sa úlohy, aby ste sa mohli venovať tomu, na čom naozaj záleží — vašej firme a zákazníkom.",
    },
    intro: {
      heading: "Koľko hodín týždenne stratíte na rutine?",
      paragraphs: [
        "Prepisovanie údajov, odpovedanie na rovnaké otázky, spracovanie faktúr a e-mailov — tieto úlohy vás stoja čas aj peniaze a nikam vás neposúvajú. Pritom väčšinu z nich dnes zvládne umelá inteligencia rýchlejšie a bez chýb.",
        "Nepoužívame AI na efekt. Napojíme ju priamo na vaše nástroje a procesy tam, kde to dáva zmysel, a vysvetlíme všetko ľudsky — aby ste presne vedeli, čo to robí a koľko vám to ušetrí.",
      ],
    },
    process: {
      heading: "Ako automatizáciu zavedieme",
      subtitle:
        "Bez chaosu a bez toho, aby ste museli rozumieť technológii.",
      steps: [
        {
          step: "01",
          title: "Nájdeme, čo vás zdržuje",
          description:
            "Spolu prejdeme vaše procesy a identifikujeme úlohy, ktoré sa opakujú a dajú sa automatizovať s najväčším prínosom.",
        },
        {
          step: "02",
          title: "Navrhneme riešenie",
          description:
            "Pripravíme jasný plán — čo sa zautomatizuje, ako to bude fungovať a koľko času a peňazí vám to ušetrí.",
        },
        {
          step: "03",
          title: "Napojíme a nastavíme",
          description:
            "Prepojíme AI s vašimi nástrojmi (e-mail, tabuľky, CRM, web) a všetko dôkladne otestujeme, aby to fungovalo spoľahlivo.",
        },
        {
          step: "04",
          title: "Spustíme a dohliadame",
          description:
            "Automatizáciu spustíme naostro, zaškolíme váš tím a priebežne ju vylepšujeme podľa reálnej prevádzky.",
        },
      ],
    },
    features: {
      heading: "Čo vám AI vyrieši",
      subtitle: "Praktické automatizácie, ktoré ušetria čas hneď od prvého dňa.",
      items: [
        {
          icon: "chat",
          title: "Odpovede zákazníkom",
          description:
            "Automatický chat a odpovede na časté otázky 24/7 — zákazník dostane odpoveď okamžite, vy ušetríte čas.",
        },
        {
          icon: "envelope",
          title: "Spracovanie e-mailov a dopytov",
          description:
            "AI roztriedi a spracuje prichádzajúce správy, pripraví odpovede a zapíše dôležité údaje tam, kam treba.",
        },
        {
          icon: "file",
          title: "Dokumenty a faktúry",
          description:
            "Automatické čítanie a spracovanie faktúr, zmlúv a PDF — koniec ručného prepisovania.",
        },
        {
          icon: "plugs",
          title: "Napojenie na vaše nástroje",
          description:
            "Prepojíme AI s tým, čo už používate — Excel, Google Sheets, CRM, Slack či váš web.",
        },
        {
          icon: "clock",
          title: "Úspora času a nákladov",
          description:
            "Rutinu zvládne automatizácia za zlomok času. Vy aj váš tím sa venujete dôležitejším veciam.",
        },
        {
          icon: "robot",
          title: "Riešenia na mieru",
          description:
            "Žiadne univerzálne krabicové riešenia — automatizáciu staviame presne podľa vašej firmy.",
        },
      ],
    },
    useCases: {
      heading: "Kde AI najviac pomôže",
      subtitle: "Tam, kde sa úlohy opakujú deň čo deň.",
      items: [
        {
          icon: "chat",
          title: "Zákaznícka podpora",
          description:
            "Okamžité odpovede, triedenie požiadaviek a odbremenenie vášho tímu.",
        },
        {
          icon: "file",
          title: "Administratíva a účtovníctvo",
          description:
            "Automatické spracovanie faktúr, dokladov a prepis údajov do systémov.",
        },
        {
          icon: "envelope",
          title: "Predaj a dopyty",
          description:
            "Rýchle spracovanie dopytov, follow-up e-maily a zápis do CRM bez práce navyše.",
        },
        {
          icon: "chart",
          title: "Reporty a dáta",
          description:
            "Automatické zbieranie údajov a tvorba prehľadov, ktoré máte vždy aktuálne.",
        },
      ],
    },
    faq: {
      heading: "Časté otázky",
      items: [
        {
          question: "Musím rozumieť technológii alebo AI?",
          answer:
            "Vôbec nie. To je naša práca. Všetko vysvetlíme ľudsky a zrozumiteľne, postaráme sa o nastavenie aj prevádzku. Vy len využívate výsledok.",
        },
        {
          question: "Je to bezpečné pre dáta mojej firmy?",
          answer:
            "Áno. Riešenia navrhujeme s dôrazom na bezpečnosť a ochranu údajov v súlade s GDPR. Vaše dáta ostávajú pod vašou kontrolou.",
        },
        {
          question: "Oplatí sa to aj pre malú firmu?",
          answer:
            "Často práve malým firmám pomôže AI najviac — ušetrí čas, ktorý by inak zabrala administratíva. Začať sa dá aj jednou jednoduchou automatizáciou.",
        },
        {
          question: "S akými nástrojmi to viete prepojiť?",
          answer:
            "S väčšinou bežných nástrojov — e-mail, Excel, Google Sheets, CRM systémy, Slack, váš web a mnohé ďalšie. Riešenie prispôsobíme tomu, čo už používate.",
        },
      ],
    },
    cta: {
      heading: "Zistite, čo všetko vie AI ušetriť práve vašej firme",
      text: "Napíšte nám, čo vás vo firme najviac zdržuje. Navrhneme automatizáciu na mieru — nezáväzne a zadarmo.",
    },
  },
};
