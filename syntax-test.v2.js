import { customElement } from "aurelia"

@customElement({
	name: "au-test",
	template: ""
		+ "<template bindable='' role='' replaceable part='' replace-part=''>"
		+ "	<div style='width: 1px; height: 1px;'></div>"
		+ "	<div style='width: ${ test }px; height: ${ test }px;'></div>"
		+ "	<div background.style='viewModelVariable' style.bind='styleObject'></div>"
		+ "	<div style='background-image: url(`https://source.unsplash.com/random/${ w > 0 ? w : 50 }x${ h > 0 ? h : 50 }/?wallpapers`);'></div>"
		+ "	<div ref='' element.ref='' attribute-name.ref='' view-model.ref='' view.ref='' controller.ref=''></div>"
		+ "	<div>${ test }</div>"
		+ "</template>"
})
export class AuTest {}

@customElement({
	name: 'au-test',
	template: ''
		+ '<template bindable="" role="" replaceable part="" replace-part="">'
		+ '	<div style="width: 1px; height: 1px;"></div>'
		+ '	<div style="width: ${ test }px; height: ${ test }px;"></div>'
		+ '	<div background.style="viewModelVariable" style.bind="styleObject"></div>'
		+ '	<div style="background-image: url(`https://source.unsplash.com/random/${ w > 0 ? w : 50 }x${ h > 0 ? h : 50 }/?wallpapers`);"></div>'
		+ '	<div ref="" element.ref="" attribute-name.ref="" view-model.ref="" view.ref="" controller.ref=""></div>'
		+ '	<div>${ test }</div>'
		+ '</template>'
})
export class AuTest {}

@customElement({
	name: `au-test`,
	template: `<template
	bindable=""
	role=""
	replaceable
	part=""
	replace-part="">

	<div
		style="width: 1px; height: 1px;"
		style='width: 1px; height: 1px;'

		style="width: \${ test }px; height: \${ test }px;"
		style='width: \${ test }px; height: \${ test }px;'

		style="background-image: url('https://source.unsplash.com/random/\${ w > 0 ? w : '50' }x\${ h > 0 ? h : '50' }/?wallpapers');"
		style='background-image: url("https://source.unsplash.com/random/\${ w > 0 ? w : "50" }x\${ h > 0 ? h : "50" }/?wallpapers");'

		background.style="viewModelVariable"
		style.bind="styleObject"

		ref=""
		element.ref=""
		attribute-name.ref=""
		view-model.ref=""
		view.ref=""
		controller.ref="">
		\${ test }
	</div>
</template>`
})
export class AuTest {}
