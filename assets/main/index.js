window.__require = function e(t, n, r) {
  function s(o, u) {
    if (!n[o]) {
      if (!t[o]) {
        var b = o.split("/");
        b = b[b.length - 1];
        if (!t[b]) {
          var a = "function" == typeof __require && __require;
          if (!u && a) return a(b, !0);
          if (i) return i(b, !0);
          throw new Error("Cannot find module '" + o + "'");
        }
        o = b;
      }
      var f = n[o] = {
        exports: {}
      };
      t[o][0].call(f.exports, function(e) {
        var n = t[o][1][e];
        return s(n || e);
      }, f, f.exports, e, t, n, r);
    }
    return n[o].exports;
  }
  var i = "function" == typeof __require && __require;
  for (var o = 0; o < r.length; o++) s(r[o]);
  return s;
}({
  CCTypingGame: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "729cdEVdXZIdocIseaJf8+D", "CCTypingGame");
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var TypingGame_1 = require("./TypingGame");
    window["ccTypingGame"] = {
      pause: function() {
        var _a;
        cc.log("u3d\u8c03\u7528ccTypingGame.pause");
        null === (_a = cc.director.getScene().getComponentInChildren(TypingGame_1.default)) || void 0 === _a ? void 0 : _a.pause();
      },
      resume: function() {
        var _a;
        cc.log("u3d\u8c03\u7528ccTypingGame.resume");
        null === (_a = cc.director.getScene().getComponentInChildren(TypingGame_1.default)) || void 0 === _a ? void 0 : _a.resume();
      },
      exit: function() {
        var _a;
        cc.log("u3d\u8c03\u7528ccTypingGame.exit");
        null === (_a = cc.director.getScene().getComponentInChildren(TypingGame_1.default)) || void 0 === _a ? void 0 : _a.exit();
      }
    };
    cc._RF.pop();
  }, {
    "./TypingGame": "TypingGame"
  } ],
  Destination: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "22ec14HZdNDQY3yWPmFWE6l", "Destination");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) Object.prototype.hasOwnProperty.call(b, p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var Destination = function(_super) {
      __extends(Destination, _super);
      function Destination() {
        return null !== _super && _super.apply(this, arguments) || this;
      }
      Destination = __decorate([ ccclass ], Destination);
      return Destination;
    }(cc.Component);
    exports.default = Destination;
    cc._RF.pop();
  }, {} ],
  Foreground: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "cad017elp1IeJwyThnWtYic", "Foreground");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) Object.prototype.hasOwnProperty.call(b, p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var Foreground = function(_super) {
      __extends(Foreground, _super);
      function Foreground() {
        return null !== _super && _super.apply(this, arguments) || this;
      }
      Foreground.prototype.horizontalMove = function(duration, distance) {
        cc.Tween.stopAllByTarget(this.node);
        cc.tween(this.node).by(duration, {
          x: distance
        }, {
          easing: "sineOut"
        }).start();
      };
      Foreground = __decorate([ ccclass ], Foreground);
      return Foreground;
    }(cc.Component);
    exports.default = Foreground;
    cc._RF.pop();
  }, {} ],
  GameEffect: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "67050tztMVI3qkEiPM+RM5U", "GameEffect");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) Object.prototype.hasOwnProperty.call(b, p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var SpineTip = function(_super) {
      __extends(SpineTip, _super);
      function SpineTip() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.spineTip = null;
        _this.pfbSmoke = null;
        _this.pfbBoom = null;
        return _this;
      }
      SpineTip.prototype.showCountdown = function() {
        var _this = this;
        return new Promise(function(resolve) {
          _this.spineTip.node.active = true;
          var entry = _this.spineTip.setAnimation(0, "start", false);
          _this.spineTip.setTrackCompleteListener(entry, function() {
            _this.spineTip.node.active = false;
            resolve();
          });
        });
      };
      SpineTip.prototype.showRetry = function() {
        var _this = this;
        return new Promise(function(resolve) {
          _this.spineTip.node.active = true;
          var entry = _this.spineTip.setAnimation(0, "recurgence", false);
          _this.spineTip.setTrackCompleteListener(entry, function() {
            _this.spineTip.node.active = false;
            resolve();
          });
        });
      };
      SpineTip.prototype.showSmoke = function(worldPosition) {
        var smoke = cc.instantiate(this.pfbSmoke);
        smoke.parent = this.node;
        smoke.position = cc.v3(smoke.parent.convertToNodeSpaceAR(worldPosition));
        smoke.on("finished", function() {
          smoke.destroy();
        }, this);
      };
      SpineTip.prototype.showBoom = function(worldPosition) {
        var boom = cc.instantiate(this.pfbBoom);
        boom.parent = this.node;
        boom.position = cc.v3(boom.parent.convertToNodeSpaceAR(worldPosition));
        boom.on("finished", function() {
          boom.destroy();
        }, this);
      };
      SpineTip.prototype.onLoad = function() {
        this.spineTip.node.active = false;
      };
      __decorate([ property(sp.Skeleton) ], SpineTip.prototype, "spineTip", void 0);
      __decorate([ property(cc.Prefab) ], SpineTip.prototype, "pfbSmoke", void 0);
      __decorate([ property(cc.Prefab) ], SpineTip.prototype, "pfbBoom", void 0);
      SpineTip = __decorate([ ccclass ], SpineTip);
      return SpineTip;
    }(cc.Component);
    exports.default = SpineTip;
    cc._RF.pop();
  }, {} ],
  GameModel: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "d6b77ytj9BH6K9tekVx9g31", "GameModel");
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var GameModel = function() {
      function GameModel() {
        this.isEnd = false;
        this.isSuccess = false;
        this.retryTimes = 0;
        this.stars = 0;
        this.lives = 0;
        this.correctItemCount = 0;
        this.correctLetterCount = 0;
        this.correctRate = 0;
        this.roundDuration = 0;
        this.gameDuration = 0;
        this.roundPauseDuration = 0;
        this.gamePauseDuration = 0;
        this.speed = 0;
        this.letterErrors = {};
        this.wordErrors = {};
      }
      return GameModel;
    }();
    exports.default = GameModel;
    cc._RF.pop();
  }, {} ],
  Hero: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "cea8aPZDA1FvZFpbtX6alIz", "Hero");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) Object.prototype.hasOwnProperty.call(b, p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var Hero = function(_super) {
      __extends(Hero, _super);
      function Hero() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.fallDuration = 0;
        _this._spine = null;
        return _this;
      }
      Hero.prototype.ide = function() {
        this._spine.setAnimation(0, "normal", true);
      };
      Hero.prototype.die = function() {
        var _this = this;
        return new Promise(function(resolve) {
          var trackEntry = _this._spine.setAnimation(0, "die", false);
          _this._spine.setTrackCompleteListener(trackEntry, resolve);
          _this.stopFall();
          cc.tween(_this.node).to(.5, {
            y: 230
          }, {
            easing: "sineOut"
          }).start();
        });
      };
      Hero.prototype.catchLantern = function(lanternNode) {
        var _this = this;
        return new Promise(function(resolve) {
          var lanternWorldPos = lanternNode.convertToWorldSpaceAR(cc.v2(0, -125));
          _this._spine.setAnimation(0, "jump", false);
          _this.stopFall();
          cc.tween(_this.node).to(.2, {
            position: cc.v3(_this.node.parent.convertToNodeSpaceAR(lanternWorldPos))
          }, {
            easing: "sineOut"
          }).call(function() {
            _this._spine.setAnimation(0, "down1", true);
            resolve();
          }).start();
        });
      };
      Hero.prototype.arriveDestination = function(destination) {
        var _this = this;
        return new Promise(function(resolve) {
          var destinationWorldPos = destination.convertToWorldSpaceAR(cc.v2(60, 53));
          _this._spine.setAnimation(0, "jump", false);
          cc.tween(_this.node).to(.3, {
            position: cc.v3(_this.node.parent.convertToNodeSpaceAR(destinationWorldPos))
          }).call(function() {
            _this._spine.setAnimation(0, "normal", true);
          }).delay(.5).call(resolve).start();
        });
      };
      Hero.prototype.fall = function() {
        var _this = this;
        return new Promise(function(resolve) {
          var length1 = 270;
          var length2 = 162;
          var fallSpeed = (length1 + length2) / (_this.fallDuration || 1);
          cc.tween(_this.node).by(length1 / fallSpeed, {
            y: -length1
          }).call(function() {
            _this._spine.setAnimation(0, "down2", true);
          }).by(length2 / fallSpeed, {
            y: -length2
          }).call(resolve).start();
        });
      };
      Hero.prototype.restore = function() {
        this._spine.addAnimation(0, "down1", true);
      };
      Hero.prototype.onLoad = function() {
        this._spine = this.getComponent(sp.Skeleton);
      };
      Hero.prototype.stopFall = function() {
        cc.Tween.stopAllByTarget(this.node);
      };
      Hero = __decorate([ ccclass ], Hero);
      return Hero;
    }(cc.Component);
    exports.default = Hero;
    cc._RF.pop();
  }, {} ],
  Keyboard: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "2279bQU0uNPOYTwzAcjks/L", "Keyboard");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) Object.prototype.hasOwnProperty.call(b, p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var Keyboard = function(_super) {
      __extends(Keyboard, _super);
      function Keyboard() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.callbackKeyDown = null;
        _this.callbackKeyUp = null;
        _this.keyNodeParent = null;
        _this._hintingKeyNode = null;
        return _this;
      }
      Keyboard.prototype.showHint = function(key) {
        var _this = this;
        this.keyNodeParent.children.forEach(function(item) {
          if (item.name === key.toUpperCase()) {
            _this._hintingKeyNode = item;
            var hint = item.getChildByName("hint");
            hint.active = true;
            hint.opacity = 0;
            cc.Tween.stopAllByTarget(hint);
            cc.tween(hint).repeatForever(cc.tween().to(.35, {
              opacity: 255
            }, {
              easing: "sineIn"
            }).to(.35, {
              opacity: 0
            }, {
              easing: "sineIn"
            })).start();
          }
        });
      };
      Keyboard.prototype.onLoad = function() {
        var _this = this;
        this.keyNodeParent.children.forEach(function(item) {
          _this.initKeyNode(item);
        });
        this.adaptUI();
        cc.systemEvent.on(cc.SystemEvent.EventType.KEY_DOWN, this.onKeyDown, this);
        cc.systemEvent.on(cc.SystemEvent.EventType.KEY_UP, this.onKeyUp, this);
      };
      Keyboard.prototype.initKeyNode = function(keyNode) {
        keyNode.getChildByName("keyDown").active = false;
        keyNode.getChildByName("hint").active = false;
        keyNode.on(cc.Node.EventType.TOUCH_START, this.onKeyTouchStart, this);
        keyNode.on(cc.Node.EventType.TOUCH_END, this.onKeyTouchEnd, this);
        keyNode.on(cc.Node.EventType.TOUCH_CANCEL, this.onKeyTouchEnd, this);
      };
      Keyboard.prototype.adaptUI = function() {
        cc.winSize.width / cc.winSize.height < 1.34 && (this.getComponent(cc.Widget).left = 186);
      };
      Keyboard.prototype.stopHint = function() {
        if (!this._hintingKeyNode) return;
        this._hintingKeyNode.getChildByName("hint").active = false;
        cc.Tween.stopAllByTarget(this._hintingKeyNode.getChildByName("hint"));
        this._hintingKeyNode = null;
      };
      Keyboard.prototype.findKeyNode = function(key) {
        return this.keyNodeParent.getChildByName(key.toUpperCase());
      };
      Keyboard.prototype.pressKeyNode = function(keyNode) {
        this.stopHint();
        keyNode.getChildByName("keyDown").active = true;
        this.callbackKeyDown && this.callbackKeyDown(keyNode.name);
      };
      Keyboard.prototype.releaseKeyNode = function(keyNode) {
        keyNode.getChildByName("keyDown").active = false;
        this.callbackKeyUp && this.callbackKeyUp(keyNode.name);
      };
      Keyboard.prototype.onKeyTouchStart = function(event) {
        this.pressKeyNode(event.target);
      };
      Keyboard.prototype.onKeyTouchEnd = function(event) {
        this.releaseKeyNode(event.target);
      };
      Keyboard.prototype.onKeyDown = function(event) {
        var keyNode = this.findKeyNode(String.fromCharCode(event.keyCode));
        keyNode && this.pressKeyNode(keyNode);
      };
      Keyboard.prototype.onKeyUp = function(event) {
        var keyNode = this.findKeyNode(String.fromCharCode(event.keyCode));
        keyNode && this.releaseKeyNode(keyNode);
      };
      __decorate([ property(cc.Node) ], Keyboard.prototype, "keyNodeParent", void 0);
      Keyboard = __decorate([ ccclass ], Keyboard);
      return Keyboard;
    }(cc.Component);
    exports.default = Keyboard;
    cc._RF.pop();
  }, {} ],
  LanternConveyorBelt: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "2e518Zx+jlAxIEP4YddX82o", "LanternConveyorBelt");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) Object.prototype.hasOwnProperty.call(b, p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var Lantern_1 = require("./Lantern");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var LanternConveyorBelt = function(_super) {
      __extends(LanternConveyorBelt, _super);
      function LanternConveyorBelt() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.pfbLantern = null;
        _this._wordList = [];
        _this.callbackCurrentLanternLetter = null;
        _this.callbackLanternCorrect = null;
        _this.callbackLanternWrong = null;
        _this._headLantern = null;
        return _this;
      }
      Object.defineProperty(LanternConveyorBelt.prototype, "wordList", {
        get: function() {
          return this._wordList;
        },
        set: function(value) {
          this._wordList = value;
          this.createLanterns();
        },
        enumerable: false,
        configurable: true
      });
      Object.defineProperty(LanternConveyorBelt.prototype, "lanternCount", {
        get: function() {
          return this.node.childrenCount;
        },
        enumerable: false,
        configurable: true
      });
      LanternConveyorBelt.prototype.focusHeadLantern = function() {
        if (!this._headLantern) return;
        this.lightUpHeadLantern();
      };
      LanternConveyorBelt.prototype.inputLetter = function(letter) {
        if (!this._headLantern || !this._headLantern.isLightUp()) return;
        this._headLantern.inputLetter(letter);
      };
      LanternConveyorBelt.prototype.restoreHeadLantern = function() {
        if (!this._headLantern) return;
        this._headLantern.reset();
        this.lightUpHeadLantern();
      };
      LanternConveyorBelt.prototype.getTailLanternWorldPosition = function() {
        var tailLantern = this.node.children[this.lanternCount - 1];
        return tailLantern ? cc.v3(tailLantern.convertToWorldSpaceAR(cc.v2())) : cc.v3(this.node.convertToNodeSpaceAR(cc.v2()));
      };
      LanternConveyorBelt.prototype.onLoad = function() {
        this.createLanterns();
        this.schedule(this.updateLanternsVisible, .2);
      };
      LanternConveyorBelt.prototype.createLanterns = function() {
        this._headLantern = null;
        this.node.destroyAllChildren();
        this.node.removeAllChildren();
        this.getComponent(cc.Layout).enabled = true;
        for (var i = 0; i < this.wordList.length; i++) {
          var lantern = cc.instantiate(this.pfbLantern).getComponent(Lantern_1.default);
          lantern.node.y = 0;
          lantern.node.parent = this.node;
          lantern.content = this.wordList[i];
          lantern.callbackInputLetterCorrect = this.onInputLetterCorrect.bind(this);
          lantern.callbackInputLetterWrong = this.onInputLetterWrong.bind(this);
          lantern.callbackInputWordCorrect = this.onInputWordCorrect.bind(this);
          0 === i && (this._headLantern = lantern);
        }
        this.getComponent(cc.Layout).updateLayout();
        this.getComponent(cc.Layout).enabled = false;
        this.node.children.forEach(function(child) {
          return child.active = false;
        });
        this.updateLanternsVisible();
      };
      LanternConveyorBelt.prototype.lightUpHeadLantern = function() {
        this._headLantern.lightUp();
        this.updateLanternsVisible();
        this.focusCurrentLetter();
      };
      LanternConveyorBelt.prototype.updateLanternsVisible = function() {
        for (var i = 0; i < this.node.childrenCount; i++) {
          var lanternNode = this.node.children[i];
          var worldBox = lanternNode.getBoundingBoxToWorld();
          worldBox.x < cc.winSize.width && worldBox.x + worldBox.width > 0 ? !lanternNode.active && (lanternNode.active = true) : lanternNode.active && (lanternNode.active = false);
        }
      };
      LanternConveyorBelt.prototype.focusCurrentLetter = function() {
        var letter = this._headLantern.currentLetter();
        letter && this.callbackCurrentLanternLetter && this.callbackCurrentLanternLetter(letter);
      };
      LanternConveyorBelt.prototype.onInputLetterCorrect = function() {
        this.focusCurrentLetter();
      };
      LanternConveyorBelt.prototype.onInputLetterWrong = function() {
        this.callbackLanternWrong && this.callbackLanternWrong();
      };
      LanternConveyorBelt.prototype.onInputWordCorrect = function() {
        var _a;
        this._headLantern.bingo();
        var index = this.node.children.indexOf(this._headLantern.node);
        this.callbackLanternCorrect && this.callbackLanternCorrect(this._headLantern.node);
        this._headLantern = null === (_a = this.node.children[index + 1]) || void 0 === _a ? void 0 : _a.getComponent(Lantern_1.default);
      };
      __decorate([ property(cc.Prefab) ], LanternConveyorBelt.prototype, "pfbLantern", void 0);
      __decorate([ property ], LanternConveyorBelt.prototype, "_wordList", void 0);
      __decorate([ property([ cc.String ]) ], LanternConveyorBelt.prototype, "wordList", null);
      LanternConveyorBelt = __decorate([ ccclass ], LanternConveyorBelt);
      return LanternConveyorBelt;
    }(cc.Component);
    exports.default = LanternConveyorBelt;
    cc._RF.pop();
  }, {
    "./Lantern": "Lantern"
  } ],
  Lantern: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "dd355ABqP9DQKC7an9mxcW8", "Lantern");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) Object.prototype.hasOwnProperty.call(b, p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var Lantern = function(_super) {
      __extends(Lantern, _super);
      function Lantern() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.light = null;
        _this.richText = null;
        _this.spineLightSpot = null;
        _this._content = "";
        _this.callbackInputLetterCorrect = null;
        _this.callbackInputLetterWrong = null;
        _this.callbackInputWordCorrect = null;
        _this._idleLetters = "";
        _this._rightLetters = "";
        _this._wrongLetter = "";
        _this._currentLetterIndex = 0;
        return _this;
      }
      Object.defineProperty(Lantern.prototype, "content", {
        get: function() {
          return this._content;
        },
        set: function(value) {
          this._content = value;
          this.reset();
        },
        enumerable: false,
        configurable: true
      });
      Lantern.prototype.currentLetter = function() {
        return this._idleLetters[0] || "";
      };
      Lantern.prototype.lightUp = function() {
        this.light.active = true;
        this.updateContentColor();
      };
      Lantern.prototype.isLightUp = function() {
        return this.light.active;
      };
      Lantern.prototype.inputLetter = function(letter) {
        if (this._currentLetterIndex >= this.content.length) return;
        letter.toUpperCase() === this.content[this._currentLetterIndex].toUpperCase() ? this.inputCorrect() : this.inputWrong();
      };
      Lantern.prototype.reset = function() {
        this.light.active = false;
        this._idleLetters = this.content;
        this._rightLetters = "";
        this._wrongLetter = "";
        this._currentLetterIndex = 0;
        this.spineLightSpot.node.active = false;
        this.updateContentColor();
        this.updateContentSize();
      };
      Lantern.prototype.bingo = function() {
        this.spineLightSpot.node.active = true;
        this.spineLightSpot.setAnimation(0, "animation", false);
        cc.tween(this.richText.node).to(.5, {
          opacity: 0
        }).start();
      };
      Lantern.prototype.disappear = function() {
        var _this = this;
        return new Promise(function(resolve) {
          cc.tween(_this.node).parallel(cc.tween().to(.2, {
            scale: 0
          }), cc.tween().by(.2, {
            position: cc.v3(0, .5 * _this.node.height, 0)
          })).call(function() {
            var worldPos = _this.node.convertToWorldSpaceAR(cc.v2());
            _this.node.destroy();
            resolve(worldPos);
          }).start();
        });
      };
      Lantern.prototype.onLoad = function() {
        this.reset();
      };
      Lantern.prototype.inputCorrect = function() {
        this._idleLetters = this.content.substring(this._currentLetterIndex + 1);
        this._rightLetters += this.content[this._currentLetterIndex];
        this._wrongLetter = "";
        this.updateContentColor();
        this.callbackInputLetterCorrect && this.callbackInputLetterCorrect();
        if (this._currentLetterIndex === this.content.length - 1) {
          this.light.active = false;
          this.callbackInputWordCorrect && this.callbackInputWordCorrect();
        }
        this._currentLetterIndex++;
      };
      Lantern.prototype.inputWrong = function() {
        this._idleLetters = this.content.substring(this._currentLetterIndex + 1);
        this._wrongLetter = this.content[this._currentLetterIndex];
        this.updateContentColor();
        this.callbackInputLetterWrong && this.callbackInputLetterWrong();
      };
      Lantern.prototype.updateContentColor = function() {
        var str = "<color=#00B127><outline color=#FFFFFF width=2>" + this._rightLetters + "</outline></color><color=#FF0000><outline color=#FFFFFF width=2>" + this._wrongLetter + "</outline></color><color=#333333>" + (this.light.active ? "<outline color=#FFFFFF width=2>" : "<outline color=#FFE587>") + this._idleLetters + "</outline></color>";
        this.richText.string = str;
      };
      Lantern.prototype.updateContentSize = function() {
        this.richText.node.scale = Math.min(1, 148 / this.richText.node.width);
      };
      __decorate([ property(cc.Node) ], Lantern.prototype, "light", void 0);
      __decorate([ property(cc.RichText) ], Lantern.prototype, "richText", void 0);
      __decorate([ property(sp.Skeleton) ], Lantern.prototype, "spineLightSpot", void 0);
      __decorate([ property ], Lantern.prototype, "_content", void 0);
      __decorate([ property ], Lantern.prototype, "content", null);
      Lantern = __decorate([ ccclass ], Lantern);
      return Lantern;
    }(cc.Component);
    exports.default = Lantern;
    cc._RF.pop();
  }, {} ],
  LoopMap: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "7c72faM4f9Czr9aHxZcqJYU", "LoopMap");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) Object.prototype.hasOwnProperty.call(b, p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var LoopMap = function(_super) {
      __extends(LoopMap, _super);
      function LoopMap() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.map1 = null;
        _this.map2 = null;
        return _this;
      }
      LoopMap.prototype.horizontalMove = function(duration, distance) {
        var _this = this;
        cc.tween(this.map1).by(duration, {
          x: distance
        }, {
          easing: "sineOut",
          progress: function(start, end, current, ratio) {
            current = start + (end - start) * ratio;
            _this.map1.x + _this.map1.width < -_this.node.width / 2 && (_this.map1.x = _this.map2.x + _this.map2.width);
            return current;
          }
        }).start();
        cc.tween(this.map2).by(duration, {
          x: distance
        }, {
          easing: "sineOut",
          progress: function(start, end, current, ratio) {
            current = start + (end - start) * ratio;
            _this.map2.x + _this.map2.width < -_this.node.width / 2 && (_this.map2.x = _this.map1.x + _this.map1.width);
            return current;
          }
        }).start();
      };
      LoopMap.prototype.start = function() {
        var _a;
        null === (_a = this.node.getComponent(cc.Widget)) || void 0 === _a ? void 0 : _a.updateAlignment();
        this.map1.x = -this.node.width / 2;
        this.map2.x = this.map1.x + this.map1.width;
      };
      __decorate([ property(cc.Node) ], LoopMap.prototype, "map1", void 0);
      __decorate([ property(cc.Node) ], LoopMap.prototype, "map2", void 0);
      LoopMap = __decorate([ ccclass ], LoopMap);
      return LoopMap;
    }(cc.Component);
    exports.default = LoopMap;
    cc._RF.pop();
  }, {} ],
  SettlementFail: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "35518ahamhHObqTkzaU3hhp", "SettlementFail");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) Object.prototype.hasOwnProperty.call(b, p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var SettlementFail = function(_super) {
      __extends(SettlementFail, _super);
      function SettlementFail() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.txtCorrectRate = null;
        _this.correctRate = 0;
        _this.callbackNext = null;
        return _this;
      }
      SettlementFail.prototype.onEnable = function() {
        this.txtCorrectRate.string = "\u4f60\u7684\u6b63\u786e\u7387\uff1a" + this.correctRate + "%";
      };
      SettlementFail.prototype.onClickBtnNext = function() {
        this.node.active = false;
        this.callbackNext && this.callbackNext();
      };
      __decorate([ property(cc.Label) ], SettlementFail.prototype, "txtCorrectRate", void 0);
      SettlementFail = __decorate([ ccclass ], SettlementFail);
      return SettlementFail;
    }(cc.Component);
    exports.default = SettlementFail;
    cc._RF.pop();
  }, {} ],
  SettlementPass: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "97accnlP4JBI5WFtuFyFz+k", "SettlementPass");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) Object.prototype.hasOwnProperty.call(b, p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var SettlementPass = function(_super) {
      __extends(SettlementPass, _super);
      function SettlementPass() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.nodeStar1 = null;
        _this.nodeStar2 = null;
        _this.nodeStar3 = null;
        _this.nodePass = null;
        _this.nodeFullHealth = null;
        _this.nodeHighAccuracy = null;
        _this.btnNext = null;
        _this.isFullHealth = false;
        _this.isHighAccuracy = false;
        _this.callbackNext = null;
        return _this;
      }
      SettlementPass.prototype.onEnable = function() {
        this.nodeStar1.active = false;
        this.nodeStar2.active = false;
        this.nodeStar3.active = false;
        this.nodePass.active = true;
        this.btnNext.active = false;
        this.nodeFullHealth.active = this.isFullHealth;
        this.nodeHighAccuracy.active = this.isHighAccuracy;
      };
      SettlementPass.prototype.showButtonNext = function() {
        var _this = this;
        this.btnNext.getComponent(cc.Button).enabled = false;
        this.btnNext.active = true;
        this.btnNext.opacity = 0;
        cc.tween(this.btnNext).delay(.9).to(.3, {
          opacity: 255
        }).call(function() {
          _this.btnNext.getComponent(cc.Button).enabled = true;
        }).start();
      };
      SettlementPass.prototype.onShowStars = function() {
        var _this = this;
        var nodeStars = [ this.nodeStar1, this.nodeStar2, this.nodeStar3 ];
        var stars = 1 + (this.isFullHealth ? 1 : 0) + (this.isHighAccuracy ? 1 : 0);
        for (var i = 0; i < stars; i++) this.scheduleOnce(function() {
          nodeStars.shift().active = true;
          nodeStars.length + stars === 3 && _this.showButtonNext();
        }, .3 * i);
      };
      SettlementPass.prototype.onClickBtnNext = function() {
        this.node.active = false;
        this.callbackNext && this.callbackNext();
      };
      __decorate([ property(cc.Node) ], SettlementPass.prototype, "nodeStar1", void 0);
      __decorate([ property(cc.Node) ], SettlementPass.prototype, "nodeStar2", void 0);
      __decorate([ property(cc.Node) ], SettlementPass.prototype, "nodeStar3", void 0);
      __decorate([ property(cc.Node) ], SettlementPass.prototype, "nodePass", void 0);
      __decorate([ property(cc.Node) ], SettlementPass.prototype, "nodeFullHealth", void 0);
      __decorate([ property(cc.Node) ], SettlementPass.prototype, "nodeHighAccuracy", void 0);
      __decorate([ property(cc.Node) ], SettlementPass.prototype, "btnNext", void 0);
      SettlementPass = __decorate([ ccclass ], SettlementPass);
      return SettlementPass;
    }(cc.Component);
    exports.default = SettlementPass;
    cc._RF.pop();
  }, {} ],
  SettlementRetry: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "a7f45Kw1NhDoLhzDCoNNXg4", "SettlementRetry");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) Object.prototype.hasOwnProperty.call(b, p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var SettlementFail = function(_super) {
      __extends(SettlementFail, _super);
      function SettlementFail() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.callbackRetry = null;
        return _this;
      }
      SettlementFail.prototype.onClickBtnRetry = function() {
        this.node.active = false;
        this.callbackRetry && this.callbackRetry();
      };
      SettlementFail = __decorate([ ccclass ], SettlementFail);
      return SettlementFail;
    }(cc.Component);
    exports.default = SettlementFail;
    cc._RF.pop();
  }, {} ],
  Statistics: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "4ded97NofNPNIZV4v/xW4JJ", "Statistics");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) Object.prototype.hasOwnProperty.call(b, p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var Statistics = function(_super) {
      __extends(Statistics, _super);
      function Statistics() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.txtLanternCount = null;
        _this.pfbHP = null;
        _this.parentHP = null;
        return _this;
      }
      Object.defineProperty(Statistics.prototype, "lanternCount", {
        get: function() {
          var _a;
          return parseInt((null === (_a = this.txtLanternCount) || void 0 === _a ? void 0 : _a.string) || "0");
        },
        set: function(value) {
          this.txtLanternCount.string = value.toString();
        },
        enumerable: false,
        configurable: true
      });
      Object.defineProperty(Statistics.prototype, "lifeCount", {
        get: function() {
          var _a;
          return (null === (_a = this.parentHP) || void 0 === _a ? void 0 : _a.childrenCount) || 0;
        },
        set: function(value) {
          this.parentHP.destroyAllChildren();
          this.parentHP.removeAllChildren();
          for (var i = 0; i < value; i++) {
            var node = cc.instantiate(this.pfbHP);
            node.y = 0;
            node.parent = this.parentHP;
          }
        },
        enumerable: false,
        configurable: true
      });
      Statistics.prototype.deductOneLife = function() {
        var _loop_1 = function(i) {
          var item = this_1.parentHP.children[i];
          var hp = item.getChildByName("hp");
          if (hp.active) {
            cc.tween(hp).to(.3, {
              scale: 1.4
            }, {
              easing: "sineIn"
            }).to(.3, {
              scale: .8
            }, {
              easing: "sineIn"
            }).call(function() {
              hp.active = false;
            }).start();
            return {
              value: void 0
            };
          }
        };
        var this_1 = this;
        for (var i = 0; i < this.parentHP.children.length; i++) {
          var state_1 = _loop_1(i);
          if ("object" === typeof state_1) return state_1.value;
        }
      };
      __decorate([ property(cc.Label) ], Statistics.prototype, "txtLanternCount", void 0);
      __decorate([ property(cc.Prefab) ], Statistics.prototype, "pfbHP", void 0);
      __decorate([ property(cc.Node) ], Statistics.prototype, "parentHP", void 0);
      __decorate([ property ], Statistics.prototype, "lanternCount", null);
      __decorate([ property ], Statistics.prototype, "lifeCount", null);
      Statistics = __decorate([ ccclass ], Statistics);
      return Statistics;
    }(cc.Component);
    exports.default = Statistics;
    cc._RF.pop();
  }, {} ],
  TypingGame: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "9c0d9kRslxNcblyfswEfcEg", "TypingGame");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) Object.prototype.hasOwnProperty.call(b, p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __awaiter = this && this.__awaiter || function(thisArg, _arguments, P, generator) {
      function adopt(value) {
        return value instanceof P ? value : new P(function(resolve) {
          resolve(value);
        });
      }
      return new (P || (P = Promise))(function(resolve, reject) {
        function fulfilled(value) {
          try {
            step(generator.next(value));
          } catch (e) {
            reject(e);
          }
        }
        function rejected(value) {
          try {
            step(generator["throw"](value));
          } catch (e) {
            reject(e);
          }
        }
        function step(result) {
          result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
        }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
      });
    };
    var __generator = this && this.__generator || function(thisArg, body) {
      var _ = {
        label: 0,
        sent: function() {
          if (1 & t[0]) throw t[1];
          return t[1];
        },
        trys: [],
        ops: []
      }, f, y, t, g;
      return g = {
        next: verb(0),
        throw: verb(1),
        return: verb(2)
      }, "function" === typeof Symbol && (g[Symbol.iterator] = function() {
        return this;
      }), g;
      function verb(n) {
        return function(v) {
          return step([ n, v ]);
        };
      }
      function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
          if (f = 1, y && (t = 2 & op[0] ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 
          0) : y.next) && !(t = t.call(y, op[1])).done) return t;
          (y = 0, t) && (op = [ 2 & op[0], t.value ]);
          switch (op[0]) {
           case 0:
           case 1:
            t = op;
            break;

           case 4:
            _.label++;
            return {
              value: op[1],
              done: false
            };

           case 5:
            _.label++;
            y = op[1];
            op = [ 0 ];
            continue;

           case 7:
            op = _.ops.pop();
            _.trys.pop();
            continue;

           default:
            if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (6 === op[0] || 2 === op[0])) {
              _ = 0;
              continue;
            }
            if (3 === op[0] && (!t || op[1] > t[0] && op[1] < t[3])) {
              _.label = op[1];
              break;
            }
            if (6 === op[0] && _.label < t[1]) {
              _.label = t[1];
              t = op;
              break;
            }
            if (t && _.label < t[2]) {
              _.label = t[2];
              _.ops.push(op);
              break;
            }
            t[2] && _.ops.pop();
            _.trys.pop();
            continue;
          }
          op = body.call(thisArg, _);
        } catch (e) {
          op = [ 6, e ];
          y = 0;
        } finally {
          f = t = 0;
        }
        if (5 & op[0]) throw op[1];
        return {
          value: op[0] ? op[1] : void 0,
          done: true
        };
      }
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var Destination_1 = require("./Destination");
    var Foreground_1 = require("./Foreground");
    var Hero_1 = require("./Hero");
    var Keyboard_1 = require("./Keyboard");
    var Lantern_1 = require("./Lantern");
    var LanternConveyorBelt_1 = require("./LanternConveyorBelt");
    var LoopMap_1 = require("./LoopMap");
    var GameEffect_1 = require("./GameEffect");
    var Statistics_1 = require("./Statistics");
    var SettlementPass_1 = require("./SettlementPass");
    var SettlementFail_1 = require("./SettlementFail");
    var SettlementRetry_1 = require("./SettlementRetry");
    var U3DTypingGame_1 = require("./U3DTypingGame");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var TypingGame = function(_super) {
      __extends(TypingGame, _super);
      function TypingGame() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.btnPause = null;
        _this.btnResume = null;
        _this.lifeCount = 0;
        _this.retryTime = 0;
        _this.fallDuration = 0;
        _this.wordList = [];
        _this._hero = null;
        _this._keyboard = null;
        _this._statistics = null;
        _this._lanterConveyorBelt = null;
        _this._background = null;
        _this._foreground = null;
        _this._destination = null;
        _this._gameEffect = null;
        _this._settlementPass = null;
        _this._settlementFail = null;
        _this._settlementRetry = null;
        _this._canInput = false;
        _this._lives = 0;
        _this._heroRestorePosition = cc.v3();
        _this._u3dTypingGame = null;
        return _this;
      }
      TypingGame.prototype.pause = function() {
        this.scheduleOnce(function() {
          cc.game.pause();
        });
      };
      TypingGame.prototype.resume = function() {
        cc.game.resume();
      };
      TypingGame.prototype.exit = function() {
        this.node.destroy();
        this._u3dTypingGame.onExit(this.gameState);
      };
      TypingGame.prototype.onLoad = function() {
        this._hero = this.node.getComponentInChildren(Hero_1.default);
        this._keyboard = this.node.getComponentInChildren(Keyboard_1.default);
        this._statistics = this.node.getComponentInChildren(Statistics_1.default);
        this._lanterConveyorBelt = this.node.getComponentInChildren(LanternConveyorBelt_1.default);
        this._background = this.node.getComponentInChildren(LoopMap_1.default);
        this._foreground = this.node.getComponentInChildren(Foreground_1.default);
        this._destination = this.node.getComponentInChildren(Destination_1.default);
        this._gameEffect = this.node.getComponentInChildren(GameEffect_1.default);
        this._settlementPass = this.node.getComponentInChildren(SettlementPass_1.default);
        this._settlementFail = this.node.getComponentInChildren(SettlementFail_1.default);
        this._settlementRetry = this.node.getComponentInChildren(SettlementRetry_1.default);
        this._lanterConveyorBelt.callbackCurrentLanternLetter = this.onCurrentLanternLetter.bind(this);
        this._lanterConveyorBelt.callbackLanternCorrect = this.onLanternCorrect.bind(this);
        this._lanterConveyorBelt.callbackLanternWrong = this.onLanternWrong.bind(this);
        this._heroRestorePosition = this._hero.node.position;
        this.btnPause.active = true;
        this.btnResume.active = false;
        this._settlementPass.node.active = false;
        this._settlementFail.node.active = false;
        this._settlementRetry.node.active = false;
        this._settlementPass.callbackNext = this.enterNextLevel.bind(this);
        this._settlementFail.callbackNext = this.enterNextLevel.bind(this);
        this._settlementRetry.callbackRetry = this.restart.bind(this);
        this._keyboard.callbackKeyDown = this.onKeyDown.bind(this);
        this._u3dTypingGame = new U3DTypingGame_1.default();
        this._u3dTypingGame.onEnter(this.gameState);
        this.initFromConfig();
      };
      TypingGame.prototype.start = function() {
        return __awaiter(this, void 0, void 0, function() {
          return __generator(this, function(_a) {
            switch (_a.label) {
             case 0:
              this.updateDestinationPos();
              return [ 4, this._gameEffect.showCountdown() ];

             case 1:
              _a.sent();
              this._lanterConveyorBelt.focusHeadLantern();
              this._canInput = true;
              return [ 2 ];
            }
          });
        });
      };
      Object.defineProperty(TypingGame.prototype, "gameState", {
        get: function() {
          return {
            isEnd: false,
            isSuccess: false,
            retryTimes: 0,
            stars: 0,
            lives: 0,
            correctItemCount: 0,
            correctLetterCount: 0,
            correctRate: 0,
            roundDuration: 0,
            gameDuration: 0,
            roundPauseDuration: 0,
            gamePauseDuration: 0,
            speed: 0,
            letterErrors: {},
            wordErrors: {}
          };
        },
        enumerable: false,
        configurable: true
      });
      TypingGame.prototype.initFromConfig = function() {
        var data = this._u3dTypingGame.getGameData();
        if (data) {
          this._lanterConveyorBelt.wordList = data.config.words;
          this._statistics.lanternCount = data.config.words.length;
          this._statistics.lifeCount = data.config.failTimes;
          this._hero.fallDuration = data.config.timeoutMilSecond;
          this._lives = data.config.failTimes;
        } else {
          this._lanterConveyorBelt.wordList = this.wordList;
          this._statistics.lanternCount = this.wordList.length;
          this._statistics.lifeCount = this.lifeCount;
          this._hero.fallDuration = this.fallDuration;
          this._lives = this.lifeCount;
        }
      };
      TypingGame.prototype.updateDestinationPos = function() {
        var worldPos = this._lanterConveyorBelt.getTailLanternWorldPosition();
        this._destination.node.x = this._destination.node.parent.convertToNodeSpaceAR(worldPos).x + 200;
      };
      TypingGame.prototype.checkMoveMap = function() {
        var worldDestinationX = this._destination.node.convertToWorldSpaceAR(cc.v2()).x;
        var worldHeroX = this._hero.node.convertToWorldSpaceAR(cc.v2()).x;
        var criticalX = .382 * cc.winSize.width;
        var distance = Math.min(worldHeroX - criticalX, worldDestinationX + this._destination.node.width / 2 - cc.winSize.width);
        if (distance > 0) {
          this._foreground.horizontalMove(.5, -distance);
          this._background.horizontalMove(.5, .2 * -distance);
        }
      };
      TypingGame.prototype.tryRestoreHeroLife = function() {
        this._lives > 0 ? this.restoreHeroLife() : this._settlementFail.node.active = true;
      };
      TypingGame.prototype.restoreHeroLife = function() {
        this._lives--;
        this._canInput = true;
        this._statistics.deductOneLife();
        this._lanterConveyorBelt.restoreHeadLantern();
        this._hero.node.position = this._heroRestorePosition;
        var lanternNode = this._hero.node.children[0];
        if (lanternNode) {
          lanternNode.active = true;
          this._hero.restore();
        } else this._hero.ide();
      };
      TypingGame.prototype.enterNextLevel = function() {
        this._u3dTypingGame.goToNextNode();
      };
      TypingGame.prototype.restart = function() {
        this._u3dTypingGame.onRetry(this.gameState);
        cc.director.loadScene("typing_game");
      };
      TypingGame.prototype.onCurrentLanternLetter = function(letter) {
        letter && this._keyboard.showHint(letter);
      };
      TypingGame.prototype.onLanternCorrect = function(lanternNode, isEnd) {
        var _a;
        return __awaiter(this, void 0, void 0, function() {
          var oldLantern, worldPos;
          var _this = this;
          return __generator(this, function(_b) {
            switch (_b.label) {
             case 0:
              this._u3dTypingGame.vibrate(U3DTypingGame_1.VibrateStyle.Success);
              oldLantern = null === (_a = this._hero.node.children[0]) || void 0 === _a ? void 0 : _a.getComponent(Lantern_1.default);
              if (oldLantern) {
                worldPos = oldLantern.node.convertToWorldSpaceAR(cc.v2());
                oldLantern.node.parent = this.node;
                oldLantern.node.position = cc.v3(this.node.convertToNodeSpaceAR(worldPos));
                oldLantern.disappear().then(function(worldPos) {
                  return _this._gameEffect.showSmoke(worldPos);
                });
              }
              return [ 4, this._hero.catchLantern(lanternNode) ];

             case 1:
              _b.sent();
              lanternNode.position = cc.v3(this._hero.node.convertToNodeSpaceAR(lanternNode.convertToWorldSpaceAR(cc.v2())));
              lanternNode.parent = this._hero.node;
              this._heroRestorePosition = this._hero.node.position;
              this.checkMoveMap();
              this._lanterConveyorBelt.focusHeadLantern();
              this._statistics.lanternCount = this._lanterConveyorBelt.lanternCount;
              if (!(0 === this._lanterConveyorBelt.lanternCount)) return [ 3, 3 ];
              lanternNode.active = false;
              return [ 4, this._hero.arriveDestination(this._destination.node) ];

             case 2:
              _b.sent();
              this._settlementPass.isFullHealth = true;
              this._settlementPass.isHighAccuracy = true;
              this._settlementPass.node.active = true;
              this._u3dTypingGame.onSucceeded(this.gameState);
              return [ 3, 8 ];

             case 3:
              return [ 4, this._hero.fall() ];

             case 4:
              _b.sent();
              this._canInput = false;
              lanternNode.active = false;
              this._gameEffect.showBoom(lanternNode.convertToWorldSpaceAR(cc.v2()));
              return [ 4, this._hero.die() ];

             case 5:
              _b.sent();
              if (!(this._lives > 0)) return [ 3, 7 ];
              return [ 4, this._gameEffect.showRetry() ];

             case 6:
              _b.sent();
              this.restoreHeroLife();
              return [ 3, 8 ];

             case 7:
              this._settlementFail.correctRate = 33;
              this._settlementFail.node.active = true;
              this._u3dTypingGame.onFailed(this.gameState);
              _b.label = 8;

             case 8:
              return [ 2 ];
            }
          });
        });
      };
      TypingGame.prototype.onLanternWrong = function() {
        return __awaiter(this, void 0, void 0, function() {
          return __generator(this, function(_a) {
            this._u3dTypingGame.vibrate(U3DTypingGame_1.VibrateStyle.Failure);
            return [ 2 ];
          });
        });
      };
      TypingGame.prototype.onClickBtnPause = function() {
        this.btnPause.active = false;
        this.btnResume.active = true;
        this.pause();
        this._u3dTypingGame.onPause(this.gameState);
      };
      TypingGame.prototype.onClickBtnResume = function() {
        this.btnPause.active = true;
        this.btnResume.active = false;
        this.resume();
      };
      TypingGame.prototype.onClickBtnSelectLevel = function() {
        this._u3dTypingGame.onClickSelectLevelButton();
      };
      TypingGame.prototype.onKeyDown = function(key) {
        if (cc.game.isPaused() || !this._canInput) return;
        this._lanterConveyorBelt.inputLetter(key);
        this._u3dTypingGame.onKeyDown("", key, false);
      };
      __decorate([ property(cc.Node) ], TypingGame.prototype, "btnPause", void 0);
      __decorate([ property(cc.Node) ], TypingGame.prototype, "btnResume", void 0);
      __decorate([ property({
        type: cc.Integer,
        tooltip: "\u751f\u547d\u6761\u6570"
      }) ], TypingGame.prototype, "lifeCount", void 0);
      __decorate([ property({
        type: cc.Integer,
        tooltip: "\u53ef\u91cd\u8bd5\u6b21\u6570"
      }) ], TypingGame.prototype, "retryTime", void 0);
      __decorate([ property({
        type: cc.Float,
        tooltip: "\u4e0b\u843d\u65f6\u957f"
      }) ], TypingGame.prototype, "fallDuration", void 0);
      __decorate([ property({
        type: [ cc.String ],
        tooltip: "\u5355\u8bcd\u5217\u8868"
      }) ], TypingGame.prototype, "wordList", void 0);
      TypingGame = __decorate([ ccclass ], TypingGame);
      return TypingGame;
    }(cc.Component);
    exports.default = TypingGame;
    cc._RF.pop();
  }, {
    "./Destination": "Destination",
    "./Foreground": "Foreground",
    "./GameEffect": "GameEffect",
    "./Hero": "Hero",
    "./Keyboard": "Keyboard",
    "./Lantern": "Lantern",
    "./LanternConveyorBelt": "LanternConveyorBelt",
    "./LoopMap": "LoopMap",
    "./SettlementFail": "SettlementFail",
    "./SettlementPass": "SettlementPass",
    "./SettlementRetry": "SettlementRetry",
    "./Statistics": "Statistics",
    "./U3DTypingGame": "U3DTypingGame"
  } ],
  U3DTypingGame: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "3896a+IdUJC76mxaq4/55tS", "U3DTypingGame");
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.VibrateStyle = void 0;
    var VibrateStyle;
    (function(VibrateStyle) {
      VibrateStyle[VibrateStyle["Selection"] = 0] = "Selection";
      VibrateStyle[VibrateStyle["Success"] = 1] = "Success";
      VibrateStyle[VibrateStyle["Warning"] = 2] = "Warning";
      VibrateStyle[VibrateStyle["Failure"] = 3] = "Failure";
      VibrateStyle[VibrateStyle["LightImpact"] = 4] = "LightImpact";
      VibrateStyle[VibrateStyle["MediumImpact"] = 5] = "MediumImpact";
      VibrateStyle[VibrateStyle["HeavyImpact"] = 6] = "HeavyImpact";
    })(VibrateStyle = exports.VibrateStyle || (exports.VibrateStyle = {}));
    var U3DTypingGame = function() {
      function U3DTypingGame() {
        this._u3dTypingGame = null;
        this._u3dTypingGame = window["u3dTypingGame"];
        cc.log("\u83b7\u53d6u3dTypingGame", !!this._u3dTypingGame);
      }
      U3DTypingGame.prototype.getGameData = function() {
        var _a;
        cc.log("cocos\u8c03\u7528u3dTypingGame.getGameData");
        return null === (_a = this._u3dTypingGame) || void 0 === _a ? void 0 : _a.getGameData();
      };
      U3DTypingGame.prototype.goToNextNode = function() {
        var _a;
        cc.log("cocos\u8c03\u7528u3dTypingGame.goToNextNode");
        null === (_a = this._u3dTypingGame) || void 0 === _a ? void 0 : _a.goToNextNode();
      };
      U3DTypingGame.prototype.vibrate = function(style) {
        var _a;
        void 0 === style && (style = VibrateStyle.Selection);
        cc.log("cocos\u8c03\u7528u3dTypingGame.vibrate");
        null === (_a = this._u3dTypingGame) || void 0 === _a ? void 0 : _a.vibrate(style);
      };
      U3DTypingGame.prototype.onEnter = function(gameState) {
        var _a;
        cc.log("cocos\u8c03\u7528u3dTypingGame.onEnter");
        null === (_a = this._u3dTypingGame) || void 0 === _a ? void 0 : _a.onEnter(gameState);
      };
      U3DTypingGame.prototype.onExit = function(gameState) {
        var _a;
        cc.log("cocos\u8c03\u7528u3dTypingGame.onExit");
        null === (_a = this._u3dTypingGame) || void 0 === _a ? void 0 : _a.onExit(gameState);
      };
      U3DTypingGame.prototype.onPause = function(gameState) {
        var _a;
        cc.log("cocos\u8c03\u7528u3dTypingGame.onPause");
        null === (_a = this._u3dTypingGame) || void 0 === _a ? void 0 : _a.onPause(gameState);
      };
      U3DTypingGame.prototype.onSucceeded = function(gameState) {
        var _a;
        cc.log("cocos\u8c03\u7528u3dTypingGame.onSucceeded");
        null === (_a = this._u3dTypingGame) || void 0 === _a ? void 0 : _a.onSucceeded(gameState);
      };
      U3DTypingGame.prototype.onFailed = function(gameState) {
        var _a;
        cc.log("cocos\u8c03\u7528u3dTypingGame.onFailed");
        null === (_a = this._u3dTypingGame) || void 0 === _a ? void 0 : _a.onFailed(gameState);
      };
      U3DTypingGame.prototype.onRetry = function(gameState) {
        var _a;
        cc.log("cocos\u8c03\u7528u3dTypingGame.onRetry");
        null === (_a = this._u3dTypingGame) || void 0 === _a ? void 0 : _a.onRetry(gameState);
      };
      U3DTypingGame.prototype.onClickSelectLevelButton = function() {
        var _a;
        cc.log("cocos\u8c03\u7528u3dTypingGame.onClickSelectLevelButton");
        null === (_a = this._u3dTypingGame) || void 0 === _a ? void 0 : _a.onClickSelectLevelButton();
      };
      U3DTypingGame.prototype.onKeyDown = function(targetLetter, inputKey, isCorrect) {
        var _a;
        cc.log("cocos\u8c03\u7528u3dTypingGame.onKeyDown");
        null === (_a = this._u3dTypingGame) || void 0 === _a ? void 0 : _a.onKeyDown(targetLetter, inputKey, isCorrect);
      };
      return U3DTypingGame;
    }();
    exports.default = U3DTypingGame;
    cc._RF.pop();
  }, {} ]
}, {}, [ "CCTypingGame", "Destination", "Foreground", "GameEffect", "GameModel", "Hero", "Keyboard", "Lantern", "LanternConveyorBelt", "LoopMap", "SettlementFail", "SettlementPass", "SettlementRetry", "Statistics", "TypingGame", "U3DTypingGame" ]);