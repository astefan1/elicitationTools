// On first page where bounds are defined in form

function setLowerBound(){
    lowerBound = this.value;
    sessionStorage.setItem("lowerBound", lowerBound);
  }
  
  function setUpperBound(){
    upperBound = this.value;
    sessionStorage.setItem("upperBound", upperBound);
  }
  
  document.getElementById("PE03_01").addEventListener('change', setLowerBound);
  document.getElementById("PE03_02").addEventListener('change', setUpperBound);

  // On second page where they are used in elicitation tool
  // Don't forget to use parseFloat() around the values in the code if you want to use them as numeric values

  var lowerBound = sessionStorage.getItem("lowerBound");
