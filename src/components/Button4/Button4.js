import { useState } from "react";


const MyButton4 = () => {
	const [number, setNumber] = useState(0);
	const [arr, setArr] = useState([]);
	let isPrime = num => {
		if (num == 1 || num == 0) return false;


		for (let i = 2; i <= Math.sqrt(num); i++) {
			if (num % i == 0) return false;
		}
		return true;
	};
	for (let i = 0; i < number; i++) {
		if (isPrime(i)) { arr.push(i) }

	}
	const setOfNumbers = new Set(arr);
	const arr2 = [...setOfNumbers];
	;
	return (
		<div>
			<header className="header">

				Exercise 4
			</header>
			<p class="enunciate">
				When the user type some information in the input, it should change the list of prime numbers.
			</p>
			<div>
				<h1>Application</h1>
				<div>
					<h1>Big Input</h1>
					<p>limit=  <input type="text" pattern="[0-9]*"
						onInput={event => setNumber(event.target.value)} /></p>
				</div>
				<div>
					<h1>DisplayPrimeNumbers</h1>
					<p><b>Prime numbers until limit =</b></p>

					{console.log(arr2)}
					<div class="box">
						{arr2.map(name => {
							return <p> {name} </p>
						})}

					</div>
				</div>
			</div>
		</div>
	)
}


export default MyButton4;