window.promises = [];

for(let i = 1;i<=5;i++){
	new Promise((res,rej)=>{
		setTimeout(()=>{
			res(i);
		},i*1000);
	})
}

document.getElementById("output").innerText = Promise.any(promises);

// Do not change the code above this
// add your promises to the array `promises`
