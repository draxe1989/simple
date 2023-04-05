// const fileInp = document.getElementById('1')

// fileInp.addEventListener('change', e => {
// 	const file = (e.target.files[0]);
// 	let reader = new FileReader();
// 	reader.readAsText(file)

// 	reader.onload = function () {
// 		const result = reader.result.split('\n')
// 		const headers = result[0].split(',')

// 		const data = result.slice(1, result.length - 1).map(item=>item.split(','))

// 		console.log(result)
// 		console.log(headers)
// 		console.log(data)

		


// 	};

// 	reader.onerror = function () {
// 		console.log(reader.error);
// 	};
// })

const arr = [['asdasd'], ['asdd']]

console.log(arr.reduce((ac,item)=>[...ac, ...item] ,[]));