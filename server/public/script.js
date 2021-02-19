function createUrl() {
	const aux =document.getElementById('url').value;
	console.log(aux);
	let test='http://127.0.0.1:3050/api/generateurl';
	fetch(
      test,
		{
			method:'POST',
			headers:{
				'Content-Type': 'application/json',
				'Access-Control-Allow-Origin': '*'
			},
			body:JSON.stringify({
				url:aux
			})
		}
	).then(
		(res) => res.json()
	).then(
		(response) => {
            console.log(
				'el servidor devuelve el siguiente mensaje 1: '+
				JSON.stringify(response.msj)
			);
            console.log(
				'el servidor devuelve el siguiente mensaje 2: '+
				JSON.stringify(response.status)
			);
			if (response.data) {
				console.log(
					'el servidor devuelve el siguiente mensaje 3: '+
					JSON.stringify(response.data)
				);
				let valor = `
				<h2>Este es la URL generado</h2>
				<a href="${response.data}">${response.data}</a>
				`;
				document.getElementById("resultado").innerHTML = valor;
			}  else {
				let valor ='';
				document.getElementById("resultado").innerHTML = valor;
			};
		}
	).catch(
		(error) => { 
			console.log('Error:'+error);
			console.log('error en mostrar detalles');
		}
	);
};