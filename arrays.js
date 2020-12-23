// Students List with notes in Mathe, German, English and Geo
const notes = [
  ["Hans", 80, 90, 10, 50],
  ["Ulrich", 94, 36, 76, 74],
  ["Olaf", 30, 60, 34, 78],
  ["Otto", 60, 60, 78, 23],
  ["Tina", 71, 45, 89, 100],
  ["Rosalina", 40, 56, 82, 40],
  ["Urs", 49, 45, 56, 67],
  ["Monika", 49, 42, 16, 62],
];

const students = notes.length;

// find the avarage notes in Mathe
function findMathAvarage() {
  let index;
  let avarageMathe = null;
  let summe = 0;

  for (index = 0; index < students; index++) {
    let matheNote = notes[index][1];
    summe += matheNote;
    avarageMathe = summe / students;
  }
  console.log("Sinifin Matematik ortalamasi :" + avarageMathe);
  return avarageMathe;
}

//find the avarage notes in German
function findGermanAvarage() {
  let index;
  let avarageGerman = null;
  let summe = 0;

  for (index = 0; index < students; index++) {
    let germanNote = notes[index][2];
    summe += germanNote;
    avarageGerman = summe / students;
  }
  console.log("Sinifin Almanca ortalamasi :" + avarageGerman);
  return avarageGerman;
}

//find the avarage notes in English
function findEnglishAvarage() {
  let index;
  let avarageEnglish = null;
  let summe = 0;

  for (index = 0; index < students; index++) {
    let englishNote = notes[index][3];
    summe += englishNote;
    avarageEnglish = summe / students;
  }
  console.log("Sinifin Ingilizce ortalamasi :" + avarageEnglish);
  return avarageEnglish;
}

// find the avarage notes in Geo
function findGeoAvarage() {
  let index;
  let avarageGeo = null;
  let summe = 0;

  for (index = 0; index < students; index++) {
    let geoNote = notes[index][4];
    summe += geoNote;
    avarageGeo = summe / students;
  }
  console.log("Sinifin Cografya ortalamasi :" + avarageGeo);
  return avarageGeo;
}

// return the List of Students, who get over 70 points
function findSuccessfullStudents(pLessons, pNoteList, pIndex) {
  let newList = [];
  for (let i = 0; i < pNoteList.length; i++) {
    if (pNoteList[i][pIndex] > 70) {
      newList.push(pNoteList[i][0] + " " + pNoteList[i][pIndex]);
    }
  }
  console.log(pLessons, newList);
}

let matheAvarage = findMathAvarage();
let germanAvarage = findGermanAvarage();
let englishAvarage = findEnglishAvarage();
let geoAvarage = findGeoAvarage();

// return the list of studends, who are over the avarage
function findStudentsOverAvarage(pLessons, pNoteList, pIndex) {
  let studentsList = [];
  for (let index = 0; index < pNoteList.length; index++) {
    if (pIndex == 1 && pNoteList[index][pIndex] > matheAvarage) {
      studentsList.push(
        pLessons + pNoteList[index][0] + " " + pNoteList[index][pIndex]
      );
    } else if (pIndex == 2 && pNoteList[index][pIndex] > germanAvarage) {
      studentsList.push(
        pLessons + pNoteList[index][0] + " " + pNoteList[index][pIndex]
      );
    } else if (pIndex == 3 && pNoteList[index][pIndex] > englishAvarage) {
      studentsList.push(
        pLessons + pNoteList[index][0] + " " + pNoteList[index][pIndex]
      );
    } else if (pIndex == 4 && pNoteList[index][pIndex] > geoAvarage) {
      studentsList.push(
        pLessons + pNoteList[index][0] + " " + pNoteList[index][pIndex]
      );
    }
  }
  console.log(studentsList);
}

// returns the most successfully lessons
function findMostSuccessfullLesson() {
  let avarageList = [matheAvarage, germanAvarage, englishAvarage, geoAvarage];
  let maxAvarage = Math.max.apply(null, avarageList);

  let mostSuccessfullLesson = null;
  if (maxAvarage == matheAvarage) {
    mostSuccessfullLesson = "Mathematik";
  } else if (maxAvarage == germanAvarage) {
    mostSuccessfullLesson = "Almanca";
  } else if (maxAvarage == englishAvarage) {
    mostSuccessfullLesson = "Ingilizce";
  } else {
    mostSuccessfullLesson = "Cografya";
  }
  console.log(
    "En iyi not ortalamasina sahip ders: " +
      mostSuccessfullLesson +
      " " +
      maxAvarage
  );
}

//returns the lessons with min success
function findMinSuccessfulLesson() {
  let avarageList = [matheAvarage, germanAvarage, englishAvarage, geoAvarage];
  let minAvarage = Math.min.apply(null, avarageList);

  let minSuccessfullLesson = null;
  if (minAvarage == matheAvarage) {
    minSuccessfullLesson = "Mathematik";
  } else if (minAvarage == germanAvarage) {
    minSuccessfullLesson = "Almanca";
  } else if (minAvarage == englishAvarage) {
    minSuccessfullLesson = "Ingilizce";
  } else {
    minSuccessfullLesson = "Cografya";
  }
  console.log(
    "En kötü not ortalamasina sahip ders: " +
      minSuccessfullLesson +
      " " +
      minAvarage
  );
}

// returns the list of students with most success.
function findMostSuccessfullStudent(pIndex) {
  let successStudent = [];
  let maxNotes = notes[0][1];
  for (let index = 0; index < notes.length; index++) {
    if (notes[index][pIndex] >= maxNotes) {
      maxNotes = notes[index][pIndex];
      successStudent = notes[index][0];
    }
  }
  if (pIndex == 1) {
    console.log(
      "Mathematik dersinin en iyi ögrenci: " + maxNotes
      + " puan ile: " + successStudent
    );
  } else if (pIndex == 2) {
    console.log(
      "Almanca dersinin en iyi ögrenci: " + maxNotes
      +" puan ile: " + successStudent
    );
  } else if (pIndex == 3) {
    console.log(
      "Ingilizce dersinin en iyi ögrenci: " + maxNotes
      +" puan ile: " + successStudent
    );
  } else {
    console.log(
      "Cografya dersinin en iyi ögrenci: " + maxNotes
      +" puan ile: " + successStudent
    );
  }
}

findMathAvarage();
findGermanAvarage();
findEnglishAvarage();
findGeoAvarage();
findSuccessfullStudents("Matematikten 70 üzeri alanlar: ", notes, 1);
findSuccessfullStudents("Almancadan 70 üzeri alanlar: ", notes, 2);
findSuccessfullStudents("Ingilizceden 70 üzeri alanlar", notes, 3);
findSuccessfullStudents("Cografyadan 70 üzeri alanlar", notes, 4);
findStudentsOverAvarage("Matematikten ortalamanin üzerinde alan: ", notes, 1);
findStudentsOverAvarage("Almancadan ortalamanin üzerinde alan: ", notes, 2);
findStudentsOverAvarage("Ingilizceden ortalamanin üzerinde alan: ", notes, 3);
findStudentsOverAvarage("Cografyadan ortalamanin üzerinde alan: ", notes, 4);
findMostSuccessfullLesson();
findMinSuccessfulLesson();
findMostSuccessfullStudent(1);
findMostSuccessfullStudent(2);
findMostSuccessfullStudent(3);
findMostSuccessfullStudent(4);
