$(function(){
  const format = (num, decimals) => num.toLocaleString('en-US', {
    minimumFractionDigits: 2,      
    maximumFractionDigits: 2,
  });
  
  function numberWithCommas(x) {
    // 20 is the max
    return parseFloat(x.toString().replace(/\,/g,'')).toLocaleString('en-US', {maximumFractionDigits: 20});
    //return x.toString().replace(/\,/g,'').replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }
  
  $("input").on("keyup", function(evt){
    if($(evt.target).val()) {
      $(evt.target).val(numberWithCommas($(evt.target).val()));
    }
  });
  
  $("#principalForm").submit(function(evt) {
    evt.preventDefault();
    evt.stopPropagation();
    
    let M = parseFloat($("#p-monthly").val().replace(/\,/g,''));
    let I = parseFloat($("#p-rate").val().replace(/\,/g,''));
    let L = parseFloat($("#p-length").val().replace(/\,/g,''));
    
    let J = I / (12*100);
    let N = L * 12;
    
    let X = 1.0 + J;
    
    $("#outputPrincipal").val( numberWithCommas(format((M / (J / (1 - Math.pow(X, -N)))))));
  });
  
  $("#monthlyForm").submit(function(evt) {
    evt.preventDefault();
    evt.stopPropagation();
    
    let P = parseFloat($("#m-principal").val().replace(/\,/g,''));
    let I = parseFloat($("#m-rate").val().replace(/\,/g,''));
    let L = parseFloat($("#m-length").val().replace(/\,/g,''));
    
    let J = I / (12*100);
    let N = L * 12;
    
    let X = 1.0 + J;
    
    $("#outputMonthly").val( numberWithCommas(format(P * ( J / (1 - Math.pow(X, -N))))));
  });
  
  $("#lengthForm").submit(function(evt) {
    evt.preventDefault();
    evt.stopPropagation();
    
    let P = parseFloat($("#l-principal").val().replace(/\,/g,''));
    let M = parseFloat($("#l-monthly").val().replace(/\,/g,''));
    let I = parseFloat($("#l-rate").val().replace(/\,/g,''));
    
    let J = I / (12*100);
    
    let X = 1.0 + J;
    
    $("#outputLength").val( numberWithCommas(
      Math.abs(Math.log(1 - (P*J/M)) / (12 * Math.log(X)))
    ));
  });
});