function calculate() {
  var name = document.getElementById("n").value;
  document.getElementById("Name").innerHTML = name;
  var rollNumber = document.getElementById("r").value;
  document.getElementById("Roll_no").innerHTML = rollNumber;

  var a = parseInt(document.getElementById("subject1").value);
  var b = parseInt(document.getElementById("subject2").value);
  var c = parseInt(document.getElementById("subject3").value);
  var d = parseInt(document.getElementById("subject4").value);
  var e = parseInt(document.getElementById("subject5").value);

  var out = document.getElementById("outOf");

  if (!a || !b || !c || !d || !e || !name || !rollNumber) {
    document.getElementById("display").style.display = "none";
    document.getElementById("fill").innerHTML = "please fill all";
  } else {
    document.getElementById("display").style.display = "block";
  }
  if (a > 100 || b > 100 || c > 100 || d > 100 || e > 100) {
    out.innerHTML = "enter your marks out of 100";
  }
  var totalMarks = a + b + c + d + e;
  document.getElementById("marks").innerHTML = totalMarks;

  var per = (totalMarks / 500) * 100;
  document.getElementById("per").innerHTML = per;

  if (per > 80) {
    document.getElementById("grade").innerHTML = "A1";
  } else if (per > 70) {
    document.getElementById("grade").innerHTML = "A";
  } else if (per > 60) {
    document.getElementById("grade").innerHTML = "B";
  } else if (per > 50) {
    document.getElementById("grade").innerHTML = "C";
  } else if (per > 40) {
    document.getElementById("grade").innerHTML = "D";
  } else {
    document.getElementById("grade").innerHTML = "fail";
  }
}
function refresh() {
  location.reload();
}
