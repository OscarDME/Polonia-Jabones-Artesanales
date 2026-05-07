// lib/copy.js — Cała widoczna treść landing page'a.
// Wszystkie zmiany tekstowe wykonuje się tutaj. Komponenty czytają tylko z tego obiektu.

export const copy = {
  metadata: {
    title: "EkoZiółko — Twórz ręcznie robione mydła i kosmetyki naturalne w domu",
    description:
      "Kurs EkoZiółko: mydła rzemieślnicze i kosmetyki naturalne. Naucz się tworzyć naturalne produkty dla siebie i swojej rodziny z 27+ poradnikami, 500 przepisami i 3 DARMOWYMI bonusami. Dożywotni dostęp z 80% rabatem.",
    lang: "pl",
  },

  brand: {
    name: "EkoZiółko",
    tagline: "Naturalne piękno z ziół",
  },

  hero: {
    banner: "TA OFERTA + DARMOWE BONUSY ZNIKAJĄ ZA:",
    timerLabels: { days: "Dni", hours: "Godz", minutes: "Min", seconds: "Sek" },
    kicker: "Ponad 2 586 osób już tworzy własne kosmetyki w domu",
    headlinePre: "EKSPERTKA OD KOSMETYKÓW NATURALNYCH ZDRADZA,",
    headlineHighlight: "jak tworzyć pachnące mydła,",
    headlinePost: "które będą pielęgnować Twoją skórę od pierwszego użycia",
    supporting:
      "Idealne dla każdego, kto chce ZARAZ zacząć tworzyć własne, naturalne mydła — bez chemii, bez zbędnych wydatków i z prawdziwą frajdą.",
    cta: "Chcę dołączyć teraz 🧼",
    imageAlt: "Kobieta o promiennej i zadbanej cerze dzięki naturalnym kosmetykom EkoZiółko",
    trustChips: [
      { icon: "⭐", text: "Ponad 2 586 kursantek" },
      { icon: "🎁", text: "3 DARMOWE bonusy" },
      { icon: "🛡️", text: "14 dni gwarancji" },
    ],
  },

  instructorIntro: {
    quote:
      "Stworzyłam ten kurs specjalnie dla Ciebie – osoby, która kocha tworzyć coś własnymi rękami i chce w naturalny sposób dbać o siebie i swoich bliskich.",
  },

  soapCarousel: {
    items: [
      { image: "/carousel/soap-1.webp", alt: "Świeżo zrobione mydła rzemieślnicze" },
      { image: "/carousel/soap-2.webp", alt: "Mydła z efektem marmuru" },
      { image: "/carousel/soap-3.webp", alt: "Mydło z ozdobną zieloną falą" },
      { image: "/carousel/soap-4.webp", alt: "Naturalne mydło lawendowe" },
      { image: "/carousel/soap-5.webp", alt: "Zestaw ręcznie robionych mydeł" },
      { image: "/carousel/soap-6.webp", alt: "Detale mydeł dekoracyjnych" },
    ],
  },

  benefits: {
    headline:
      "...możesz zacząć z MAŁYM BUDŻETEM i zyskać wszystkie te KORZYŚCI!",
    items: [
      { icon: "Leaf", text: "Korzystaj z naturalnych i w pełni bezpiecznych składników." },
      { icon: "ShieldCheck", text: "Zapomnij o suchej skórze, podrażnieniach i alergiach." },
      { icon: "Sparkles", text: "Twórz absolutnie każde mydło, jakie tylko sobie wyobrazisz." },
      { icon: "TrendingUp", text: "Zamień tworzenie w prawdziwą frajdę u siebie w domu." },
    ],
    checklist: [
      "Koniec z nieudanymi przepisami",
      "Nie musisz być ekspertką",
      "Bez presji i sztywnych grafików",
    ],
    imageAlt: "Dłonie trzymające świeżo zrobione, naturalne mydła",
  },

  trending: {
    kicker: "TREND NA 2026 ROK",
    headline:
      "W zaledwie kilka dni nauczysz się robić nowoczesne mydła, którymi wszystkich zachwycisz",
    imageAlt: "Ręcznie robione mydła z modnym efektem marmuru",
  },

  courseContent: {
    headline: "Oto czego dokładnie Cię nauczymy",
    subheadline: "Poznaj pełny program kursu",
    sectionLabel: "W ponad 27 e-bookach znajdziesz...",
    paragraphs: [
      {
        bold: "Kompletną wiedzę,",
        rest: " jak projektować, produkować i przechowywać naturalne mydła niczym prawdziwa profesjonalistka.",
      },
      {
        bold: "Koniec z metodą prób i błędów:",
        rest:
          " otrzymasz sprawdzony przewodnik krok po kroku z praktycznymi radami, które oszczędzą Twój czas, nerwy i pieniądze.",
      },
    ],
  },

  megapack: {
    kicker: "MEGAPAKA",
    headline: "Twoja megapaka zawiera:",
    items: [
      { bold: "Kompletny przewodnik krok po kroku", rest: " – od nowicjuszki do poziomu zaawansowanego" },
      { bold: "500 sprawdzonych przepisów", rest: " dopasowanych do każdego typu cery" },
      { bold: "Sekrety tworzenia", rest: " własnych olejków eterycznych" },
      { bold: "Instrukcje produkcji", rest: " naturalnych mydeł w płynie" },
    ],
    imageAlt: "Wizualizacja megapaki EkoZiółko do tworzenia mydeł rzemieślniczych",
  },

  bonuses: {
    kicker: "DARMOWE BONUSY",
    headline: "Jeśli dołączysz dzisiaj, zgarniesz 3 bonusy całkowicie ZA DARMO!",
    subheadline: "Dodatkowe poradniki w formacie PDF gotowe do pobrania.",
    badge: "BONUS #",
    freeLabel: "ZA DARMO",
    items: [
      { image: "/bonuses/bonus-1.webp", title: "Kosmetyki do ciała", desc: "Naturalne przepisy na masła, balsamy i peelingi do kompleksowej pielęgnacji skóry." },
      { image: "/bonuses/bonus-6.webp", title: "Sole do kąpieli", desc: "Zrelaksuj się w domowym SPA z aromatycznymi solami i musującymi kulami do kąpieli." },
      { image: "/bonuses/bonus-7.webp", title: "Szampon w kostce", desc: "Zdrowe, mocne włosy bez plastiku i bez chemii." },
    ],
    footer: "Wszystkie bonusy otrzymujesz od razu na maila w 100% cyfrowo.",
  },

  features: {
    headline: "Wszystko, co otrzymujesz w pakiecie",
    subheadline: "Pełny dostęp i materiały do druku (PDF).",
    items: [
      { icon: "Wifi", title: "Nauka 100% online", desc: "Uczysz się kiedy masz ochotę i skąd tylko chcesz." },
      { icon: "FolderOpen", title: "Materiały na Dysku Google", desc: "Wszystko uporządkowane tak, by nauka szła jak z płatka." },
      { icon: "Infinity", title: "Dożywotni dostęp do kursu", desc: "Przerabiasz materiał we własnym tempie, bez żadnej presji." },
      { icon: "BookOpen", title: "E-booki są Twoje na zawsze", desc: "Możesz je pobrać na dysk lub czytać online bez limitów." },
      { icon: "Sparkles", title: "Praktyczna wiedza", desc: "Wszystko, czego potrzebujesz, by od razu stworzyć swoje pierwsze produkty." },
      { icon: "ShieldCheck", title: "14-dniowa gwarancja", desc: "Jeśli kurs Ci się nie spodoba, oddamy Ci 100% pieniędzy." },
    ],
  },

  primaryPricing: {
    discountBadge: "80% RABATU",
    valuedAtLabel: "Standardowa wartość programu to",
    regularPrice: "150 zł",
    offerPrice: "30 zł",
    cta: "ODBIERZ SWÓJ RABAT",
    payInfo: "Jednorazowa płatność za dożywotni dostęp",
    imageAlt: "Wizualizacja programu EkoZiółko z ekskluzywnym rabatem",
    socialImageAlt: "Zrzuty ekranu z prawdziwymi wiadomościami od zadowolonych kursantek",
  },

  socialProof: {
    headline: "NIE PRZEGAP TEJ SZANSY!",
    subheadlinePre: "Już ponad",
    countHighlight: "2 586 osób",
    subheadlinePost: "cieszy się tworzeniem własnych naturalnych kosmetyków w domowym zaciszu!",
  },

  reviewScreenshots: {
    headline: "Prawdziwe wiadomości od naszych kursantek",
    subheadline: "Takie cuda dostajemy każdego dnia.",
    onlineLabel: "online",
    typingLabel: "pisze…",
    items: [
      {
        name: "Kasia",
        timeLabel: "10:24",
        messages: [
          { text: "Zrobiłam swoje pierwsze mydła z Twojego poradnika! 🌸" },
          { text: "Wyszły przepiękne, a moja skóra jest mega miękka ✨" },
          { text: "Kiedy wrzucisz nowe przepisy?" },
        ],
      },
      {
        name: "Agnieszka",
        timeLabel: "wczoraj",
        messages: [
          { text: "Wczoraj wieczorem zrobiłam lawendowe mydła dla całej rodziny 💜" },
          { text: "Mama je uwielbia, mówi, że ma zupełnie inną skórę 🙌" },
          { text: "Dzięki wielkie za ten kurs, naprawdę ❤️" },
        ],
      },
      {
        name: "Sylwia",
        timeLabel: "12:05",
        messages: [
          { text: "Zaczęłam 2 tygodnie temu i mam już całą kolekcję 💕" },
          { text: "Przepisy są super łatwe do ogarnięcia" },
          { text: "A te DARMOWE bonusy to czyste złoto 🎁" },
        ],
      },
      {
        name: "Weronika",
        timeLabel: "dzisiaj",
        messages: [
          { text: "Hej! Chciałam Ci tylko podziękować 🌿" },
          { text: "Zrobiłam sobie szampon w kostce i skóra już nie jest sucha" },
          { text: "Milion podziękowań, zrobiłaś mi dzień 🌷" },
        ],
      },
    ],
  },

  curriculum: {
    headline: "Program kursu",
    subheadline: "Rozwiń menu poniżej i zobacz dokładnie, co dostaniesz.",
    courses: [
      {
        title: "Kurs | Ręcznie robione mydła rzemieślnicze",
        lessons: [
          "Mydła EkoZiółko Moduł 1",
          "Mydła EkoZiółko Moduł 2",
          "Produkcja mydeł Moduł 1",
          "Produkcja mydeł Moduł 2",
          "Podstawowe techniki mydlarskie",
          "Składniki i procesy chemiczne",
          "Niesamowite dodatki i ich właściwości pielęgnacyjne",
        ],
      },
      {
        title: "Kurs | 500 przepisów na mydła",
        lessons: [
          "E-book (PDF) z 500 unikalnymi i sprawdzonymi przepisami.",
          "Poradnik, jak modyfikować i adaptować składniki.",
        ],
      },
      {
        title: "Kurs | Twórz własne mydła w płynie",
        lessons: [
          "Kompletny przewodnik krok po kroku, jak zrobić własne mydła w płynie na bazie gliceryny.",
        ],
      },
      {
        title: "Kurs | Twórz własne olejki eteryczne",
        lessons: [
          "Szczegółowa instrukcja pozyskiwania i tworzenia własnych olejków eterycznych w domu.",
        ],
      },
      {
        title: "DARMOWY BONUS | Kosmetyki Naturalne",
        lessons: [
          "DARMOWY BONUS — Kosmetyki do ciała",
          "DARMOWY BONUS — Sole do kąpieli",
          "DARMOWY BONUS — Szampon w kostce",
        ],
      },
    ],
  },

  urgencyBanner: {
    discount: "80% RABATU",
    plus: "+ 3 DARMOWE BONUSY",
    middle: "do Twojego zamówienia do",
    deadline: "14 GRUDNIA",
    or: "lub do wyczerpania",
    slots: "26 MIEJSC",
  },

  finalCta: {
    preHeadline: "TWÓJ CZAS JEST TERAZ",
    urgencyTop: "80% RABATU",
    headline: "Zgarnij DZIŚ megapakę EkoZiółko z potężnym rabatem",
    subUrgency:
      "Ponad 2 586 osób już tworzy swoje naturalne mydła i kosmetyki w domu. Dziś kolej na Ciebie.",
    bundleList: [
      "Pełny kurs tworzenia mydeł (4 moduły)",
      "500 unikalnych przepisów dla każdego typu cery",
      "Kurs krok po kroku: mydła w płynie",
      "Kurs tworzenia olejków eterycznych",
      "BONUS — Kosmetyki do ciała",
      "BONUS — Sole do kąpieli",
      "BONUS — Szampon w kostce",
      "Dożywotni dostęp (PDF/online)",
    ],
    guaranteeText:
      "Pełna, 14-dniowa gwarancja satysfakcji. Jeśli kurs Ci się nie spodoba, oddamy Ci 100% pieniędzy, bez zadawania pytań.",
    guaranteeImageAlt: "Odznaka 14-dniowej gwarancji",
    regularPriceLabel: "Zamiast",
    regularPrice: "150 zł",
    offerPrice: "30 zł",
    discountBadge: "80% RABATU",
    urgencyText: "Jednorazowa płatność za dostęp na zawsze",
    bottomUrgency: "Ta oferta znika bezpowrotnie, gdy licznik wskaże zero.",
    button: "ODBIERAM MEGAPAKĘ TERAZ",
    trustRow: "100% bezpieczna płatność · Natychmiastowy dostęp · 14 dni gwarancji",
  },

  instructorBio: {
    name: "Magdalena Kowalska",
    title: "Ekspertka ds. kosmetyków naturalnych",
    bio: "Cześć, jestem Magda. Naturalnymi kosmetykami i mydlarstwem zajmuję się od ponad 8 lat. To, co zaczęło się od mojej osobistej potrzeby dbania o skórę bez chemii z drogerii, stało się moją największą pasją... a z czasem także sposobem na życie. Przez lata opracowałam dziesiątki autorskich receptur i pomogłam wielu kobietom takim jak Ty postawić pierwsze kroki w tym fascynującym świecie — uwarzyć pierwszą partię mydła z domowych składników i odkryć radość z dbania o siebie i swoich bliskich w naturalny sposób. Doskonale wiem, jak to jest zaczynać od zera, bez żadnego doświadczenia, z obawą, że zepsuje się składniki, i bez pojęcia, od czego zacząć. Właśnie dlatego w tym kursie dzielę się absolutnie wszystkim, czego się nauczyłam – w sposób jasny, maksymalnie praktyczny i bez zbędnego owijania w bawełnę.",
    imageAlt: "Magdalena Kowalska, ekspertka ds. kosmetyków naturalnych i mydeł rzemieślniczych",
    portfolioImages: [
      "/instructor-portfolio/work-1.webp",
      "/instructor-portfolio/work-2.webp",
      "/instructor-portfolio/work-3.webp",
    ],
    portfolioAlts: [
      "Ręcznie robione mydła stworzone przez Magdę",
      "Praca w pracowni kosmetyków naturalnych",
      "Gotowe produkty naturalne",
    ],
    yearsLabel: "Ponad 8 lat",
    yearsText: "tworzenia kosmetyków naturalnych",
    studentsLabel: "Ponad 2 586",
    studentsText: "przeszkolonych kursantek",
  },

  testimonials: {
    headline: "Zobacz, co mówią dziewczyny, które już przerobiły kurs",
    subheadline: "Prawdziwe opinie naszych kursantek EkoZiółko.",
    productLabel: "EkoZiółko — Kurs mydeł rzemieślniczych",
    reviewedLabel: "zrecenzowała",
    actions: { like: "Lubię to", comment: "Skomentuj", share: "Udostępnij" },
    items: [
      {
        name: "Joanna Wiśniewska",
        handle: "@asia_w",
        text: "Kurs bardzo mi się podobał. Zrobiłam wszystko dokładnie tak, jak uczyła Magda i w mniej niż miesiąc miałam całą kolekcję własnych mydeł dla całej rodziny. Skóra moich dzieci znacznie się poprawiła odkąd używamy tylko moich domowych, naturalnych produktów. Dziękuję za ten kurs, zdecydowanie warto.",
      },
      {
        name: "Maja Kaczmarek",
        handle: "",
        text: "Tydzień temu skończyłam kurs i jestem po prostu zachwycona. Zrobiłam już pierwsze mydła, przetestowaliśmy je w domu i cała rodzina jest w szoku, jakie to jest dobre. Moja skóra jest dużo bardziej miękka i nawilżona, a zapachy są nieziemskie. Bardzo wam dziękuję za tę szansę. Warte każdej wydanej złotówki.",
      },
      {
        name: "Anna Dąbrowska",
        handle: "",
        text: "Zostawiam ten komentarz, bo zrobiłam ten kurs jakiś czas temu i od tamtej pory nie kupiłam ani jednego mydła z drogerii. Cała moja rodzina używa moich naturalnych produktów i różnica dla skóry jest ogromna. Nigdy w życiu bym nie pomyślała, że w domu można zrobić tak dobre rzeczy. Z całego serca DZIĘKUJĘ. Ten kurs to genialna inwestycja.",
      },
      {
        name: "Piotr Kamiński",
        handle: "@piotr_k",
        text: "Świetne materiały, bardzo jasny przekaz i pełen profesjonalizm. A te darmowe bonusy... jak tylko macie okazję, to bierzcie to w ciemno. Kopalnia wiedzy. Pozdrawiam całą ekipę i wielkie dzięki za przekazanie nam tej wiedzy.",
      },
    ],
    cta: "CHCĘ ZACZĄĆ JUŻ DZIŚ",
  },

  closingProof: {
    headlinePre: "Nasze kursantki tworzą swoje pierwsze mydła",
    headlineHighlight: "już w pierwszym tygodniu",
    headlinePost: ". Na co jeszcze czekasz?",
    ctaLabel: "ZACZNIJ JUŻ DZIŚ",
  },

  guarantee: {
    badgeLabel: "14 DNI GWARANCJI",
    headline: "NIE MARTW SIĘ, BIERZEMY CAŁE RYZYKO NA SIEBIE.",
    text: "Masz pełne dwa tygodnie na przetestowanie kursu. Jeśli z jakiegoś powodu Ci się nie spodoba lub nie spełni Twoich oczekiwań, bez zadawania pytań zwrócimy Ci 100% pieniędzy na konto.",
    badgeAlt: "Odznaka 14-dniowej gwarancji EkoZiółko",
    certs: [
      { icon: "Award", label: "Sprawdzona jakość" },
      { icon: "ShieldCheck", label: "100% bezpieczna płatność" },
      { icon: "Lock", label: "Ochrona danych" },
      { icon: "BadgeCheck", label: "Zadowolone kursantki" },
    ],
  },

  faq: {
    headline: "Najczęściej zadawane pytania",
    subheadline: "Wszystko, co musisz wiedzieć przed startem.",
    items: [
      {
        q: "Czy płatność jest bezpieczna?",
        a: "Tak, płatność procesowana jest przez Hotmart — jedną z najbezpieczniejszych i najbardziej uznanych platform cyfrowych na świecie, która działa w ponad 160 krajach i posiada najnowocześniejsze certyfikaty bezpieczeństwa. Twoje dane płatnicze są w 100% szyfrowane i poufne, co gwarantuje w pełni bezpieczne zakupy.",
      },
      {
        q: "Czy poradzę sobie z kursem, jeśli jestem całkowicie zielona?",
        a: "Pewnie, że tak! Wszystkie e-booki i instrukcje są rozpisane krok po kroku. Jedyne, czego naprawdę potrzebujesz, to chęci do nauki. Cały proces jest bardzo intuicyjny, a w kursie korzystamy z bardzo prostych i praktycznych narzędzi.",
      },
      {
        q: "Czy mogę korzystać z kursu na telefonie?",
        a: "Tak, masz dostęp z dowolnego urządzenia! Możesz uczyć się na komputerze, tablecie lub telefonie. System działa bez zarzutu na każdym oprogramowaniu – Windows, macOS, iOS czy Android. Dodatkowo możesz pobrać darmową aplikację Hotmart, która jeszcze bardziej ułatwi Ci przerabianie kursu na komórce.",
      },
      {
        q: "Czy potrzebuję dużego budżetu na start?",
        a: "Absolutnie nie! Kosmetyki naturalne nie wymagają wielkich inwestycji finansowych, a w kursie pokazujemy, jak wykorzystywać łatwo dostępne i tanie surowce, żebyś mogła wystartować bez zbędnych kosztów.",
      },
      {
        q: "Kiedy zaczyna się kurs?",
        a: "Od razu! Gdy tylko opłacisz zamówienie, dostajesz na maila link z dostępem (oraz książki w formacie PDF). Logujesz się na platformę i przerabiasz materiał we własnym tempie. Dostęp do wszystkiego masz zagwarantowany dożywotnio.",
      },
      {
        q: "Co dokładnie zawiera kurs?",
        a: "Kupując ten pakiet, otrzymujesz: dożywotni dostęp, instrukcje e-book krok po kroku, materiały do pobrania na dysk (PDF) oraz wsparcie techniczne.",
      },
      {
        q: "Co jeśli kurs mi się nie spodoba?",
        a: "Masz pełną 14-dniową gwarancję. Jeśli z jakiegokolwiek powodu nie będziesz zadowolona, wystarczy, że napiszesz do nas, a my zwrócimy Ci 100% pieniędzy, bez zadawania pytań.",
      },
    ],
  },

  footer: {
    brand: "CREARIS",
    copyright: "Copyright © crearis.online ® 2026",
    disclaimer:
      "Ta strona nie jest częścią witryny Facebook ani firmy Facebook Inc. Co więcej, ta strona NIE jest w żaden sposób wspierana ani sponsorowana przez Facebook.",
    trademark: "FACEBOOK jest zarejestrowanym znakiem towarowym firmy FACEBOOK, Inc.",
  },
};