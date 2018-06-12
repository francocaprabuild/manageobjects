/*global QUnit*/

jQuery.sap.require("sap.ui.qunit.qunit-css");
jQuery.sap.require("sap.ui.thirdparty.qunit");
jQuery.sap.require("sap.ui.qunit.qunit-junit");
QUnit.config.autostart = false;

sap.ui.require([
	"sap/ui/test/Opa5",
	"opensap/manageobjects/ManageObjects/test/integration/pages/Common",
	"sap/ui/test/opaQunit",
	"opensap/manageobjects/ManageObjects/test/integration/pages/Worklist",
	"opensap/manageobjects/ManageObjects/test/integration/pages/Object",
	"opensap/manageobjects/ManageObjects/test/integration/pages/NotFound",
	"opensap/manageobjects/ManageObjects/test/integration/pages/Browser",
	"opensap/manageobjects/ManageObjects/test/integration/pages/App"
], function (Opa5, Common) {
	"use strict";
	Opa5.extendConfig({
		arrangements: new Common(),
		viewNamespace: "opensap.manageobjects.ManageObjects.view."
	});

	sap.ui.require([
		"opensap/manageobjects/ManageObjects/test/integration/WorklistJourney",
		"opensap/manageobjects/ManageObjects/test/integration/ObjectJourney",
		"opensap/manageobjects/ManageObjects/test/integration/NavigationJourney",
		"opensap/manageobjects/ManageObjects/test/integration/NotFoundJourney"
	], function () {
		QUnit.start();
	});
});