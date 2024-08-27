function obitreMenor(a,b,c){
	let menor;
	if (a<b) {
		menor=a;
	}
	else {
		menor=b;

	}
	if (c <menor) {
     menor=c
	}
	return menor;
}
  console.log(obitreMenor(10,7,5))
    console.log(obitreMenor(3, 7, 5))
      console.log(obitreMenor(-1,-5,-3))
        console.log(obitreMenor( 8, 2, 10))