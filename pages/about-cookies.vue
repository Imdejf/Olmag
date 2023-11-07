<script lang="ts" setup>
definePageMeta({
  layout: "page",
});
</script>

<template>
  <PageWrapper>
    <PageHeader>
      <PageTitle
        :textNav="[{ text: 'Polityka cookies', slug: 'about-cookies' }]"
      >
      </PageTitle>
    </PageHeader>
    <PageBody>
      <div class="flex gap-5 container m-auto my-10">
        <PageSection class="min-w-85 max-w-85">
          <PageHelpNavigation />
        </PageSection>

        <PageSection class="w-full">
          <div
            class="rounded-xl border border-gray-100 bg-white p-4 w-full shadow-xl"
          >
            <div class="p-5 font-600 text-blue-900">
              <h2 class="text-[22px] font-bold">Polityka Cookies</h2>
              <div>
                <p class="mt-3 font-bold">Pliki Cookie</p>
                <p class="mt-3">
                  Pragniemy zapewnić, że korzystanie z naszego serwisu
                  internetowego jest całkowicie bezpieczne, intuicyjne i
                  dostarcza użytkownikom wszystkich wymaganych informacji. W
                  celu realizacji tych założeń wykorzystujemy pliki cookie,
                  które są zapisywane na urządzeniu użytkownika i pozwalają nam
                  na gromadzenie danych dotyczących wizyt na naszej stronie. Te
                  informacje są kluczowe dla prawidłowego funkcjonowania strony
                  olmag.pl. Nasza strona internetowa nie gromadzi automatycznie
                  żadnych informacji o użytkowniku, poza tymi, które są
                  zapisywane w plikach cookie.
                </p>
                <p class="mt-3">
                  Czym są i do czego służą pliki cookie?
                  <br />
                  - Jest to niewielka informacja tekstowa zapisywana przez
                  serwer na komputerze użytkownika w pliku cookie, którą serwer
                  może odczytać przy ponownym połączeniu się z tego komputera.
                  Pliki Cookie zazwyczaj zawierają nazwę strony internetowej, z
                  której pochodzą, czas przechowywania ich na urządzeniu
                  końcowym oraz unikalny numer.
                </p>
                <p class="mt-3">Do czego wykorzystujemy pliki cookie?</p>
                <p class="mt-3">
                  - Generowanie statystyk pozwalających na analizę sposobów
                  korzystania przez Użytkowników z serwisu internetowego, co
                  umożliwia ulepszenie jego struktury i zawartości
                  <br />
                  - Zapewnienie stabilności połączenia z właściwym serwisem na
                  stronie internetowej, szczególnie kiedy przeprowadzane są
                  zmiany w funkcjonowaniu witryny.
                  <br />
                  - Dopasowanie treści witryny internetowej do osobistych
                  preferencji Użytkownika i optymalizacja użyteczności strony.
                  <br />
                  - Rozpoznawanie użytkowników jako zalogowanych w serwisie
                  Olmag.pl, co umożliwia uniknięcie konieczności powtórnego
                  wprowadzania danych logowania na każdej podstronie portalu.
                  <br />
                  - Zachowywanie informacji o produktach i usługach dodanych do
                  koszyka lub zamówionych na etapie realizacji zakupu w
                  serwisie.
                </p>
                <p class="mt-3">Rodzaje plików Cookie</p>
                <p class="mt-3">
                  Serwis wykorzystuje dwa typy plików cookie: „sesyjne” oraz
                  „stałe”. Pliki cookie „sesyjne” to pliki tymczasowe, które
                  pozostają na urządzeniu użytkownika aż do momentu wylogowania
                  się, zamknięcia strony internetowej lub wyłączenia
                  przeglądarki. Z kolei pliki cookie „stałe” są zapisywane na
                  urządzeniu końcowym użytkownika na czas określony w
                  ustawieniach plików cookie albo do momentu ich ręcznego
                  usunięcia przez użytkownika.
                </p>
                <p class="mt-3">
                  Jak ograniczyć lub usunąć pliki cookie z komputera?
                </p>
                <p class="mt-3">
                  - Państwo mają możliwość zarządzania plikami cookie, zarówno
                  ich ograniczania, jak i usuwania, poprzez zmianę ustawień w
                  przeglądarce internetowej. Zachęcamy do wykorzystania funkcji
                  pomocy dostępnej w przeglądarce, aby zaznajomić się z
                  procedurą. Należy jednak być świadomym, że blokada lub
                  usunięcie plików cookie z naszej witryny może prowadzić do
                  ograniczeń w jej funkcjonalności.
                  <br />
                  - Pliki cookie umieszczane na urządzeniu końcowym użytkownika
                  mogą być również wykorzystywane przez reklamodawców oraz
                  partnerów współpracujących z operatorem serwisu.
                  <br />
                  - Zazwyczaj oprogramowanie do przeglądania stron internetowych
                  (przeglądarka) domyślnie ustawione jest na akceptowanie
                  przechowywania plików cookie na urządzeniu końcowym.
                  Użytkownicy serwisu mogą w dowolnym momencie zmodyfikować
                  ustawienia dotyczące plików cookie. Takie zmiany mogą polegać
                  na manualnym zarządzaniu plikami cookie, włącznie z
                  możliwością blokowania automatycznego ich używania w
                  ustawieniach przeglądarki lub otrzymywania powiadomień o ich
                  umieszczaniu na urządzeniu użytkownika. Szczegółowe informacje
                  o zarządzaniu plikami cookie znajdują się w opcjach lub
                  ustawieniach wybranej przeglądarki internetowej.
                  <br />
                  - Dodatkowe informacje na temat plików cookie można znaleźć w
                  dziale "Pomoc" dostępnym w menu większości przeglądarek
                  internetowych oraz na stronie internetowej
                  www.allaboutcookies.org.
                </p>
              </div>
            </div>
          </div>
        </PageSection>
      </div>
    </PageBody>
  </PageWrapper>
</template>
