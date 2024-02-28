const inputButtons = document.querySelectorAll('.input-button');
const taskInputs = document.querySelectorAll('.input');

const tasks = {
    '1' : [task_1, 'array'],
    '2' : [task_2, 'number'],
    '3' : [task_3, 'number'],
    '4' : [task_4, 'number'],
    '5' : [task_5, 'number'],
    '6' : [task_6, 'number'],
    '7' : [task_7, 'number'],
    '8' : [task_8, 'array'],
    '9' : [task_9, 'array'],
}

const ERROR_MESSAGES = {
    'type' : 'ERROR: Invalid value(values) for task.',
    'limit': 'ERROR: Value(values) exceeds limit.',
    'count': 'ERROR: Too many(less) values.',
    'range': 'ERROR: Value(values) exceeds range.',
    'float': 'ERROR: Value(values) cannot be point number.',
}

inputButtons.forEach(button => {
    button.addEventListener('click', () => {
        const input = button.parentElement.querySelector('.input');
        handleInput(input.id);
    })
});

taskInputs.forEach(input => {
    input.addEventListener('keydown', (event) => {
        if (event.key === 'Enter') {
            input.blur();
            handleInput(input.id);
        }
    });
})

function handleInput(inputId){
    if(document.getElementById(`${inputId}`)){
        const input = document.getElementById(`${inputId}`);
        const arr = tasks[inputId];
        arr[0](input.value, arr[1], inputId);
    }else{
        console.error(`No such element with id: ${inputId}`);
    }
}

function handleTextarea(inputId, message, error=false){
    const input = document.getElementById(`${inputId}`);
    const textarea = input.parentElement.parentElement.querySelector('textarea');
    if(error && !textarea.classList.contains('error')){
        textarea.classList.add('error');
    };

    if(!error && textarea.classList.contains('error')){
        textarea.classList.remove('error');
    }

    textarea.value = message;
}

// INPUT VALIDATION
function validateInput(value, type){
    if(value === null || !value){
        return false;
    }

    if(typeof value != 'string'){
        return false;
    }

    if(!value.trim()){
        return false;
    }

    if (value.indexOf('\n') !== -1) {
        return false;
    }

    if(type === 'array'){
        arrayValue = value.split(' ');
        if (arrayValue.length <= 1) {
            return false;
        }

    }else if(type === 'number'){
        if(isNaN(+value)){
            return false;
        }

    }else{
        console.error('Invalid type for validateInput');
        return false;
    }

    return true;
}

// TASKS
function handleError(inputId, errorType){
    message = ERROR_MESSAGES[errorType];
    handleTextarea(inputId, message, true);
}

function task_1(value, type, inputId){
    if(validateInput(value, type)){
        const arr = value.split(' ');
        if(arr.length != 2){
            errorType = 'count'
            handleError(inputId, errorType);
            return;
        }
        const number1 = +arr[0];
        const number2 = +arr[1];
        if(isNaN(number1) || isNaN(number2)){
            errorType = 'type';
            handleError(inputId, errorType);
            return;
        }

        if((number1 > 10**9 || number1 < (10**9) * -1) || (number2 > 10**9 || number2 < (10**9) * -1)){
            errorType = 'limit';
            handleError(inputId, errorType)
            return;
        }

        const message = number1**2 + number2**2;
        handleTextarea(inputId, message, false);
    }else{
        errorType = 'type';
        handleError(inputId, errorType);
    }
}

function task_2(value, type, inputId){
    if(validateInput(value, type)){
        if(isNaN(+value)){
            errorType = 'type';
            handleError(inputId, errorType);
            return;
        }

        if(+value > parseInt(value)){
            errorType = 'float';
            handleError(inputId, errorType);
            return;
        }

        if((+value < 100 || +value > 999) && (+value > -100 || +value < -999)){
            errorType = 'range';
            handleError(inputId, errorType);
            return;
        }

        let result = 1;
        for(let i = 0; i < value.length; i++){
            result *= isNaN(value[i]) ? 1 : +value[i];
        }

        handleTextarea(inputId, result, false);

    }else{
        errorType = 'type';
        handleError(inputId, errorType);
    }
}

function task_3(value, type, inputId){
    if(validateInput(value, type)){
        if(isNaN(+value)){
            errorType = 'type';
            handleError(inputId, errorType);
            return;
        }

        if(+value > parseInt(value)){
            errorType = 'float';
            handleError(inputId, errorType);
            return;
        }

        if((+value < 100 || +value > 999) && (+value > -100 || +value < -999)){
            errorType = 'range';
            handleError(inputId, errorType);
            return;
        }

        value = `${Math.abs(+value)}`;
        const number1 = +value[0];
        const number2 = +value[2];
        let message;
        if(number1 == number2){
            message = '=';
        }else{
            message = number1 > number2 ? number1 : number2;
        }

        handleTextarea(inputId, message, false);

    }else{
        errorType = 'type';
        handleError(inputId, errorType);
    }
}

