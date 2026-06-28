import type { Metadata } from "next";
import LegalPage from "@/presentation/legal/legal-page";
import { site } from "@/core/config/site";

export const metadata: Metadata = {
  title: "Ochrana osobných údajov",
  description:
    "Zásady ochrany osobných údajov spoločnosti MatewLogic v zmysle GDPR a zákona č. 18/2018 Z. z.",
  robots: { index: true, follow: true },
};

const op = site.operator;
const ph = (v: string, placeholder: string) => v || `[DOPLNIŤ: ${placeholder}]`;

export default function Page() {
  return (
    <LegalPage
      title="Ochrana osobných údajov"
      intro="Vaše súkromie berieme vážne. V týchto zásadách vysvetľujeme, aké osobné údaje spracúvame, na aký účel, na akom právnom základe a aké máte práva."
    >
      <h2>1. Prevádzkovateľ</h2>
      <p>
        Prevádzkovateľom osobných údajov je:
      </p>
      <ul>
        <li><strong>{ph(op.name, "obchodné meno")}</strong></li>
        <li>Sídlo / miesto podnikania: {ph(op.address, "adresa")}</li>
        <li>IČO: {ph(op.ico, "IČO")}</li>
        {op.dic ? <li>DIČ: {op.dic}</li> : <li>DIČ: [DOPLNIŤ, ak relevantné]</li>}
        {op.icDph ? <li>IČ DPH: {op.icDph}</li> : null}
        <li>Zápis: {ph(op.register, "zápis v živnostenskom/obchodnom registri")}</li>
        <li>E-mail: <a href={`mailto:${op.email}`}>{op.email}</a></li>
        {op.phone ? <li>Telefón: {op.phone}</li> : <li>Telefón: [DOPLNIŤ]</li>}
      </ul>
      <p>
        (ďalej len „<strong>prevádzkovateľ</strong>“). Prevádzkovateľ nevymenoval
        zodpovednú osobu (DPO), nakoľko mu to zákon neukladá.
      </p>

      <h2>2. Aké údaje spracúvame</h2>
      <p>V závislosti od toho, ako s nami komunikujete, spracúvame:</p>
      <ul>
        <li>
          <strong>Údaje z kontaktného formulára:</strong> meno, e-mailová adresa,
          názov firmy (nepovinné), obsah vašej správy.
        </li>
        <li>
          <strong>Technické údaje:</strong> IP adresa, typ prehliadača a zariadenia,
          informácie o návšteve webu (najmä prostredníctvom cookies — pozri{" "}
          <a href="/zasady-cookies">Zásady používania cookies</a>).
        </li>
      </ul>

      <h2>3. Účel a právny základ spracúvania</h2>
      <table>
        <thead>
          <tr>
            <th>Účel</th>
            <th>Právny základ (GDPR)</th>
            <th>Doba uchovávania</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Vybavenie dopytu z kontaktného formulára a komunikácia s vami</td>
            <td>čl. 6 ods. 1 písm. b) – predzmluvné vzťahy, prípadne písm. f) – oprávnený záujem</td>
            <td>najviac 24 mesiacov od poslednej komunikácie</td>
          </tr>
          <tr>
            <td>Plnenie zmluvy a poskytovanie služieb</td>
            <td>čl. 6 ods. 1 písm. b) – plnenie zmluvy</td>
            <td>počas trvania zmluvy</td>
          </tr>
          <tr>
            <td>Plnenie zákonných povinností (účtovníctvo, dane)</td>
            <td>čl. 6 ods. 1 písm. c) – zákonná povinnosť</td>
            <td>podľa zákona (spravidla 10 rokov)</td>
          </tr>
          <tr>
            <td>Analytické a marketingové cookies</td>
            <td>čl. 6 ods. 1 písm. a) – súhlas</td>
            <td>do odvolania súhlasu / podľa platnosti cookie</td>
          </tr>
        </tbody>
      </table>

      <h2>4. Príjemcovia a sprostredkovatelia</h2>
      <p>
        Vaše údaje môžu byť spracúvané našimi dôveryhodnými poskytovateľmi
        služieb (sprostredkovateľmi), ktorí spĺňajú požiadavky GDPR:
      </p>
      <ul>
        <li>
          <strong>Vercel Inc.</strong> – hosting a prevádzka webu.
        </li>
        <li>
          <strong>Resend (resend.com)</strong> – doručovanie e-mailov z
          kontaktného formulára.
        </li>
      </ul>
      <p>
        Niektorí poskytovatelia môžu spracúvať údaje aj mimo EÚ (napr. v USA). V
        takom prípade je prenos zabezpečený štandardnými zmluvnými doložkami EÚ,
        prípadne iným zákonným mechanizmom podľa kapitoly V GDPR.
      </p>

      <h2>5. Vaše práva</h2>
      <p>Ako dotknutá osoba máte podľa GDPR právo:</p>
      <ul>
        <li>na prístup k svojim osobným údajom (čl. 15),</li>
        <li>na opravu nesprávnych údajov (čl. 16),</li>
        <li>na vymazanie údajov – „právo na zabudnutie“ (čl. 17),</li>
        <li>na obmedzenie spracúvania (čl. 18),</li>
        <li>na prenosnosť údajov (čl. 20),</li>
        <li>namietať proti spracúvaniu (čl. 21),</li>
        <li>kedykoľvek odvolať udelený súhlas (bez vplyvu na zákonnosť spracúvania pred odvolaním),</li>
        <li>
          podať sťažnosť dozornému orgánu, ktorým je{" "}
          <strong>{op.dataProtectionAuthority}</strong>.
        </li>
      </ul>
      <p>
        Svoje práva si môžete uplatniť e-mailom na{" "}
        <a href={`mailto:${op.email}`}>{op.email}</a>.
      </p>

      <h2>6. Poskytnutie údajov</h2>
      <p>
        Poskytnutie osobných údajov v kontaktnom formulári je dobrovoľné, je však
        nevyhnutné na to, aby sme vás mohli kontaktovať a vybaviť váš dopyt. Bez
        ich poskytnutia vám nevieme odpovedať.
      </p>

      <h2>7. Automatizované rozhodovanie</h2>
      <p>
        Pri spracúvaní vašich osobných údajov nedochádza k automatizovanému
        rozhodovaniu ani profilovaniu s právnymi účinkami.
      </p>

      <h2>8. Zmeny zásad</h2>
      <p>
        Tieto zásady môžeme priebežne aktualizovať. Aktuálne znenie je vždy
        dostupné na tejto stránke s uvedeným dátumom poslednej aktualizácie.
      </p>

      <p>
        <em>
          Tento dokument je pripravený ako vzor a zohľadňuje GDPR a zákon č.
          18/2018 Z. z. o ochrane osobných údajov. Pred zverejnením odporúčame
          doplniť údaje prevádzkovateľa a nechať dokument skontrolovať odborníkom.
        </em>
      </p>
    </LegalPage>
  );
}
