// Object with keywords as keys and images as values
// keywords: happy, nature, calm
// INPUT YOUR IMAGE HERE, with key word and value pair set up exactly like below
var images = {
  swimmers:
    "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Walking_tiger_female.jpg/1200px-Walking_tiger_female.jpg",
  cute: "https://images.ctfassets.net/rt5zmd3ipxai/25pHfG94sGlRALOqbRvSxl/9f591d8263607fdf923b962cbfcde2a9/NVA-panda.jpg",
  loyal:
    "https://www.princeton.edu/sites/default/files/styles/1x_full_2x_half_crop/public/images/2022/02/KOA_Nassau_2697x1517.jpg?itok=Bg2K7j7J",
  independent:
    "https://th-thumbnailer.cdn-si-edu.com/ii_ZQzqzZgBKT6z9DVNhfPhZe5g=/fit-in/1600x0/filters:focal(1061x707:1062x708)/https://tf-cmsv2-smithsonianmag-media.s3.amazonaws.com/filer_public/55/95/55958815-3a8a-4032-ac7a-ff8c8ec8898a/gettyimages-1067956982.jpg",
  stamina:
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWjlzjTkieBVN-tV9IeLLBUtRMhSz07SAS6Q&s",
  agile:
    "https://images2.minutemediacdn.com/image/upload/c_fill,w_1440,ar_1440:810,f_auto,q_auto,g_auto/shape/cover/sport/iStock-177369626-1-0e8d40eaabe65d2cb2d745ef45f09229.jpg",
  ruler:
    "https://cdn.britannica.com/29/150929-050-547070A1/lion-Kenya-Masai-Mara-National-Reserve.jpg",
  smellers:
    "https://upload.wikimedia.org/wikipedia/commons/9/9e/Ours_brun_parcanimalierpyrenees_1.jpg",
  howlers: "https://cdn.britannica.com/07/5207-050-5BC9F251/Gray-wolf.jpg",
  fast: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.nyc.gov%2Fsite%2Fwildlifenyc%2Fanimals%2Fdeer.page&psig=AOvVaw3uXnkjgxiU7hO4l7V2dsks&ust=1740633079971000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCLiX_tXJ4IsDFQAAAAAdAAAAABAE",
  tall: "https://giraffeconservation.org/wp-content/uploads/2024/11/featured-16-9_topaz-bobby-jo-photography-25-1024x576.jpg",
  royal:
    "https://i.natgeofe.com/k/e7ba8001-23ac-457f-aedb-abd5f2fdda62/moms5_4x3.png",
  intelligent:
    "https://files.worldwildlife.org/wwfcmsprod/images/Mountain_Gorilla_Silverback_WW22557/hero_small/4vzzw2piv9_Mountain_Gorilla_Silverback_WW22557.jpg",
  hunters:
    "https://i.natgeofe.com/n/dd8843a2-8ec3-4357-9a76-6d20d876209a/01-hyenas-nationalgeographic_1742911_16x9.jpg",
  pretty:
    "https://upload.wikimedia.org/wikipedia/commons/3/38/Flamingos_Laguna_Colorada.jpg",
  talkative: "https://i.redd.it/c0p0g8r0oova1.jpg",
  diggers:
    "https://www.thesprucepets.com/thmb/7b6rSVZqtQJLr8QNP58ZeAlNBaM=/1633x0/filters:no_upscale():strip_icc()/hamster-3878853_1920-bdaa70e92b484d858cfd882c0044f2eb.jpg",
  social:
    "https://assets.newatlas.com/dims4/default/ad1194b/2147483647/strip/true/crop/1997x1331+2+0/resize/1200x800!/quality/90/?url=http%3A%2F%2Fnewatlas-brightspot.s3.amazonaws.com%2F5f%2F5c%2F348d6a3a4e9fb7d90f1a26e0c305%2Fdepositphotos-34452711-l-2015.jpg",
  humps:
    "https://cdn.britannica.com/94/152294-050-92FE0C83/Arabian-dromedary-camel.jpg",
  slow: "https://files.worldwildlife.org/wwfcmsprod/images/Baby_Sloth_Hanging_iStock_3_12_2014/portrait_overview/4zhzw2pmf0_iStock_000016816803XLarge_mini.jpg",
  loud: "https://media.audubon.org/nas_birdapi_hero/sfw_fixed_01-29-2011-223.jpg",
  ancient: "https://nas.er.usgs.gov/XIMAGESERVERX/2019/20190613131315.JPG",
  sharp: "https://cdn.britannica.com/07/183407-050-C35648B5/Chicken.jpg",

  peaceful:
    "https://static.vecteezy.com/system/resources/thumbnails/049/857/752/small_2x/a-white-dove-is-flying-in-the-air-above-a-field-of-white-flowers-concept-of-peace-and-freedom-as-the-bird-soars-through-the-sky-with-its-wings-spread-wide-photo.jpg",

  wisdom: "https://i.ebayimg.com/images/g/fgYAAOSwZuFhqCPl/s-l1200.jpg",
  electric:
    "https://www.nhm.ac.uk/content/dam/nhm-www/discover/electric-eels/electric-eel-full-body-freshwater-aquarium-two-column.jpg.thumb.768.768.png",
  adaptibility:
    "https://images.unsplash.com/photo-1497752531616-c3afd9760a11?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cmFjY29vbnxlbnwwfHwwfHx8MA%3D%3D",
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
             window.alert("please input a sentece containing keywords");
           }
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
  image.style.width = slider * 10 + "px";
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

document
  .getElementById("filterSelect").addEventListener("change", applyImageFilter);
