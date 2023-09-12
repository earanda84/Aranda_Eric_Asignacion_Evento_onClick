function clickButtons(parameter) {
    
    if(parameter.className === 'add'){
        return parameter.className = 'hidden'
    }
    else if(parameter.className === 'like'){
        return alert('Ninja was clicked')
    }
};
