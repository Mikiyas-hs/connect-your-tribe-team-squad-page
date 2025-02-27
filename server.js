import express from 'express';
import { Liquid } from 'liquidjs';
 
// Haal alle eerstejaars squads uit de WHOIS API op van dit jaar (2024–2025)
const squadResponse = await fetch('https://fdnd.directus.app/items/squad?filter={"_and":[{"cohort":"2425"},{"tribe":{"name":"FDND Jaar 1"}}]}')
 
// Lees van de response van die fetch het JSON object in, waar we iets mee kunnen doen
const squadResponseJSON = await squadResponse.json()
 
// Vul hier jullie team naam in
const teamName = 'Blaze';
 
 
const app = express()
 
app.use(express.static('public'))
 
const engine = new Liquid();
app.engine('liquid', engine.express());
 
app.set('views', './views')
 
app.use(express.urlencoded({extended: true}))
 
// Functie voor fetchen team namen en mensen
async function fetchPeopleWithTeams(squadResponseJSON) {
  try {
    const squadIds = squadResponseJSON.data.map(squad => squad.id);
 
    if (squadIds.length === 0) {
      console.warn("No squads found");
      return [];
    }
 
    const personResponse = await fetch(`https://fdnd.directus.app/items/person?fields=id,name,team,squads.squad_id.id&filter={"squads":{"squad_id":{"id":{"_in":[${squadIds.join(',')} ]}}}}`);
    if (!personResponse.ok) throw new Error(`HTTP error! status: ${personResponse.status}`);
    const personResponseJSON = await personResponse.json();
    return personResponseJSON.data;
  } catch (error) {
    console.error("Error fetching people and their teams:", error);
    return [];
  }
}
 
// index.liquid
app.get('/', async function (request, response) {
  const messagesResponse = await fetch(`https://fdnd.directus.app/items/messages/?filter={"for":"Team ${teamName}"}`)
  const messagesResponseJSON = await messagesResponse.json()
 
  response.render('index.liquid', {
    persons: await fetchPeopleWithTeams(squadResponseJSON), 
    squads: squadResponseJSON.data
  })
})
 
app.post('/', async function (request, response) {
  await fetch('https://fdnd.directus.app/items/messages/', {
    method: 'POST',
    body: JSON.stringify({
      for: `Team ${teamName}`,
      from: request.body.from,
      text: request.body.text
    }),
    headers: {
      'Content-Type': 'application/json;charset=UTF-8'
    }
  });
 
  response.redirect(303, '/')
})
 
// Team packs page 
app.get('/teampacks', async function (request, response) {
  response.render('teampacks.liquid', {
    persons: await fetchPeopleWithTeams(squadResponseJSON), 
    squads: squadResponseJSON.data
  })
})
 
// Maak een POST route voor de index; hiermee kun je bijvoorbeeld formulieren afvangen
app.post('/', async function (request, response) {
  // Je zou hier data kunnen opslaan, of veranderen, of wat je maar wilt
  // Er is nog geen afhandeling van POST, redirect naar GET op /
  response.redirect(303, '/')
})
 
app.set('port', process.env.PORT || 8000)
 
if (teamName == '') {
  console.log('Voeg eerst de naam van jullie team in de code toe.')
} else {
  app.listen(app.get('port'), function () {
    console.log(`Application started on http://localhost:${app.get('port')}`)
  })
}


