sap.ui.define([
    "sap/ui/test/opaQunit",
    "./pages/JourneyRunner"
], function (opaTest, runner) {
    "use strict";

    function journey() {
        QUnit.module("First journey");

        opaTest("Start application", function (Given, When, Then) {
            Given.iStartMyApp();

            Then.onTheZC_IS_CAD_GESTAOList.iSeeThisPage();

        });


        opaTest("Navigate to ObjectPage", function (Given, When, Then) {
            // Note: this test will fail if the ListReport page doesn't show any data
            
            When.onTheZC_IS_CAD_GESTAOList.onFilterBar().iExecuteSearch();
            
            Then.onTheZC_IS_CAD_GESTAOList.onTable().iCheckRows();

            When.onTheZC_IS_CAD_GESTAOList.onTable().iPressRow(0);
            Then.onTheZC_IS_CAD_GESTAOObjectPage.iSeeThisPage();

        });

        opaTest("Teardown", function (Given, When, Then) { 
            // Cleanup
            Given.iTearDownMyApp();
        });
    }

    runner.run([journey]);
});