function calculo(pesoDigitado, alturaDigitada){
   let imc = pesoDigitado/(alturaDigitada*alturaDigitada)
   console.log('imc eh' + imc)

   let imcAredondado = parseFloat(imc.toFixed(2))
   console.log(imcAredondado)
 
      if(imc < 18.5){
      mostrarIMC.innerHTML = `<p> Seu imc é de ${imcAredondado}. Você está abaixo do peso.</p>`
      }
      if(imc >= 18.5 && imc <= 24.9){
      mostrarIMC.innerHTML = `<p> Seu imc é de ${imcAredondado}.  Você está com o peso normal.</p>`
      }
      if(imc >= 25 && imc <= 29.9){
      mostrarIMC.innerHTML = `<p> Seu imc é de ${imcAredondado}.  Você está acima do peso. (sobrepeso)</p>`
      }
      if(imc >= 30 && imc <= 34.9){
      mostrarIMC.innerHTML = `<p> Seu imc é de ${imcAredondado}.  Obesidade 1.</p>`
      }
      if(imc >= 35 && imc <= 39.9){
      mostrarIMC.innerHTML = `<p> Seu imc é de ${imcAredondado}.  Obesidade 2.</p>`
      }
      if(imc > 40){
       mostrarIMC.innerHTML = `<p> Seu imc é de ${imcAredondado}.  Obesidade 3.</p>`
      }     
}


let button = document.querySelector("button[name = 'button']")
   button.addEventListener('click',function(){
         let peso = document.getElementsByName('peso')
         let altura = document.getElementsByName('altura')
         
         let pesoDigitado = peso[0].value 
         let alturaDigitada = altura[0].value 
      
         var pesoComPonto =parseFloat(pesoDigitado.replace(',','.'))
         var alturaComPonto = parseFloat(alturaDigitada.replace(',','.'))
      
         calculo(pesoComPonto, alturaComPonto)
      }
)


   
      
