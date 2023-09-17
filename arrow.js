
// Map

const ini_val = [1,2,3,4,5];

const ini_val_dbl = ini_val.map((val)=>{
    return val * 2;
})

console.log(ini_val_dbl);


// Filter

const jobs = [
    {
        id: 1,
        val: true
    },
    {
        id: 2,
        val: true
    },
    {
        id: 3,
        val: false
    },
    {
        id: 4,
        val: false
    },
]


const filters = jobs.filter((i)=>{
    return i.val == false;
})

console.log(filters);


// Reduce

const nums = [1,2,3,4,5];

// Accumulator, currentValue;

const res = nums.reduce((acc, num)=>{
    return acc + num;
})


console.log(res);
