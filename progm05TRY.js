// Try catch method
exp = '10*2+5'

try{
    result = eval(exp)
    console.log(result);
}

catch{ /* If an error comes in 'try' this gets executed */
    console.log(`check with the expressions exp`);
}

finally{ /* Always gets executed even error or not */
    console.log(`Task is completed`);
}