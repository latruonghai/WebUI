element = document.querySelectorAll(['button']);

element.forEach((a) => {
	a.addEventListener('mousemove', () => {
	  a.style['background-color'] = '#9baeaf';
	});
	a.addEventListener('mouseleave', ()=>{
	  a.style['background-color'] = '#ffffff';
	});
	a.addEventListener('click', ()=>{
	  a.style['background-color'] = '#777777';
	  a.style['font-style'] = 'italic';
	  setTimeout(() =>{
	    a.style['background-color'] = '#ffffff';
	    a.style['font-style'] = 'normal';
	  }, 200);
	});
})

