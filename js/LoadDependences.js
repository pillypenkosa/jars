



class LoadDependences {






	static load() {

		const name = this.name + '.html()';



		dependences.forEach( k => {


			// массиви-списки сторонніх сайтів
			if ( k.db ) {
				if ( k.site ) {
					
					let script = document.createElement( 'script' );
					script.src = `https://pillypenkosa.github.io/${ k.site }/list/list.${ k.db }.js`;
					script.setAttribute( 'defer', '' );
					//divList.append( script ); 	// divList = <div id="divList">
					document.head.append( script );
				}
			}


			// массиви-списки свого особистого застосування
			if ( k.arr ) {
				let script = document.createElement( 'script' );
				script.src = `list/list.${ k.arr }.js`;
				script.setAttribute( 'defer', '' );
				//divList.append( script ); 	// divList = <div id="divList">
				document.head.append( script );
			}

/*
			// сервіси 
			if ( k.service ) {
				let script = document.createElement( 'script' );
				script.src = `service/service.${ k.service }.js`;
				script.setAttribute( 'defer', '' );
				//divList.append( script ); 	// divList = <div id="divList">
				document.head.append( script );
			}
*/


			// компоненти
			if ( k.cmp ) {

				let fileName = k.cmp.toLowerCase();

				// підключення css-файла компонента
				let css = document.createElement( 'link' );
				css.href = `component/${ fileName }/cmp.${ fileName }.css`;
				css.rel = 'stylesheet'; 
				css.type = 'text/css'; 
				document.head.append( css );

				// підключення файла самого компонента
				let script = document.createElement( 'script' );
				script.src = `component/${ fileName }/cmp.${ fileName }.js`;
				script.setAttribute( 'defer', '' );
				document.head.append( script );
			}
	
		});
	}




}




