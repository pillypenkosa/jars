// © 2024 DJS





class ComponentWinIndex {



	static args = {};


	// обрані фільми ( або добірки )
	static arrSelected = [];





	static html( objData = {} ) {
		const fooName = this.name + '.html()';
		//console.log( 'fooName: ', fooName );


		
		this.args = objData.args ? objData.args : {}; 


		let tagParam = {
			//'class' 		: 'active',
			//'name' 		: 'Any',
			//'title' 		: 'Всплывающая подсказка',
			//'data-id' 	: 'any-data',
			//'onclick' 	: `${ this.name }.clc( ${ this.name }.args )`,
			//'selected' 	: '',
			//'defer' 		: '',
		};



		//let html = '<div class="info">Бажаю здоров\'я! ))</div>';
		//let html = `<div>${ fooName }</div>`;
		let html = fooName;
	

			//<div id="showSelectedFilms">Оберіть категорію...</div>
		html = `

			<div id="showSelected"></div>

			<div id="logo">
				<img src="img/pic/logoDJS.png" alt="logo" />
			</div>



		`;





		setMeta({
			title 			: 'Jars DJS',
			description 	: 'Jars DJS, jars collection...',
			//keywords 		: 'Ключові слова...' + name,
			image 			: 'img/pic/logoDJS.png',
			//url 			: 'url/any/there/' + name,
			//type 			: 'Тіпі-тіп ' + name,
			//site_name 	: 'Назва сайту, мабуть стале значення... ' + name,
		});



		return { tagParam, html };
	}






	static clc( data ) {
		const fooName = this.name + '.clc()';


		//console.log( 'fooName', fooName );
		//console.log( 'data', data );

	}





	// відбір об'єктів за вказаною категорією
	static getSelected( data ) {
		const fooName = this.name + '.getSelected()';


		console.log( 'fooName: ', fooName );
		console.log( 'data: ', data );






		this.arrSelected = arrListJars;









		if ( data.value ) {
			if ( data.value != 'all' ) {

				this.arrSelected = this.arrSelected.filter( k => {

					if ( k.hash ) {
						if ( k.hash[ data.value ] ) 
							return true;
					}
				});
			}
		}



		if ( data.type ) {
			if ( data.type != 'all' ) {

				this.arrSelected = this.arrSelected.filter( k => {

					if ( k.hash ) {
						if ( k.hash[ data.type ] ) 
							return true;
					}
				});
			}
		}



		if ( data.name ) {
			if ( data.name != 'all' ) {

				this.arrSelected = this.arrSelected.filter( k => {

					if ( k.hash ) {
						if ( k.hash[ data.name ] ) 
							return true;
					}
				});
			}
		}








		



		//console.log( 'this.arrSelected: ', this.arrSelected );




		//return;


		this.showSelected();
	}




	// добірка
	static getSelection( data ) {
		const fooName = this.name + '.getSelection()';

		//console.log( 'fooName: ', fooName );
		console.log( 'data: ', data );





		this.arrSelected = [];






		this.showSelected();
	}


















