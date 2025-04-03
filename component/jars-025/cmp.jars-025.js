// © 2024 DJS 
 
 
 
 
 
class ComponentJars025 { 
 
 
 
	//static args = {}; 
 
 
 
	static html( arr = [] ) { 
		const fooName = this.name + '.html()'; 
 
		//this.args = objData.args ? objData.args : {}; 
 
 
 
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

		//console.log( arr );
 



 
		if ( arr ) {

			arr.forEach( k => {

				html += `<div class="img pointer" data-id="${ k.id }" onclick="ComponentSpoyler.modal( this )" title="${ k.title }">
					<img src="img/jars/${ k.id }.jpg" alt="">
				</div>`;
			});
		}




 
 
		return { tagParam, html };  
	} 
 
 
 
 
 
	static clc( data ) { 
		const fooName = this.name + '.clc()'; 
 
		//console.log( 'fooName: ', fooName ); 
		//console.log( 'data: ', data ); 
 
	} 
 
 
 
 
 
} 
 
 
 	
 
 
 
 
 	
 
 
