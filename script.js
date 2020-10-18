document.querySelector(".browse-picture").addEventListener('click', () =>{
	b = document.querySelector('.picture-name');
	a = document.querySelector('.inline-picture', "#picture-1");
	a.src = b.value;
	b.value = "";
});