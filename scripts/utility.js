 function getInputFiledValue(id){
    const idValue = document.getElementById(id);
    const idValueString = idValue.value;
    const inputValue = parseFloat(idValueString);
    idValue.value = '';
    return inputValue;
 }
 function setInnerText (id,newValue){
    const getValue = document.getElementById(id);
    getValue.innerText = newValue;
    
 }