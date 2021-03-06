const cities = new Map();
cities.set("Stockholm", [
  "Stockholm",
  "Botkyrka",
  "Ekerö",
  "Haninge",
  "Huddinge",
  "Järfälla",
  "Lidingö",
  "Nacka",
  "Norrtälje",
  "Nykvarn",
  "Nynäshamn",
  "Österåker",
  "Salem",
  "Sigtuna",
  "Södertälje",
  "Sollentuna",
  "Solna",
  "Sundbyberg",
  "Täby",
  "Tyresö",
  "Upplands Väsby",
  "Upplands-Bro",
  "Vallentuna",
  "Värmdö",
  "Vaxholm",
]);
cities.set("Blekinge", [
  "Karlshamn",
  "Karlskrona",
  "Olofström",
  "Ronneby",
  "Sölvesborg",
]);
cities.set("Dalarna", [
  "Avesta",
  "Borlänge",
  "Falun",
  "Gagnef",
  "Hedemora",
  "Leksand",
  "Ludvika",
  "Malung",
  "Mora",
  "Orsa",
  "Rättvik",
  "Smedjebacken",
  "Säter",
  "Vansbro",
  "Älvdalen",
]);
cities.set("Gävleborg", [
  "Bollnäs",
  "Gävle",
  "Hofors",
  "Hudiksvall",
  "Ljusdal",
  "Nordanstig",
  "Ockelbo",
  "Ovanåker",
  "Sandviken",
  "Söderhamn",
]);
cities.set("Halland", [
  "Falkenberg",
  "Halmstad",
  "Hylte",
  "Kungsbacka",
  "Laholm",
  "Varberg",
]);
cities.set("Jämtland", [
  "Åre",
  "Berg",
  "Bräcke",
  "Härjedalen",
  "Krokom",
  "Östersund",
  "Ragunda",
  "Strömsund",
  "Jämtland",
]);
cities.set("Jönköping", [
  "Aneby",
  "Eksjö",
  "Gislaved",
  "Gnosjö",
  "Habo",
  "Jönköping",
  "Mullsjö",
  "Nässjö",
  "Sävsjö",
  "Tranås",
  "Vaggeryd",
  "Värnamo",
  "Vetlanda",
]);

cities.set("Kalmar", ["Kalmar"]);
cities.set("Kronoberg", [
  "Älmhult",
  "Alvesta",
  "Lessebo",
  "Ljungby",
  "Markaryd",
  "Tingsryd",
  "Uppvidinge",
  "Växjö",
  "Sävsjö",
  "Tranås",
  "Vaggeryd",
  "Värnamo",
  "Vetlanda",
]);
cities.set("Norrbotten", [
  "Älvsbyn",
  "Arjeplog",
  "Arvidsjaur",
  "Boden",
  "Gällivare",
  "Haparanda",
  "Jokkmokk",
  "Kalix",
  "Kiruna",
  "Luleå",
  "Överkalix",
  "Övertorneå",
  "Pajala",
  "Piteå",
]);
cities.set("Skåne", [
  "Ängelholm",
  "Åstorp",
  "Båstad",
  "Bjuv",
  "Bromölla",
  "Burlöv",
  "Eslöv",
  "Hässleholm",
  "Helsingborg",
  "Höganäs",
  "Höör",
  "Hörby",
  "Kävlinge",
  "Klippan",
  "Kristianstad",
  "Landskrona",
  "Lomma",
  "Lund",
  "Malmö",
  "Örkelljunga",
  "Osby",
  "Östra Göinge",
  "Perstorp",
  "Simrishamn",
  "Sjöbo",
  "Skurup",
  "Svalöv",
  "Svedala",
  "Tomelilla",
  "Trelleborg",
  "Vellinge",
  "Ystad",
]);
cities.set("Södermanland", [
  "Eskilstuna",
  "Flen",
  "Gnesta",
  "Katrineholm",
  "Nyköping",
  "Oxelösund",
  "Strängnäs",
  "Trosa",
  "Vingåker",
]);
cities.set("Uppsala", [
  "Älvkarleby",
  "Enköping",
  "Håbo",
  "Heby",
  "Knivsta",
  "Östhammar",
  "Tierp",
  "Uppsala",
]);
cities.set("Värmland", [
  "Årjäng",
  "Arvika",
  "Eda",
  "Filipstad",
  "Forshaga",
  "Grums",
  "Hagfors",
  "Hammarö",
  "Karlstad",
  "Kil",
  "Kristinehamn",
  "Munkfors",
  "Säffle",
  "Storfors",
  "Sunne",
  "Torsby",
]);
cities.set("Västerbotten", [
  "Åsele",
  "Bjurholm",
  "Dorotea",
  "Lycksele",
  "Malå",
  "Nordmaling",
  "Norsjö",
  "Robertsfors",
  "Skellefteå",
  "Sorsele",
  "Storuman",
  "Umeå",
  "Vännäs",
  "Vilhelmina",
  "Vindeln",
]);
cities.set("Västernorrland", [
  "Ånge",
  "Härnösand",
  "Kramfors",
  "Örnsköldsvik",
  "Sollefteå",
  "Sundsvall",
  "Timrå",
]);
cities.set("Västmanland", [
  "Arboga",
  "Fagersta",
  "Hallstahammar",
  "Köping",
  "Kungsör",
  "Norberg",
  "Sala",
  "Skinnskatteberg",
  "Surahammar",
  "Västerås",
]);

cities.set("Västra Götaland", [
  "Alingsås",
  "Borås",
  "Falköping",
  "Gothenburg",
  "Hjo",
  "Kungälv",
  "Lidköping",
  "Lysekil",
  "Mariestad",
  "Skara",
  "Skövde",
  "Strömstad",
  "Tidaholm",
  "Trollhättan",
  "Uddevalla",
  "Ulricehamn",
  "Vänersborg",
  "Åmål",
]);
cities.set("Örebro", [
  "Askersund",
  "Degerfors",
  "Hällefors",
  "Hallsberg",
  "Karlskoga",
  "Kumla",
  "Laxå",
  "Lekeberg",
  "Lindesberg",
  "Ljusnarsberg",
  "Nora",
  "Örebro",
]);
cities.set("Östergötland", [
  "Åtvidaberg",
  "Boxholm",
  "Finspång",
  "Kinda",
  "Linköping",
  "Mjölby",
  "Motala",
  "Norrköping",
  "Ödeshög",
  "Söderköping",
  "Vadstena",
  "Valdemarsvik",
  "Ydre",
]);
module.exports = cities;
