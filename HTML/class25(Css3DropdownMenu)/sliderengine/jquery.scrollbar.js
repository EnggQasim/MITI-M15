/**
 * @author Ares_P Chen
 * @type jQuery plugin
 * @version 1.0.0
 */
(function($) {
	$.fn.scrollbar = function(options){
		var defaults = {
			autoHide : true,
			clickOnTrack : true,
			mouseWheel : true,
			speed : 5,
			size : 7,
			borderRadius : 5,
			backgroundColor : "black",
			backgroundOpacity : 0,
			defaultColor : "white",
			defaultOpacity : 0.3,
			mouseOverColor : "white",
			mouseOverOpacity : 0.6,
			mouseDownColor : "white",
			mouseDownOpacity : 0.8,
			downCallback : function(event){},
			dragCallback : function(event){},
			upCallback : function(event){}
		};
		
		var settings = $.extend({}, defaults, options);
		var vCoefficient = [],
			hCoefficient = [];
		
		return $(this).each(function(i, elem) {
			var $elem = $(elem);
			var SUPPORT_TOUCH = "ontouchstart" in window,
	  			MOUSE_DOWN = SUPPORT_TOUCH ? "touchstart.scrollbar" : "mousedown.scrollbar",
	  			MOUSE_MOVE = SUPPORT_TOUCH ? "touchmove.scrollbar" : "mousemove.scrollbar",
	  			MOUSE_UP = SUPPORT_TOUCH ? "touchend.scrollbar" : "mouseup.scrollbar";
	  			//TOUCH_CANCEL = SUPPORT_TOUCH ? "touchcancel.scrollbar" : "mouseleave.scrollbar";
	  			
			var originalOptions = {
				overflow : $elem.css("overflow"),
				height : $elem.css("height")
			};
			
			function getContextSize(type) {
				var $this = $(this),
					$cloneThis = $this.clone().appendTo($elem),
					size;
					if (type === "height") {
						$cloneThis.css({
							width : $this.width()
						})
						size = $cloneThis.height() + parseInt($cloneThis.css("paddingTop")) + parseInt($cloneThis.css("paddingBottom"));
					} else {
						$cloneThis.css({
							height : $this.height()
						})
						size = $cloneThis.width() + parseInt($cloneThis.css("paddingLeft")) + parseInt($cloneThis.css("paddingRight"));
					}
					$cloneThis.remove();
				return size;
			}
			
			var //contextTotalHeight = elem.scrollHeight,
				contextTotalHeight = getContextSize.call($elem.children(), "height"),
				contextVisibleHeight = $elem.height() + parseInt($elem.css("paddingTop")) + parseInt($elem.css("paddingBottom")),
				isShowVScrollBar = contextVisibleHeight < contextTotalHeight ? true : false,
				vScrollBarHeight = contextVisibleHeight,
				vDragBarHeight = Math.round(isShowVScrollBar ? contextVisibleHeight / contextTotalHeight * vScrollBarHeight : 0),
				vScrollBarSpaceSize = vScrollBarHeight - vDragBarHeight,
				contextVSpaceSize = contextTotalHeight - contextVisibleHeight,
				
				//contextTotalWidth = elem.scrollWidth,
				contextTotalWidth = getContextSize.call($elem.children(), "width"),
				contextVisibleWidth = $elem.width() + parseInt($elem.css("paddingLeft")) + parseInt($elem.css("paddingRight")),
				isShowHScrollBar = contextVisibleWidth < contextTotalWidth ? true : false,
				hScrollBarWidth = contextVisibleWidth - (isShowVScrollBar ? settings.size : 0),
				hDragBarWidth = Math.round(isShowHScrollBar ? contextVisibleWidth / contextTotalWidth * hScrollBarWidth : 0),
				hScrollBarSpaceSize = hScrollBarWidth - hDragBarWidth,
				contextHSpaceSize = contextTotalWidth - contextVisibleWidth;
				
			vCoefficient[i] = contextVSpaceSize / vScrollBarSpaceSize;
			hCoefficient[i] = contextHSpaceSize / hScrollBarSpaceSize;
			
			var $vScrollbar = $("<div class='vScrollbar'></div>").appendTo($elem);
			$vScrollbar.css({
				backgroundColor : settings.backgroundColor,
				opacity : settings.backgroundOpacity,
				width : settings.size + "px",
				height : isShowVScrollBar ? vScrollBarHeight : 0,
				borderRadius : settings.borderRadius + "px",
				position : "absolute",
				right : 0,
				top : 0
			});
			
			//
			var $hScrollbar = $("<div class='hScrollbar'></div>").appendTo($elem);
			$hScrollbar.css({
				backgroundColor : settings.backgroundColor,
				opacity : settings.backgroundOpacity,
				height : settings.size + "px",
				width : isShowHScrollBar ? hScrollBarWidth : 0,
				borderRadius : settings.borderRadius + "px",
				position : "absolute",
				left : 0,
				bottom : 0
			});
			
			var $vDragBar = $("<div class='vDragBar'></div>").appendTo($elem);
			$vDragBar.css({
				backgroundColor : settings.defaultColor,
				opacity : settings.defaultOpacity,
				width : settings.size,
				height : vDragBarHeight + "px",
				borderRadius : settings.borderRadius,
				position : "absolute",
				right : 0,
				top : 0,
				cursor : "pointer"
			})
			
			var $hDragBar = $("<div class='hDragBar'></div>").appendTo($elem);
			$hDragBar.css({
				backgroundColor : settings.defaultColor,
				opacity : settings.defaultOpacity,
				height : settings.size,
				width : hDragBarWidth + "px",
				borderRadius : settings.borderRadius,
				position : "absolute",
				left : 0,
				bottom : 0,
				cursor : "pointer"
			})
			
			if (settings.autoHide) {
				$vDragBar.hide();
				$vScrollbar.hide();
				$hDragBar.hide();
				$hScrollbar.hide();
			}
			
			// bind dragging event
			var dragging = false,
				startX,
				startY,
				endX,
				endY,
				startTarget,
				endTarget,
				vMoveDis,
				vScrollDis,
				oldVScrollBarTop,
				oldVDragBarTop,
				oldContextScrollTop,
				newVScrollBarTop,
				newVDragBarTop,
				newContextScrollTop,
				
				hMoveDis,
				hScrollDis,
				oldHScrollBarLeft,
				oldHDragBarLeft,
				oldContextScrollLeft,
				newHScrollBarLeft,
				newHDragBarLeft,
				newContextScrollLeft;
			
			function updateBarPosition(type) {
				if (type === "vertical") {
					oldVScrollBarTop = $vScrollbar.position().top;
					oldVDragBarTop = $vDragBar.position().top;
					oldContextScrollTop = $elem.scrollTop();
				} else {
					oldHScrollBarLeft = $hScrollbar.position().left;
					oldHDragBarLeft = $hDragBar.position().left;
					oldContextScrollLeft = $elem.scrollLeft();
				}
			}
			
			function handleDragBarMouseDown(clientX, clientY, target) {
				var $self = $(this);
				var type = $self.hasClass("vDragBar") ? "vertical" : "horizontal";
				updateBarPosition(type);
				startX = endX = clientX;
				startY = endY = clientY;
				startTarget = endTarget = target;
				dragging = true;
				$self.css({
					backgroundColor : settings.mouseDownColor,
					opacity : settings.mouseDownOpacity
				})
				
				$(document).on(MOUSE_MOVE, function(event) {
					event.preventDefault();
					event.stopPropagation();
					handleMouseMove.call($self, type, event.clientX, event.clientY, event.target);
					settings.dragCallback(event);
				});
				
				$(document).on(MOUSE_UP, function(event) {
					handleMouseUp.call($self);
					settings.upCallback(event);
				});
			}
			
			function move(type, vMoveDis, hMoveDis) {
				if (type === "vertical") {
					vScrollDis = vMoveDis * vCoefficient[i];
					if (oldVDragBarTop + vMoveDis < 0) {
						newVScrollBarTop = newVDragBarTop = newContextScrollTop = 0;
					} else if (oldVDragBarTop + vMoveDis > vScrollBarSpaceSize) {
						newVScrollBarTop = contextVSpaceSize
						newVDragBarTop = newVScrollBarTop + vScrollBarSpaceSize;
						newContextScrollTop = contextVSpaceSize;
					} else {
						newVScrollBarTop = Math.round(oldContextScrollTop + oldVScrollBarTop + vScrollDis)
						newVDragBarTop = Math.round(newVScrollBarTop + oldVDragBarTop + vMoveDis);
						newContextScrollTop = Math.round(oldContextScrollTop + vScrollDis);
					}
					
			 		$vScrollbar.css({
			 			top : newVScrollBarTop + "px"
			 		});
			 		$vDragBar.css({
						top : newVDragBarTop + "px"
			 		});
			 		$elem.scrollTop(newContextScrollTop);
			 		$hScrollbar.css({
			 			bottom : -newContextScrollTop + "px"
			 		});
			 		$hDragBar.css({
						bottom : -newContextScrollTop + "px"
			 		});
				} else {
					hScrollDis = hMoveDis * hCoefficient[i];
					if (oldHDragBarLeft + hMoveDis < 0) {
						newHScrollBarLeft = newHDragBarLeft = newContextScrollLeft = 0;
					} else if (oldHDragBarLeft + hMoveDis > hScrollBarSpaceSize) {
						newHScrollBarLeft = contextHSpaceSize
						newHDragBarLeft = newHScrollBarLeft + hScrollBarSpaceSize;
						newContextScrollLeft = contextHSpaceSize;
					} else {
						newHScrollBarLeft = Math.round(oldContextScrollLeft + oldHScrollBarLeft + hScrollDis)
						newHDragBarLeft = Math.round(newHScrollBarLeft + oldHDragBarLeft + hMoveDis);
						newContextScrollLeft = Math.round(oldContextScrollLeft + hScrollDis);
					}
					
			 		$hScrollbar.css({
			 			left : newHScrollBarLeft + "px"
			 		});
			 		$hDragBar.css({
						left : newHDragBarLeft + "px"
			 		});
			 		$elem.scrollLeft(newContextScrollLeft);
			 		$vScrollbar.css({
			 			right : - newContextScrollLeft + "px"
			 		});
			 		$vDragBar.css({
						right : - newContextScrollLeft + "px"
			 		});
				}
			}
			
			function handleMouseMove(type, clientX, clientY, target) {
				if (dragging) {
					endX = clientX,
					endY = clientY,
					endTarget = target;
					vMoveDis = endY - startY;
					hMoveDis = endX - startX;
					move(type, vMoveDis, hMoveDis);
				}
			}
			
			function handleMouseUp() {
				dragging = false;
				$(this).css({
					backgroundColor : startTarget === endTarget ? settings.mouseOverColor : settings.defaultColor,
					opacity : startTarget === endTarget ? settings.mouseOverOpacity : settings.defaultOpacity
				})
				if (settings.autoHide) {
					if (!$.contains($elem[0], endTarget)) {
						$(this).stop(true, true).fadeOut(400);
						$vScrollbar.stop(true, true).fadeOut(400);
						$hScrollbar.stop(true, true).fadeOut(400);
					}
				}
				$(document).off(MOUSE_MOVE + " " + MOUSE_UP);
			}
			
			$vDragBar.on(MOUSE_DOWN, function(event) {
				event.preventDefault();
				event.stopPropagation();
				handleDragBarMouseDown.call(this, event.clientX, event.clientY, event.target);
				settings.downCallback(event);
			});
			$hDragBar.on(MOUSE_DOWN, function(event) {
				event.preventDefault();
				event.stopPropagation();
				handleDragBarMouseDown.call(this, event.clientX, event.clientY, event.target);
				settings.downCallback(event);
			});
			
			// bind color change event
			var handleDragBarMouseEnter = function() {
				if (!dragging) {
					$(this).css({
						backgroundColor : settings.mouseOverColor,
						opacity : settings.mouseOverOpacity
					})
				}
			};
			var handleDragBarMouseLeave = function() {
				if (!dragging) {
					$(this).css({
						backgroundColor : settings.defaultColor,
						opacity : settings.defaultOpacity
					})
				}
			};
			$vDragBar.on("mouseenter.colorChange", handleDragBarMouseEnter);
			$vDragBar.on("mouseleave.colorChange", handleDragBarMouseLeave);
			$hDragBar.on("mouseenter.colorChange", handleDragBarMouseEnter);
			$hDragBar.on("mouseleave.colorChange", handleDragBarMouseLeave);
			
			// bind auto hide event
			if (settings.autoHide) {
				var handleElemMouseEnter = function() {
					if (!dragging) {
						$vDragBar.stop(true, true).fadeIn(200);
						$vScrollbar.stop(true, true).fadeIn(200);
						$hDragBar.stop(true, true).fadeIn(200);
						$hScrollbar.stop(true, true).fadeIn(200);
					}
				};
				var handleElemMouseLeave = function() {
					if (!dragging) {
						$vDragBar.stop(true, true).fadeOut(200);
						$vScrollbar.stop(true, true).fadeOut(200);
						$hDragBar.stop(true, true).fadeOut(200);
						$hScrollbar.stop(true, true).fadeOut(200);
					}
				};
				var autoHideMouseEnterId = autoHideMouseLeaveId = [];
				$elem.on("mouseenter.autoHide", function() {
					clearTimeout(autoHideMouseLeaveId[i]);
					autoHideMouseEnterId[i] = setTimeout(function() {
						handleElemMouseEnter();
					}, 100);
				});
				$elem.on("mouseleave.autoHide", function() {
					clearTimeout(autoHideMouseEnterId[i]);
					autoHideMouseLeaveId[i] = setTimeout(function() {
						handleElemMouseLeave();
					}, 400);
				});
			}
			
			// bind mouse wheel event
			if (settings.mouseWheel) {
				$elem.mousewheel(function(event, delta, deltaX, deltaY) {
  					event.preventDefault();
  					updateBarPosition("vertical");
  					move("vertical", - delta * settings.speed);
				});
			}
			
			// bind click on track event
			if (settings.clickOnTrack) {
				var mvoeDis;
				$vScrollbar.on(MOUSE_DOWN, function(event) {
					if (event.clientY - $vDragBar.offset().top - $vDragBar.height() > 0) {
						moveDis = event.clientY - $vDragBar.offset().top - $vDragBar.height();
					} else {
						moveDis = event.clientY - $vDragBar.offset().top;
					}
					updateBarPosition("vertical");
					move("vertical", moveDis, null);
				})
				$hScrollbar.on(MOUSE_DOWN, function(event) {
					if (event.clientX - $hDragBar.offset().left - $hDragBar.width() > 0) {
						moveDis = event.clientX - $hDragBar.offset().left - $hDragBar.width();
					} else {
						moveDis = event.clientX - $hDragBar.offset().left;
					}
					updateBarPosition("horizontal");
					move("horizontal", null, moveDis);
				})
			}
		});
	}
})(jQuery)

