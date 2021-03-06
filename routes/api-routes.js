const router = require('express').Router();
const db = require('../controller');

router.post('/api/tutorials', db.Course.create);
router.get('/api/tutorials', db.Course.list);
router.put('/api/tutorialsdelete', db.Course.delete);
router.get('/api/tutorials/:_id', db.Course.edit);
router.put("/api/tutorials/:id", db.Course.update);
router.get("/api/tutorials/teacher/:id", db.Course.listByTeacher);
router.get('/api/coursewithsubject', db.Course.coursewithsubject);
router.post('/api/courseidwithsubject',db.Course.courseidwithsubject)
router.post('/api/subject', db.Subject.insertupdate);
router.get('/api/subject/:_id', db.Subject.list);
router.put('/api/subjectdelete', db.Subject.delete);

module.exports = router;
