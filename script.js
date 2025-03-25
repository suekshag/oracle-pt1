// Object with keywords as keys and images as values
// keywords: happy, nature, calm
// INPUT YOUR IMAGE HERE, with key word and value pair set up exactly like below
var images = {
  swimmers: {
    src: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Walking_tiger_female.jpg/1200px-Walking_tiger_female.jpg",
    sound: "tiger-roar-strong-hd-267360.mp3",
    text: "This is a tiger, a powerful swimmer in the wild.",
  },

  cute: {
    src: "https://images.ctfassets.net/rt5zmd3ipxai/25pHfG94sGlRALOqbRvSxl/9f591d8263607fdf923b962cbfcde2a9/NVA-panda.jpg",
    sound: "cute-music-26476.mp3",
    text: "This is a panda, a cute animal who is always alling.",
  },
  loyal: {
    src: "https://www.princeton.edu/sites/default/files/styles/1x_full_2x_half_crop/public/images/2022/02/KOA_Nassau_2697x1517.jpg?itok=Bg2K7j7J",
    sound: "barking-large-and-small-dog-290711.mp3 ",
    text: "this is a dog, always loyal and friendly.",
  },
  independent: {
    src: "https://th-thumbnailer.cdn-si-edu.com/ii_ZQzqzZgBKT6z9DVNhfPhZe5g=/fit-in/1600x0/filters:focal(1061x707:1062x708)/https://tf-cmsv2-smithsonianmag-media.s3.amazonaws.com/filer_public/55/95/55958815-3a8a-4032-ac7a-ff8c8ec8898a/gettyimages-1067956982.jpg",
    sound: "cat-meow-8-fx-306184.mp3",
    text: "They say cats have nine lives but they are independent in all of them.",
  },
  stamina: {
    src: "https://equusmagazine.com/wp-content/uploads/migrations/equus/horse-galloping-on-sand.jpg",
    sound: "horse-neighing-type-02-293307.mp3",
    text: "This is a hourse, known for its stamina to keep going.",
  },

  agile: {
    src: "https://images2.minutemediacdn.com/image/upload/c_fill,w_1440,ar_1440:810,f_auto,q_auto,g_auto/shape/cover/sport/iStock-177369626-1-0e8d40eaabe65d2cb2d745ef45f09229.jpg",
    sound: "goat-sound-effect-259473.mp3",
    text: "The cute might look cute but dont underestimate its agility.",
  },
  ruler: {
    src: "https://cdn.britannica.com/29/150929-050-547070A1/lion-Kenya-Masai-Mara-National-Reserve.jpg",
    sound: "lion-roaring-sfx-293295.mp3",
    text: "Lion, the ruler who protects all.",
  },
  smellers: {
    src: "https://upload.wikimedia.org/wikipedia/commons/9/9e/Ours_brun_parcanimalierpyrenees_1.jpg",
    sound: "bear-191995.mp3",
    text: "Pretending to be dead to escape a bear but it can smell you, a strong nose.",
  },
  howlers: {
    src: "https://cdn.britannica.com/07/5207-050-5BC9F251/Gray-wolf.jpg",
    sound: "wolf-howling-type-04-293317.mp3",
    text: "Calling their friends by howling, the wolves truly are maginificient.",
  },
  fast: {
    src: "https://www.nyc.gov/assets/wildlifenyc/images/content/pages/Stag_On_A_Hill.jpg",
    sound: "the-call-of-red-stag_animal-sound-145885.mp3",
    text: "I know the rabbit looses the race but not a deer, they are mighty fast.",
  },
  tall: {
    src: "https://giraffeconservation.org/wp-content/uploads/2024/11/featured-16-9_topaz-bobby-jo-photography-25-1024x576.jpg",
    sound: "big-gasp-82714.mp3",
    text: "They eat from trees, they are tall, they are giraffe.",
  },
  royal: {
    src: "https://i.natgeofe.com/k/e7ba8001-23ac-457f-aedb-abd5f2fdda62/moms5_4x3.png",
    sound: "elephant-trumpets-growls-6047.mp3",
    text: "Bow down to the royal elephant.",
  },
  intelligent: {
    src: "https://files.worldwildlife.org/wwfcmsprod/images/Mountain_Gorilla_Silverback_WW22557/hero_small/4vzzw2piv9_Mountain_Gorilla_Silverback_WW22557.jpg",
    sound: "cavegorillawav-14739.mp3",
    text: "They know sign language and even I don't know that.",
  },
  hunters: {
    src: "https://i.natgeofe.com/n/dd8843a2-8ec3-4357-9a76-6d20d876209a/01-hyenas-nationalgeographic_1742911_16x9.jpg",
    sound: "hyena-laughing-sound-hd-267364.mp3",
    text: "They are brutal hunters, the hyenas.",
  },
  pretty: {
    src: "https://upload.wikimedia.org/wikipedia/commons/3/38/Flamingos_Laguna_Colorada.jpg",
    sound: "045208_flamingos-64177.mp3",
    text: "The graceful and beautiful flamingo.",
  },

  talkative: {
    src: "https://i.redd.it/c0p0g8r0oova1.jpg",
    sound: "parrots-88486.mp3",
    text: "Need a bestfriend who is talkative, take a parrot.",
  },
  diggers: {
    src: "https://www.thesprucepets.com/thmb/7b6rSVZqtQJLr8QNP58ZeAlNBaM=/1633x0/filters:no_upscale():strip_icc()/hamster-3878853_1920-bdaa70e92b484d858cfd882c0044f2eb.jpg",
    sound: "hamster-33794.mp3",
    text: "Hamsters will dig up the whole ground to escape.",
  },

  social: {
    src: "https://www.humaneworld.org/sites/default/files/styles/sa_social_media_facebook/public/2019/03/rabbit-475261_0.jpg?h=c855054e&itok=DT6uMeh9",
    sound: "rabbit-oinks-and-squeaks-71608.mp3",
    text: "Thought rabbits only eat carrots, think again they might even know your friends.",
  },

  humps: {
    src: "https://cdn.britannica.com/94/152294-050-92FE0C83/Arabian-dromedary-camel.jpg",
    sound: "camel-sound-123309.mp3",
    text: "animals with humps are cool, camel are you cool?.",
  },

  slow: {
    src: "https://files.worldwildlife.org/wwfcmsprod/images/Baby_Sloth_Hanging_iStock_3_12_2014/portrait_overview/4zhzw2pmf0_iStock_000016816803XLarge_mini.jpg",
    sound: "sloth-inspired-imaginary-sound-no16-151510.mp3",
    text: "So slow, so calm , so slothy.",
  },

  loud: {
    src: "https://media.audubon.org/nas_birdapi_hero/sfw_fixed_01-29-2011-223.jpg",
    sound: "birds-chirping-75156.mp3",
    text: "Love the noise and loud find a blueray.",
  },

  ancient: {
    src: "https://nas.er.usgs.gov/XIMAGESERVERX/2019/20190613131315.JPG",
    sound: "buaya-220038.mp3",
    text: "Crocodiles live so many years,they might just know what happened to the dinosaurs.",
  },

  sharp: {
    src: "https://cdn.britannica.com/07/183407-050-C35648B5/Chicken.jpg",
    sound: "chicken-cluking-type-3-293320.mp3",
    text: "Thought I was just for eating, think again.",
  },

  peaceful: {
    src: "https://static.vecteezy.com/system/resources/thumbnails/049/857/752/small_2x/a-white-dove-is-flying-in-the-air-above-a-field-of-white-flowers-concept-of-peace-and-freedom-as-the-bird-soars-through-the-sky-with-its-wings-spread-wide-photo.jpg",
    sound: "dove-call-94805.mp3",
    text: "I am peaceful, I am a dove.",
  },

  wisdom: {
    src: "https://i.ebayimg.com/images/g/fgYAAOSwZuFhqCPl/s-l1200.jpg",
    sound: "turtle-transition-fx-178655.mp3",
    text: "I am wise in movies and ofcourse real life.",
  },
  electric: {
    src: "https://www.nhm.ac.uk/content/dam/nhm-www/discover/electric-eels/electric-eel-full-body-freshwater-aquarium-two-column.jpg.thumb.768.768.png",
    sound: "electric-shock-97989.mp3",
    text: "Want a shock meet a eel.",
  },
  adaptibility: {
    src: "https://cdn.mos.cms.futurecdn.net/YYH9o4wmSXJfvbzRTq5BTY.jpg",
    sound:
      "180530-raccoons-scream-growl-bark-whine-falls-out-of-tree-2am-toronto-22865.mp3",
    text: "I am not just a cute racoon but also adaptible.",
  },
};

