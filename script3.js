const square1 = document.querySelector("#single-square1");
const square2 = document.querySelector("#single-square2");
const square3 = document.querySelector("#single-square3");
const square4 = document.querySelector("#single-square4");
const square5 = document.querySelector("#single-square5");
const square6 = document.querySelector("#single-square6");
const square7 = document.querySelector("#single-square7");
const square8 = document.querySelector("#single-square8");
const square9 = document.querySelector("#single-square9");
const square10 = document.querySelector("#single-square10");
const square11 = document.querySelector("#single-square11");
const square12 = document.querySelector("#single-square12");
const square13 = document.querySelector("#single-square13");
const square14 = document.querySelector("#single-square14");
const square15 = document.querySelector("#single-square15");
const square16 = document.querySelector("#single-square16");
const square17 = document.querySelector("#single-square17");
const square18 = document.querySelector("#single-square18");
const square19 = document.querySelector("#single-square19");
const square20 = document.querySelector("#single-square20");
const square21 = document.querySelector("#single-square21");
const square22 = document.querySelector("#single-square22");
const square23 = document.querySelector("#single-square23");
const square24 = document.querySelector("#single-square24");
const square25 = document.querySelector("#single-square25");
const square26 = document.querySelector("#single-square26");
const square27 = document.querySelector("#single-square27");
const square28 = document.querySelector("#single-square28");
const square29 = document.querySelector("#single-square29");
const square30 = document.querySelector("#single-square30");
const square31 = document.querySelector("#single-square31");
const square32 = document.querySelector("#single-square32");
const square33 = document.querySelector("#single-square33");
const square34 = document.querySelector("#single-square34");
const square35 = document.querySelector("#single-square35");
const square36 = document.querySelector("#single-square36");
const square37 = document.querySelector("#single-square37");
const square38 = document.querySelector("#single-square38");
const square39 = document.querySelector("#single-square39");
const square40 = document.querySelector("#single-square40");
const square41 = document.querySelector("#single-square41");
const square42 = document.querySelector("#single-square42");
const square43 = document.querySelector("#single-square43");
const square44 = document.querySelector("#single-square44");
const square45 = document.querySelector("#single-square45");
const square46 = document.querySelector("#single-square46");
const square47 = document.querySelector("#single-square47");
const square48 = document.querySelector("#single-square48");
const square49 = document.querySelector("#single-square49");
const square50 = document.querySelector("#single-square50");
const square51 = document.querySelector("#single-square51");
const square52 = document.querySelector("#single-square52");
const square53 = document.querySelector("#single-square53");
const square54 = document.querySelector("#single-square54");
const square55 = document.querySelector("#single-square55");
const square56 = document.querySelector("#single-square56");
const square57 = document.querySelector("#single-square57");
const square58 = document.querySelector("#single-square58");
const square59 = document.querySelector("#single-square59");
const square60 = document.querySelector("#single-square60");
const square61 = document.querySelector("#single-square61");
const square62 = document.querySelector("#single-square62");
const square63 = document.querySelector("#single-square63");
const square64 = document.querySelector("#single-square64");
const square65 = document.querySelector("#single-square65");
const square66 = document.querySelector("#single-square66");
const square67 = document.querySelector("#single-square67");
const square68 = document.querySelector("#single-square68");
const square69 = document.querySelector("#single-square69");
const square70 = document.querySelector("#single-square70");
const square71 = document.querySelector("#single-square71");
const square72 = document.querySelector("#single-square72");
const square73 = document.querySelector("#single-square73");
const square74 = document.querySelector("#single-square74");
const square75 = document.querySelector("#single-square75");
const square76 = document.querySelector("#single-square76");
const square77 = document.querySelector("#single-square77");
const square78 = document.querySelector("#single-square78");
const square79 = document.querySelector("#single-square79");
const square80 = document.querySelector("#single-square80");
const square81 = document.querySelector("#single-square81");

const gameButton = document.getElementById("new-game-button");
gameButton.onclick = reset;



function reset() {
 square1.innerHTML = null;
 square2.innerHTML = null;
 square3.innerHTML = null;
 square4.innerHTML = null;
 square5.innerHTML = null;
 square6.innerHTML = null;
 square7.innerHTML = null;
 square8.innerHTML = null;
 square9.innerHTML = null;
 square10.innerHTML = null;
 square11.innerHTML = null;
 square12.innerHTML = null;
 square13.innerHTML = null;
 square14.innerHTML = null;
 square15.innerHTML = null;
 square16.innerHTML = null;
 square17.innerHTML = null;
 square18.innerHTML = null;
 square19.innerHTML = null;
 square20.innerHTML = null;
 square21.innerHTML = null;
 square22.innerHTML = null;
 square23.innerHTML = null;
 square24.innerHTML = null;
 square25.innerHTML = null;
 square26.innerHTML = null;
 square27.innerHTML = null;
 square28.innerHTML = null;
 square29.innerHTML = null;
 square30.innerHTML = null;
 square31.innerHTML = null;
 square32.innerHTML = null;
 square33.innerHTML = null;
 square34.innerHTML = null;
 square35.innerHTML = null;
 square36.innerHTML = null;
 square37.innerHTML = null;
 square38.innerHTML = null;
 square39.innerHTML = null;
 square40.innerHTML = null;
 square41.innerHTML = null;
 square42.innerHTML = null;
 square43.innerHTML = null;
 square44.innerHTML = null;
 square45.innerHTML = null;
 square46.innerHTML = null;
 square47.innerHTML = null;
 square48.innerHTML = null;
 square49.innerHTML = null;
 square50.innerHTML = null;
 square51.innerHTML = null;
 square52.innerHTML = null;
 square53.innerHTML = null;
 square54.innerHTML = null;
 square55.innerHTML = null;
 square56.innerHTML = null;
 square57.innerHTML = null;
 square58.innerHTML = null;
 square59.innerHTML = null;
 square60.innerHTML = null;
 square61.innerHTML = null;
 square62.innerHTML = null;
 square63.innerHTML = null;
 square64.innerHTML = null;
 square65.innerHTML = null;
 square66.innerHTML = null;
 square67.innerHTML = null;
 square68.innerHTML = null;
 square69.innerHTML = null;
 square70.innerHTML = null;
 square71.innerHTML = null;
 square72.innerHTML = null;
 square73.innerHTML = null;
 square74.innerHTML = null;
 square75.innerHTML = null;
 square76.innerHTML = null;
 square77.innerHTML = null;
 square78.innerHTML = null;
 square79.innerHTML = null;
 square80.innerHTML = null;
 square81.innerHTML = null;
}

