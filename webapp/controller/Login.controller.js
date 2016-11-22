sap.ui.define([
  "./BaseController",
  "sap/ui/model/json/JSONModel",
  "sap/ui/core/ws/SapPcpWebSocket",
  "sap/m/MessageToast"
], function(BaseController, JSONModel, SapPcpWebSocket, MessageToast) {
  "use strict";

  return BaseController.extend("com.kaufland.summit.controller.Login", {

    /**
     * Called when a controller is instantiated and its View controls (if available) are already created.
     * Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
     * @memberOf com.kaufland.summit.controller.Login
     */
    onInit: function() {

    },

    /**
     * Called when the login button is pressed.
     * This function registers the current user and navigates to the Chat Screen.
     * 
     * @param {event} event Fired by the login button. Contains the entered Name.
     * @memberOf com.kaufland.summit.controller.Login
     */
    onLoginButtonPress: function(event) {
      MessageToast.show("todo");

      // Navigation can be done with the sap.m.Router class.
      // Possible routes can be found in the manifest.json.
      // Routes are identified with a route name.
    }
  });
});