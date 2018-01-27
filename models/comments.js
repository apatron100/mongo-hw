var mongoose = require("mongoose");

var commentsSchema = new mongoose.Schema({
	articleId: {
		type: String
	},
	name: {
		type: String
	},
	comment: {
		type: String
	},
	createdAt: {
		type: Date, 
		default: Date.now
	}
});

var Comments = mongoose.model("Comentarios", commentsSchema);

module.exports = Comments;