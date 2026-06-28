import type { Metadata } from "next";
import LegalPage from "@/presentation/legal/legal-page";
import { site } from "@/core/config/site";

export const metadata: Metadata = {
  title: "Obchodné podmienky",
  description:
    "Všeobecné obchodné podmienky poskytovania služieb digitálnej agentúry MatewLogic.",
  robots: { index: true, follow: true },
};

const op = site.operator;
const ph = (v: string, placeholder: string) => v || `[DOPLNIŤ: ${placeholder}]`;

export default function Page() {
  return (
    <LegalPage
      title="Obchodné podmienky"
      intro="Tieto všeobecné obchodné podmienky upravujú vzťah medzi poskytovateľom a objednávateľom pri poskytovaní digitálnych služieb. Predstavujú vzorový rámec, ktorý odporúčame prispôsobiť konkrétnej ponuke a dať skontrolovať odborníkom."
    >
      <h2>1. Základné ustanovenia</h2>
      <p>Poskytovateľom služieb je:</p>
      <ul>
        <li><strong>{ph(op.name, "obchodné meno")}</strong></li>
        <li>Sídlo / miesto podnikania: {ph(op.address, "adresa")}</li>
        <li>IČO: {ph(op.ico, "IČO")}</li>
        {op.dic ? <li>DIČ: {op.dic}</li> : null}
        {op.icDph ? <li>IČ DPH: {op.icDph}</li> : <li>Poskytovateľ [je/nie je] platiteľom DPH – [DOPLNIŤ]</li>}
        <li>Zápis: {ph(op.register, "zápis v registri")}</li>
        <li>E-mail: <a href={`mailto:${op.email}`}>{op.email}</a></li>
      </ul>
      <p>
        (ďalej len „<strong>poskytovateľ</strong>“). Objednávateľom je fyzická
        alebo právnická osoba, ktorá si objedná služby poskytovateľa (ďalej len
        „<strong>objednávateľ</strong>“).
      </p>

      <h2>2. Predmet a rozsah služieb</h2>
      <p>
        Poskytovateľ poskytuje najmä služby tvorby webstránok, tvorby
        kreatívneho obsahu a vizualizácií a implementácie AI automatizácií.
        Konkrétny rozsah, cena a termíny sú vždy dohodnuté individuálne v cenovej
        ponuke, objednávke alebo zmluve.
      </p>

      <h2>3. Objednávka a uzavretie zmluvy</h2>
      <p>
        Zmluvný vzťah vzniká potvrdením objednávky alebo akceptáciou cenovej
        ponuky zo strany objednávateľa (vrátane e-mailovej akceptácie).
        Vyplnením kontaktného formulára na webe nevzniká žiadny záväzok — ide o
        nezáväzný dopyt.
      </p>

      <h2>4. Cena a platobné podmienky</h2>
      <ul>
        <li>Cena služieb je stanovená podľa platnej cenovej ponuky.</li>
        <li>
          Poskytovateľ je oprávnený požadovať primeranú zálohu pred začatím prác.
        </li>
        <li>
          Faktúry sú splatné v lehote uvedenej na faktúre (ak nie je dohodnuté
          inak, do 14 dní).
        </li>
      </ul>

      <h2>5. Súčinnosť objednávateľa</h2>
      <p>
        Objednávateľ sa zaväzuje poskytnúť poskytovateľovi potrebnú súčinnosť,
        podklady a informácie. Objednávateľ zodpovedá za to, že podklady, ktoré
        dodá (texty, fotografie, logá a pod.), neporušujú práva tretích osôb.
      </p>

      <h2>6. Dodanie a odovzdanie diela</h2>
      <p>
        Poskytovateľ dodá dielo v dohodnutom termíne. Po odovzdaní má
        objednávateľ právo na dohodnutý počet revízií. Dielo sa považuje za
        prevzaté aj vtedy, ak ho objednávateľ začne fakticky používať.
      </p>

      <h2>7. Licencie a autorské práva</h2>
      <p>
        Po úplnom uhradení ceny diela poskytovateľ udeľuje objednávateľovi
        licenciu na používanie výsledkov diela na dohodnutý účel. Poskytovateľ je
        oprávnený uvádzať realizovaný projekt vo svojom portfóliu, ak sa strany
        nedohodnú inak.
      </p>

      <h2>8. Zodpovednosť za vady a reklamácie</h2>
      <p>
        Objednávateľ je oprávnený reklamovať vady diela bez zbytočného odkladu po
        ich zistení, a to e-mailom na {op.email}. Poskytovateľ vybaví reklamáciu
        v primeranej lehote. Poskytovateľ nezodpovedá za výpadky služieb tretích
        strán (hosting, domény, externé nástroje).
      </p>

      <h2>9. Odstúpenie od zmluvy (spotrebiteľ)</h2>
      <p>
        Ak je objednávateľ spotrebiteľom, má v zmysle zákona č. 102/2014 Z. z.
        právo odstúpiť od zmluvy uzavretej na diaľku do 14 dní. Toto právo sa
        neuplatní, ak bolo poskytovanie služby s výslovným súhlasom spotrebiteľa
        začaté pred uplynutím tejto lehoty a služba bola úplne poskytnutá.
      </p>

      <h2>10. Riešenie sporov a alternatívne riešenie</h2>
      <p>
        Vzťahy neupravené týmito podmienkami sa riadia právnym poriadkom
        Slovenskej republiky. Spotrebiteľ má právo obrátiť sa na poskytovateľa so
        žiadosťou o nápravu, prípadne podať návrh na alternatívne riešenie sporu.
        Orgánom dozoru je <strong>{op.supervisoryAuthority}</strong>. Spory je
        možné riešiť aj prostredníctvom platformy RSO:{" "}
        <a href="https://ec.europa.eu/consumers/odr" target="_blank" rel="noopener noreferrer">
          ec.europa.eu/consumers/odr
        </a>
        .
      </p>

      <h2>11. Záverečné ustanovenia</h2>
      <p>
        Poskytovateľ si vyhradzuje právo tieto podmienky meniť. Aktuálne znenie
        je vždy zverejnené na tejto stránke s dátumom poslednej aktualizácie.
      </p>

      <p>
        <em>
          Tento dokument je vzor. Pred použitím odporúčame doplniť konkrétne
          obchodné podmienky (ceny, termíny, revízie) a dať ho skontrolovať
          právnikovi.
        </em>
      </p>
    </LegalPage>
  );
}
