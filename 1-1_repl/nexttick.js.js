process.nextTick(function () {
	console.log('next tick');
});

console.log('immediate'); 
// will outpup
// immediate
// next tick