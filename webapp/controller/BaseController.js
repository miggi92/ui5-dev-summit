sap.ui.define([
  "sap/ui/core/mvc/Controller"
], function(Controller, JSONModel, SapPcpWebSocket, MessageToast) {
  "use strict";

  return Controller.extend("com.kaufland.summit.controller.BaseController", {

    /**
     * @returns {router} The router bound to the App.
     * @memberOf com.kaufland.summit.controller.BaseController
     */
    getRouter: function() {
      return this.getOwnerComponent()
        .getRouter();
    },

    /**
     * Convinience function to bind a model to the view.
     * @param {model} model The model.
     * @param {string} modelName Name of the model.
     * @memberOf com.kaufland.summit.controller.BaseController
     */
    setModel: function(model, modelName) {
      this.getView()
        .setModel(model, modelName);
    },

    /**
     * Convinience function to get a model, bound the the view, by name.
     * @param {string} modelName Name of the model.
     * @return {model} The model.
     * @memberOf com.kaufland.summit.controller.BaseController
     */
    getModel: function(modelName) {
      var model;

      model = this.getView()
        .getModel(modelName) || this.getOwnerComponent()
        .getModel(modelName);

      return model;
    },

    /**
     * @returns {string} The Username entered on the login screen.
     * @memberOf com.kaufland.summit.controller.BaseController
     */
    getUserName: function() {
      return this.getModel("appModel")
        .getProperty("/userName");
    },

    /**
     * @returns {boolean} Whether the username is set or not.
     * @memberOf com.kaufland.summit.controller.BaseController
     */
    isAppInitialized: function() {
      return this.getUserName() !== "";
    },

    /**
     * Sets the username entered by the user in the loginscreen.
     * The username is stored in appModel > userName
     * 
     * @param {string} name UserName
     * @memberOf com.kaufland.summit.controller.BaseController
     */
      setUserName: function(name) {
      	
      	this.getModel("appModel").setProperty("/userName", name);

    }

  });
});