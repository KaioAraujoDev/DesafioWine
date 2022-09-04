const btnsBenefits = document.querySelectorAll('.btnBenefits');

//Abrindo modal
//Adicionando evento de clique ao botão
//O Botão chamará o modal referente ao seu id

for(let btnBenefit of btnsBenefits){
    //Inicializando iziModal
    $(`#${btnBenefit.id}.Modal`).iziModal()
    btnBenefit.addEventListener('click',()=>{
        
       //Abrindo modal
       $(`#${btnBenefit.id}.Modal`).iziModal('open')
    })
}

//Fechando modal 
//Adicionando evento de clique 
//o Botão fechara o modal referente ao seu id

const btnsCloseBenefits = document.querySelectorAll('.btnCloseModal');

for(let btnCloseBenefit of btnsCloseBenefits){
    btnCloseBenefit.addEventListener('click',(event)=>{
        $(`#${btnCloseBenefit.id}.Modal`).iziModal('close');
    })
}