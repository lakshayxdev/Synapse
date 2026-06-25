const Note=require("../models/noteModel");
const mongoose=require("mongoose");
const groq=require("../utils/groq");


// Creating Notes
const createNote = async (req, res) => {
  try {
    const { title, content } = req.body;

    if (!title || !content) {
      return res.status(400).json({
        success: false,
        message: "Title and content are required",
      });
    }

    const note = await Note.create({
      title: title.trim(),
      content: content.trim(),
      user: req.userId,
    });

    res.status(201).json({
      success: true,
      message: "Note created successfully",
      note,
    });
  } catch (error) {
    console.log(error);

    res.status(500).json({
      success: false,
      message: "Server Error",
    });
  }
};

// Get all Notes
const getNotes = async (req, res) => {
  try {
    const notes = await Note.find({
      user: req.userId,
    }).sort({ 
        isPinned: -1,
        createdAt: -1 });

    res.status(200).json({
      success: true,
      count: notes.length,
      notes,
    });
  } catch (error) {
    console.log(error);

    res.status(500).json({
      success: false,
      message: "Server Error",
    });
  }
};

// Get single Note
const getSingleNote = async (req, res) => {
  try {
    const note = await Note.findOne({
      _id: req.params.id,
      user: req.userId,
    });

    if (!note) {
      return res.status(404).json({
        success: false,
        message: "Note not found",
      });
    }

    res.status(200).json({
      success: true,
      note,
    });
  } catch (error) {
    console.log(error);

    res.status(500).json({
      success: false,
      message: "Server Error",
    });
  }
};

// Update Note
const updateNote = async (req, res) => {
  try {
    const { title, content } = req.body;

    if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
      return res.status(400).json({
        success: false,
        message: "Invalid note ID",
      });
    }

    const note = await Note.findOne({
      _id: req.params.id,
      user: req.userId,
    });

    if (!note) {
      return res.status(404).json({
        success: false,
        message: "Note not found",
      });
    }

    note.title = title || note.title;
    note.content = content || note.content;

    note.summary="";
    await note.save();

    res.status(200).json({
      success: true,
      message: "Note updated successfully",
      note,
    });
  } catch (error) {
    console.log(error);

    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// Delete Note
const deleteNote = async (req, res) => {
  try {
    if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
      return res.status(400).json({
        success: false,
        message: "Invalid note ID",
      });
    }

    const note = await Note.findOne({
      _id: req.params.id,
      user: req.userId,
    });

    if (!note) {
      return res.status(404).json({
        success: false,
        message: "Note not found",
      });
    }

    await note.deleteOne();

    res.status(200).json({
      success: true,
      message: "Note deleted successfully",
    });
  } catch (error) {
    console.log(error);

    res.status(500).json({
      success: false,
      message: "Server Error",
    });
  }
};

// Toggle pinned and unpinned
const togglePinNote = async (req, res) => {
  try {
    const note = await Note.findOne({
      _id: req.params.id,
      user: req.userId,
    });

    if (!note) {
      return res.status(404).json({
        success: false,
        message: "Note not found",
      });
    }

    note.isPinned = !note.isPinned;

    await note.save();

    res.status(200).json({
      success: true,
      message: note.isPinned
        ? "Note pinned"
        : "Note unpinned",
      note,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Server Error",
    });
  }
};

// Search Note
const searchNotes = async (req, res) => {
  try {
    const { query } = req.query;

    if (!query || !query.trim()) {
      return res.status(400).json({
        success: false,
        message: "Search query is required",
      });
    }

    const notes = await Note.find({
      user: req.userId,

      $or: [
        {
          title: {
            $regex: query,
            $options: "i",
          },
        },
        {
          content: {
            $regex: query,
            $options: "i",
          },
        },
      ],
    }).sort({ updatedAt: -1 });

    res.status(200).json({
      success: true,
      count: notes.length,
      notes,
    });
  } catch (error) {
    console.log(error);

    res.status(500).json({
      success: false,
      message: "Server Error",
    });
  }
};