const numberArray = [1,2,3,4,5,6,7,8,9];


function random9(array) {
 const random = Math.random();
 let result;
 if (random < 0.11) {
  result = array[0];
 } else if (random < 0.22) {
  result = array[1];
 } else if (random < 0.33) {
  result = array[2];
 } else if (random < 0.44) {
  result = array[3];
 } else if (random < 0.55) {
  result = array[4];
 } else if (random < 0.66) {
  result = array[5];
 } else if (random < 0.77) {
  result = array[6];
 } else if (random < 0.88) {
  result = array[7];
 } else {
  result = array[8];
 }
 return result;
}

function random8(array) {
 const random = Math.random();
 let result;
 if (random < 0.125) {
  result = array[0];
 } else if (random < 0.25) {
  result = array[1];
 } else if (random < 0.375) {
  result = array[2];
 } else if (random < 0.5) {
  result = array[3];
 } else if (random < 0.625) {
  result = array[4];
 } else if (random < 0.75) {
  result = array[5];
 } else if (random < 0.875) {
  result = array[6];
 } else {
  result = array[7];
 }
 return result;
}

function random7(array) {
 const random = Math.random();
 let result;
 if (random < 0.143) {
  result = array[0];
 } else if (random < 0.286) {
  result = array[1];
 } else if (random < 0.429) {
  result = array[2];
 } else if (random < 0.572) {
  result = array[3];
 } else if (random < 0.715) {
  result = array[4];
 } else if (random < 0.858) {
  result = array[5];
 } else {
  result = array[6];
 }
 return result;
}

function random6(array) {
 const random = Math.random();
 let result;
 if (random < 0.167) {
  result = array[0];
 } else if (random < 0.334) {
  result = array[1];
 } else if (random < 0.501) {
  result = array[2];
 } else if (random < 0.668) {
  result = array[3];
 } else if (random < 0.835) {
  result = array[4];
 } else {
  result = array[5];
 }
 return result;
}

function random5(array) {
 const random = Math.random();
 let result;
 if (random < 0.2) {
  result = array[0];
 } else if (random < 0.4) {
  result = array[1];
 } else if (random < 0.6) {
  result = array[2];
 } else if (random < 0.8) {
  result = array[3];
 } else {
  result = array[4];
 }
 return result;
}

function random4(array) {
 const random = Math.random();
 let result;
 if (random < 0.25) {
  result = array[0];
 } else if (random < 0.5) {
  result = array[1];
 } else if (random < 0.75) {
  result = array[2];
 } else {
  result = array[3];
 }
 return result;
}

function random3(array) {
 const random = Math.random();
 let result;
 if (random < 0.33) {
  result = array[0];
 } else if (random < 0.66) {
  result = array[1];
 } else {
  result = array[2];
 }
 return result;
}

function random2(array) {
 const random = Math.random();
 let result;
 if (random < 0.5) {
  result = array[0];
 } else {
  result = array[1];
 }
 return result;
}




