"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var likeButtonComponent_1 = require("./likeButtonComponent");
var component = new likeButtonComponent_1.LikeComponent(10, false);
component.onClick();
console.log("likes: " + component.likesCount + ", isSelected: " + component.isSelected);
