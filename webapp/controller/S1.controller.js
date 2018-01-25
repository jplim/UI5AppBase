sap.ui.define([
	"com/company/app/controller/BaseController"
], function(BaseController) {
	"use strict";

	return BaseController.extend("com.company.app.controller.S1", {

		/* =========================================================== */
		/* lifecycle methods                                           */
		/* =========================================================== */

		/**
		 * Called when the S1 controller is instantiated.
		 * @public
		 */
		onInit: function() {
			// Control state model
			// var oList = this.byId("list"),
			// 	oViewModel = this._createViewModel(),
			// 	// Put down master list's original value for busy indicator delay,
			// 	// so it can be restored later on. Busy handling on the master list is
			// 	// taken care of by the master list itself.
			// 	iOriginalBusyDelay = oList.getBusyIndicatorDelay();

			// this._oGroupSortState = new GroupSortState(oViewModel, grouper.groupUnitNumber(this.getResourceBundle()));

			// this._oList = oList;
			// // keeps the filter and search state
			// this._oListFilterState = {
			// 	aFilter: [],
			// 	aSearch: []
			// };

			// this.setModel(oViewModel, "masterView");
			// // Make sure, busy indication is showing immediately so there is no
			// // break after the busy indication for loading the view's meta data is
			// // ended (see promise 'oWhenMetadataIsLoaded' in AppController)
			// oList.attachEventOnce("updateFinished", function() {
			// 	// Restore original busy indicator delay for the list
			// 	oViewModel.setProperty("/delay", iOriginalBusyDelay);
			// });

			// this.getView().addEventDelegate({
			// 	onBeforeFirstShow: function() {
			// 		this.getOwnerComponent().oListSelector.setBoundMasterList(oList);
			// 	}.bind(this)
			// });

			// this.getRouter().getRoute("master").attachPatternMatched(this._onMasterMatched, this);
			// this.getRouter().attachBypassed(this.onBypassed, this);
		}

		/* =========================================================== */
		/* event handlers                                              */
		/* =========================================================== */

		/* =========================================================== */
		/* begin: internal methods                                     */
		/* =========================================================== */

	});
});