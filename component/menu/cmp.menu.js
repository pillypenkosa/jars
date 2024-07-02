// © 2023 DJS 
 
 
 
 
 
class ComponentMenu { 
 
 
 
	static args = {}; 
 
 


	static arrBtns = [];




	static filter = {

		value 	: 'all',
		type 	: 'all',
		name 	: 'all',

	};





 
	static html( objData = {} ) { 
		const name = this.name + '.html()'; 
 
		this.args = objData.args ? objData.args : {}; 
 
 
 
		let tagParam = { 
			//'class' 		: '', 
			//'name' 		: '', 
			//'title' 		: '', 
			//'data-id' 	: '', 
			//'onclick' 	: '', 
			//'selected' 	: '', 
			//'defer' 		: '', 
		}; 
 
 
 
		let html = ''; 

 


 		let optionValue = '<option value="all">Об\'єм (всі)</option>';
 		[ 
 			{ id: '_025' 	, title: '0.25 ml' 	, }, 
 			{ id: '_033' 	, title: '0.33 ml' 	, }, 
 			{ id: '_05' 	, title: '0.5 ml' 	, }, 

 		].forEach( k => {
 			optionValue += `<option value="${ k.id }">${ k.title }</option>`;
 		});



 		let optionType = '<option value="all">Тип (всі)</option>';
 		arrListJarsType.forEach( k => {
 			optionType += `<option value="${ k.id }">${ k.title }</option>`;
 		});



 		let optionName = '<option value="all">Назва (всі)</option>';
 		arrListJarsName.forEach( k => {
 			optionName += `<option value="${ k.id }">${ k.title }</option>`;
 		});



 		html += `
 			<div class="divSelectCat" data-id="divSelectCat">
	 			<div>
	 				<select data-id="value" onchange="${ this.name }.change( this )">${ optionValue }</select>
	 			</div>
	 			
	 			<div>
	 				<select data-id="type" onchange="${ this.name }.change( this )">${ optionType }</select>
	 			</div>

	 			<div>
	 				<select data-id="name" onchange="${ this.name }.change( this )">${ optionName }</select>
	 			</div>
 			</div>
 		`;

		return { tagParam, html };  
	} 
 
 
 
 
	// підсвічування
	static ligtSelectOption( elem ) {

		if ( elem.value == 'all' ) {

			elem.style.backgroundColor = '';
			elem.style.color = '';

		} else {

			elem.style.backgroundColor = 'red';
			elem.style.color = 'white';
		}
	}



	static change( elem ) {  
		const fooName = this.name + '.change()';

		//console.log( 'fooName: ', fooName );
		//console.log( 'id: ', elem.dataset.id );
		//console.log( 'elem: ', elem.value );

		this.filter[ elem.dataset.id ] = elem.value;



		// вимкнення підсвітки іншого блоку
		let arrSelect = document.querySelectorAll( '.divSelection select' );
		arrSelect.forEach( k => {
			k.value = 'all';
			k.style.backgroundColor = '';
			k.style.color = '';
		});




		// підсвічування
		this.ligtSelectOption( elem );

		ComponentWinIndex.getSelected( this.filter );
	} 
 
 

	static changeSelection( elem ) {  
		const fooName = this.name + '.changeSelection()';

		//console.log( 'fooName: ', fooName );
		//console.log( 'elem: ', elem );
		//console.log( 'value: ', elem.value );
		


		// вимкнення підсвітки іншого блоку
		let arrSelect = document.querySelectorAll( '.divSelectCat select' );
		arrSelect.forEach( k => {
			k.value = 'all';
			k.style.backgroundColor = '';
			k.style.color = '';
		});



		// підсвічування
		this.ligtSelectOption( elem );

		ComponentWinIndex.getSelection( elem.value );
	} 









 
	static clc( data ) {  
		const fooName = this.name + '.clc()';

		console.log( 'fooName: ', fooName );
		console.log( 'data: ', data );


		//console.log( 'data-id: ', data.dataset.id );
		//console.log( 'data-href: ', data.dataset.href );


		// чи відображти меню
		ComponentHeader.clc();


		if ( history.pushState ) {
			history.pushState( null, null, data );
			
			Router.loadContent();
		}

	} 
 
 
 
 
 
} 
 
 
 	
 
 
 
 
 	
 
 
