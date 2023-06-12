const appProjectName = 'Jars';





// подсветка кнопок
function btnLight( container, id ) { 	// container - блок, где расположены кнопки 		// data-id - идентификатор конкретной кнопки

	// !!! в каждой кнопке должен быть класс `btn` и атрибут data-id <div class="btn" data-id=" ...anyTxt... "></div>
	//console.log( container, id );


	let arr = document.querySelectorAll( container + ' cmp-btn' );

	arr.forEach( k => {
		if ( k.dataset.id == id ) 
			k.classList.add( 'active' );
		else 
			k.classList.remove( 'active' );
	});
}






function big1Letter( txt ) {

	return txt[ 0 ].toUpperCase() + txt.slice( 1 );
}




// вся строка в нижний регистр
// toLowerCase()






// завантаження компонента
function Component( txt, data = {} ) {

	const name 	= 'Component';
	const ok 	= `\x1b[32m ok ${ name }() `;
	const err 	= `\x1b[31m err ${ name }() `;

	//console.log( ok );
	//console.log( ok + ' // txt:', txt  );
	//console.log( ok + ' // txt.toLowerCase():', txt.toLowerCase() );

	let className = 'Component' + txt.replace( /-/g, '' );
	//console.log( className );

	let tagName = txt.toLowerCase();
	//console.log( tagName );


	//alert( `${ className }.html()` );


	return eval( `${ className }.html( '${ className }', '${ tagName }', data )` ); // data - впихнути десь тут
}





function getComponentHtml( data ) {

	let tag 		= 'no-name';
	let param 		= '';
	let innerHTML  	= '';

	if ( data ) 
	{
		if ( data.tag )
			tag = data.tag;
		else console.log( `ERR: Обнаружены компоненты без имени тега <cmp-${ tag }></cmp-${ tag }>` );

		if ( data.innerHTML ) 
			innerHTML = data.tag ? data.innerHTML : 'No Name Component...';

		if ( data.param ) 
		{
			data.param.forEach( k => {
				param += ` ${ k.k }="${ k.v }"`;
			});
		}
	}

	return `<cmp-${ tag }${ param }>${ innerHTML }</cmp-${ tag }>`;
}