function checkSentence() {
  // Get the user input
  var sentence = document.getElementById("sentence").value.toLowerCase(); // Convert to lowercase for easy matching

  // Get the image element
  var image = document.getElementById("image");


  // Default to hiding the image
  image.style.display = "none";

  // Check if any keyword is in the sentence
  if (sentence.includes("swimmers")) {
    image.src = images["swimmers"];
    image.style.display = "block";
    

  } else if (sentence.includes("cute")) {
    image.src = images["cute"];
    image.style.display = "block";

  } else if (sentence.includes("loyal")) {
    image.src = images["loyal"];
    image.style.display = "block";

    } else if (sentence.includes("independent")) {
      image.src = images["independent"];
      image.style.display = "block";

    } else if (sentence.includes("stamina")) {
      image.src = images["stamina"];
      image.style.display = "block";

    } else if (sentence.includes("agile")) {
      image.src = images["agile"];
      image.style.display = "block";

    } else if (sentence.includes("ruler")) {
      image.src = images["ruler"];
      image.style.display = "block";

    } else if (sentence.includes("smellers")) {
      image.src = images["smellers"];
      image.style.display = "block";

    } else if (sentence.includes("howlers")) {
      image.src = images["howlers"];
      image.style.display = "block";

    } else if (sentence.includes("fast")) {
      image.src = images["fast"];
      image.style.display = "block";

    } else if (sentence.includes("tall")) {
      image.src = images["tall"];
      image.style.display = "block";

    } else if (sentence.includes("royal")) {
      image.src = images["royal"];
      image.style.display = "block";

       } else if (sentence.includes("intelligent")) {
         image.src = images["intelligent"];
         image.style.display = "block";

       } else if (sentence.includes("hunters")) {
         image.src = images["hunters"];
         image.style.display = "block";

       } else if (sentence.includes("pretty")) {
         image.src = images["pretty"];
         image.style.display = "block";

       } else if (sentence.includes("talkative")) {
         image.src = images["talkative"];
         image.style.display = "block";

       } else if (sentence.includes("diggers")) {
         image.src = images["diggers"];
         image.style.display = "block";

       } else if (sentence.includes("social")) {
         image.src = images["social"];
         image.style.display = "block";

       } else if (sentence.includes("humps")) {
         image.src = images["humps"];
         image.style.display = "block";

       } else if (sentence.includes("slow")) {
         image.src = images["slow"];
         image.style.display = "block";

       } else if (sentence.includes("loud")) {
         image.src = images["loud"];
         image.style.display = "block";

       } else if (sentence.includes("ancient")) {
         image.src = images["ancient"];
         image.style.display = "block";

       } else if (sentence.includes("sharp")) {
         image.src = images["sharp"];
         image.style.display = "block";

       } else if (sentence.includes("peaceful")) {
         image.src = images["peaceful"];
         image.style.display = "block";

           } else if (sentence.includes("wisdom")) {
         image.src = images["wisdom"];
         image.style.display = "block";

           } else if (sentence.includes("electric")) {
         image.src = images["electric"];
         image.style.display = "block";

           } else if (sentence.includes("adaptibility")) {
             image.src = images["adaptibility"];
             image.style.display = "block";
           } else {
             document.getElementById("errorMsg").style.visibility = "visible"; 
           }
}

