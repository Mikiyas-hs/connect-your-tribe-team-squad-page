import express from 'express'

import { Liquid } from 'liquidjs';


// Vul hier jullie team naam in
const teamName = 'Blaze';


const app = express()

app.use(express.static('public'))

const engine = new Liquid();
app.engine('liquid', engine.express()); 

app.set('views', './views')

app.use(express.urlencoded({extended: true}))


app.get('/', async function (request, response) {
  const messagesResponse = await fetch(`https://fdnd.directus.app/items/messages/?filter={"for":"Team ${teamName}"}`)
  const messagesResponseJSON = await messagesResponse.json()

  response.render('index.liquid', {
    teamName: teamName,
    messages: messagesResponseJSON.data
  })
})

app.get('/homepage', async function (request, response) {
  const messagesResponse = await fetch(`https://fdnd.directus.app/items/messages/?filter={"for":"Team ${teamName}"}`)
  const messagesResponseJSON = await messagesResponse.json()

  response.render('homepage.liquid', {
    teamName: teamName,
    messages: messagesResponseJSON.data
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
  try {
    // Fetch messages from the correct Directus collection
    const messagesResponse = await fetch('https://fdnd.directus.app/items/teampacks');
    const messagesResponseJSON = await messagesResponse.json();

    // Render the teampacks.liquid template and pass data
    response.render('teampacks.liquid', {
      teamName: "Blaze", // Replace with a real variable if available
      messages: messagesResponseJSON.data
    });
  } catch (error) {
    console.error("Error fetching team packs:", error);
    response.status(500).send("Something went wrong.");
  }
});



app.set('port', process.env.PORT || 8000)

if (teamName == '') {
  console.log('Voeg eerst de naam van jullie team in de code toe.')
} else {
  app.listen(app.get('port'), function () {
    console.log(`Application started on http://localhost:${app.get('port')}`)
  })
}
