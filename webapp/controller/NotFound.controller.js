sap.ui.define([
		"opensap/manageobjects/ManageObjects/controller/BaseController"
	], function (BaseController) {
		"use strict";

		return BaseController.extend("opensap.manageobjects.ManageObjects.controller.NotFound", {

			/**
			 * Navigates to the worklist when the link is pressed
			 * @public
			 */
			onLinkPressed : function () {
				this.getRouter().navTo("worklist");
			}

		});

	}
);