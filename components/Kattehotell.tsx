import React from 'react';

const Kattehotell: React.FC = () => {
  return (
    <section id="kattehotell" className="py-24 px-6 md:px-12 bg-[#FAF9F6]">
      <div className="max-w-6xl mx-auto space-y-16">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <div className="space-y-4">
            <p className="text-xs uppercase tracking-widest text-stone-400">
              Kattehotell, ferie for katten
            </p>
            <h2 className="text-4xl md:text-5xl text-stone-800 leading-tight">
              CimZala Catz Kattehotell
            </h2>
            <div className="h-1 w-20 bg-stone-200" />
          </div>
          <div className="flex items-center gap-4">
            <div className="rounded-full border border-stone-200 px-4 py-2 text-sm text-stone-600 bg-white">
              Til salgs
            </div>
            <div className="text-2xl md:text-3xl font-semibold text-stone-800">
              195 kr
            </div>
            <a
              href="#contact"
              className="px-6 py-3 bg-stone-900 text-white rounded-full text-sm uppercase tracking-widest hover:bg-stone-700 transition-colors"
            >
              Send melding
            </a>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-6 text-stone-600 leading-relaxed font-light">
            <p>
              CimZala Catz kattehotell ligger i Vestby ca 4 mil fra Oslo. I rolige
              omgivelser inne i skogen kan vi tilby ett ferieopphold til din katt
              mens du selv har ferie.
            </p>
            <p>
              Hotell oppholdet for kattene er i hjemmekoselige omgivelser med
              forskjellige aktivitets rom og stuer inne og utendørs trygge
              «catios».
            </p>
            <p>
              Det er forskjellige aktivitetes leker, løpehjul, klatrestativ,
              storskjerm i stuen, sofaer, stoler og andre hjemmekoselige
              elementer.
            </p>
            <p>
              Vårt fokus er individuell tilrettelegging. Katten skal ha en
              feriefølelse.
            </p>
            <p>
              Fri tilgang på friskt vann og fôr fra Royal Canin. Hotellet har
              flere sikre uteområder som er spennende for en katt.
            </p>
          </div>

          <div className="space-y-6">
            <div className="rounded-2xl bg-white shadow-xl border border-stone-100 p-6 space-y-4">
              <h3 className="text-xl text-stone-800">Priser per døgn</h3>
              <div className="space-y-2 text-sm text-stone-600">
                <div className="flex items-center justify-between">
                  <span>Lavsesong*</span>
                  <span className="font-medium text-stone-800">195 kr</span>
                </div>
                <div className="flex items-center justify-between">
                  <span>Helg / helligdag</span>
                  <span className="font-medium text-stone-800">295 kr</span>
                </div>
                <div className="flex items-center justify-between">
                  <span>Høysesong**, helg og røde dager</span>
                  <span className="font-medium text-stone-800">295 kr</span>
                </div>
                <div className="flex items-center justify-between">
                  <span>Spesielle behov</span>
                  <span className="font-medium text-stone-800">+50 kr</span>
                </div>
                <div className="flex items-center justify-between">
                  <span>Katt nr 2, 3, 4 osv</span>
                  <span className="font-medium text-stone-800">+100 kr</span>
                </div>
              </div>
            </div>

            <div className="rounded-2xl bg-white shadow-xl border border-stone-100 p-6 space-y-4">
              <h3 className="text-xl text-stone-800">Lavsesong*</h3>
              <div className="space-y-2 text-sm text-stone-600">
                <div className="flex items-center justify-between">
                  <span>1 uke</span>
                  <span className="font-medium text-stone-800">1300 kr</span>
                </div>
                <div className="flex items-center justify-between">
                  <span>2 uker</span>
                  <span className="font-medium text-stone-800">2300 kr</span>
                </div>
                <div className="flex items-center justify-between">
                  <span>3 uker</span>
                  <span className="font-medium text-stone-800">3000 kr</span>
                </div>
                <div className="flex items-center justify-between">
                  <span>4 uker</span>
                  <span className="font-medium text-stone-800">3800 kr</span>
                </div>
              </div>
            </div>

            <div className="rounded-2xl bg-white shadow-xl border border-stone-100 p-6 space-y-4">
              <h3 className="text-xl text-stone-800">Høysesong**</h3>
              <div className="space-y-2 text-sm text-stone-600">
                <div className="flex items-center justify-between">
                  <span>1 uke</span>
                  <span className="font-medium text-stone-800">1700 kr</span>
                </div>
                <div className="flex items-center justify-between">
                  <span>2 uker</span>
                  <span className="font-medium text-stone-800">3000 kr</span>
                </div>
                <div className="flex items-center justify-between">
                  <span>3 uker</span>
                  <span className="font-medium text-stone-800">4500 kr</span>
                </div>
                <div className="flex items-center justify-between">
                  <span>4 uker</span>
                  <span className="font-medium text-stone-800">5800 kr</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="rounded-2xl bg-white border border-stone-100 shadow-xl p-8 space-y-4 text-stone-600 leading-relaxed font-light">
          <p>
            *Lavsesong er alle dager utenom skoleferier og bevegelige
            helligdager.
          </p>
          <p>
            **Høysesong er skoleferier og bevegelige helligdager. Datoene for
            disse varierer fra år til år, spør oss om du er usikker.
          </p>
          <p>
            Opphold ved kattehotellet inkluderer tørrfôr for friske kastrerte
            katter, daglige kontroller av kattens eksteriør, lufting og lek på
            friområdene, samt eventuelle særskilte behov for medisinering,
            tannpuss etc. mot ett tillegg.
          </p>
          <p>
            Oppholdet betales kontant når du henter katten(e). Det betales for
            ankomst og avreisedøgn.
          </p>
          <p>
            CimZala Catz er også registrert oppdretter av rasen Britisk Korthår
            i NRR. Følg oss på Face Book:)
          </p>
        </div>
      </div>
    </section>
  );
};

export default Kattehotell;
