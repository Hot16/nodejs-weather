const getArgs = (args) => {
    const res = {
        'city': null,
        'help': false,
        'token': null
    };
    const [executer, file, ...rest] = args;

    if (rest.length == 0){
        return res;
    }
    rest.forEach((value, index, array) => {
        if (value.indexOf('-c') != -1){
            res.city = array[index+1];
        }
        if (value.indexOf('-h') != -1){
            res.help = true;
        }
        if (value.indexOf('-t') != -1){
            res.token = array[index+1];
        }
    })
    return res;
}

export { getArgs }