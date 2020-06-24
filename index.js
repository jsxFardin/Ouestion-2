let arr = [1, 2, 2, 3, 4, 4, 5],
    output = [];

arr.map((item, index) =>{
    if(!output.includes(item)) output = [...output, item];
})

console.log(output);
