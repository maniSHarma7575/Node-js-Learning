function name(firstName, lastName) {
    let name = firstName + " " + lastName;
    return name;
}
let a = ["Manish", "Sharma", "Nikhil", "Bhatt", "Divyanshu ", "Joshi"];
for (var b = 0; b < a.length; b += 2) {
    alert(name(a[b], a[b + 1]));
}