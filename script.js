function calculateTotal(){
    const cpuPrice = document.getElementById("cpu").value;
    const gpuPrice = document.getElementById("gpu").value;
    const ramPrice = document.getElementById("ram").value;
    const hddPrice = document.getElementById("hdd").value;
    const ssdPrice = document.getElementById("ssd").value;
    const moboPrice = document.getElementById("mobo").value;
    const psuPrice = document.getElementById("psu").value;

    if (cpuPrice === '0' || gpuPrice === '0' || ramPrice ==='0' || moboPrice === '0' || psuPrice === '0') {
      totalCost.innerText = 'Nie wybrałeś wszystkich wymaganych podzespołów!';
    } else {
    const totalCost = parseInt(cpuPrice) + parseInt(gpuPrice) + parseInt(ramPrice) + parseInt(hddPrice) + parseInt(ssdPrice) + parseInt(moboPrice) + parseInt(psuPrice);
    document.getElementById("totalCost").innerHTML = "Koszt: " + totalCost + " zł";
    }
  }

  function resetForm(){
    document.getElementById("totalCost").innerHTML = "";
  }