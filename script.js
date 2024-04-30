function calcularGarrafas(convidados, consumoPorPessoa) {
    return Math.ceil(convidados * consumoPorPessoa / 0.75); 
  }
  
  function calcularCustoTotal(convidados, consumoPorPessoa, preco750ml, preco1500ml) {
    let garrafas750ml = calcularGarrafas(convidados, consumoPorPessoa);
    let garrafas1500ml = Math.ceil(garrafas750ml / 2); 
    
    let custo750ml = garrafas750ml * preco750ml;
    let custo1500ml = garrafas1500ml * preco1500ml;
    
    return { total750ml: custo750ml, total1500ml: custo1500ml, garrafas750ml: garrafas750ml, garrafas1500ml: garrafas1500ml };
  }
  
  document.getElementById("calcularBtn").addEventListener("click", function() {
    let convidados = parseInt(document.getElementById('convidados').value);
    let consumoPorPessoa = parseFloat(document.getElementById('consumo').value);
  
    let custo = calcularCustoTotal(convidados, consumoPorPessoa, 10, 18); 
  
    document.getElementById('resultado').innerHTML = `
      <h2>Resultados:</h2>
      <p>Total em garrafas de 750ml: ${custo.total750ml}R$ (quantidade: ${custo.garrafas750ml})</p>
      <p>Total em garrafas de 1,5 litros: ${custo.total1500ml}R$ (quantidade: ${custo.garrafas1500ml})</p>
    `;
  });
  