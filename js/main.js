// Create your variable here, name it `insects`

var insects = function (bugs){
  name: 'ant-nest-beetle',
  img: 'ant-nest-beetle.jpg',
  family: 'Carabidae',
  size: [6,20],
  eatsDung: false,
  eatsPlants: false
}
},
  // body...
}
"Name","Image","Family","Min. size","Max. size","Eats insects","Eats dung","Eats plants"
"Ant Nest Beetle","ant-nest-beetle.jpg","Carabidae","6","20","Yes","No","No"
"Dung Beetle","dung-beetle.jpg","Scarabidae","20","30","No","Yes","No"
"Stag Beetle","stag-beetle.jpg","Lucanidae","5","120","No","No","Yes"
"Tortoise Beetle","tortoise-beetle.jpg","Cassidinae","1","18","No","No","Yes"


// ##########################################################
// START DO NOT CHANGE ZONE
// ##########################################################

var writeInsects = function (bugs) {
  document.write('<h1>Insects</h1>');

  document.write('<ol>');

  bugs.forEach(function (bug) {
    document.write('<li>');
    document.write('<h2>' + bug.name + '</h2>');
    document.write('<img src="images/' + bug.img + '" alt="">');
    document.write('<dl>');
    document.write('<dt>Family</dt>');
    document.write('<dd><i>' + bug.family + '</i></dd>');
    document.write('<dt>Size</dt>');
    document.write('<dd>' + bug.size[0] + '–' + bug.size[1] + ' mm</dd>');
    document.write('<dt>Eats</dt>');

    document.write('<dd>');

    if (bug.food.eatsInsects) {
      document.write('Insects');
    }

    if (bug.food.eatsDung) {
      document.write('Dung');
    }

    if (bug.food.eatsPlants) {
      document.write('Plants');
    }

    document.write('</dd>');

    document.write('</dl>');
    document.write('</li>');
  });

  document.write('</ol>');
};

writeInsects(insects);

// ##########################################################
// END DO NOT CHANGE ZONE
// ##########################################################
