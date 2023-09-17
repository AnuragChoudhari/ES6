// Tradtional method to merge two arrays

const first = [1,2,3];
const second = [4,5,6];

const new_con = first.concat(second);

console.log(new_con);

// First Method
const f_arr = [1,2,3];
const s_arr = [4,5,6];

const new_arr = [...f_arr, ...s_arr];

console.log(new_arr);

// Second Method

const some_cont = [...f_arr, "a", ...s_arr, "xyz"];

console.log(some_cont);


// Cloning array

const original = [1,3,4,5];

const dup = [...original];

console.log(dup);