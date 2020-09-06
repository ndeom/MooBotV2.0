"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var dotenv = __importStar(require("dotenv"));
dotenv.config();
var discord_js_1 = require("discord.js");
var client = new discord_js_1.Client();
var cmdPrefix = "!";
client.on("message", function (message) {
    var _a;
    // If message author is bot return
    if (message.author.bot)
        return;
    // If message content doesn't start with the command prefix return
    if (!message.content.startsWith(cmdPrefix))
        return;
    var cmdBody = message.content.slice(cmdPrefix.length);
    var args = cmdBody.split(" ");
    var command = (_a = args.shift()) === null || _a === void 0 ? void 0 : _a.toLowerCase();
    switch (command) {
        case "ping":
            message.reply("Pong!");
            break;
        case "time":
            message.reply("The current time is " + Date.now());
            break;
        case "oi":
            message.reply("https://i.kym-cdn.com/photos/images/original/001/861/981/b24.png");
        default:
            return;
    }
});
client.login(process.env.BOT_TOKEN);
