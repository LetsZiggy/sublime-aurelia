import { inlineView } from "aurelia-framework"

@inlineView(
"<template bindable='' role='' replaceable part='' replace-part=''>"
+ "	<div style='width: 1px; height: 1px;'></div>"
+ "	<div css='width: ${ test }px; height: ${ test }px;'></div>"
+ "	<div css='background-image: url(`https://source.unsplash.com/random/${ w > 0 ? w : 50 }x${ h > 0 ? h : 50 }/?wallpapers`);'></div>"
+ "	<div ref='' element.ref='' attribute-name.ref='' view-model.ref='' view.ref='' controller.ref=''></div>"
+ "	<div>${ test }</div>"
+ "</template>"
)
export class AuTest {}

@inlineView(
'<template bindable="" role="" replaceable part="" replace-part="">'
+ '	<div style="width: 1px; height: 1px;"></div>'
+ '	<div css="width: ${ test }px; height: ${ test }px;"></div>'
+ '	<div css="background-image: url(`https://source.unsplash.com/random/${ w > 0 ? w : 50 }x${ h > 0 ? h : 50 }/?wallpapers`);"></div>'
+ '	<div ref="" element.ref="" attribute-name.ref="" view-model.ref="" view.ref="" controller.ref=""></div>'
+ '	<div>${ test }</div>'
+ '</template>'
)
export class AuTest {}

@inlineView(`
<template
	bindable=""
	role=""
	replaceable
	part=""
	replace-part="">

	<div
		style="width: 1px; height: 1px;"
		style='width: 1px; height: 1px;'

		css="width: \${ test }px; height: \${ test }px;"
		css='width: \${ test }px; height: \${ test }px;'

		css="background-image: url('https://source.unsplash.com/random/\${ w > 0 ? w : '50' }x\${ h > 0 ? h : '50' }/?wallpapers');"
		css='background-image: url("https://source.unsplash.com/random/\${ w > 0 ? w : "50" }x\${ h > 0 ? h : "50" }/?wallpapers");'

		ref=""
		element.ref=""
		attribute-name.ref=""
		view-model.ref=""
		view.ref=""
		controller.ref="">
		\${ test }
	</div>
</template>
`)
export class AuTest {}