function randomNumber1(a, b, c, d, e, f, g, h, i, callback9, callback8, callback7, callback6, callback5, callback4, callback3, callback2, numberArray) {
 
 const resultA = callback9(numberArray);
 a.innerHTML = resultA;
 const aArray = numberArray.filter(x => x !== resultA);

 const resultB = callback8(aArray);
 b.innerHTML = resultB;
 const bArray = aArray.filter(x => x !== resultB);

 const resultC = callback7(bArray);
 c.innerHTML = resultC;
 const cArray = bArray.filter(x => x !== resultC);

 const resultD = callback6(cArray);
 d.innerHTML = resultD;
 const dArray = cArray.filter(x => x !== resultD);

 const resultE = callback5(dArray);
 e.innerHTML = resultE;
 const eArray = dArray.filter(x => x !== resultE);

 const resultF = callback4(eArray);
 f.innerHTML = resultF;
 const fArray = eArray.filter(x => x !== resultF);

 const resultG = callback3(fArray);
 g.innerHTML = resultG;
 const gArray = fArray.filter(x => x !== resultG);

 const resultH = callback2(gArray)
 h.innerHTML = resultH;
 const hArray = gArray.filter(x => x !== resultH);


 i.innerHTML = hArray;

 const value1 = parseInt(square1.innerHTML);
 const value2 = parseInt(square2.innerHTML);
 const value3 = parseInt(square3.innerHTML);
 const value4 = parseInt(square4.innerHTML);
 const value5 = parseInt(square5.innerHTML);
 const value6 = parseInt(square6.innerHTML);
 const value7 = parseInt(square7.innerHTML);
 const value8 = parseInt(square8.innerHTML);
 const value9 = parseInt(square9.innerHTML);

 const array10 = numberArray.filter(x => x !== value1 && x !== value2 && x !== value3);

 const value10 = random6(array10);
 square10.innerHTML = value10;
 const array11 = array10.filter(x => x !== value10);

 const value11 = random5(array11);
 square11.innerHTML = value11;
 const array12 = array11.filter(x => x !== value11);

 const value12 = random4(array12);
 square12.innerHTML = value12;

 const array13 = numberArray.filter(x => x !== value10 && x !== value11 && x !== value12 && x !== value4 && x !== value5 && x !== value6);

 let value13;
 let value14;
 let value15;
 let array13Correct;
 let array14;
 let array15;
 let array13Help = [value7, value8, value9];
 let array13and13HelpIntersection;
 let array13and13HelpDifference;
 let valueHelp13;
 let array13and13HelpDifference2;
 let valueHelp13Additional;
 if (array13.length === 6) {
  array13Correct = [value7, value8, value9];
  value13 = random3(array13Correct);
  square13.innerHTML = value13;
  array14 = array13Correct.filter(x => x !== value13);
  value14 = random2(array14);
  square14.innerHTML = value14;
  array15 = array14.filter(x => x !== value14);
  value15 = array15[0];
  square15.innerHTML = value15;
 } else if (array13.length === 5) {
  array13and13HelpIntersection = array13.filter(x => array13Help.includes(x));
  array13and13HelpDifference = array13.filter(x => !array13Help.includes(x));
  valueHelp13 = random3(array13and13HelpDifference);
  array13Correct = array13and13HelpIntersection.concat(valueHelp13);
  value13 = random3(array13Correct);
  square13.innerHTML = value13;
  array14 = array13Correct.filter(x => x !== value13);
  value14 = random2(array14);
  square14.innerHTML = value14;
  array15 = array14.filter(x => x !== value14);
  value15 = array15[0];
  square15.innerHTML = value15;
 } else if (array13.length === 4) {
  array13and13HelpIntersection = array13.filter(x => array13Help.includes(x));
  array13and13HelpDifference = array13.filter(x => !array13Help.includes(x));
  valueHelp13 = random3(array13and13HelpDifference);
  array13and13HelpDifference2 = array13and13HelpDifference.filter(x => x !== valueHelp13)
  valueHelp13Additional = random2(array13and13HelpDifference2);
  array13Correct = array13and13HelpIntersection.concat(valueHelp13, valueHelp13Additional);
  value13 = random3(array13Correct);
  square13.innerHTML = value13;
  array14 = array13Correct.filter(x => x !== value13);
  value14 = random2(array14);
  square14.innerHTML = value14;
  array15 = array14.filter(x => x !== value14);
  value15 = array15[0];
  square15.innerHTML = value15;
 } else {
  value13 = random3(array13);
  square13.innerHTML = value13;
  array14 = array13.filter(x => x !== value13);
  value14 = random2(array14);
  square14.innerHTML = value14;
  array15 = array14.filter(x => x !== value14);
  value15 = array15[0];
  square15.innerHTML = value15;
 }

 const array16 = numberArray.filter(x => x !== value10 && x !== value11 && x !== value12 && x !== value13 && x !== value14 && x !== value15);
 const value16 = random3(array16);
 square16.innerHTML = value16;
 const array17 = array16.filter(x => x !== value16);
 const value17 = random2(array17);
 square17.innerHTML = value17;
 const array18 = array17.filter(x => x !== value17);
 const value18 = array18[0];
 square18.innerHTML = value18;

 let value19;
 let value20;
 let value21;
 let value22;
 let value23;
 let value24;
 let value25;
 let value26;
 let value27;

 const array19 = array12.filter(x => x !== value12);
 value19 = random3(array19);
 square19.innerHTML = value19;
 const array20 = array19.filter(x => x !== value19);
 value20 = random2(array20);
 square20.innerHTML = value20;
 const array21 = array20.filter(x => x !== value20);
 value21 = array21[0];
 square21.innerHTML = value21;

 const array22 = numberArray.filter(x => x !== value4 && x !== value5 && x !== value6 && x !== value13 && x !== value14 && x !== value15);
 value22 = random3(array22);
 square22.innerHTML = value22;
 const array23 = array22.filter(x => x !== value22);
 value23 = random2(array23);
 square23.innerHTML = value23;
 const array24 = array23.filter(x => x !== value23);
 value24 = array24[0];
 square24.innerHTML = value24;

 const array25 = numberArray.filter(x => x !== value7 && x !== value8 && x !== value9 && x !== value16 && x !== value17 && x !== value18);
 value25 = random3(array25);
 square25.innerHTML = value25;
 const array26 = array25.filter(x => x !== value25);
 value26 = random2(array26);
 square26.innerHTML = value26;
 const array27 = array26.filter(x => x !== value26);
 value27 = array27[0];
 square27.innerHTML = value27;

 const array28 = numberArray.filter(x => x !== value1 && x !== value4 && x !== value7);

 const value28 = random6(array28);
 square28.innerHTML = value28;
 const array31 = array28.filter(x => x !== value28);

 const value31 = random5(array31);
 square31.innerHTML = value31;
 const array34 = array31.filter(x => x !== value31);

 const value34 = random4(array34);
 square34.innerHTML = value34;

 const array29 = numberArray.filter(x => x !== value28 && x !== value31 && x !== value34 && x !== value2 && x !== value5 && x !== value8);

 let value29;
 let value32;
 let value35;
 let array29Correct;
 let array32;
 let array35;
 let array29Help = [value3, value6, value9];
 let array29and29HelpIntersection;
 let array29and29HelpDifference;
 let valueHelp29;
 let array29and29HelpDifference2;
 let valueHelp29Additional;
 if (array29.length === 6) {
  array29Correct = [value3, value6, value9];
  value29 = random3(array29Correct);
  square29.innerHTML = value29;
  array32 = array29Correct.filter(x => x !== value29);
  value32 = random2(array32);
  square32.innerHTML = value32;
  array35 = array32.filter(x => x !== value32);
  value35 = array35[0];
  square35.innerHTML = value35;
 } else if (array29.length === 5) {
  array29and29HelpIntersection = array29.filter(x => array29Help.includes(x));
  array29and29HelpDifference = array29.filter(x => !array29Help.includes(x));
  valueHelp29 = random3(array29and29HelpDifference);
  array29Correct = array29and29HelpIntersection.concat(valueHelp29);
  value29 = random3(array29Correct);
  square29.innerHTML = value29;
  array32 = array29Correct.filter(x => x !== value29);
  value32 = random2(array32);
  square32.innerHTML = value32;
  array35 = array32.filter(x => x !== value32);
  value35 = array35[0];
  square35.innerHTML = value35;
 } else if (array29.length === 4) {
  array29and29HelpIntersection = array29.filter(x => array29Help.includes(x));
  array29and29HelpDifference = array29.filter(x => !array29Help.includes(x));
  valueHelp29 = random3(array29and29HelpDifference);
  array29and29HelpDifference2 = array29and29HelpDifference.filter(x => x !== valueHelp29)
  valueHelp29Additional = random2(array29and29HelpDifference2);
  array29Correct = array29and29HelpIntersection.concat(valueHelp29, valueHelp29Additional);
  value29 = random3(array29Correct);
  square29.innerHTML = value29;
  array32 = array29Correct.filter(x => x !== value29);
  value32 = random2(array32);
  square32.innerHTML = value32;
  array35 = array32.filter(x => x !== value32);
  value35 = array35[0];
  square35.innerHTML = value35;
 } else {
  value29 = random3(array29);
  square29.innerHTML = value29;
  array32 = array29.filter(x => x !== value29);
  value32 = random2(array32);
  square32.innerHTML = value32;
  array35 = array32.filter(x => x !== value32);
  value35 = array35[0];
  square35.innerHTML = value35;
 }

 const array30 = numberArray.filter(x => x !== value28 && x !== value31 && x !== value34 && x !== value29 && x !== value32 && x !== value35);
 const value30 = random3(array30);
 square30.innerHTML = value30;
 const array33 = array30.filter(x => x !== value30);
 const value33 = random2(array33);
 square33.innerHTML = value33;
 const array36 = array33.filter(x => x !== value33);
 const value36 = array36[0];
 square36.innerHTML = value36;

 let value55;
 let value58;
 let value61;
 let value56;
 let value59;
 let value62;
 let value57;
 let value60;
 let value63;

 const array55 = array34.filter(x => x !== value34);
 value55 = random3(array55);
 square55.innerHTML = value55;
 const array58 = array55.filter(x => x !== value55);
 value58 = random2(array58);
 square58.innerHTML = value58;
 const array61 = array58.filter(x => x !== value58);
 value61 = array61[0];
 square61.innerHTML = value61;

 const array56 = numberArray.filter(x => x !== value2 && x !== value5 && x !== value8 && x !== value29 && x !== value32 && x !== value35);
 value56 = random3(array56);
 square56.innerHTML = value56;
 const array59 = array56.filter(x => x !== value56);
 value59 = random2(array59);
 square59.innerHTML = value59;
 const array62 = array59.filter(x => x !== value59);
 value62 = array62[0];
 square62.innerHTML = value62;

 const array57 = numberArray.filter(x => x !== value3 && x !== value6 && x !== value9 && x !== value30 && x !== value33 && x !== value36);
 value57 = random3(array57);
 square57.innerHTML = value57;
 const array60 = array57.filter(x => x !== value57);
 value60 = random2(array60);
 square60.innerHTML = value60;
 const array63 = array60.filter(x => x !== value60);
 value63 = array63[0];
 square63.innerHTML = value63;


 const array37 = numberArray.filter(x => x !== value10 && x !== value13 && x !== value16 && x !== value28 && x !== value29 && x !== value30);
 let value37;
 if (array37.length === 6) {
  value37 = random6(array37);
 } else if (array37.length === 5) {
  value37 = random5(array37);
 } else if (array37.length === 4) {
  value37 = random4(array37);
 } else {
  value37 = random3(array37);
 }
 square37.innerHTML = value37;


 const array38 = numberArray.filter(x => x !== value11 && x !== value14 && x !== value17 && x !== value28 && x !== value29 && x !== value30 && x !== value37);
 let value38;
 if (array38.length === 5) {
  value38 = random5(array38);
 } else if (array38.length === 4) {
  value38 = random4(array38);
 } else if (array38.length === 3) {
  value38 = random3(array38);
 } else {
  value38 = random2(array38);
 }
 square38.innerHTML = value38;


 const array39 = numberArray.filter(x => x !== value12 && x !== value15 && x !== value18 && x !== value28 && x !== value29 && x !== value30 && x !== value37 && x !== value38);
 let value39;
 if (array39.length === 4) {
  value39 = random4(array39);
 } else if (array39.length === 3) {
  value39 = random3(array39);
 } else if (array39.length === 2) {
  value39 = random2(array39);
 } else {
  value39 = array39[0];
 }
 square39.innerHTML = value39;

 const array40 = numberArray.filter(x => x !== value31 && x !== value32 && x !== value33 && x !== value37 && x !== value38 && x !== value39);
 let value40;
 let value41;
 let value42;
 let array40Correct;
 let array41;
 let array42;
 let array40Help = [value34, value35, value36];
 let array40Help1;
 let array41Help;
 let array42Help;
 let array40HelpColumn = [value10, value13, value16];
 let array41HelpColumn = [value11, value14, value17];
 let array42HelpColumn = [value12, value15, value18];
 let array40Correctand40Help1Difference;
 let array40Correctand41HelpDifference;
 let array40Correctand42HelpDifference;
 let array40and40HelpIntersection;
 let array40and40HelpDifference;
 let valueHelp40;
 let array40and40HelpDifference2;
 let array40Correctand40HelpColumnIntersection;
 let array40Correctand41HelpColumnIntersection;
 let array40Correctand42HelpColumnIntersection;

 if (array40.length === 6) {
  array40Correct = [value34, value35, value36];
  array40Correctand40HelpColumnIntersection = array40Correct.filter(x => array40HelpColumn.includes(x));
  array40Correctand41HelpColumnIntersection = array40Correct.filter(x => array41HelpColumn.includes(x));
  array40Correctand42HelpColumnIntersection = array40Correct.filter(x => array42HelpColumn.includes(x));

  if (array40Correctand40HelpColumnIntersection.length === 3 || array40Correctand41HelpColumnIntersection.length === 3 || array40Correctand42HelpColumnIntersection.length ===3) {
   console.log("błąd w 40-42 === 6");
   return;
  }

  if (array40Correctand40HelpColumnIntersection.length === 2) {
   array40Correctand40Help1Difference = array40Correct.filter(x => !array40HelpColumn.includes(x));
   value40 = array40Correctand40Help1Difference[0];
   square40.innerHTML = value40;
   array41 = [...array40Correctand40HelpColumnIntersection];
   value41 = random2(array41);
   square41.innerHTML = value41;
   array42 = array41.filter(x => x !== value41);
   value42 = array42[0];
   square42.innerHTML = value42;
  } else if (array40Correctand41HelpColumnIntersection.length === 2) {
   array40Correctand41HelpDifference = array40Correct.filter(x => !array41HelpColumn.includes(x));
   value41 = array40Correctand41HelpDifference[0];
   square41.innerHTML = value41;
   array40Help1 = [...array40Correctand41HelpColumnIntersection];
   value40 = random2(array40Help1);
   square40.innerHTML = value40;
   array42 = array40Help1.filter(x => x !== value40);
   value42 = array42[0];
   square42.innerHTML = value42;

  } else if (array40Correctand42HelpColumnIntersection.length === 2) {
   array40Correctand42HelpDifference = array40Correct.filter(x => !array42HelpColumn.includes(x));
   value42 = array40Correctand42HelpDifference[0];
   square42.innerHTML = value42;
   array40Help1 = [...array40Correctand42HelpColumnIntersection];
   value40 = random2(array40Help1);
   square40.innerHTML = value40;
   array41 = array40Help1.filter(x => x !== value40);
   value41 = array41[0];
   square41.innerHTML = value41;
  } else {
   array40Help1 = array40Correct.filter(x => !array40HelpColumn.includes(x));
   value40 = random2(array40Help1);
   square40.innerHTML = value40;
   array41 = array40Correct.filter(x => x !== value40);
   array41Help = array41.filter(x => !array41HelpColumn.includes(x));
   if (array41Help.length === 2) {
    array42 = array40Correct.filter(x => x !== value40);
    array42Help = array42.filter(x => !array42HelpColumn.includes(x));
    value42 = array42Help[0];
    square42.innerHTML = value42;
    array41 = array42.filter(x => x !== value42);
    value41 = array41[0];
    square41.innerHTML = value41;
   } else {
    value41 = array41Help[0];
    square41.innerHTML = value41;
    array42 = array41.filter(x => x !== value41);
    value42 = array42[0];
    square42.innerHTML = value42;
   }
  }

 } else if (array40.length === 5) {

  array40and40HelpIntersection = array40.filter(x => array40Help.includes(x));
  array40and40HelpDifference = array40.filter(x => !array40Help.includes(x));
  valueHelp40 = random3(array40and40HelpDifference);
  array40Correct = array40and40HelpIntersection.concat(valueHelp40);
  let array40Length5Help1 = array40Correct.filter(x => array40HelpColumn.includes(x));
  let array40Length5Help2 = array40Correct.filter(x => array41HelpColumn.includes(x));
  let array40Length5Help3 = array40Correct.filter(x => array42HelpColumn.includes(x));
  if (array40Length5Help1.length === 3 || array40Length5Help2.length === 3 || array40Length5Help3.length === 3) {
   array40and40HelpDifference2 = array40and40HelpDifference.filter(x => x !== valueHelp40);
   let valueHelp40New = random2(array40and40HelpDifference2);
   array40Correct = array40and40HelpIntersection.concat(valueHelp40New);

   array40Correctand40HelpColumnIntersection = array40Correct.filter(x => array40HelpColumn.includes(x));
   array40Correctand41HelpColumnIntersection = array40Correct.filter(x => array41HelpColumn.includes(x));
   array40Correctand42HelpColumnIntersection = array40Correct.filter(x => array42HelpColumn.includes(x));
   
   if (array40Correctand40HelpColumnIntersection.length === 2) {
    array40Correctand40Help1Difference = array40Correct.filter(x => !array40HelpColumn.includes(x));
    value40 = array40Correctand40Help1Difference[0];
    square40.innerHTML = value40;
    array41 = [...array40Correctand40HelpColumnIntersection];
    value41 = random2(array41);
    square41.innerHTML = value41;
    array42 = array41.filter(x => x !== value41);
    value42 = array42[0];
    square42.innerHTML = value42;
   } else if (array40Correctand41HelpColumnIntersection.length === 2) {
    array40Correctand41HelpDifference = array40Correct.filter(x => !array41HelpColumn.includes(x));
    value41 = array40Correctand41HelpDifference[0];
    square41.innerHTML = value41;
    array40Help1 = [...array40Correctand41HelpColumnIntersection];
    value40 = random2(array40Help1);
    square40.innerHTML = value40;
    array42 = array40Help1.filter(x => x !== value40);
    value42 = array42[0];
    square42.innerHTML = value42;

   } else if (array40Correctand42HelpColumnIntersection.length === 2) {
    array40Correctand42HelpDifference = array40Correct.filter(x => !array42HelpColumn.includes(x));
    value42 = array40Correctand42HelpDifference[0];
    square42.innerHTML = value42;
    array40Help1 = [...array40Correctand42HelpColumnIntersection];
    value40 = random2(array40Help1);
    square40.innerHTML = value40;
    array41 = array40Help1.filter(x => x !== value40);
    value41 = array41[0];
    square41.innerHTML = value41;
   } else {
    array40Help1 = array40Correct.filter(x => !array40HelpColumn.includes(x));
    value40 = random2(array40Help1);
    square40.innerHTML = value40;
    array41 = array40Correct.filter(x => x !== value40);
    array41Help = array41.filter(x => !array41HelpColumn.includes(x));
    value41 = array41Help[0];
    square41.innerHTML = value41;
    array42 = array41.filter(x => x !== value41);
    value42 = array42[0];
    square42.innerHTML = value42;
   }
  } else if (array40Length5Help1.length === 2) {
   array40Correctand40Help1Difference = array40Correct.filter(x => !array40HelpColumn.includes(x));
   value40 = array40Correctand40Help1Difference[0];
   square40.innerHTML = value40;
   array41 = [...array40Length5Help1];
   value41 = random2(array41);
   square41.innerHTML = value41;
   array42 = array41.filter(x => x !== value41);
   value42 = array42[0];
   square42.innerHTML = value42;
   
  } else if (array40Length5Help2.length === 2) {
   array40Correctand41HelpDifference = array40Correct.filter(x => !array41HelpColumn.includes(x));
   value41 = array40Correctand41HelpDifference[0];
   square41.innerHTML = value41;
   array40Help1 = [...array40Length5Help2];
   value40 = random2(array40Help1);
   square40.innerHTML = value40;
   array42 = array40Help1.filter(x => x !== value40);
   value42 = array42[0];
   square42.innerHTML = value42;

  } else if (array40Length5Help3.length === 2) {
   array40Correctand42HelpDifference = array40Correct.filter(x => !array42HelpColumn.includes(x));
   value42 = array40Correctand42HelpDifference[0];
   square42.innerHTML = value42;
   array40Help1 = [...array40Length5Help3];
   value40 = random2(array40Help1);
   square40.innerHTML = value40;
   array41 = array40Help1.filter(x => x !== value40);
   value41 = array41[0];
   square41.innerHTML = value41;
  } else {
   array40Help1 = array40Correct.filter(x => !array40HelpColumn.includes(x));
   value40 = random2(array40Help1);
   square40.innerHTML = value40;
   array41 = array40Correct.filter(x => x !== value40);
   array41Help = array41.filter(x => !array41HelpColumn.includes(x));
   if (array41Help.length === 2) {
    array42 = array41.filter(x => !array42HelpColumn.includes(x));
    value42 = array42[0];
    square42.innerHTML = value42;
    array41 = array41Help.filter(x => x !== value42);
    value41 = array41[0];
    square41.innerHTML = value41;
   } else {
    value41 = array41Help[0];
    square41.innerHTML = value41;
    array42 = array41.filter(x => x !== value41);
    value42 = array42[0];
    square42.innerHTML = value42;
   }
  }
 } else if (array40.length === 4) {
  let array40HelpDifference;
  let array41HelpDifference;
  let array42HelpDifference;
  let valueHelp40Length4Second;
  array40and40HelpIntersection = array40.filter(x => array40Help.includes(x));
  array40and40HelpDifference = array40.filter(x => !array40Help.includes(x));
  let valueHelp40Length4First = random3(array40and40HelpDifference);
  let intersectionAndFirstValue = array40and40HelpIntersection.concat(valueHelp40Length4First);
  let array40and40HelpDifference2 = array40and40HelpDifference.filter(x => x !== valueHelp40Length4First);
  let intersectionAndFirstValueand40HelpColumnIntersection = array40HelpColumn.filter(x => intersectionAndFirstValue.includes(x));
  let intersectionAndFirstValueand41HelpColumnIntersection = array41HelpColumn.filter(x => intersectionAndFirstValue.includes(x));
  let intersectionAndFirstValueand42HelpColumnIntersection = array42HelpColumn.filter(x => intersectionAndFirstValue.includes(x));

  if (intersectionAndFirstValueand40HelpColumnIntersection.length === 2) {
   array40HelpDifference = array40and40HelpDifference2.filter(x => !array40HelpColumn.includes(x));
   if (array40HelpDifference.length === 2) {
    value40 = random2(array40HelpDifference);
    square40.innerHTML = value40;
   } else {
    value40 = array40HelpDifference[0];
    square40.innerHTML = value40;
   }
   value41 = random2(intersectionAndFirstValue);
   square41.innerHTML = value41;
   let intersectionAndFirstValueOneNumber = intersectionAndFirstValue.filter(x => x!== value41);
   value42 = intersectionAndFirstValueOneNumber[0];
   square42.innerHTML = value42;
  } else if (intersectionAndFirstValueand41HelpColumnIntersection.length === 2) {
   array41HelpDifference = array40and40HelpDifference2.filter(x => !array41HelpColumn.includes(x));
   if (array41HelpDifference.length === 2) {
    value41 = random2(array41HelpDifference);
    square41.innerHTML = value41;
   } else {
    value41 = array41HelpDifference[0];
    square41.innerHTML = value41;
   }
   value40 = random2(intersectionAndFirstValue);
   square40.innerHTML = value40;
   let intersectionAndFirstValueOneNumber = intersectionAndFirstValue.filter(x => x!== value40);
   value42 = intersectionAndFirstValueOneNumber[0];
   square42.innerHTML = value42;
  } else if (intersectionAndFirstValueand42HelpColumnIntersection.length === 2) {
   array42HelpDifference = array40and40HelpDifference2.filter(x => !array42HelpColumn.includes(x));
   if (array42HelpDifference.length === 2) {
    value42 = random2(array42HelpDifference);
    square42.innerHTML = value42;
   } else {
    value42 = array42HelpDifference[0];
    square42.innerHTML = value42;
   }
   value41 = random2(intersectionAndFirstValue);
   square41.innerHTML = value41;
   let intersectionAndFirstValueOneNumber = intersectionAndFirstValue.filter(x => x!== value41);
   value40 = intersectionAndFirstValueOneNumber[0];
   square40.innerHTML = value40;
   
  } else {
   valueHelp40Length4Second = random2(array40and40HelpDifference2);
   array40Correct = intersectionAndFirstValue.concat(valueHelp40Length4Second);
   array40Correctand40HelpColumnIntersection = array40Correct.filter(x => array40HelpColumn.includes(x));
   array40Correctand41HelpColumnIntersection = array40Correct.filter(x => array41HelpColumn.includes(x));
   array40Correctand42HelpColumnIntersection = array40Correct.filter(x => array42HelpColumn.includes(x));
   
   if (array40Correctand40HelpColumnIntersection.length === 2) {
    array40Correctand40Help1Difference = array40Correct.filter(x => !array40HelpColumn.includes(x));
    value40 = array40Correctand40Help1Difference[0];
    square40.innerHTML = value40;
    array41 = [...array40Correctand40HelpColumnIntersection];
    value41 = random2(array41);
    square41.innerHTML = value41;
    array42 = array41.filter(x => x !== value41);
    value42 = array42[0];
    square42.innerHTML = value42;
   } else if (array40Correctand41HelpColumnIntersection.length === 2) {
    array40Correctand41HelpDifference = array40Correct.filter(x => !array41HelpColumn.includes(x));
    value41 = array40Correctand41HelpDifference[0];
    square41.innerHTML = value41;
    array40Help1 = [...array40Correctand41HelpColumnIntersection];
    value40 = random2(array40Help1);
    square40.innerHTML = value40;
    array42 = array40Help1.filter(x => x !== value40);
    value42 = array42[0];
    square42.innerHTML = value42;
   } else if (array40Correctand42HelpColumnIntersection.length === 2) {
    array40Correctand42HelpDifference = array40Correct.filter(x => !array42HelpColumn.includes(x));
    value42 = array40Correctand42HelpDifference[0];
    square42.innerHTML = value42;
    array40Help1 = [...array40Correctand42HelpColumnIntersection];
    value40 = random2(array40Help1);
    square40.innerHTML = value40;
    array41 = array40Help1.filter(x => x !== value40);
    value41 = array41[0];
    square41.innerHTML = value41;
   } else {
    array40Help1 = array40Correct.filter(x => !array40HelpColumn.includes(x));
    value40 = random2(array40Help1);
    square40.innerHTML = value40;
    array41 = array40Correct.filter(x => x !== value40);
    array41Help = array41.filter(x => !array41HelpColumn.includes(x));
    if (array41Help.length === 2) {
     array42 = array40Correct.filter(x => x !== value40);
     array42Help = array42.filter(x => !array42HelpColumn.includes(x));
     value42 = array42Help[0];
     square42.innerHTML = value42;
     array41 = array42.filter(x => x !== value42);
     value41 = array41[0];
     square41.innerHTML = value41;
    } else {
     value41 = array41Help[0];
     square41.innerHTML = value41;
     array42 = array41.filter(x => x !== value41);
     value42 = array42[0];
     square42.innerHTML = value42;
    }
   }
  }
 } else {
  array40Correct = [...array40];
  array40Correctand40HelpColumnIntersection = array40Correct.filter(x => array40HelpColumn.includes(x));
  array40Correctand41HelpColumnIntersection = array40Correct.filter(x => array41HelpColumn.includes(x));
  array40Correctand42HelpColumnIntersection = array40Correct.filter(x => array42HelpColumn.includes(x));
  
  if (array40Correctand40HelpColumnIntersection.length === 3 || array40Correctand41HelpColumnIntersection.length === 3 || array40Correctand42HelpColumnIntersection.length ===3) {
   console.log("błąd w 40-42 === 3");
   return;
  } 
  if (array40Correctand40HelpColumnIntersection.length === 2) {
   array40Correctand40Help1Difference = array40Correct.filter(x => !array40HelpColumn.includes(x));
   value40 = array40Correctand40Help1Difference[0];
   square40.innerHTML = value40;
   array41 = [...array40Correctand40HelpColumnIntersection];
   value41 = random2(array41);
   square41.innerHTML = value41;
   array42 = array41.filter(x => x !== value41);
   value42 = array42[0];
   square42.innerHTML = value42;
  } else if (array40Correctand41HelpColumnIntersection.length === 2) {
   array40Correctand41HelpDifference = array40Correct.filter(x => !array41HelpColumn.includes(x));
   value41 = array40Correctand41HelpDifference[0];
   square41.innerHTML = value41;
   array40Help1 = [...array40Correctand41HelpColumnIntersection];
   value40 = random2(array40Help1);
   square40.innerHTML = value40;
   array42 = array40Help1.filter(x => x !== value40);
   value42 = array42[0];
   square42.innerHTML = value42;
  } else if (array40Correctand42HelpColumnIntersection.length === 2) {
   array40Correctand42HelpDifference = array40Correct.filter(x => !array42HelpColumn.includes(x));
   value42 = array40Correctand42HelpDifference[0];
   square42.innerHTML = value42;
   array40Help1 = [...array40Correctand42HelpColumnIntersection];
   value40 = random2(array40Help1);
   square40.innerHTML = value40;
   array41 = array40Help1.filter(x => x !== value40);
   value41 = array41[0];
   square41.innerHTML = value41;
  } else {
   array40Help1 = array40Correct.filter(x => !array40HelpColumn.includes(x));
   value40 = random2(array40Help1);
   square40.innerHTML = value40;
   array41 = array40Correct.filter(x => x !== value40);
   array41Help = array41.filter(x => !array41HelpColumn.includes(x));
   if (array41Help.length === 2) {
    array42 = array40Correct.filter(x => x !== value40);
    array42Help = array42.filter(x => !array42HelpColumn.includes(x));
    value42 = array42Help[0];
    square42.innerHTML = value42;
    array41 = array42.filter(x => x !== value42);
    value41 = array41[0];
    square41.innerHTML = value41;
   } else {
    value41 = array41Help[0];
    square41.innerHTML = value41;
    array42 = array41.filter(x => x !== value41);
    value42 = array42[0];
    square42.innerHTML = value42;
   }
  }
 }
 let value43;
 let value44;
 let value45;
 let array43 = numberArray.filter(x => x !== value37 && x !== value38 && x !== value39 && x !== value40 && x !== value41 && x !== value42);
 let array43HelpColumn = [...array40HelpColumn];
 let array43Help = array43.filter(x => !array43HelpColumn.includes(x));
 let array44;
 let array44HelpColumn = [...array41HelpColumn];
 let array44Help = array43.filter(x => !array44HelpColumn.includes(x));
 let array45;
 let array45HelpColumn = [...array42HelpColumn];
 let array45Help = array43.filter(x => !array45HelpColumn.includes(x));
 
 if (array43Help.length === 1) {
  // console.log("arr43 === 1");
  value43 = array43Help[0];
  square43.innerHTML = value43;
  array44 = array43.filter(x => x !== value43);
  value44 = random2(array44);
  square44.innerHTML = value44;
  array45 = array44.filter(x => x !== value44);
  value45 = array45[0];
  square45.innerHTML = value45;
 } else if (array44Help.length === 1) {
  // console.log("arr44 === 1");
  value44 = array44Help[0];
  square44.innerHTML = value44;
  array43Help = array43.filter(x => x !== value44);
  value43 = random2(array43Help);
  square43.innerHTML = value43;
  array45 = array43Help.filter(x => x !== value43);
  value45 = array45[0];
  square45.innerHTML = value45;
 } else if (array45Help.length === 1) {
  // console.log("arr45 === 1");
  value45 = array45Help[0];
  square45.innerHTML = value45;
  array44 = array43.filter(x => x !== value45);
  value44 = random2(array44);
  square44.innerHTML = value44;
  array43 = array44.filter(x => x !== value44);
  value43 = array43[0];
  square43.innerHTML = value43;
 } else if (array43Help.length === 0 || array44Help.length === 0 || array45Help.length === 0) {
  console.log("błąd w 43-45");
  return;
 } else {
  //po jednej cyfrze w kolumnie
  // console.log("arr43-4-5 === 1")
  value43 = random2(array43Help);
  square43.innerHTML = value43;
  array44 = array43.filter(x => x !== value43);
  array44Help = array44.filter(x => !array44HelpColumn.includes(x));
  if (array44Help.length === 2) {
   array45 = array45Help.filter(x => x !== value43);
   value45 = array45[0];
   square45.innerHTML = value45;
   array44Help = array44.filter(x => x !== value45);
   value44 = array44Help[0];
   square44.innerHTML = value44;
  } else {
   value44 = array44Help[0];
   square44.innerHTML = value44;
   array45 = array44.filter(x => x !== value44);
   value45 = array45[0];
   square45.innerHTML = value45;
  }

 }

 // console.log(array43);
 // console.log(array43HelpColumn);
 // console.log(array43Help);
 console.log("WSZYSTKO DOBRZE");
}
console.time("check");
randomNumber1(square1, square2, square3, square4, square5, square6, square7, square8, square9, random9, random8, random7, random6, random5, random4, random3, random2, numberArray);
console.timeEnd("check");

 
 







