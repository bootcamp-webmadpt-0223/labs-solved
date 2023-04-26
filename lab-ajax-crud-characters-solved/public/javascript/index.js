const charactersAPI = new APIHandler('http://localhost:8000')

window.addEventListener('load', () => {
  document.getElementById('fetch-all').addEventListener('click', event => {
    charactersAPI
      .getFullList()
      .then(response => {
        const charactersContainer = document.querySelector('.characters-container')
        charactersContainer.innerHTML = ''
        response.data.forEach(character => {
          charactersContainer.innerHTML += `
            <div class="character-info">
              <div class="name">Id: ${character.id}</div>
              <div class="name">Name: ${character.name}</div>
              <div class="occupation">Occupation: ${character.occupation}</div>
              <div class="cartoon">Is a Cartoon?: ${character.cartoon}</div>
              <div class="weapon">Weapon: ${character.weapon}</div>
            </div>
          `
        })
      })
      .catch(err => console.log('Error is: ', err))
  })

  document.getElementById('fetch-one').addEventListener('click', event => {
    const characterId = document.querySelector('input[name="character-id"]').value
    charactersAPI.getOneRegister(characterId).then(response => {
      const charactersContainer = document.querySelector('.characters-container')

      charactersContainer.innerHTML = `
          <div class="character-info">
            <div class="name">Id: ${response.data.id}</div>
            <div class="name">Name: ${response.data.name}</div>
            <div class="occupation">Occupation: ${response.data.occupation}</div>
            <div class="cartoon">Is a Cartoon?: ${response.data.cartoon}</div>
            <div class="weapon">Weapon: ${response.data.weapon}</div>
          </div>
        `
    })
  })

  document.getElementById('delete-one').addEventListener('click', event => {
    const characterId = document.querySelector('input[name="character-id-delete"]').value
    charactersAPI
      .deleteOneRegister(characterId)
      .then(() => {
        document.getElementById('delete-one').style.backgroundColor = 'green'
      })
      .catch(() => {
        document.getElementById('delete-one').style.backgroundColor = 'red'
      })
  })

  document.getElementById('edit-character-form').addEventListener('submit', event => {
    event.preventDefault()

    const characterId = document.querySelector('input[name="chr-id"]').value
    const characterInfo = {
      name: document.querySelector('#edit-character-form input[name="name"]').value,
      occupation: document.querySelector('#edit-character-form input[name="occupation"]').value,
      weapon: document.querySelector('#edit-character-form input[name="weapon"]').value,
      cartoon: document.querySelector('#edit-character-form input[name="cartoon"]').checked
    }

    charactersAPI
      .updateOneRegister(characterId, characterInfo)
      .then(() => {
        document.querySelector('#edit-character-form #send-data').style.backgroundColor = 'green'
      })
      .catch(() => {
        document.querySelector('#edit-character-form #send-data').style.backgroundColor = 'red'
      })
  })

  document.getElementById('new-character-form').addEventListener('submit', event => {
    event.preventDefault()

    const characterInfo = {
      name: document.querySelector('#new-character-form input[name="name"]').value,
      occupation: document.querySelector('#new-character-form input[name="occupation"]').value,
      weapon: document.querySelector('#new-character-form input[name="weapon"]').value,
      cartoon: document.querySelector('#new-character-form input[name="cartoon"]').checked
    }

    charactersAPI
      .createOneRegister(characterInfo)
      .then(() => {
        document.querySelector('#new-character-form #send-data').style.backgroundColor = 'green'
      })
      .catch(() => {
        document.querySelector('#new-character-form #send-data').style.backgroundColor = 'red'
      })
  })
})
