const game1_header =
  '<!doctype html> \
<html> \
  <head> \
    <!-- Internal game scripts/styles, mostly boring stuff --> \
    <link rel="stylesheet" href="https://xss-game.appspot.com/static/game-frame-styles.css" /> \
  </head> \
  <body id="level1"> \
    <img src="https://xss-game.appspot.com/static/logos/level1.png"> \
      <div> \
';

const game1_footer = "</div> \
</body> \
</html>";

const game1_content = `<form action="" method="GET">\
<input id="query" name="query" value="Enter query here..."\
  onfocus="this.value=''"> \
<input id="button" type="submit" value="Search">\
</form>`;

module.exports = { game1_header, game1_footer, game1_content };
