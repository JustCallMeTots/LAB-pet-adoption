const pets = [
    {
      animalId: '1',
      name: "Dusty",
      color: "Green",
      specialSkill: "Gives sincere apologies.",
      type: "cat",
      imageUrl: "http://kittentoob.com/wp-content/uploads/2015/06/funny-cat-with-a-towel.jpg"
    },
    {
      animalId: '2',
      name: "Trouble",
      color: "Brown",
      specialSkill: "Just picks the tomatoes off of a sandwich instead of requesting a whole new sandwich.",
      type: "dino",
      imageUrl: "https://live.staticflickr.com/7321/9150683852_39e2ae3cf3_b.jpg"
    },
    {
      animalId: '3',
      name: "Whiskers",
      color: "Yellow",
      specialSkill: "Can prove he is a real man by drinking whiskey.",
      type: "dino",
      imageUrl: "https://mydinosaurs.com/wp-content/uploads/2017/02/2-3-600x400.jpg"
    },
    {
      animalId: '4',
      name: "Coco",
      color: "Black",
      specialSkill: "Burps minimally.",
      type: "dog",
      imageUrl: "http://cdn.akc.org/content/article-body-image/funny-pembroke_welsh_corgi.jpg"
    },
    {
      animalId: '5',
      name: "Spooky",
      color: "Brown",
      specialSkill: "Comfortable in the outdoors for up to eight hours.",
      type: "cat",
      imageUrl: "http://www.catster.com/wp-content/uploads/2017/08/A-fluffy-cat-looking-funny-surprised-or-concerned.jpg"
    },
    {
      animalId: '6',
      name: "Tiger",
      color: "Black",
      specialSkill: "Can read (but cannot understand) Hebrew.",
      type: "dog",
      imageUrl: "https://upload.wikimedia.org/wikipedia/commons/7/7e/Basset_Hound_600.jpg"
    },
    {
      animalId: '7',
      name: "Oreo",
      color: "Yellow",
      specialSkill: "Able to stop chewing ice or whistling on request.",
      type: "cat",
      imageUrl: "https://i.pinimg.com/originals/9d/da/3e/9dda3e5fd2b9886fc3d13ee47f52e8a0.jpg"
    },
    {
      animalId: '8',
      name: "Ginger",
      color: "Grey",
      specialSkill: "Comfortable in the outdoors for up to eight hours.",
      type: "dino",
      imageUrl: "https://www.urzeitshop.de/1575-tm_thickbox_default/velociraptor-grey-dinosaur-figure-by-papo.jpg"
    },
    {
      animalId: '9',
      name: "Sassy",
      color: "Brown",
      specialSkill: "Adept at talking self and others out of fights.",
      type: "cat",
      imageUrl: "https://tailandfur.com/wp-content/uploads/2015/09/40-Amazing-Cat-Funny-Moment-Pictures-Feature-Image.jpg"
    },
    {
      animalId: '10',
      name: "Sammy",
      color: "Blue",
      specialSkill: "Listens attentively to boring stories.",
      type: "cat",
      imageUrl: "https://i.pinimg.com/originals/04/54/92/0454926d39eeb420f4f01948e94e9e41.jpg"
    },
    {
      animalId: '11',
      name: "Coco",
      color: "Orange",
      specialSkill: "Can be around food without staring creepily at it.",
      type: "dino",
      imageUrl: "https://m.media-amazon.com/images/I/8158uWvQZGL._AC_SX466_.jpg"
    },
    {
      animalId: '12',
      name: "Buster",
      color: "Green",
      specialSkill: "Does not use excessive acronyms.",
      type: "dog",
      imageUrl: "https://i.pinimg.com/originals/1f/30/8c/1f308c9c108a384b91b39430cc7312e9.jpg"
    },
    {
      animalId: '13',
      name: "Chester",
      color: "Red",
      specialSkill: "Expertly quotes and recognizes dialogue from early seasons of The Simpsons.",
      type: "dog",
      imageUrl: "http://1kjkdg1axrkd2g03cnboj761.wpengine.netdna-cdn.com/wp-content/uploads/2017/12/braydon-anderson-105552-e1512684107659.jpg"
    },
    {
      animalId: '14',
      name: "Samantha",
      color: "Brown",
      specialSkill: "Always up for dessert.",
      type: "cat",
      imageUrl: "http://3.bp.blogspot.com/-RzIFLsIO-XQ/UFoMLOT66JI/AAAAAAAAVps/JRF98hdA9S8/s640/funny-cat-pictures-016-027.jpg"
    },
    {
      animalId: '15',
      name: "Coco",
      color: "Red",
      specialSkill: "Burps minimally.",
      type: "cat",
      imageUrl: "http://cathumor.net/wp-content/uploads/2013/12/cat-humor-funny-karate-cat-2.jpg"
    },
    {
      animalId: '16',
      name: "Smokey",
      color: "Brown",
      specialSkill: "Drives at a safe rate of speed in snow or rain.",
      type: "dino",
      imageUrl: "https://i5.walmartimages.com/asr/0bdd5a06-64fc-4bd0-bdb4-28b8c9fc5a36.d3d3a7af2f627b16136650714e95eb7c.jpeg?odnHeight=580&odnWidth=580&odnBg=FFFFFF"
    },
    {
      animalId: '17',
      name: "Muffin",
      color: "Yellow",
      specialSkill: "Does not freak out if you haven’t seen his favorite movie (The Big Lebowski).",
      type: "cat",
      imageUrl: "https://images.news18.com/ibnlive/uploads/2020/08/1598352276_untitled-design-2020-08-25t161426.862.jpg?im=Resize,width=360,aspect=fit,type=normal?im=Resize,width=320,aspect=fit,type=normal"
    },
    {
      animalId: '18',
      name: "Salem",
      color: "Brown",
      specialSkill: "Proficient in air guitar",
      type: "dino",
      imageUrl: "https://www.nhm.ac.uk/content/dam/nhmwww/discover/dinosaur-velociraptor/049420_H-full-width.jpg.thumb.1160.1160.jpg"
    },
    {
      animalId: '19',
      name: "Callie",
      color: "Blue",
      specialSkill: "Listens attentively to boring stories.",
      type: "dog",
      imageUrl: "http://dailynewsdig.com/wp-content/uploads/2014/03/Creative-And-Funny-Dog-Stock-Photography-Pictures-2.jpg"
    },
    {
      animalId: '20',
      name: "Spooky",
      color: "Black",
      specialSkill: "Uses litter box at appropriate hours.",
      type: "cat",
      imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlpVVZb2oTQDHHGZPhVyHJaST6FHXRt147vw&usqp=CAU"
    },
    {
      animalId: '21',
      name: "Miss kitty",
      color: "Red",
      specialSkill: "Owns a Nintendo Power Glove.",
      type: "dino",
      imageUrl: "https://cdn.shopify.com/s/files/1/0049/0872/products/dinosaur-figures-mojo-tyrannosaurus-hunting-red-dinosaur-figure-387273-1.jpg?v=1594762054"
    },
    {
      animalId: '22',
      name: "Snuggles",
      color: "Orange",
      specialSkill: "Is comfortable with jokes about his receding hairline.",
      type: "cat",
      imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7TdIhB6lOIBE9FmPgqkLFehtIgrIGosrWAQ&usqp=CAU"
    },
    {
      animalId: '23',
      name: "Buddy",
      color: "Red",
      specialSkill: "Enjoys fine wine.",
      type: "dog",
      imageUrl: "http://1.bp.blogspot.com/-VjM0CmtN-vU/T7YX-LXa09I/AAAAAAAADA0/Vt1oGWEG0lw/s1600/sheepdog+border+collie+shakes+off+water+funny+picture+photo+pulling+faces+raspberry+tongue.jpg"
    },
    {
      animalId: '24',
      name: "George",
      color: "Brown",
      specialSkill: "Participates in karaoke but does not force others to go out to karaoke.",
      type: "dog",
      imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQyXsNLB6dgC1_ujBZKiIxjXdKoLrJ1y8yN9w&usqp=CAU"
    },
    {
      animalId: '25',
      name: "Salem",
      color: "Red",
      specialSkill: "Knows the words to 4 rap songs.",
      type: "cat",
      imageUrl: "https://i.pinimg.com/originals/c5/45/80/c54580064938ea189a14b8a457228694.jpg"
    },
    {
      animalId: '26',
      name: "Bubba",
      color: "Yellow",
      specialSkill: "Cleans himself.",
      type: "dog",
      imageUrl: "https://www.thetrendywhippet.co.uk/wp-content/uploads/2016/11/IMG_1651-600x400.jpg"
    },
    {
      animalId: '27',
      name: "Chloe",
      color: "Green",
      specialSkill: "Admits he is wrong",
      type: "dino",
      imageUrl: "https://assets.creationmuseum.org/img/pages/1703-DinoDen-TwoCard.jpg"
    },
    {
      animalId: '28',
      name: "Nala",
      color: "Purple",
      specialSkill: "Dances when he has to.",
      type: "cat",
      imageUrl: "https://tailandfur.com/wp-content/uploads/2016/03/40-Scary-and-Funny-Cat-Pictures-8.jpg"
    },
    {
      animalId: '29',
      name: "Oscar",
      color: "Green",
      specialSkill: "Gives hugs with appropriate pressure and for the right length of time.",
      type: "cat",
      imageUrl: "http://img.izismile.com/img/img2/20090219/cats_02.jpg"
    },
    {
      animalId: '30',
      name: "Lucy",
      color: "Red",
      specialSkill: "Doesn’t get weirded out by the word “moist.”",
      type: "dino",
      imageUrl: "https://previews.123rf.com/images/sarfoto/sarfoto2002/sarfoto200200038/140187145-triceratopo-giocattolo-colorato-isolato-su-bianco.jpg"
    }
  ];

  const renderToDom = (divId, textToRender) => {
    const animals = document.querySelector(divId);
    animals.innerHTML = textToRender;
  };  
