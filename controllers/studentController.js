import Student from "../models/Student.js";

class StudentController {

    static createDoc = async (req, res) => {
        try {
            const { name, age, fees } = req.body;
            if (!name || !age || !fees) {
                return res.redirect('/student');
            }
            const data = new Student({ name, age, fees });
            await data.save();
            res.redirect("/student");
        } catch (err) {
            res.send(err);
        }
    }

    static editDoc = async (req, res) => {
        try {
            const { id } = req.params;
            const data = await Student.findById(id);
            res.render('edit', {data, document:"Edit"});
        }catch(err){
            res.send(err);
        }
    }

    static updateDocById = async (req, res) => {
        try{
            console.log(req.body);
            await Student.findByIdAndUpdate(req.params.id, req.body);
            res.redirect("/student");
        }catch(err){
            res.send(err);
        }
    }

    static deleteDocById = async (req, res) => {
        try{
            await Student.findByIdAndDelete(req.params.id);
            res.redirect("/student");
        }catch(err){
            res.send(err);
        }
    }

    static getAllDoc = async (req, res) => {
        try {
            const result = await Student.find({});
            res.render('index', { data: result, document: "Student System"});
        } catch (err) {
            res.send(err);
        }
    }

}

export default StudentController;