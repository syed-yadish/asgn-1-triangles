//Case 1

//triangleOne
const base1 = 10;
const height1 = 13;
const triangleOneArea = (base1 * height1) / 2;
console.log(`triangleOne area:  ${triangleOneArea} cm2`);

//triangleTwo
const base2 = 16.5;
const height2 = 20.3;
const triangleTwoArea = (base2 * height2) / 2;
console.log(`triangleTwo area:  ${triangleTwoArea} cm2`);

//Comparison

let firstBigTriangle;
if (triangleOneArea > triangleTwoArea) {
  console.log(
    `The triangle with the bigger area is triangle One with : ${triangleOneArea} cm2`
  );
  firstBigTriangle = triangleOneArea;
} else if (triangleOneArea < triangleTwoArea) {
  console.log(
    `The triangle with the bigger area is triangle Two with : ${triangleTwoArea} cm2`
  );
  firstBigTriangle = triangleTwoArea;
} else {
  console.log("Both triangles have the same area");
  firstBigTriangle = triangleTwoArea;
}

//Case 2

//triangleThree
const base3 = 16.5;
const height3 = 20.3;
const triangleThreeArea = (base3 * height3) / 2;
console.log(`triangleThree area:  ${triangleThreeArea} cm2`);

//triangleFour
const base4 = 20.3;
const height4 = 16.5;
const triangleFourArea = (base4 * height4) / 2;
console.log(`triangleFour area:  ${triangleFourArea} cm2`);

//Comparison

let secondBigTriangle;
if (triangleThreeArea > triangleFourArea) {
  console.log(
    `The triangle with the bigger area is triangle Three with : ${triangleThreeArea} cm2`
  );
  secondBigTriangle = triangleThreeArea;
} else if (triangleThreeArea < triangleFourArea) {
  console.log(
    `The triangle with the bigger area is triangle Four with : ${triangleFourArea} cm2`
  );
  secondBigTriangle = triangleFourArea;
} else {
  console.log("Both triangles have the same area");
  secondBigTriangle = triangleFourArea;
}

//Case 3

//triangleFive
const base5 = 7.8;
const height5 = 5.6;
const triangleFiveArea = (base5 * height5) / 2;
console.log(`triangleFive area:  ${triangleFiveArea} cm2`);

//triangleSix
const base6 = 9.3;
const height6 = 12.4;
const triangleSixArea = (base6 * height6) / 2;
console.log(`triangleSix area:  ${triangleSixArea} cm2`);

//Comparison

let thirdBigTriangle;
if (triangleFiveArea > triangleSixArea) {
  console.log(
    `The triangle with the bigger area is triangle Five with : ${triangleFiveArea} cm2`
  );
  thirdBigTriangle = triangleFiveArea;
} else if (triangleFiveArea < triangleSixArea) {
  console.log(
    `The triangle with the bigger area is triangle Six with : ${triangleSixArea} cm2`
  );
  thirdBigTriangle = triangleSixArea;
} else {
  console.log("Both triangles have the same area");
  thirdBigTriangle = triangleSixArea;
}

//Biggest Triangle in all three cases
let biggestTriangle = firstBigTriangle;

switch (biggestTriangle) {
  case firstBigTriangle:
    if (firstBigTriangle > secondBigTriangle && thirdBigTriangle) {
      console.log(
        `Biggest triangle among all six triangles has ${firstBigTriangle} cm2 area`
      );
      break;
    } else if (
      firstBigTriangle === secondBigTriangle &&
      firstBigTriangle > thirdBigTriangle
    ) {
      console.log(
        `Biggest triangle among all six triangles has ${firstBigTriangle} cm2 area`
      );
      break;
    } else if (
      firstBigTriangle > secondBigTriangle &&
      firstBigTriangle === thirdBigTriangle
    ) {
      console.log(
        `Biggest triangle among all six triangles has ${firstBigTriangle} cm2 area`
      );
      break;
    }
    biggestTriangle = secondBigTriangle;
  case secondBigTriangle:
    if (secondBigTriangle > firstBigTriangle && thirdBigTriangle) {
      console.log(
        `Biggest triangle among all six triangles has ${secondBigTriangle} cm2 area`
      );
      break;
    } else if (
      secondBigTriangle === firstBigTriangle &&
      secondBigTriangle > thirdBigTriangle
    ) {
      console.log(
        `Biggest triangle among all six triangles has ${secondBigTriangle} cm2 area`
      );
      break;
    } else if (
      secondBigTriangle > firstBigTriangle &&
      secondBigTriangle === thirdBigTriangle
    ) {
      console.log(
        `Biggest triangle among all six triangles has ${secondBigTriangle} cm2 area`
      );
      break;
    }
    biggestTriangle = thirdBigTriangle;
  case thirdBigTriangle:
    if (thirdBigTriangle > secondBigTriangle && firstBigTriangle) {
      console.log(
        `Biggest triangle among all six triangles has ${thirdBigTriangle} cm2 area`
      );
      break;
    } else if (
      thirdBigTriangle === secondBigTriangle &&
      thirdBigTriangle > firstBigTriangle
    ) {
      console.log(
        `Biggest triangle among all six triangles has ${thirdBigTriangle} cm2 area`
      );
      break;
    } else if (
      thirdBigTriangle > secondBigTriangle &&
      thirdBigTriangle === firstBigTriangle
    ) {
      console.log(
        `Biggest triangle among all six triangles has ${thirdBigTriangle} cm2 area`
      );
      break;
    }
}
