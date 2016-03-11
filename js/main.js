var insects = [
  {
    name: 'Ant Nest Beetle',
    img: 'ant-nest-beetle.jpg',
    size: [6, 20],
    family: 'Carabidae',
    food: {
      eatsInsects: true,
      eatsDung: false,
      eatsPlants: false,
    }
  }, {
    name: 'Dung Beetle',
    img: 'dung-beetle.jpg',
    size: [20, 30],
    family: 'Scarabidae',
    food: {
      eatsInsects: false,
      eatsDung: true,
      eatsPlants: false,
    }
  }, {
    name: 'Stag Beetle',
    img: 'stag-beetle.jpg',
    size: [5, 120],
    family: 'Lucanidae',
    food: {
      eatsInsects: false,
      eatsDung: false,
      eatsPlants: true,
    }
  }, {
    name: 'Tortoise Beetle',
    img: 'tortoise-beetle.jpg',
    size: [1, 18],
    family: 'Cassidinae',
    food: {
      eatsInsects: false,
      eatsDung: false,
      eatsPlants: true,
    }
  }
];

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
