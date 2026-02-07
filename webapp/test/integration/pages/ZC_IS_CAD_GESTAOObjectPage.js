sap.ui.define(['sap/fe/test/ObjectPage'], function(ObjectPage) {
    'use strict';

    var CustomPageDefinitions = {
        actions: {},
        assertions: {}
    };

    return new ObjectPage(
        {
            appId: 'br.com.gamma.zuirapiscadgestao',
            componentId: 'ZC_IS_CAD_GESTAOObjectPage',
            contextPath: '/ZC_IS_CAD_GESTAO'
        },
        CustomPageDefinitions
    );
});