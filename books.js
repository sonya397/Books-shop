/*const booksData = {
    Leadership: [
        {name: " brand you 50", description: "The Brand You 50 are real-world ideas and suggestions for building equity in your own personal brand -- and your own personal professional services firm -- regardless of whether or not you formally work for yourself or someone else.", photo: "https://ecsmedia.pl/cdn-cgi/image/format=webp,width=544,height=544,/c/the-brand-you50-reinventing-work-fifty-ways-to-transform-yourself-from-an-employee-into-a-brand-that-shoutsdistinction-commitment-and-passion-b-iext136682849.jpg"},
        {name: " ", description: "", photo: ""},
        {name: "Yogurt bowl", description: "Ingredients: yogurt, strawberry, berry, maple syrup, almond slices and granola  ", photo: "https://i.pinimg.com/564x/71/08/9d/71089d6e6c4c27e0c8ad8f623ba538d3.jpg"},
        {name: "Omlet", description: "Ingredients: 2 eggs, oatmilk, cheese, cherry tomatos and bacon", photo: "https://i.pinimg.com/564x/8e/be/bd/8ebebdac738ed0c952565e24bb098596.jpg"}
    ],
    Psyhology: [
        {name:"Carbonara", description:"Ingredients: spaghetti, bacon, eggs, peper, parmesan, grated, garlic, olive oil", photo:"https://i.pinimg.com/564x/e6/fe/ff/e6feff3970dff16aaaba8c334ca11947.jpg"},
        {name:"Chesse pasta", description:"Ingredients: any pasta, cheese, butter, milk, salt, all-purpose flour, peper and parmesan for garnish", photo:"https://i.pinimg.com/564x/e4/c1/cc/e4c1ccba12c63d0ec350fb72e1746848.jpg"},
        {name:"Ramen", description:"Ingredients: chicken/tofu, soy souce, nori, green onions, ramen noodles, sesame oil, sweet rice wine and soft-boiled eggs ", photo:"https://i.pinimg.com/564x/8c/38/7e/8c387e962839b00345a634e412275f44.jpg"}
    ],
    Advetures: [
        {name: "Salmon and rice", description: "Ingredients: salmon, rise, lemon, asparagus and seasonings", photo: "https://i.pinimg.com/564x/20/ac/c3/20acc33dbcd496048548e2a87fbcf305.jpg"},
        {name: "Rice bowl", description: "Ingredients: 50 gr. rise, chicken/shrims, avocado, vegetables", photo: "https://i.pinimg.com/564x/c5/9b/11/c59b1100c9b3ee4f609910fcbe180a25.jpg"},
        {name: "Cesar", description: "Ingredients: grillede chicken, bacon bits, cherry tomatos, parmesan ", photo: "https://i.pinimg.com/564x/5b/ed/3d/5bed3d41fd85d137df0e0f1ac2e75583.jpg" }
    ],
    Design: [
        {name: "Salmon and rice", description: "Ingredients: salmon, rise, lemon, asparagus and seasonings", photo: "https://i.pinimg.com/564x/20/ac/c3/20acc33dbcd496048548e2a87fbcf305.jpg"},
        {name: "Rice bowl", description: "Ingredients: 50 gr. rise, chicken/shrims, avocado, vegetables", photo: "https://i.pinimg.com/564x/c5/9b/11/c59b1100c9b3ee4f609910fcbe180a25.jpg"},
        {name: "Cesar", description: "Ingredients: grillede chicken, bacon bits, cherry tomatos, parmesan ", photo: "https://i.pinimg.com/564x/5b/ed/3d/5bed3d41fd85d137df0e0f1ac2e75583.jpg" }
    ]
};

function showBooks(books){
    const booksSection = document.getElementById("books");
    const booksList = booksData[books];
    booksSection.innerHTML = "";
    booksList.forEach(book => {
        const booksItem = document.createElement("div");
        const booksLink = document.createElement("a");
        const booksPhoto = document.createElement("img");
        const booksDescription = document.createElement("p");
        const bookBtn = document.createElement("button");
        bookBtn.textContent = "Buy";
        booksPhoto.src = book.photo;
        booksLink.textContent = book.name;
        booksDescription.textContent = book.description;
        booksItem.appendChild(booksLink);
        booksItem.appendChild(booksDescription);
        booksItem.appendChild(booksPhoto);
        booksItem.appendChild(bookBtn);
        booksSection.appendChild(booksItem);

    });
}

*/
function showBooks(book){
    if(book == "Science"){
      document.getElementById("koko").style.display = 'none';
      document.getElementById("cherch").style.display = 'none';
      document.getElementById("a").style.display = 'none';
      document.getElementById("b").style.display = 'none';
      document.getElementById("c").style.display = 'none';
      document.getElementById("d").style.display = 'none';
      document.getElementById("e").style.display = 'none';
      document.getElementById("f").style.display = 'none';
      document.getElementById("j").style.display = 'none';
      document.getElementById("h").style.display = 'none';
      document.getElementById("k").style.display = 'none';
      document.getElementById("l").style.display = 'none';
      document.getElementById("o").style.display = 'none';
      document.getElementById("p").style.display = 'none';
      document.getElementById("i").style.display = 'none';
      document.getElementById("w").style.display = 'none';
      document.getElementById("q").style.display = 'none';
      document.getElementById("s").style.display = 'none';
      document.getElementById("xcv").style.display = 'none';
      document.getElementById("z").style.display = 'none';
      document.getElementById("x").style.display = 'none';
      document.getElementById("v").style.display = 'none';
      document.getElementById("n").style.display = 'none';
      document.getElementById("m").style.display = 'none';
      document.getElementById("t").style.display = 'none';
      document.getElementById("r").style.display = 'none';
      document.getElementById("u").style.display = 'none';
      document.getElementById("y").style.display = 'none';
      document.getElementById("qw").style.display = 'none';
      document.getElementById("qa").style.display = 'none';
      document.getElementById("az").style.display = 'none';
      document.getElementById("zx").style.display = 'none';
      document.getElementById("xc").style.display = 'none';
      document.getElementById("cv").style.display = 'none';
      document.getElementById("vb").style.display = 'none';
      document.getElementById("bn").style.display = 'none';
      document.getElementById("nm").style.display = 'none';
      document.getElementById("mk").style.display = 'none';
      document.getElementById("kl").style.display = 'none';
      document.getElementById("lp").style.display = 'none';
      document.getElementById("po").style.display = 'none';
      document.getElementById("ok").style.display = 'none';
      document.getElementById("kj").style.display = 'none';
      document.getElementById("ji").style.display = 'none';
      document.getElementById("es").style.display = 'none';
      document.getElementById("vg").style.display = 'none';
      document.getElementById("cf").style.display = 'none';
      document.getElementById("xd").style.display = 'none';
      document.getElementById("xe").style.display = 'none';
    document.getElementById("cr").style.display = 'none';
    document.getElementById("vt").style.display = 'none';
    document.getElementById("by").style.display = 'none';
    document.getElementById("nu").style.display = 'none';
    document.getElementById("nq").style.display = 'none';
    document.getElementById("sf").style.display = 'none';
    document.getElementById("st").style.display = 'none';
    document.getElementById("lh").style.display = 'none';
    document.getElementById("hi").style.display = 'none';
    document.getElementById("buy").style.display = 'none';
    document.getElementById("oku").style.display = 'none';
    document.getElementById("what").style.display = 'none';
    document.getElementById("vos").style.display = 'none';
        document.getElementById("rni").style.display = 'none';
        document.getElementById("chs").style.display = 'none';
        document.getElementById("iu").style.display = 'none';
        document.getElementById("uh").style.display = 'none';
        document.getElementById("hg").style.display = 'none';
        document.getElementById("gy").style.display = 'none';
        document.getElementById("yt").style.display = 'none';
        document.getElementById("tf").style.display = 'none';
        document.getElementById("fd").style.display = 'none';
        document.getElementById("dr").style.display = 'none';
        document.getElementById("re").style.display = 'none';
        document.getElementById("es").style.display = 'none';
        document.getElementById("vg").style.display = 'none';
        document.getElementById("cf").style.display = 'none';
        document.getElementById("xd").style.display = 'none';
        document.getElementById("bh").style.display = 'none';
        document.getElementById("nj").style.display = 'none';
        document.getElementById("zw").style.display = 'none';
        document.getElementById("xe").style.display = 'none';
        document.getElementById("cr").style.display = 'none';
        document.getElementById("vt").style.display = 'none';
        document.getElementById("by").style.display = 'none';
        document.getElementById("nu").style.display = 'none';
        document.getElementById("nq").style.display = 'none';
        document.getElementById("mi").style.display = 'none';
        document.getElementById("sf").style.display = 'none';
        document.getElementById("st").style.display = 'none';
        document.getElementById("lh").style.display = 'none';
        document.getElementById("hi").style.display = 'none';
        document.getElementById("buy").style.display = 'none';
        document.getElementById("oku").style.display = 'none';
        document.getElementById("yes").style.display = 'none';
        document.getElementById("no").style.display = 'none';
        document.getElementById("to").style.display = 'none';
        document.getElementById("with").style.display = 'none';
        document.getElementById("and").style.display = 'none';
        document.getElementById("how").style.display = 'none';
    }

    if(book == "Design"){
        
        document.getElementById("koko").style.display = 'none';
        document.getElementById("cherch").style.display = 'none';
        document.getElementById("a").style.display = 'none';
        document.getElementById("b").style.display = 'none';
        document.getElementById("c").style.display = 'none';
        document.getElementById("d").style.display = 'none';
        document.getElementById("e").style.display = 'none';
        document.getElementById("f").style.display = 'none';
        document.getElementById("j").style.display = 'none';
        document.getElementById("h").style.display = 'none';
        document.getElementById("k").style.display = 'none';
        document.getElementById("l").style.display = 'none';
        document.getElementById("o").style.display = 'none';
        document.getElementById("p").style.display = 'none';
        document.getElementById("i").style.display = 'none';
        document.getElementById("w").style.display = 'none';
        document.getElementById("q").style.display = 'none';
        document.getElementById("s").style.display = 'none';
        document.getElementById("xcv").style.display = 'none';
        document.getElementById("z").style.display = 'none';
        document.getElementById("x").style.display = 'none';
        document.getElementById("v").style.display = 'none';
        document.getElementById("n").style.display = 'none';
        document.getElementById("m").style.display = 'none';
        document.getElementById("t").style.display = 'none';
        document.getElementById("r").style.display = 'none';
        document.getElementById("u").style.display = 'none';
        document.getElementById("y").style.display = 'none';
        document.getElementById("qw").style.display = 'none';
        document.getElementById("qa").style.display = 'none';
        document.getElementById("az").style.display = 'none';
        document.getElementById("zx").style.display = 'none';
        document.getElementById("xc").style.display = 'none';
        document.getElementById("cv").style.display = 'none';
        document.getElementById("vb").style.display = 'none';
        document.getElementById("bn").style.display = 'none';
        document.getElementById("nm").style.display = 'none';
        document.getElementById("mk").style.display = 'none';
        document.getElementById("kl").style.display = 'none';
        document.getElementById("lp").style.display = 'none';
        document.getElementById("po").style.display = 'none';
        document.getElementById("ok").style.display = 'none';
        document.getElementById("kj").style.display = 'none';
        document.getElementById("ji").style.display = 'none';
        document.getElementById("iu").style.display = 'none';
        document.getElementById("uh").style.display = 'none';
        document.getElementById("hg").style.display = 'none';
        document.getElementById("gy").style.display = 'none';
        document.getElementById("yt").style.display = 'none';
        document.getElementById("tf").style.display = 'none';
        document.getElementById("fd").style.display = 'none';
        document.getElementById("dr").style.display = 'none';
        document.getElementById("re").style.display = 'none';
        document.getElementById("es").style.display = 'none';
        document.getElementById("vg").style.display = 'none';
        document.getElementById("cf").style.display = 'none';
        document.getElementById("xd").style.display = 'none';
        document.getElementById("bh").style.display = 'none';
        document.getElementById("nj").style.display = 'none';
        document.getElementById("zw").style.display = 'none';
        document.getElementById("mi").style.display = 'none';
        document.getElementById("who").style.display = 'none';
        document.getElementById("pop").style.display = 'none';
        document.getElementById("kik").style.display = 'none';
        document.getElementById("kip").style.display = 'none';
        document.getElementById("hop").style.display = 'none';
        document.getElementById("hip").style.display = 'none';
        document.getElementById("tor").style.display = 'none';
        document.getElementById("horri").style.display = 'none';
        document.getElementById("drb").style.display = 'none';
        document.getElementById("ft").style.display = 'none';
        document.getElementById("mok").style.display = 'none';
        document.getElementById("vos").style.display = 'none';
        document.getElementById("rni").style.display = 'none';
        document.getElementById("chs").style.display = 'none';
    }
    if(book == "Literatyre"){
      document.getElementById("koko").style.display = 'none';
        document.getElementById("cherch").style.display = 'none';
        document.getElementById("a").style.display = 'none';
        document.getElementById("b").style.display = 'none';
        document.getElementById("c").style.display = 'none';
        document.getElementById("d").style.display = 'none';
        document.getElementById("e").style.display = 'none';
        document.getElementById("f").style.display = 'none';
        document.getElementById("j").style.display = 'none';
        document.getElementById("h").style.display = 'none';
        document.getElementById("k").style.display = 'none';
        document.getElementById("l").style.display = 'none';
        document.getElementById("o").style.display = 'none';
        document.getElementById("p").style.display = 'none';
        document.getElementById("i").style.display = 'none';
        document.getElementById("w").style.display = 'none';
        document.getElementById("q").style.display = 'none';
        document.getElementById("s").style.display = 'none';
        document.getElementById("xcv").style.display = 'none';
        document.getElementById("z").style.display = 'none';
        document.getElementById("x").style.display = 'none';
        document.getElementById("v").style.display = 'none';
        document.getElementById("n").style.display = 'none';
        document.getElementById("m").style.display = 'none';
        document.getElementById("t").style.display = 'none';
        document.getElementById("r").style.display = 'none';
        document.getElementById("u").style.display = 'none';
        document.getElementById("y").style.display = 'none';
        document.getElementById("qw").style.display = 'none';
        document.getElementById("qa").style.display = 'none';
        document.getElementById("az").style.display = 'none';
        document.getElementById("zx").style.display = 'none';
        document.getElementById("xc").style.display = 'none';
        document.getElementById("cv").style.display = 'none';
        document.getElementById("vb").style.display = 'none';
        document.getElementById("bn").style.display = 'none';
        document.getElementById("nm").style.display = 'none';
        document.getElementById("mk").style.display = 'none';
        document.getElementById("kl").style.display = 'none';
        document.getElementById("lp").style.display = 'none';
        document.getElementById("po").style.display = 'none';
        document.getElementById("ok").style.display = 'none';
        document.getElementById("kj").style.display = 'none';
        document.getElementById("ji").style.display = 'none';
        document.getElementById("es").style.display = 'none';
        document.getElementById("vg").style.display = 'none';
        document.getElementById("cf").style.display = 'none';
        document.getElementById("xd").style.display = 'none';
        document.getElementById("bh").style.display = 'none';
        document.getElementById("nj").style.display = 'none';
        document.getElementById("zw").style.display = 'none';
        document.getElementById("who").style.display = 'none';
        document.getElementById("pop").style.display = 'none';
        document.getElementById("kik").style.display = 'none';
        document.getElementById("kip").style.display = 'none';
        document.getElementById("hop").style.display = 'none';
        document.getElementById("hip").style.display = 'none';
        document.getElementById("tor").style.display = 'none';
        document.getElementById("horri").style.display = 'none';
        document.getElementById("drb").style.display = 'none';
        document.getElementById("ft").style.display = 'none';
        document.getElementById("mok").style.display = 'none';
        document.getElementById("vos").style.display = 'none';
        document.getElementById("rni").style.display = 'none';
        document.getElementById("chs").style.display = 'none';
      document.getElementById("xe").style.display = 'none';
      document.getElementById("cr").style.display = 'none';
      document.getElementById("vt").style.display = 'none';
      document.getElementById("by").style.display = 'none';
      document.getElementById("nu").style.display = 'none';
      document.getElementById("nq").style.display = 'none';
      document.getElementById("sf").style.display = 'none';
      document.getElementById("st").style.display = 'none';
      document.getElementById("lh").style.display = 'none';
      document.getElementById("hi").style.display = 'none';
      document.getElementById("buy").style.display = 'none';
      document.getElementById("oku").style.display = 'none';
      document.getElementById("what").style.display = 'none';
      document.getElementById("how").style.display = 'none';
      document.getElementById("and").style.display = 'none';
      document.getElementById("with").style.display = 'none';
        document.getElementById("to").style.display = 'none';
        document.getElementById("no").style.display = 'none';
        document.getElementById("yes").style.display = 'none';
    
    }
    if(book == "Self-development"){
      document.getElementById("koko").style.display = 'none';
        document.getElementById("cherch").style.display = 'none';
        document.getElementById("a").style.display = 'none';
        document.getElementById("b").style.display = 'none';
        document.getElementById("c").style.display = 'none';
        document.getElementById("d").style.display = 'none';
        document.getElementById("e").style.display = 'none';
        document.getElementById("f").style.display = 'none';
        document.getElementById("j").style.display = 'none';
        document.getElementById("x").style.display = 'none';
        document.getElementById("v").style.display = 'none';
        document.getElementById("n").style.display = 'none';
        document.getElementById("m").style.display = 'none';
        document.getElementById("t").style.display = 'none';
        document.getElementById("r").style.display = 'none';
        document.getElementById("u").style.display = 'none';
        document.getElementById("y").style.display = 'none';
        document.getElementById("qw").style.display = 'none';
        document.getElementById("qa").style.display = 'none';
        document.getElementById("az").style.display = 'none';
        document.getElementById("zx").style.display = 'none';
        document.getElementById("xc").style.display = 'none';
        document.getElementById("cv").style.display = 'none';
        document.getElementById("vb").style.display = 'none';
        document.getElementById("bn").style.display = 'none';
        document.getElementById("nm").style.display = 'none';
        document.getElementById("mk").style.display = 'none';
        document.getElementById("kl").style.display = 'none';
        document.getElementById("lp").style.display = 'none';
        document.getElementById("po").style.display = 'none';
        document.getElementById("ok").style.display = 'none';
        document.getElementById("kj").style.display = 'none';
        document.getElementById("ji").style.display = 'none';
        document.getElementById("es").style.display = 'none';
        document.getElementById("vg").style.display = 'none';
        document.getElementById("cf").style.display = 'none';
        document.getElementById("xd").style.display = 'none';
        document.getElementById("bh").style.display = 'none';
        document.getElementById("nj").style.display = 'none';
        document.getElementById("zw").style.display = 'none';
        document.getElementById("who").style.display = 'none';
        document.getElementById("pop").style.display = 'none';
        document.getElementById("kik").style.display = 'none';
        document.getElementById("kip").style.display = 'none';
        document.getElementById("hop").style.display = 'none';
        document.getElementById("hip").style.display = 'none';
        document.getElementById("tor").style.display = 'none';
        document.getElementById("horri").style.display = 'none';
        document.getElementById("drb").style.display = 'none';
        document.getElementById("ft").style.display = 'none';
        document.getElementById("mok").style.display = 'none';
        document.getElementById("vos").style.display = 'none';
        document.getElementById("rni").style.display = 'none';
        document.getElementById("chs").style.display = 'none';
      document.getElementById("xe").style.display = 'none';
      document.getElementById("cr").style.display = 'none';
      document.getElementById("vt").style.display = 'none';
      document.getElementById("by").style.display = 'none';
      document.getElementById("nu").style.display = 'none';
      document.getElementById("nq").style.display = 'none';
      document.getElementById("sf").style.display = 'none';
      document.getElementById("st").style.display = 'none';
      document.getElementById("lh").style.display = 'none';
      document.getElementById("hi").style.display = 'none';
      document.getElementById("buy").style.display = 'none';
      document.getElementById("oku").style.display = 'none';
      document.getElementById("what").style.display = 'none';
      document.getElementById("how").style.display = 'none';
      document.getElementById("and").style.display = 'none';
      document.getElementById("with").style.display = 'none';
        document.getElementById("to").style.display = 'none';
        document.getElementById("no").style.display = 'none';
        document.getElementById("yes").style.display = 'none';
      document.getElementById("mi").style.display = 'none';
      document.getElementById("iu").style.display = 'none';
      document.getElementById("uh").style.display = 'none';
      document.getElementById("hg").style.display = 'none';
      document.getElementById("gy").style.display = 'none';
      document.getElementById("yt").style.display = 'none';
      document.getElementById("tf").style.display = 'none';
      document.getElementById("fd").style.display = 'none';
      document.getElementById("dr").style.display = 'none';
      document.getElementById("re").style.display = 'none';
    }
}
function showPopup(title, description, price) {
    // Set content for the popup
    document.getElementById('popupTitle').textContent = title;
    document.getElementById('popupDescription').textContent = description;
    document.getElementById('popupPrice').textContent = price;

    // Show the popup
    document.getElementById('bookPopup').style.display = 'block';
  }

  function buyItem() {
    // You can implement the buy functionality here
    alert('Item purchased!');
    document.getElementById('bookPopup').style.display = 'none';
  }





