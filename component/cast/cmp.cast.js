// © 2023 DJS 
 
 
 
 
 
class ComponentCast { 
 
 
 
	static args = {}; 
 
 
 
	static html( objData = {} ) { 
		const fooName = this.name + '.html()'; 
 
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
 
 
 
		//let html = fooName; 
		let html = ''; 

		//console.log( 'objData: ', objData );
		console.log( 'objListPeople: ', objListPeople );

		//let htmlCast = '';

		if ( objData ) {
			if ( objListPeople ) {

				for( let k in objData ) {

					if ( objListPeople[ k ] ) {

						let userN;
						let userS;
						let userP;

						if ( objListPeople[ k ].name ) {

							userN = objListPeople[ k ].name.n ? objListPeople[ k ].name.n + ' ' : '';
							userP = objListPeople[ k ].name.p ? objListPeople[ k ].name.p + ' ' : '';
							userS = objListPeople[ k ].name.s ? objListPeople[ k ].name.s : '';


							//html += `<div>${ userN } ${ userP } ${ userS }</div>`;
						}

						if ( objListPeople[ k ].img ) {

							html += `<div class="img"><img src="https://pillypenkosa.github.io/media/img/people/${ k }/${ objListPeople[ k ].img[ 1 ] }.jpg" alt="${ k }" title="${ userN }${ userP }${ userS }"></div>`;

						}


					}
				}
			}
		}
 
 

 
 
		return { tagParam, html };  
	} 
 
 
 
 
 
	static clc( data ) { 
		const fooName = this.name + '.clc()'; 
 
		//console.log( 'fooName: ', fooName ); 
		//console.log( 'data', data ); 
 
	} 
 
 
 
 
 
} 
 
 
 	
 
 
 
 
 	
 
 