// THIS HERE BE THE MODAL IT BE A PAIN IN ME ARSE
  const addPetBtnModal = () => {
    const domString = `
    <!-- Button trigger modal -->
<button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#addPet">
  Add Pet
</button>

<!-- Modal -->
<div class="modal fade" id="addPet" tabindex="-1" aria-labelledby="addPet" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title">Add Pet</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body" id="modal-body">

        <form>
          <div class="form-floating mb-3">
            <input type="text" class="form-control" placeholder="Pet name" id="name">
            <label for="floatingInput">Pet name</label>
          </div>
          <div class="form-floating">
            <input type="text" class="form-control" id="imageUrl" placeholder="Password">
            <label for="floatingPassword">Image URL</label>
          </div>

          <div class="form-floating mb-3">
            <input type="text" class="form-control" id="color" placeholder="name@example.com">
            <label for="floatingInput">Color</label>
          </div>
          <div class="form-floating">
            <input type="text" class="form-control" id="specialSkill" placeholder="Password">
            <label for="floatingPassword">Special Skill</label>
          </div>
          <div class="form-floating">
            <input type="text" class="form-control" id="animalId" placeholder="Password">
            <label for="floatingPassword">Animal Id</label>
          </div>

          <select class="form-select" id="type" aria-label="Default select example">
            <option selected>Animal Type</option>
            <option value="dog">Dog</option>
            <option value="cat">Cat</option>
            <option value="dino">Dino</option>
          </select>
        
          
          <div class="modal-footer">
            
            <button 
              type="submit" 
              class="btn btn-primary"
            >
              Submit
            </button>
        </form>
      </div>
    </div>
  </div>
</div>
`;
renderToDom('#createBtnContainer', domString);
  };
  // THESE BE ME FILTER BUTTONS
  const filterButtons = () => {
    const domString =
    `<div class="buttons">
    <button type="button-dog" class="btn btn-primary" id="dog">Dogs</button>
    <button type="button-cat" class="btn btn-success" id="cat">Cats</button>
    <button type="button-dino" class="btn btn-warning" id="dino">Dinos</button>
    <button type="button-all" class="btn btn-info" id="clear">All</button>
    </div>`;
    renderToDom('#filterContainer', domString);
  };
  // THESE BE ME CARDS
  const cardsOnDom = (pets) =>{
    let domString = '';
    for (const animal of pets) {
      domString += `
      
      <div class="cards">
        <div class="card" style="width: 18rem;">
        
          <h1 class="name"> ${animal.name} </h1>
             <div>
              <button class="btn btn-danger" id="delete--${animal.animalId}">X</button>
            </div>
          <img src="${animal.imageUrl}" class="card-img-top" alt="...">
          <div class="card-body">
            <p class="color">${animal.color}</p>
            <p class="card-text">${animal.specialSkill}</p>
            <footer class="type">${animal.type}</footer>
          
          </div>
        
        </div>
        
      </div>
      `;
   }
   renderToDom('#cardContainer', domString);
  };
  // cardsOnDom(pets)
  // ********* EVENT LISTENERS *********
  const eventListeners = () => {

    // const formModal = new bootstrap.Modal(document.querySelector('#add-video'));
 
    // FILTER BUTTONS
    document.querySelector('#filterContainer').addEventListener('click', (e) => {
      // console.log('ahhhhhh', e.target.id);
      if (e.target.id === 'clear') {
        cardsOnDom(pets);
      } else if (e.target.id) {
        const friend = pets.filter(taco => taco.type === e.target.id);
        cardsOnDom(friend)
      }
    });
    // DELETE BUTTON
    document.querySelector('#cardContainer').addEventListener('click', (e) => { 
      if (e.target.id) {
        const [method, animalId] = e.target.id.split('--');

        const index = pets.findIndex(taco => taco.animalId === animalId);

        if (e.target.id.includes('delete')){
          // console.log('ahhhhhhhh');
          pets.splice(index, 1);

          cardsOnDom(pets);
        }
      }
    });

    // BULLSHIT FUCKING FORM PIECE OF SHIT
    

    const form = document.querySelector('form');
    form.addEventListener('submit', (e) => {
      e.preventDefault();

      const newPetObj = {
        animalId: document.querySelector('#animalId').value,
        name: document.querySelector('#name').value,
        imageUrl: document.querySelector('#imageUrl').value,
        color: document.querySelector('#color').value,
        specialSkill: document.querySelector('#specialSkill').value,
        type: document.querySelector('#type').value,
      }
      
      pets.push(newPetObj);

      cardsOnDom(pets);

      // formModal.hide()
      form.reset();
    });

  };

 

 

const startApp = () => {
  addPetBtnModal();
  filterButtons();
  cardsOnDom(pets);
  eventListeners();
};
startApp();