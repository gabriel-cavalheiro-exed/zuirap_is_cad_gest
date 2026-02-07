sap.ui.define(['sap/fe/test/ListReport'], function(ListReport) {
    'use strict';

    var CustomPageDefinitions = {
        actions: {},
        assertions: {}
    };

    return new ListReport(
        {
            appId: 'br.com.gamma.zuirapiscadgestao',
            componentId: 'ZC_IS_CAD_GESTAOList',
            contextPath: '/ZC_IS_CAD_GESTAO'
        },
        CustomPageDefinitions
    );
});