sap.ui.define([
  "./BaseController",
  "sap/ui/model/json/JSONModel",
  "sap/ui/core/ws/SapPcpWebSocket",
  "sap/m/MessageToast"
], function(BaseController, JSONModel, SapPcpWebSocket, MessageToast) {
  "use strict";

  return BaseController.extend("com.kaufland.summit.controller.Chat", {

    /**
     * Called when a controller is instantiated and its View controls (if available) are already created.
     * This function opens the socket connection and registers the callback function to handle incoming
     * messages.
     * 
     * The socket opening process requires the name of the current user. It can be passed via the
     * name parameter >> &name=<UserName> <<
     * @memberOf com.kaufland.summit.controller.Chat
     */
    onInit: function() {
      this._chatHistory = [
        //	{
        //  msg: "Hello World", 
        //  author: "Developer Summit"
        //}
      ];
      this._historyModel = new JSONModel(this._chatHistory);
      this.setModel(this._historyModel, "hist");

      this._socket = new SapPcpWebSocket(
        "/sap/bc/apc/sap/z_ds_chat_server?sap-client=800");
      this._socket.attachOpen(this, function() {
        MessageToast.show("Connection open");
      }, this);
      this._socket.attachMessage(this, this._attachMessageCallback.bind(this));

    },

    /**
     * Called when the user hits the "post" Button.
     * What we need to do here is to create a message object, attach it to our chat history
     * and send to the message to the sap backend
     *
     * @param {event} event Fired by the input control containing the entered message
     * @memberOf com.kaufland.summit.controller.Chat
     */
    onPost: function(event) {
      var message = {
        author: "",
        msg: ""
      };
      MessageToast.show("todo");
    },

    /**
     * Appends a message object to the local chat history model.
     * The content of this model is displayed via the list control
     * 
     * @param {message} message Message containing author, timestamp and the msg itselfe
     * @private
     * @memberOf com.kaufland.summit.controller.Chat
     */
    _appendChatMessage: function(message) {
      this._chatHistory.push(message);
      this._historyModel.refresh();
    },

    /**
     * This function is executed each time an object is received via the socket connection.
     * We need to extract the message details and insert the message object into our chat history.
     * 
     * @param {event} event Message containing pcpFields and transmitted data
     * @private
     * @memberOf com.kaufland.summit.controller.Chat
     */
    _attachMessageCallback: function(event) {
      var message = {};
      MessageToast.show("Todo");
    }
  });
});