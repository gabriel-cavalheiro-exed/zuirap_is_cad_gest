sap.ui.define([
    "sap/fe/test/JourneyRunner",
	"br/com/gamma/zuirapiscadgestao/test/integration/pages/ZC_IS_CAD_GESTAOList",
	"br/com/gamma/zuirapiscadgestao/test/integration/pages/ZC_IS_CAD_GESTAOObjectPage"
], function (JourneyRunner, ZC_IS_CAD_GESTAOList, ZC_IS_CAD_GESTAOObjectPage) {
    'use strict';

    var runner = new JourneyRunner({
        launchUrl: sap.ui.require.toUrl('br/com/gamma/zuirapiscadgestao') + '/test/flp.html#app-preview',
        pages: {
			onTheZC_IS_CAD_GESTAOList: ZC_IS_CAD_GESTAOList,
			onTheZC_IS_CAD_GESTAOObjectPage: ZC_IS_CAD_GESTAOObjectPage
        },
        async: true
    });

    return runner;
});

