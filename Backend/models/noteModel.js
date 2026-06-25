const mongoose = require("mongoose");

const noteSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
      maxlength: 100,
    },

    content: {
      type: String,
      required: true,
      trim: true,
    },

    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },

    isPinned: {
      type: Boolean,
      default: false,
    },
    
    isFavourite: {
        type: Boolean,
        default: false,
    },

    isArchived: {
        type: Boolean,
        default: false,
    },

    summary: {
       type: String,
       default: ""
},
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Note", noteSchema);