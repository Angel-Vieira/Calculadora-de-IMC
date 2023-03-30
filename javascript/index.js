function testaImc(imc, valorMenor, valorMaior, texto){
   if(imc>=valorMenor && imc <= valorMaior){
      mostrarIMC.innerHTML = `<p> Seu imc é de ${imc}. ${texto} </p>` 
      mostrarIMC.classList.remove('formataçao-de-resultado')
      mostrarIMC.offsetWidth;
      mostrarIMC.classList.add('formataçao-de-resultado')
   }
}


function calculo(pesoDigitado, alturaDigitada){
   let imc = pesoDigitado/(alturaDigitada*alturaDigitada)
   console.log('imc eh ' + imc)

   let imcAredondado = parseFloat(imc.toFixed(2))
   console.log(imcAredondado)

    testaImc(imcAredondado,0, 18.5, "Abaixo do peso.")
 
    testaImc(imcAredondado,18.5, 24.9, "Peso normal.")

    testaImc(imcAredondado,25, 29.9, "Acima acima do peso. (Sobrepeso)")

    testaImc(imcAredondado,30, 34.9, "Obesidade 1")

    testaImc(imcAredondado,35, 39.9, "Obesidade 2")

    testaImc(imcAredondado,40, 1000, "Obesidade 3")         
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


   
      
