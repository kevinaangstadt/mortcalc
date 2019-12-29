$(function(){
  function numberWithCommas(x) {
    return x.toString().replace(/\,/g,'').replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }
  
  $("input").on("keyup", function(evt){
    $(evt.target).val(numberWithCommas($(evt.target).val()));
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
    
    $("#outputPrincipal").val( numberWithCommas((M / (J / (1 - Math.pow(X, -N)))).toFixed(2)));
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
    
    $("#outputMonthly").val( numberWithCommas(P * ( J / (1 - Math.pow(X, -N))).toFixed(2)));
  });
});