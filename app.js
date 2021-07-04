const startInterview = () => {
    let fullName = prompt("what's your full name?");
    console.log(fullName);

    let age = prompt("enter you age please");
    console.log(age);

    let major = prompt("what's your university major?");
    console.log(major);

    let university = prompt("where did you study?");
    console.log(university);

    alert(`Hello ${fullName} nice to meet you, you're still young with ${age} years old, also, ${major} is one of the best majors these days and ${university} is one of the best in the region`);
}