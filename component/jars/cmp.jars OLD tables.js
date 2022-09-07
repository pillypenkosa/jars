//console.log( '' );








class ComponentJars {




	static cmpTitle = 'cmpJars';



	static cpBtnJars = [

		{ id: '025' 	, title: '0.25' 		, },
		{ id: '033' 	, title: '0.33' 		, },
		{ id: '05' 		, title: '0.5' 			, },
		{ id: 'free' 	, title: 'Б/А' 			, },
		{ id: 'alco' 	, title: 'Алкоголь' 	, },
		{ id: 'beer' 	, title: 'Пиво' 		, },
		{ id: 'beer0' 	, title: 'Пиво б/а' 	, },
		{ id: 'drink' 	, title: 'Напої' 		, },
		{ id: 'energy' 	, title: 'Енергетики' 	, },
		{ id: 'kvass' 	, title: 'Квас' 		, },

	];







	static html() {

		//var cpHtml = '';
		//console.log( id );


		let htmlCpJars = '';
		this.cpBtnJars.forEach( k => {

			htmlCpJars += `<div class="btn" data-id="${ k.id }" onclick="ComponentJars.clc( this )">${ k.title }</div>`;
		});







		let table = ``;

		return `<div class="${ this.cmpTitle }">
			<div class="${ this.cmpTitle }-cp">${ htmlCpJars }</div>

			<table class="${ this.cmpTitle }-tableJars">
				<thead>
					<tr>
						<td>№</td>
						<td>мл</td>
						<td>Alco</td>
						<td>Вид</td>
						<td>Назва</td>
						<td>Смак</td>
						<td>Штрих-код</td>
						<td>Примітка</td>
					</tr>
				<thead>
				<tbody id="${ this.cmpTitle }_tbody_jars"><tbody>
			</table>
		</div>`;
	}





	static clc( elem ) {

		//alert( elem.dataset.id );

		//console.log( 'ComponentUserContacts.clcSex( ' + id  + ' )' );

		btnLight( `.${ this.cmpTitle }-cp`, elem.dataset.id ); 	// подсветка кнопок

		//this.filterKeys.sex = id ;

		//this.filterUser();


		let tBodyJars = document.getElementById( this.cmpTitle + '_tbody_jars' );
		let tBody = '';

		//console.log( tBodyJars );

		tBodyJars.innerHTML = tBody;

		let arrFiltered = arrJars.filter( k => true );


		//console.log( arrFiltered );


		if ( elem.dataset.id == '025' ) 
		{
			arrFiltered = arrFiltered.filter( k => {
				if ( k.volume == '.25' ) 
					return true;
			});
		}

		if ( elem.dataset.id == '033' ) 
		{
			arrFiltered = arrFiltered.filter( k => {
				if ( k.volume == '.33' ) 
					return true;
			});
		}

		if ( elem.dataset.id == '05' ) 
		{
			arrFiltered = arrFiltered.filter( k => {
				if ( k.volume == '.5' ) 
					return true;
			});
		}

		if ( elem.dataset.id == 'alco' ) 
		{
			arrFiltered = arrFiltered.filter( k => 
			{
				if ( k.alco ) 
					return true;
			});
		}

		if ( elem.dataset.id == 'free' ) 
		{
			arrFiltered = arrFiltered.filter( k => 
			{
				if ( !k.alco ) 
					return true;
			});
		}

		if ( elem.dataset.id == 'beer' ) 
		{
			arrFiltered = arrFiltered.filter( k => 
			{
				if ( k.type ) 
				{
					if ( k.type.beer ) 
						return true;
				}
			});
		}

		if ( elem.dataset.id == 'beer0' ) 
		{
			arrFiltered = arrFiltered.filter( k => 
			{
				if ( k.type ) {
					if ( k.type.beer0 ) 
						return true;
				}
			});
		}

		if ( elem.dataset.id == 'drink' ) 
		{
			arrFiltered = arrFiltered.filter( k => 
			{
				if ( k.type ) 
				{
					if ( k.type.drink )
						return true;
				}
			});
		}

		if ( elem.dataset.id == 'energy' ) 
		{
			arrFiltered = arrFiltered.filter( k => 
			{
				if ( k.type ) 
				{
					if ( k.type.energy )
						return true;
				}
			});
		}


		if ( elem.dataset.id == 'kvass' ) 
		{
			arrFiltered = arrFiltered.filter( k => 
			{
				if ( k.type ) 
				{
					if ( k.type.kvass )
						return true;
				}
			});
		}

		if ( elem.dataset.id == 'juice' ) 
		{
			arrFiltered = arrFiltered.filter( k => 
			{
				if ( k.type ) 
				{
					if ( k.type.juice )
						return true;
				}
			});
		}


		if ( elem.dataset.id == 'tea' ) 
		{
			arrFiltered = arrFiltered.filter( k => 
			{
				if ( k.type ) 
				{
					if ( k.type.tea )
						return true;
				}
			});
		}








		//console.log( arrFiltered );


		arrFiltered.forEach( ( k, i ) => {

			//let type = this.txtAlco( k.type );


			let type = '';

			if ( k.type.beer ) 
				type = 'Пиво';

			if ( k.type.beer0 ) 
				type = 'Пиво б/а';

			if ( k.type.drink ) 
				type = 'Напій';

			if ( k.type.energy ) 
				type = 'Енергетик';

			if ( k.type.kvass ) 
				type = 'Квас';

			if ( k.type.tea ) 
				type = 'Чай';

			if ( k.type.juice ) 
				type = 'Сік';

			if ( k.type.water ) 
				type = 'Вода';

			if ( k.type.tonic ) 
				type = 'Тонік';









			tBody += `<tr>
				<td>${ i + 1 }</td>
				<td>${ k.volume }</td>
				<td>${ k.alco ? '<span class="' + this.cmpTitle + '-txtAlco">' + k.alco + ' %</span>' : '<span class="' + this.cmpTitle + '-txtFree">б/а</span>' }</td>
				<td>${ type }</td>
				<td>${ k.title }</td>
				<td>${ k.taste }</td>
				<td>${ k.barcode }</td>
				<td class="${ this.cmpTitle }-note">${ k.note }</td>
			<tr>`;
		});





		tBodyJars.innerHTML = tBody;
	}


/*
	static txtAlco( obj ) {

		let alco = '';
		let drink = '';

		if ( obj.free ) {
			alco = `<span class="${ this.cmpTitle }-txtFree">б/а</span>`;

			if ( obj.free.drink ) 
				drink = 'Напій';

			if ( obj.free.energy ) 
				drink = 'Енергетик';
		}

		if ( obj.alco ) {

			alco = `<span class="${ this.cmpTitle }-txtAlco">${ obj.alco.ppm } %</span>`;

			if ( obj.type.beer ) 
				drink = 'Пиво';
		}



		return { drink, alco };
	}
*/


















}























