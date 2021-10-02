async function get() {
  const date = document.getElementById("date").value;
  const pc = document.getElementById("pincode").value;
  const url = `https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/calendarByPin?pincode=${pc}&date=${date}`;
  const sR = await fetch(url);
  const array = await sR.json();
  const place = array.centers;
  buildTable(place);
  function buildTable(data) {
    var table = document.getElementById("Table");
    for (var i = 0; i < data.length; i++) {
      var row = `<tr>
							<td>${data[i].name}</td>
							<td>${data[i].address}</td>
							<td>${data[i].fee_type}</td>
					  </tr>`;
      table.innerHTML += row;
    }
  }
}