function checkSentence() {
  var sentence = document.getElementById("sentence").value.toLowerCase();
  var image = document.getElementById("image");
  var audio = document.getElementById("animalSound");
  var errorMsg = document.getElementById("errorMsg");
  var displayText = document.getElementById("displayText");

  image.style.display = "none";
  errorMsg.style.visibility = "hidden";
  displayText.textContent = ""; // Clear previous text

  for (var key in images) {
    if (sentence.includes(key)) {
      image.src = images[key].src;
      image.style.display = "block";

      if (images[key].sound) {
        audio.src = images[key].sound;
        audio.load(); // Ensure it's loaded
        audio.play();
      }
      // Display the corresponding text
      if (images[key].text) {
        displayText.textContent = images[key].text;
      }
      return;
    }
  }

  errorMsg.style.visibility = "visible";
}




// function adjustImagesize() {
//   var image = document.getElementById("result");
//   var slider = document.getElementById("myRange");
//   var size = slider.value * 5;
//   console.log("slider value:", slider.value);
//   image.style.width = size + "px";
//   image.style.height = "auto";
//   image.style.border = "1px solid balck";
// }

// function imageSizeChange(){
//   console.log("slider has moved!");
// }

function imageSizeChange() {
  console.log("slider has moved!");
}
document.getElementById("myRange").addEventListener("input", imageSizeChange);

function imageSizeChange() {
  var slider = document.getElementById("myRange").value;
  console.log("slider value", slider);
  var image = document.getElementById("image");
  console.log("image", image);
  image.style.width = slider * 7 + "px";
  image.style.boxShadow = "10px 5px 5px black";
}

document.getElementById("myRange").addEventListener("input", imageSizeChange);


function applyImageFilter() {
  var image = document.getElementById("image");
  var filterSelect = document.getElementById("filterSelect");
  var filterValue = filterSelect.value;

  if (filterValue === "grayscale") {
    image.style.filter = "grayscale(100%)";
  } else if (filterValue === "invert") {
    image.style.filter = "invert(100%)";
  } else if (filterValue === "sepia") {
    image.style.filter = "sepia(100%)";
  } else {
    image.style.filter = "none";
  }
}

document.getElementById("filterSelect").addEventListener("change", applyImageFilter);
