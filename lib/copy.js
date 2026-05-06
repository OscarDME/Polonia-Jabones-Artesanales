// lib/copy.js — Cała widoczna treść landing page'a.
// Wszystkie zmiany tekstowe wykonuje się tutaj. Komponenty czytają tylko z tego obiektu.

export const copy = {
  metadata: {
    title: "EcoHerbal — Twórz ręcznie robione mydła, które sprzedają się same",
    description:
      "Kurs EcoHerbal: mydła rzemieślnicze i kosmetyki naturalne. Naucz się tworzyć naturalne mydła z 27+ poradnikami, 500 przepisami i 8 DARMOWYMI bonusami. Dożywotni dostęp z 80% rabatem.",
    lang: "pl",
  },

  brand: {
    name: "EcoHerbal",
    tagline: "Naturalne piękno z ziół",
  },

  hero: {
    banner: "TA OFERTA + DARMOWE BONUSY ZNIKA ZA:",
    timerLabels: { days: "Dni", hours: "Godz", minutes: "Min", seconds: "Sek" },
    kicker: "Ponad 2 586 osób już tworzy własne kosmetyki",
    headlinePre: "EKSPERTKA KOSMETYCZNA ZDRADZA,",
    headlineHighlight: "jak tworzyć zniewalające mydła,",
    headlinePost: "które pielęgnują Twoją skórę od pierwszego użycia",
    supporting:
      "Idealne dla osób, które chcą zacząć OD ZARAZ i generować realne zyski dzięki własnym, w 100% naturalnym mydłom.",
    cta: "Chcę dołączyć teraz 🧼",
    imageAlt: "Kobieta o promiennej i zadbanej cerze dzięki naturalnym kosmetykom EcoHerbal",
    trustChips: [
      { icon: "⭐", text: "Ponad 2 586 kursantek" },
      { icon: "🎁", text: "8 DARMOWYCH bonusów" },
      { icon: "🛡️", text: "7 dni gwarancji" },
    ],
  },

  instructorIntro: {
    quote:
      "Stworzyłam ten ekskluzywny kurs specjalnie dla Ciebie – osoby, która kocha tworzyć coś własnymi rękami i chce zdobyć nową, dochodową umiejętność.",
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
      { icon: "TrendingUp", text: "Zamień swoją pasję w prawdziwe źródło dochodu." },
    ],
    checklist: [
      "Koniec z nieudanymi przepisami",
      "Nie musisz być ekspertką",
      "Brak szefów, presji i sztywnych grafików",
    ],
    imageAlt: "Dłonie trzymające świeżo zrobione, naturalne mydła",
  },

  trending: {
    kicker: "TREND NA 2026 ROK",
    headline:
      "W zaledwie kilka dni nauczysz się robić modne mydła, które sprzedają się same",
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
      { bold: "Kompletny przewodnik krok po kroku", rest: " – od nowicjuszki do ekspertki" },
      { bold: "500 sprawdzonych przepisów", rest: " dopasowanych do każdego typu cery" },
      { bold: "Sekrety tworzenia", rest: " własnych olejków eterycznych" },
      { bold: "Instrukcje produkcji", rest: " naturalnych mydeł w płynie" },
    ],
    imageAlt: "Wizualizacja megapaki EcoHerbal do tworzenia mydeł rzemieślniczych",
  },

  bonuses: {
    kicker: "DARMOWE BONUSY",
    headline: "Jeśli dołączysz dzisiaj, zgarniesz 8 bonusów całkowicie ZA DARMO!",
    subheadline: "Łącznie 27 poradników w formacie PDF gotowych do pobrania.",
    badge: "BONUS #",
    freeLabel: "ZA DARMO",
    items: [
      { image: "/bonuses/bonus-1.webp", title: "Kosmetyki do ciała", desc: "Naturalne przepisy na kompleksową pielęgnację skóry." },
      { image: "/bonuses/bonus-2.webp", title: "Kosmetyki do twarzy", desc: "Kremy, serum i toniki dla promiennej cery bez skaz." },
      { image: "/bonuses/bonus-3.webp", title: "Naturalny dezodorant", desc: "Łagodne, w pełni skuteczne formuły bez grama chemii." },
      { image: "/bonuses/bonus-4.webp", title: "Stały płyn do płukania ust", desc: "Zadbaj o zdrowie zębów dzięki potędze natury." },
      { image: "/bonuses/bonus-5.webp", title: "Naturalna pasta do zębów", desc: "Głębokie oczyszczanie bez szkodliwego fluoru i SLS." },
      { image: "/bonuses/bonus-6.webp", title: "Sole do kąpieli", desc: "Zrelaksuj się w domowym SPA z aromatycznymi solami." },
      { image: "/bonuses/bonus-7.webp", title: "Szampon w kostce", desc: "Zdrowe, mocne włosy bez plastiku i zbędnych opakowań." },
      { image: "/bonuses/bonus-8.webp", title: "Świece rzemieślnicze", desc: "Pełny, dodatkowy kurs z tworzenia dekoracyjnych świec." },
    ],
    footer: "Wszystkie bonusy otrzymujesz od razu na maila w 100% cyfrowo.",
  },

  features: {
    headline: "Wszystko, co otrzymujesz w pakiecie",
    subheadline: "Pełny dostęp, materiały do druku (PDF) i imienny certyfikat.",
    items: [
      { icon: "Wifi", title: "Nauka 100% online", desc: "Uczysz się kiedy masz ochotę i skąd tylko chcesz." },
      { icon: "FolderOpen", title: "Materiały na Dysku Google", desc: "Wszystko uporządkowane tak, by nauka szła jak z płatka." },
      { icon: "Infinity", title: "Dożywotni dostęp do kursu", desc: "Przerabiasz materiał we własnym tempie, bez żadnej presji." },
      { icon: "BookOpen", title: "E-booki są Twoje na zawsze", desc: "Możesz je pobrać na dysk lub czytać online bez limitów." },
      { icon: "Award", title: "Certyfikat ukończenia", desc: "Potwierdzisz zdobyte umiejętności oficjalnym dokumentem." },
      { icon: "ShieldCheck", title: "7-dniowa gwarancja", desc: "Jeśli kurs Ci się nie spodoba, oddamy Ci 100% pieniędzy." },
    ],
  },

  primaryPricing: {
    discountBadge: "80% RABATU",
    valuedAtLabel: "Standardowa wartość programu to",
    regularPrice: "150 zł",
    offerPrice: "30 zł",
    cta: "ODBIERZ SWÓJ RABAT",
    payInfo: "Jednorazowa płatność za dożywotni dostęp",
    imageAlt: "Wizualizacja programu EcoHerbal z ekskluzywnym rabatem",
    socialImageAlt: "Zrzuty ekranu z prawdziwymi wiadomościami od zadowolonych kursantek",
  },

  socialProof: {
    headline: "NIE PRZEGAP TEJ SZANSY!",
    subheadlinePre: "Już ponad",
    countHighlight: "2 586 osób",
    subheadlinePost: "cieszy się tworzeniem własnych kosmetyków w domowym zaciszu!",
  },

  reviewScreenshots: {
    headline: "Prawdziwe wiadomości od naszych kursantek",
    subheadline: "Takie cuda dostajemy na WhatsAppie każdego dnia.",
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
          { text: "Sprzedałam 12 mydeł na sobotnim jarmarku 😱" },
          { text: "Ludzie się o nie zabijali, nie mogłam uwierzyć 🙌" },
          { text: "Dzięki wielkie za ten kurs, naprawdę ❤️" },
        ],
      },
      {
        name: "Sylwia",
        timeLabel: "12:05",
        messages: [
          { text: "Zaczęłam 2 tygodnie temu i mam już własną markę 💕" },
          { text: "Przepisy są super łatwe do ogarnięcia" },
          { text: "A te DARMOWE bonusy to czyste złoto 🎁" },
        ],
      },
      {
        name: "Weronika",
        timeLabel: "dzisiaj",
        messages: [
          { text: "Hej! Chciałam Ci tylko napisać, że właśnie domknęłam pierwszą sprzedaż B2B" },
          { text: "10 mydeł do sklepu eko 🌿" },
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
          "Mydła EcoHerbal Moduł 1",
          "Mydła EcoHerbal Moduł 2",
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
        title: "DARMOWY BONUS | Kurs tworzenia świec rzemieślniczych",
        lessons: [
          "Produkcja świec cz. 1",
          "Produkcja świec cz. 2",
          "Świece z wosku pszczelego",
          "Świece z wosku sojowego",
          "Sztuka dekoracji świec",
          "Przewodnik po świecach rzemieślniczych",
          "Ekstra: Lampy z lawą",
        ],
      },
      {
        title: "DARMOWY BONUS | Kosmetyki Naturalne",
        lessons: [
          "DARMOWY BONUS Kosmetyki do ciała",
          "DARMOWY BONUS Kosmetyki do twarzy",
          "DARMOWY BONUS Naturalny dezodorant",
          "DARMOWY BONUS Stały płyn do płukania ust",
          "DARMOWY BONUS Pasta do zębów",
          "DARMOWY BONUS Sole do kąpieli",
          "DARMOWY BONUS Szampon w kostce",
        ],
      },
    ],
  },

  urgencyBanner: {
    discount: "80% RABATU",
    plus: "+ 8 DARMOWYCH BONUSÓW",
    middle: "do Twojego zamówienia do",
    deadline: "14 GRUDNIA",
    or: "lub do wyczerpania",
    slots: "26 MIEJSC",
  },

  finalCta: {
    preHeadline: "TWÓJ CZAS JEST TERAZ",
    urgencyTop: "80% RABATU",
    headline: "Zgarnij DZIŚ megapake EcoHerbal z potężnym rabatem",
    subUrgency:
      "Ponad 2 586 osób już tworzy swoje naturalne mydła i kosmetyki. Dziś kolej na Ciebie.",
    bundleList: [
      "Pełny kurs tworzenia mydeł (4 moduły)",
      "500 unikalnych przepisów dla każdego typu cery",
      "Kurs krok po kroku: mydła w płynie",
      "Kurs tworzenia olejków eterycznych",
      "BONUS — Kompletny kurs świec rzemieślniczych",
      "BONUS — 7 poradników z recepturami kosmetyków naturalnych",
      "Dożywotni dostęp (PDF/online) + Imienny certyfikat ukończenia",
    ],
    guaranteeText:
      "Pełna, 7-dniowa gwarancja satysfakcji. Jeśli kurs Ci się nie spodoba, oddamy Ci 100% pieniędzy, bez zadawania pytań.",
    guaranteeImageAlt: "Odznaka 7-dniowej gwarancji",
    regularPriceLabel: "Zamiast",
    regularPrice: "150 zł",
    offerPrice: "30 zł",
    discountBadge: "80% RABATU",
    urgencyText: "Jednorazowa płatność za dostęp na zawsze",
    bottomUrgency: "Ta oferta znika bezpowrotnie, gdy licznik wskaże zero.",
    button: "ODBIERAM MEGAPAKĘ TERAZ",
    trustRow: "100% bezpieczna płatność · Natychmiastowy dostęp · 7 dni gwarancji",
  },

  instructorBio: {
    name: "Magdalena Kowalska",
    title: "Ekspertka ds. kosmetyków naturalnych",
    bio: "Cześć, jestem Magda. Naturalnymi kosmetykami i mydlarstwem zajmuję się od ponad 8 lat. To, co zaczęło się od mojej osobistej potrzeby dbania o skórę bez chemii z drogerii, stało się moją największą pasją... a z czasem także sposobem na życie. Przez lata opracowałam dziesiątki autorskich receptur i pomogłam wielu kobietom takim jak Ty postawić pierwsze kroki w tym fascynującym świecie. Od uwarzenia pierwszej partii mydła z domowych składników, aż po przekształcenie tej sztuki w dochodowy, ekologiczny biznes. Doskonale wiem, jak to jest zaczynać od zera, bez żadnego doświadczenia, z obawą, że zepsuje się składniki, i bez pojęcia, od czego zacząć. Właśnie dlatego w tym kursie dzielę się absolutnie wszystkim, czego się nauczyłam – w sposób jasny, maksymalnie praktyczny i bez zbędnego owijania w bawełnę.",
    imageAlt: "Magdalena Kowalska, ekspertka ds. kosmetyków naturalnych i mydeł rzemieślniczych",
    portfolioImages: [
      "/instructor-portfolio/work-1.webp",
      "/instructor-portfolio/work-2.webp",
      "/instructor-portfolio/work-3.webp",
    ],
    portfolioAlts: [
      "Ręcznie robione mydła stworzone przez Magdę",
      "Praca w pracowni kosmetyków naturalnych",
      "Gotowe produkty spakowane i przygotowane do sprzedaży",
    ],
    yearsLabel: "Ponad 8 lat",
    yearsText: "tworzenia kosmetyków naturalnych",
    studentsLabel: "Ponad 2 586",
    studentsText: "przeszkolonych kursantek",
  },

  testimonials: {
    headline: "Pamiętaj, że otrzymasz też imienny certyfikat",
    subheadline: "Zobacz, co mówią dziewczyny, które już przerobiły kurs EcoHerbal.",
    productLabel: "EcoHerbal — Kurs mydeł rzemieślniczych",
    reviewedLabel: "zrecenzowała",
    actions: { like: "Lubię to", comment: "Skomentuj", share: "Udostępnij" },
    items: [
      {
        name: "Joanna Wiśniewska",
        handle: "@asia_w",
        text: "Kurs bardzo mi się podobał. Zrobiłam wszystko dokładnie tak, jak uczyła Magda i w mniej niż miesiąc udało mi się rozkręcić własny biznesik i zaliczyć pierwsze sprzedaże. Teraz robię tych mydeł coraz więcej i serio myślę o otwarciu własnego małego sklepu. Dziękuję za ten kurs, zdecydowanie warto.",
      },
      {
        name: "Maja Kaczmarek",
        handle: "",
        text: "Tydzień temu skończyłam kurs i jestem po prostu zachwycona. Zrobiłam już pierwsze mydła, przetestowaliśmy je w domu i cała rodzina jest w szoku, jakie to jest dobre. Teraz szykuję większą partię do sprzedaży, dokładnie tak, jak tłumaczono w kursie. Kilka znajomych moich znajomych już chce ode mnie kupować. Bardzo wam dziękuję za tę szansę. Warte każdej wydanej złotówki.",
      },
      {
        name: "Anna Dąbrowska",
        handle: "",
        text: "Zostawiam ten komentarz, bo zrobiłam ten kurs jakiś czas temu i od razu potem ruszyłam z biznesem. Szczerze mówiąc, poszło mi super, a wczoraj dobiłam targu z pewną marką, żeby zaczęli sprzedawać u siebie kilka moich produktów. Nigdy w życiu bym nie pomyślała, że zajdę tak daleko, więc z całego serca DZIĘKUJĘ. Ten kurs to genialna inwestycja.",
      },
      {
        name: "Piotr Kamiński",
        handle: "@piotr_k",
        text: "Świetne materiały, bardzo jasny przekaz i pełen profesjonalizm. A te darmowe bonusy... jak tylko macie okazję, to bierzcie to w ciemno. Kopalnia wiedzy. Pozdrawiam całą ekipę i wielkie dzięki za przekazanie nam tych sprawdzonych biznesowych fundamentów.",
      },
    ],
    cta: "CHCĘ ZACZĄĆ JUŻ DZIŚ",
  },

  closingProof: {
    headlinePre: "Nasze kursantki tworzą swoje pierwsze produkty w",
    headlineHighlight: "mniej niż 3 dni",
    headlinePost: ". Na co jeszcze czekasz?",
    ctaLabel: "ZACZNIJ JUŻ DZIŚ",
  },

  guarantee: {
    badgeLabel: "7 DNI GWARANCJI",
    headline: "NIE MARTW SIĘ, BIERZEMY CAŁE RYZYKO NA SIEBIE.",
    text: "Masz pełny tydzień na przetestowanie kursu. Jeśli z jakiegoś powodu Ci się nie spodoba lub nie spełni Twoich oczekiwań, bez zadawania pytań zwrócimy Ci 100% pieniędzy na konto.",
    badgeAlt: "Odznaka 7-dniowej gwarancji EcoHerbal",
    certs: [
      { icon: "Award", label: "Oficjalny certyfikat" },
      { icon: "ShieldCheck", label: "100% bezpieczna płatność" },
      { icon: "Lock", label: "Ochrona danych" },
      { icon: "BadgeCheck", label: "Sprawdzona jakość" },
    ],
  },

  faq: {
    headline: "Najczęściej zadawane pytania",
    subheadline: "Wszystko, co musisz wiedzieć przed startem.",
    items: [
      {
        q: "Czy płatność jest bezpieczna?",
        a: "Tak, płatność procesowana jest przez Hotmart, jedną z najbezpieczniejszych i najbardziej uznanych platform cyfrowych na świecie, która działa w ponad 160 krajach i posiada najnowocześniejsze certyfikaty bezpieczeństwa. Twoje dane płatnicze są w 100% szyfrowane i poufne, co gwarantuje w pełni bezpieczne zakupy.",
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
        a: "Kupując ten pakiet, otrzymujesz: dożywotni dostęp, instrukcje e-book krok po kroku, materiały do pobrania na dysk (PDF), wsparcie techniczne oraz imienny certyfikat po ukończeniu nauki.",
      },
      {
        q: "Czy po zakończeniu dostanę certyfikat?",
        a: "Jasne! Gdy tylko przerobisz materiał, wystarczy, że napiszesz do nas maila, a my przygotujemy i wyślemy Ci Twój oficjalny certyfikat.",
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