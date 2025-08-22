
 
 
 
 
 
class ComponentJarsGallery { 
 
 
 
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
 
 
 
		let html = ''; 

 		//console.log( objData );

 		if ( objData ) {

 			let arr = objData.arr ?  objData.arr : [];



 			if ( arr.length ) {

				if ( objData.volume == '_025' ) {
					let htmlVol025 = '';

 					arr.forEach( ( k_jars, i ) => {

 						let title = `${ k_jars.title } \n${ k_jars.barcode }`;

						htmlVol025 += `<div class="jars-025" title="${ title }">
							<div class="n">${ i + 1 }</div>
							<img src="img/jars/${ k_jars.id }.jpg" alt="${ title }">
						</div>`;
 					});

 					if ( htmlVol025 ) {
 						html += `
 							<div class="txt-volume-ml">--- volume 0.25 ml</div>
 							<div>${ htmlVol025 }</div>
						`;
 					}
				}




				if ( objData.volume == '_033' ) {
					let htmlVol033 = '';

 					arr.forEach( ( k_jars, i ) => {
 						let title = `${ k_jars.title } \n${ k_jars.barcode }`;

						htmlVol033 += `<div class="jars-033" title="${ title }">
							<div class="n">${ i + 1 }</div>
							<img src="img/jars/${ k_jars.id }.jpg" alt="${ title }">
						</div>`;
 					});

 					if ( htmlVol033 ) {
 						html += `
 							<div class="txt-volume-ml">--- volume 0.33 ml</div>
 							<div>${ htmlVol033 }</div>
						`;
 					}
				}




				if ( objData.volume == '_05' ) {
					let htmlVol05 = '';

 					arr.forEach( ( k_jars, i ) => {
 						let title = `${ k_jars.title } \n${ k_jars.barcode }`;
 						
						htmlVol05 += `<div class="jars-05" title="${ title }">
							<div class="n">${ i + 1 }</div>
							<img src="img/jars/${ k_jars.id }.jpg" alt="${ title }">
						</div>`;
 					});

 					if ( htmlVol05 ) {
 						html += `
 							<div class="txt-volume-ml">--- volume 0.5 ml</div>
 							<div>${ htmlVol05 }</div>
						`;
 					}
				}


 			}
 		}
 

 
 
		return { tagParam, html };  
	} 
 
 
 
 
 
	static clc( data ) { 
		const fooName = this.name + '.clc()'; 
 
		//console.log( 'fooName: ', fooName ); 
		//console.log( 'data: ', data ); 
 
	} 
 
 
 
 
 
} 
 
 
 	
 
 
 
 
 	
 
 
