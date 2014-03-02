/*
* Declare other modules here
* 
* e.g.:
* var onOff = require('onoff').Gpio;
*/
var onOff = require('onoff').Gpio;


/**
* This method is used to execute a pi@home command.
* 
*
* @method execute
* @param {opts} opts The options:
*/
function execute(opts) {

	// here comes the code for executing tasks
	// opts includes the params of a task
	// e.g. opts.a for the task-param a
}

/**
* This method listens on a GPIO pin and throws events with eventId when value of pin changes.
*
* @method listenEvent
* @param {int} eventId The eventId like configured in event config.
* @param {opts} opts The opts
*/
function listenEvent(eventId, opts) {

	// here comes the code for the listening for events (events set in the frontend under "events" will be executed here)
	// do here anything for listening events, if an event occurs (e.g. a button is pressed) a event must be thrown
	// 	using process.emit(eventId, value)
	//  eventId = name of event (set in frontend)
	//  value = value of the event, which is checked with conditions
	process.emit(eventId, value);
}

// If we're running under Node, 
if(typeof exports !== 'undefined') {
	exports.execute = execute;
	exports.listenEvent = listenEvent;
}