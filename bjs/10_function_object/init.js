// window.onload = function() {
//     const initPerson = personGenerator.getPerson();
//     document.getElementById('firstNameOutput').innerText = initPerson.firstName;
//     document.getElementById('surNameOutput').innerText = initPerson.surName;
//     document.getElementById('middleNameOutput').innerText = initPerson.middleName;
//     document.getElementById('genderOutput').innerText = initPerson.gender;
//     document.getElementById('dateOfBirthOutput').innerText = initPerson.dateOfBirth;
//     document.getElementById('professionOutput').innerText = initPerson.profession;
// };

document.getElementById('generate').onclick = () => {
    const initPerson = personGenerator.getPerson();
    document.getElementById('firstNameOutput').innerText = initPerson.firstName;
    document.getElementById('surNameOutput').innerText = initPerson.surName;
    document.getElementById('middleNameOutput').innerText = initPerson.middleName;
    document.getElementById('genderOutput').innerText = initPerson.gender;
    document.getElementById('dateOfBirthOutput').innerText = initPerson.dateOfBirth;
    document.getElementById('professionOutput').innerText = initPerson.profession;
};

document.getElementById('delete').onclick = () => {
    delete personGenerator.person;
    document.getElementById('firstNameOutput').innerText = '-';
    document.getElementById('surNameOutput').innerText = '-';
    document.getElementById('middleNameOutput').innerText = '-';
    document.getElementById('genderOutput').innerText = '-';
    document.getElementById('dateOfBirthOutput').innerText = '-';
    document.getElementById('professionOutput').innerText = '-';
};