"use strict";

productScroll();

function productScroll() {
  let slider = document.getElementById("slider");
  let next = document.getElementsByClassName("pro-next");
  let prev = document.getElementsByClassName("pro-prev");
  let slide = document.getElementById("slide");
  let item = document.getElementById("slide");

  for (let i = 0; i < next.length; i++) {
    //refer elements by class name

    let position = 0; //slider postion

    prev[i].addEventListener("click", function() {
      //click previos button
      if (position > 0) {
        //avoid slide left beyond the first item
        position -= 1;
        translateX(position); //translate items
      }
    });

    next[i].addEventListener("click", function() {
      if (position >= 0 && position < hiddenItems()) {
        //avoid slide right beyond the last item
        position += 1;
        translateX(position); //translate items
      }
    });
  }

  function hiddenItems() {
    //get hidden items
    let items = getCount(item, false);
    let visibleItems = slider.offsetWidth / 210;
    return items - Math.ceil(visibleItems);
  }
}

function translateX(position) {
  //translate items
  slide.style.left = position * -210 + "px";
}

function getCount(parent, getChildrensChildren) {
  //count no of items
  let relevantChildren = 0;
  let children = parent.childNodes.length;
  for (let i = 0; i < children; i++) {
    if (parent.childNodes[i].nodeType != 3) {
      if (getChildrensChildren)
        relevantChildren += getCount(parent.childNodes[i], true);
      relevantChildren++;
    }
  }
  return relevantChildren;
}

