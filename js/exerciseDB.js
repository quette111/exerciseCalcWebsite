const apiUrl = 'https://api.api-ninjas.com/v1/dadjokes'

const apiKey = 'cLr26bZQ3etn6mmntKT68Q==lpF3LNhFsdQxosmZ';

const headers = {
    'X-Api-Key': apiKey,
    'Content-Type': 'application/json'
};







const apiKey2 = 'cLr26bZQ3etn6mmntKT68Q==lpF3LNhFsdQxosmZ'
const headers2 = {
    'X-Api-Key': apiKey2,
    'Content-Type': 'application/json'
};





async function getData(){
    outputElement.hidden = true;
   
    let options = document.getElementById('cars');

    let op = options.value - 1

    let optionArray = ['abdominals','abductors','biceps','chest','glutes','quadriceps','traps','triceps']
    let apiUrl2 = `https://api.api-ninjas.com/v1/exercises?muscle=${optionArray[`${op}`]}`
    try{
        const response = await fetch(apiUrl2, {
            method: 'GET',
            headers: headers2
        });
        if(!response.ok){
            throw new Error(`Did not work Fammm ${response.statusText}`)
        }
        const data2 = await response.json();
        console.log('Success', data2);
        displayData(data2)
    }catch(error){
        console.log('Error cuh', error)
    }

}

getData()
//,{}\: name
    const outputElement = document.getElementById('list');

function displayData(data) {
    

    if(Array.isArray(data)){
       
        outputElement.innerHTML = (data.map(item => `<li class='words'>${JSON.stringify(item)}</li>`).join(''))
       
      
    } else {
        outputElement.innerText = JSON.stringify(data, null, 2)
    }
}

function searchWorkout(){
    let input = document.getElementById('search').value
    input = input.toLowerCase();
    let x = document.getElementsByClassName('words')

 
    for (i =0; i < x.length; i++){
      
        
        if (!x[i].innerHTML.toLowerCase().includes(input) || input === ''){

            x[i].style.display = 'none';
            

        }
        else{
            x[i].style.display = "list-item"
            outputElement.hidden = false;
        }
    }
}


