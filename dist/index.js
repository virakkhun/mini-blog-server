"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fastify_1 = __importDefault(require("fastify"));
const db_connect_1 = require("./db.connect");
const comment_route_1 = __importDefault(require("./routes/comment/comment.route"));
const post_routes_1 = __importDefault(require("./routes/post/post.routes"));
const user_routes_1 = __importDefault(require("./routes/user/user.routes"));
const server = (0, fastify_1.default)({
    logger: {
        level: "info",
        transport: {
            target: "pino-pretty",
        },
    },
});
async function main() {
    await (0, db_connect_1.DatabaseInitial)();
}
main();
server.register(user_routes_1.default);
server.register(post_routes_1.default);
server.register(comment_route_1.default);
server.listen({
    port: 8000,
}, (err, address) => {
    if (err) {
        console.log(err);
        process.exit(1);
    }
    console.log(`Server is listening on port: ${address}`);
});
//# sourceMappingURL=index.js.map