	// відображення обраних фільмів
	static showSelected() {
		const fooName = this.name + '.showSelected()';

		console.log( 'fooName: ', fooName );









		console.log( 'arrSelected: ', this.arrSelected );


		let html = '';


		this.arrSelected.forEach( k => {

			//${ k.title ? k.title : '***' }
			
			html += `<div class="each">
				<div class="img" title="">
					<img src="img/jars/${ k.id }.jpg" alt="${ k.title }" >
				</div>
			</div>`;

		});





/*


		let ok5 = '&#10003;'; 
		let star5p = '&#10031;'; 


		this.arrSelectedJars.forEach( ( k, i ) => {

			let htmlTitle = '';
			let titleUa = '';
			let titleEn = '';

			//let htmlCast = '';
			let html5 = ''; 	// на 5
			let html5p = ''; 	// улюблені

			if ( k.rating ) {

				if ( k.rating == 5 || k.rating == '5+' ) {

					html5 += `<span class="ok5"> ${ ok5 }</span>`;

					if ( k.rating == '5+' ) 
						html5p += `<span class="star5">${ star5p }</span> `;
					
				}
			}


			if ( k.title ) {

				if ( k.title.ua ) 
					titleUa += k.title.ua;
				
				if ( k.title.en ) 
					titleEn += k.title.en;

				if ( titleUa )
					htmlTitle += `<div class="titleUa"><span class="n-each">${ i + 1 }.</span> ${ html5p }${ titleUa }${ html5 }</div>`;

				if ( titleEn )
					htmlTitle += `<div class="titleEn">${ titleEn }</div>`;
			}



			let htmlCountry = '';
			if ( k.country ) {
				for ( let k1 in k.country ) {
					if ( objCountry[ k1 ] ) {
						if ( objCountry[ k1 ].title ) {
							if ( objCountry[ k1 ].title.ua ) 
								htmlCountry += objCountry[ k1 ].title.ua + ', ';
						}	
					}
				}

				htmlCountry = htmlCountry.slice( 0, -2 );
			}



			let htmlGenre = '';
			if ( k.genre ) {
				for ( let k1 in k.genre ) {
					if ( objGenres[ k1 ] ) {
						if ( objGenres[ k1 ].title ) {
							htmlGenre += objGenres[ k1 ].title + ', ';
						}	
					}
				}

				htmlGenre = htmlGenre.slice( 0, -2 );
			}




			let htmlHash = '';
			if ( k.hash ) {
				for ( let k1 in k.hash ) {
					if ( objHashTags[ k1 ] ) {
						if ( objHashTags[ k1 ].title ) {
							htmlHash += `#${ objHashTags[ k1 ].title }, `;
						}	
					}
				}

				//htmlHash = htmlHash.slice( 0, -2 );
				htmlHash = `<div class="hash"><span class="key">хештеги: </span>${ htmlHash.slice( 0, -2 ) }</div>`;
			}





			let htmlImdb = '';
			let htmlWikiUa = '';
			let htmlWikiRu = '';
			let htmlAuliki7 = '';
			let htmlHdVip = '';

			if ( k.internet ) {

				if ( k.internet.ashdivip ) {
					htmlHdVip = `<a href="https://ashdi.vip/vod/${ k.internet.ashdivip }" target="_blank">
						<img src="img/pic/logo_hdvip.png" alt="HDVip">
					</a>`;
				}

				if ( k.internet.auliki7 ) {
					htmlAuliki7 = `<a href="http://auliki7.xyz/stream.php?name=films/${ k.internet.auliki7 }.mp4" target="_blank">
						<img src="img/pic/logo_auliki7.png" alt="Auliki7">
					</a>`;
				}

				if ( k.internet.imdb ) {
					htmlImdb = `<a href="https://www.imdb.com/title/tt${ k.internet.imdb }/" target="_blank">
						<img src="img/pic/logo_IMDb.png" alt="IMDB">
					</a>`;

				}

				if ( k.internet.wiki_ua ) {
					htmlWikiUa = `<a href="https://uk.wikipedia.org/wiki/${ k.internet.wiki_ua }" target="_blank">
						<img src="img/pic/sn_wiki_ua.png" alt="WikiUA">
					</a>`;

				}

				if ( k.internet.wiki_ru ) {
					htmlWikiRu = `<a href="https://ru.wikipedia.org/wiki/${ k.internet.wiki_ru }" target="_blank">
						<img src="img/pic/sn_wiki_ru.png" alt="WikiRU">
					</a>`;

				}
			}




			//console.log( 'k.cast: ', k.cast );

			let htmlCast = '';
			if ( k.cast ) 
				//htmlCast = `<div>Є актори</div>`;
				htmlCast = Component( 'Cast', k.cast );
			









							//<div class="hash"><span class="key">хештеги:</span> ${ htmlHash }</div>
			html += `<div class="each">

				<div class="title">${ htmlTitle }</div>
				<div class="info">
					<div class="img">
						<img src="img/poster/${ k.id }.jpg" alt="${ k.title.ua }">
					</div>

					<div class="descr">
						<div class="txt">
							<div class="year"><span class="key">рік:</span> ${ k.year ? k.year : '' }</div>
							<div class="country"><span class="key">країна:</span> ${ htmlCountry }</div>
							<div class="genre"><span class="key">жанр:</span> ${ htmlGenre }</div>
							${ htmlHash }
						</div>

						<div class="internet">
							${ htmlImdb }
							${ htmlWikiUa }
							${ htmlWikiRu }
							${ htmlAuliki7 }
							${ htmlHdVip }
						</div>
					</div>
				</div>

			${ htmlCast }

			</div>`;
		});

*/

		document.getElementById( 'showSelected' ).innerHTML = html;
	}




















}























