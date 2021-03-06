/// @ts-check
/// <reference path=".gitpod/p5.global-mode.d.ts" />
"use strict";

/* Game opdracht
   Informatica - Emmauscollege Rotterdam
   Template voor een game in JavaScript met de p5 library

   Begin met dit template voor je game opdracht,
   voeg er je eigen code aan toe.
 */




/* ********************************************* */
/* globale variabelen die je gebruikt in je game */
/* ********************************************* */

const UITLEG = 0;
const SPELEN = 1;
const GAMEOVER = 2;
var spelStatus = SPELEN;

var spelerX = 630;      // x-positie van speler
var spelerY = 600;      // y-positie van speler

var kogelX = spelerX;   // x-positie van kogel
var kogelY = spelerY;   // y-positie van kogel

var vijandX = 630;      // x-positie van vijand
var vijandY = 0;        // y-positie van vijand

var score = 0;          // aantal behaalde punten

var KEY_LEFT = 37;     // linker pijltje
var KEY_RIGHT = 39;     // rechter pijltje
var KEY_SPACEBAR = 32;  // spatiebalk


/* ********************************************* */
/*      functies die je gebruikt in je game      */
/* ********************************************* */


/**
 * Tekent het speelveld
 */

var tekenVeld = function () {
  background("blue");
};


/**
 * Tekent de vijand
 * @param {number} x x-coördinaat
 * @param {number} y y-coördinaat
 */

var tekenVijand = function (x, y) {
  fill("brown");
  circle(vijandX, vijandY, 30, 30);
};

/**
 * Tekent de speler
 * @param {number} x x-coördinaat
 * @param {number} y y-coördinaat
 */
var tekenSpeler = function(x, y) {
  fill("white");
  rect(spelerX, spelerY, 50, 50);
};


/**
 * Tekent de kogel of de bal
 * @param {number} x x-coördinaat
 * @param {number} y y-coördinaat
 */

var tekenKogel = function (x, y) {
  fill("gray");
  circle(kogelX + 10, kogelY + 10, 10, 10);
};

/**
 * Updatet globale variabelen met positie van vijand of tegenspeler
 */
var beweegVijand = function () {
  vijandY = vijandY + 3
};


/**
 * Updatet globale variabelen met positie van kogel of bal
 */
var beweegKogel = function keyPressed(KEY_SPACEBAR) {
  kogelY = kogelY - 10;
  if (keyIsDown(KEY_LEFT)) {
    kogelX = kogelX - 20;
  }
  if (keyIsDown(KEY_RIGHT)) {
    kogelX = kogelX + 20;
  }
};


/**
 * Kijkt wat de toetsen/muis etc zijn.
 * Updatet globale variabele spelerX en spelerY
 */
var beweegSpeler = function () {
  if (keyIsDown(KEY_LEFT)) {
    spelerX = spelerX - 20;
  }
  if (keyIsDown(KEY_RIGHT)) {
    spelerX = spelerX + 20;
  }
};


/**
 * Zoekt uit of de vijand is geraakt
 * @returns {boolean} true als vijand is geraakt
 */
var checkVijandGeraakt = function () {

  return false;
};


/**
 * Zoekt uit of de speler is geraakt
 * bijvoorbeeld door botsing met vijand
 * @returns {boolean} true als speler is geraakt
 */
var checkSpelerGeraakt = function () {

  return false;
};


/**
 * Zoekt uit of het spel is afgelopen
 * @returns {boolean} true als het spel is afgelopen
 */
var checkGameOver = function () {

  return false;
};


/**
 * setup
 * de code in deze functie wordt één keer uitgevoerd door
 * de p5 library, zodra het spel geladen is in de browser
 */
function setup() {
  // Kleur de achtergrond blauw, zodat je het kunt zien
  background("blue");

  // Maak een canvas (rechthoek) waarin je je speelveld kunt tekenen
  createCanvas(1280, 720);


}


/**
 * draw
 * de code in deze functie wordt meerdere keren per seconde
 * uitgevoerd door de p5 library, nadat de setup functie klaar is
 */
function draw() {
  switch (spelStatus) {
    case SPELEN:
      beweegVijand();
      beweegKogel();
      beweegSpeler();

      if (checkVijandGeraakt()) {
        // punten erbij
        // nieuwe vijand maken
      }

      if (checkSpelerGeraakt()) {
        // leven eraf of gezondheid verlagen
        // eventueel: nieuwe speler maken
      }

      tekenVeld();
      tekenVijand(vijandX, vijandY);
      tekenKogel(kogelX, kogelY);
      tekenSpeler(spelerX, spelerY);

      if (checkGameOver()) {
        spelStatus = GAMEOVER;
      }
      break;
  }
}
