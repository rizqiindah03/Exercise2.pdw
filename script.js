function Submit() {
  var name = document.getElementById("nama").value;
  var date = document.getElementById("tanggal").value;
  var sex = document.getElementById("selectOption").value;
  var tickets = document.querySelector("input[name=Tickets]:checked");
  var ticketValue = tickets ? tickets.value : "No ticket selected";
  var address = document.getElementById("Address").value;

  var message = "Name: " + name + "\n";
  message += "Date: " + date + "\n";
  message += "Sex: " + sex + "\n";
  message += "Tickets: " + ticketValue + "\n";
  message += "Address: " + address;

  alert(message);
}
