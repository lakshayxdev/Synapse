const express=require("express");
const {createNote, 
       getNotes, 
       getSingleNote, 
       updateNote, 
       deleteNote, 
       togglePinNote, 
       searchNotes, 
       toggleArchived, 
       toggleFavourite,
       summarizeNote,
       getStats
    }=require("../controllers/noteController");
const protect=require("../middleware/authMiddleware");

const router=express.Router();

router.post("/", protect, createNote);
router.get("/", protect, getNotes);
router.get("/search", protect, searchNotes);
router.get("/stats", protect, getStats);

router.get("/:id", protect, getSingleNote);
router.put("/:id", protect, updateNote);
router.delete("/:id", protect, deleteNote);
router.patch("/:id/pin", protect, togglePinNote);
router.patch("/:id/favourite", protect, toggleFavourite);
router.patch("/:id/archive", protect, toggleArchived);
router.post("/:id/summarize", protect, summarizeNote);


module.exports = router;