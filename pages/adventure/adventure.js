const screen = [
  {
    id: "0",
    name: "Traveler",
    dialog: [
      `Hi there! Are you the new worker, right? Welcome to "Hotel Del Luna", buddy! Hope you like your stay here, hahaha.
       Uh? Don't you know about "Hotel Del Luna? That isn't usual but let me tell you some things about this beautiful and magical place. You will thank me later.`,
      `"Hotel Del Luna" es una posada de lujo donde los más poderosos, ricos e influyentes suelen hospedarse. Se organizan fiestas privadas todas las noches donde solo unos pocos selectos son invitados.
       Si me permites decirlo, yo tendría bastante cuidado con lo que veo y hago; y no me metería en lo que no me incumbe muchacho.`,
      `Te diré unos consejos, tómalos o déjalos, eso es tu propia decisión pero "el que avisa no triciona" y quien sabe... Quizás puedan llegar a serte muy útiles.`,
      `En primer lugar, ten cuidado con lo que ves y escuchas, no todo lo que sucede es lo que parece.
       En segundo lugar, escoge bien con quien te relacionas, en este sitio hay muchas personas que es mejor no tener de enemigo...
       Y en tercer lugar, no importa qué suceda, no hables con la mercancía. NUNCA.`,
      `Bueno muchacho, es hora de que entres y presentarte ante el jefe. No vayas a decirle nada sobre lo que hablamos anteriormente, ¿entendido?`,
    ],
    background: "/images/0141af056fb734940c2180d292c2fbc2.jpg",
    foreground: "/images/Gato-bicolor.png",
  },
  {
    id: "1",
    name: "Innkeeper",
    dialog: [
      `Vaya vaya, así que este es el nuevo trabajador. ¡Bienvenido, muchacho! Espero que disfrutes de este espacio durante tu estadía trabajando.`,
      `Hahaha, ¿sorprendido? ¿Acaso esperabas otra imagen de mí? Eso es lo que dicen todos al conocerme, los rumores me pintan de una forma muy diferente, ¿verdad? Por suerte eso a mí no me molesta.
         Sería terrible si me molestase lo que el resto dice de mí, ¿no te parece, muchacho?`,
      `Me comentaron que llegaste aquí por una oferta que pusimos en el Gremio, supongo que serás aventurero. La realidad es que no solemos contratar aventureros pero se trata de una rara excepción...`,
      `Esta semana tenemos un evento importante y necesitamos de gente que... sea hábil. Tenemos muchas influencias de la que hacerse cargo y mucha mercancía valiosa que cuidar. Y espero que nos puedas ayudar.`,
      `Nuevamente te doy la bienvenida a "Hotel Del Luna" y espero no tengamos ningún problema con vos también, ¿está bien, muchacho?`,
      `¡Que disfrutes de tu estadía en este maravilloso y mágico hotel!`,
    ],
    background: "/images/89699065dfcc78b45a4e2b79817a7219.png",
    foreground: "/images/Gati-blanca.png",
  },
  {
    id: "2",
    name: null,
    dialog: [
      `(No sé qué habrá sido esa última advertencia pero tendré que tener cuidado si no quiero tener problemas aquí.)`,
      `(Camino hacia mi habitación absorto en mis pensamientos, ordeno mi equipaje después de un largo viaje hasta el hotel y cuando dispongo a relajarme en la cama escucho un sonido extraño en la habitación.)`,
      `(Me acerco al lugar de donde provenía el ruido y me encuentro con una sorpresa...)`,
    ],
    background:
      "/images/RenderInteriorConcept15-1920x1080-be448c2077a2576eb46d68d4d4100323.jpg",
    foreground: null,
  },
  {
    id: "3",
    name: "Mysterious Character",
    dialog: [`zzz...`, `...`],
    background:
      "/images/RenderInteriorConcept15-1920x1080-be448c2077a2576eb46d68d4d4100323.jpg",
    foreground: "/images/Gato-colorado-atigrado.png",
  },
];

const backgroundImageDom = document.getElementById('background');
const foregroundImageDom = document.getElementById('foreground');
const characterNameDom = document.getElementById('name');
const dialogTextsDom = document.getElementById('dialog');
let currentDialogIndex = 0;
let selectedScene;

function populateDom (backgroundImage, foregroundImage, characterName, dialogTexts) { //populate Dom Elements
  backgroundImageDom.setAttribute ("src", `${backgroundImage}`);
  if (foregroundImage != null) {
    if (foregroundImageDom.classList.contains("hidden") == true) { //si existe una clase CSS que oculta el elemento y existe foreground, quita la clase CSS
      foregroundImageDom.classList.remove("hidden");
    }
    foregroundImageDom.setAttribute("src", `${foregroundImage}`); //cambia el src del elemento (cambia el foreground)
  } else {
    foregroundImageDom.classList.add("hidden"); //si no existe foreground se oculta el elemento utilizando una clase CSS
  };
  characterNameDom.textContent = characterName;
  dialogTextsDom.textContent = dialogTexts[currentDialogIndex];
}

function populateDomBasedOnId (id) { // populate Dom Elements based on Id from JSON
  selectedScene = screen.find(scene => scene.id == id);
  populateDom(selectedScene.background, selectedScene.foreground, selectedScene.name, selectedScene.dialog);
}

function advanceDialog () { //
  currentDialogIndex = currentDialogIndex + 1;
  dialogTextsDom.textContent = selectedScene.dialog[currentDialogIndex];
}

dialogTextsDom.addEventListener("click", advanceDialog)