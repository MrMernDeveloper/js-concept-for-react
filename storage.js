const addToLocalStorage = () => {
    console.log('click')
    const idInput = document.getElementById('storage-id')
    const id = idInput.value;
    console.log(id)
    const valueInput = document.getElementById('storage-value')
    const value = valueInput.value;
    if (id && value) {
        localStorage.setItem(id, value);
        
    }
    idInput.value = ''; 
    
    valueInput.value = '';
}

