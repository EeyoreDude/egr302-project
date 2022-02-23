import React, { Component } from "react";

var loggedIn = 1;

function login(){
	loggedIn = 1;
}

function logout(){
	loggedIn = 0;
}

export { loggedIn, login, logout };