// Toggle Favourite
const toggleFavourite = async (req, res) => {
  try {
    const note = await Note.findOne({
      _id: req.params.id,
      user: req.userId,
    });

    if (!note) {
      return res.status(404).json({
        success: false,
        message: "Note not found",
      });
    }

    note.isFavourite = !note.isFavourite;

    await note.save();

    res.status(200).json({
      success: true,
      message: note.isFavourite
        ? "Note Favourite"
        : "Note not Favourite",
      note,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// Toggle Archived
const toggleArchived = async (req, res) => {
  try {
    const note = await Note.findOne({
      _id: req.params.id,
      user: req.userId,
    });

    if (!note) {
      return res.status(404).json({
        success: false,
        message: "Note not found",
      });
    }

    note.isArchived = !note.isArchived;

    await note.save();

    res.status(200).json({
      success: true,
      message: note.isArchived
        ? "Note is Archived"
        : "Note is not Archived",
      note,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// Summarize Note
const summarizeNote = async (req, res) => {
  try {
    const noteId = req.params.id;

    if (!mongoose.Types.ObjectId.isValid(noteId)) {
      return res.status(400).json({
        success: false,
        message: "Invalid note ID",
      });
    }

    const note = await Note.findOne({
      _id: noteId,
      user: req.userId,
    });

    if (!note) {
      return res.status(404).json({
        success: false,
        message: "Note not found",
      });
    }

    if (!note.content || !note.content.trim()) {
      return res.status(400).json({
        success: false,
        message: "Note content is empty",
      });
    }

    const completion =
  await groq.chat.completions.create({
    model: "llama-3.3-70b-versatile",

    messages: [
      {
        role: "system",
        content: `
You are an expert AI note summarizer.

Your task is to summarize the user's note into a concise, high-quality study summary.

Rules:

* Return ONLY bullet points.
* Generate exactly 4-5 bullet points.
* Each bullet should be 20–30 words long.
* Focus only on the most important concepts, ideas, decisions, or takeaways.
* Merge related information instead of creating many small points.
* Ignore examples, repetition, filler, and minor implementation details unless they are essential.
* Use clear and professional language suitable for quick revision.
* Make each bullet meaningful enough that the user can understand the key idea without reading the original note.
* Preserve important technical terms, framework names, APIs, and keywords exactly as written.
* Do not add any introduction, conclusion, headings, numbering, or markdown formatting other than bullet points.
* If the note is very short, return only 2–3 bullet points instead of forcing five.

Return only the final summary.

        `,
      },
      {
        role: "user",
        content: `
Summarize the following note:

${note.content}
        `,
      },
    ],

    temperature: 0.1,
  });

let summary =
  completion.choices[0].message.content.trim();

summary = summary
  .split("\n")
  .filter(line => line.trim())
  .map(line => {
    line = line.replace(/^[-*•]\s*/, "");
    return `• ${line}`;
  })
  .join("\n");


note.summary = summary;

await note.save();

    return res.status(200).json({
      success: true,
      summary,
    });
  } catch (error) {
    console.error(error);

    return res.status(500).json({
      success: false,
      message: "Failed to generate summary",
    });
  }
};

// Notes Stats
const getStats = async (req, res) => {
  try {
    const totalNotes=await Note.countDocuments({
      user: req.userId,

    });

    const favouriteNotes=await Note.countDocuments({
      user: req.userId,
      isFavourite: true,
    });

    const pinnedNotes=await Note.countDocuments({
      user: req.userId,
      isPinned: true,
    });

    const archivedNotes=await Note.countDocuments({
      user: req.userId,
     isArchived: true,
    });

    res.status(200).json({
      totalNotes,
      favouriteNotes,
      archivedNotes,
      pinnedNotes
    });

  }
  catch(error) {
    console.log(error);
    return res.status(500).json({
      success: "false",
      message: error.message,
    });
  }
}

module.exports = {
  createNote, getNotes, getSingleNote, updateNote, deleteNote, togglePinNote, searchNotes, toggleArchived, toggleFavourite, summarizeNote, getStats
};