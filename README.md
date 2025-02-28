<h1>Squad Page</h1>
Ontwerp en maak samen met je team een website met NodeJS, Express, JSON en Liquid.

<h1>Beschrijving</h1>
In dit project hebben we als team een dynamische squadpagina ontwikkeld voor onze groep binnen de Frontend Design and Development (FDND) opleiding. De pagina toont informatie over alle squadleden, zoals naam, foto en contactgegevens, en haalt deze data op uit de whois.fdnd.nl API. Ons doel was om een platform te creëren waar squadleden elkaar gemakkelijk kunnen vinden en met elkaar in contact kunnen komen.

<h1>Functionaliteiten</h1>
Overzicht van squadleden: Een lijst met alle leden, inclusief profielfoto en basisinformatie.
Detailpagina's: Meer gedetailleerde informatie per lid bij klikken op hun profiel.
Zoekfunctie: Mogelijkheid om leden te zoeken op naam of andere kenmerken.
Responsief ontwerp: Geoptimaliseerd voor zowel desktop als mobiele apparaten.
Kenmerken
Gebruikte Technologieën
Node.js: JavaScript-runtime voor het server-side uitvoeren van onze applicatie.
Express: Webframework voor Node.js, gebruikt voor het opzetten van onze server en routing.
Liquid: Template-engine voor het renderen van dynamische HTML-pagina's.
Fetch API: Voor het ophalen van data uit de externe WHOIS API.
Projectstructuur
server.js: Het hoofdbestand waarin de Express-server wordt opgezet en routes worden gedefinieerd.
views/: Map met Liquid-templatebestanden voor de verschillende pagina's.
public/: Bevat statische bestanden zoals CSS, JavaScript en afbeeldingen.
Data ophalen en weergeven
In server.js maken we gebruik van de Fetch API om data op te halen uit de WHOIS API. Deze data wordt vervolgens doorgegeven aan onze Liquid-templates om dynamisch HTML te genereren.

javascript: 

const fetch = require('node-fetch');

app.get('/', async (req, res) => {
  const response = await fetch('https://whois.fdnd.nl/api/v1/members');
  const data = await response.json();
  res.render('index', { members: data });
});

In de bovenstaande code wordt een GET-verzoek gedaan aan de WHOIS API om de ledeninformatie op te halen. Deze data wordt vervolgens doorgegeven aan de index.liquid template voor weergave.

Node.js, Express en Liquid
Node.js: Een JavaScript-runtime waarmee je server-side applicaties kunt bouwen. Het stelt ons in staat om JavaScript buiten de browser te gebruiken, wat handig is voor het opzetten van webservers en het uitvoeren van backend-logica.

Express: Een minimalistisch webframework voor Node.js dat helpt bij het bouwen van webapplicaties en API's. Het vereenvoudigt het proces van routing en het afhandelen van HTTP-verzoeken.

Liquid: Een template-engine die wordt gebruikt om dynamische content te renderen in HTML. Het stelt ons in staat om variabelen en logica in onze HTML-bestanden te gebruiken, wat zorgt voor flexibele en herbruikbare componenten.

<h1>Installatie</h1>
Volg de onderstaande stappen om het project lokaal op je machine te installeren en uit te voeren:

Repository clonen: Clone deze repository naar je lokale machine.


git clone https://github.com/Mikiyas-hs/connect-your-tribe-team-squad-page.git
Navigeer naar de projectmap:

cd connect-your-tribe-team-squad-page
Afhankelijkheden installeren: Installeer de benodigde npm-pakketten.

npm install
Milieubestand instellen: Maak een .env-bestand aan in de hoofdmap van het project en voeg eventuele noodzakelijke omgevingsvariabelen toe (zoals API-sleutels of URL's).

Applicatie starten: Start de server.

npm start
Toegang tot de applicatie: Open je webbrowser en ga naar http://localhost:3000 om de squadpagina te bekijken.

<h1>Licentie</h1>
Dit project is gelicentieerd onder de MIT-licentie. Zie het LICENSE bestand voor meer informatie.