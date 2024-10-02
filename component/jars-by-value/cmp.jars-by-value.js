// © 2024 DJS 
 
 
 
 
 
class ComponentJarsByValue { 
 
 
 
	static args = {}; 
 
 
 
	static html( arrData = [] ) { 
		const fooName = this.name + '.html()'; 
 
		//this.args = objData.args ? objData.args : {}; 
 
		//console.log( 'arrData: ', arrData ); 
 
 
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
  		arrData.forEach( ( k, i ) => {

			html += `<div class="each">
				<div class="img" title="--- Jar ${ i+1 } ---\n${ k.title } \n${ k.barcode }">
					<img src="img/jars/${ k.id }.jpg" alt="${ k.title } // ${ k.barcode }" >
				</div>
			</div>`;


 		});

 

 
		return { tagParam, html };  
	} 
 
 
 
 
 
	static clc( data ) { 
		const fooName = this.name + '.clc()'; 
 
		//console.log( 'fooName: ', fooName ); 
		//console.log( 'data', data ); 
 
	} 
 
 
 
 
 
} 
 
 
 	
 
 
 
 
 	
 
 
