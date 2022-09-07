//console.log( 'header' );









class ComponentMiddle {

	static template = `
<div>Middle</div>
`;







	static index() {

		return `
<div id="cmp_middle">
	<aside>
		${ ComponentAside.html() }
	</aside>

	<div id="content"></div>
</div>




`;
	}





}