function task_4(value, type, inputId){
    if(validateInput(value, type)){
        if(isNaN(+value)){
            errorType = 'type';
            handleError(inputId, errorType);
            return;
        }

        if(+value > parseInt(value)){
            errorType = 'float';
            handleError(inputId, errorType);
            return;
        }

        if(+value < 1 || +value > 12){
            errorType = 'range';
            handleError(inputId, errorType);
            return;
        }

        value = +value;
        if(value >= 1 && value <= 3){
            message = 'Initial';
        }else if(value >= 4 && value <= 6){
            message = 'Average';
        }else if(value >= 7 && value <= 9){
            message = 'Sufficient';
        }else{
            message = 'High';
        }

        handleTextarea(inputId, message, false);

    }else{
        errorType = 'type';
        handleError(inputId, errorType);
    }
}

function task_5(value, type, inputId){
    if(validateInput(value, type)){
        if(isNaN(+value)){
            errorType = 'type';
            handleError(inputId, errorType);
            return;
        }

        if(+value > parseInt(value)){
            errorType = 'float';
            handleError(inputId, errorType);
            return;
        }

        if((+value < 100 || +value > 999) && (+value > -100 || +value < -999)){
            errorType = 'range';
            handleError(inputId, errorType);
            return;
        }

        value = `${Math.abs(+value)}`;
        const message = `${value[0]}\n${value[1]}\n${value[2]}`;

        handleTextarea(inputId, message, false);

    }else{
        errorType = 'type';
        handleError(inputId, errorType);
    }
}

function task_6(value, type, inputId){
    if(validateInput(value, type)){
        if(isNaN(+value)){
            errorType = 'type';
            handleError(inputId, errorType);
            return;
        }

        if(+value > parseInt(value)){
            errorType = 'float';
            handleError(inputId, errorType);
            return;
        }

        if((+value < 10 || +value > 99) && (+value > -10 || +value < -99)){
            errorType = 'range';
            handleError(inputId, errorType);
            return;
        }

        value = `${Math.abs(+value)}`;
        const message = (+value[0] + +value[1]) ** 2;
        handleTextarea(inputId, message, false);

    }else{
        errorType = 'type';
        handleError(inputId, errorType);
    }
}

function task_7(value, type, inputId){
    if(validateInput(value, type)){
        if(isNaN(+value)){
            errorType = 'type';
            handleError(inputId, errorType);
            return;
        }

        if(+value > parseInt(value)){
            errorType = 'float';
            handleError(inputId, errorType);
            return;
        }

        if((+value < 0 || +value > 20)){
            errorType = 'range';
            handleError(inputId, errorType);
            return;
        }

        value = +value;
        let result = 1;
        for(value; value > 0; value--){
            result *= value;
        }

        handleTextarea(inputId, result, false);

    }else{
        errorType = 'type';
        handleError(inputId, errorType);
    }
}

function task_8(value, type, inputId){
    if(validateInput(value, type)){
        const array = value.split(' ');
        if(array.length !== 4){
            errorType = 'count';
            handleError(inputId, errorType);
            return;
        }

        for(let i = 0; i < array.length; i++){
            if(isNaN(+array[i])){
                errorType = 'type';
                handleError(inputId, errorType);
                return;
            } else if (+array[i] <= 0) {
                errorType = 'range';
                handleError(inputId, errorType);
                return;
            }
        }

        const uniqueSet = new Set(array);
        const message = uniqueSet.size === 2 ? 'YES' : 'NO';
        handleTextarea(inputId, message, false);

    }else{
        errorType = 'type';
        handleError(inputId, errorType);
    }
}

function task_9(value, type, inputId){
    if(validateInput(value, type)){
        const array = value.split(' ');
        if(array.length !== 3){
            errorType = 'count';
            handleError(inputId, errorType);
            return;
        }

        for(let i = 0; i < array.length; i++){
            if(isNaN(+array[i])){
                errorType = 'type';
                handleError(inputId, errorType);
                return;
            }
        }

        const a = +array[0];
        const b = +array[1];
        const c = +array[2];
        const temp = b**2 - (4 * a * c);
        if(temp < 0){
            message = 'No roots'
            handleTextarea(inputId, message, false);
        }else if(temp == 0){
            const result = -1 * b / (2 * a);
            message = `One root: ${result}`;
            handleTextarea(inputId, message, false);
        }else{
            const result1 = (-1 * b - temp) / (2 * a);
            const result2 = (-1 * b + temp) / (2 * a); 
            message = `Two roots: ${result1} ${result2}`;
            handleTextarea(inputId, message, false);
        }

    }else{
        errorType = 'type';
        handleError(inputId, errorType);
    }
}