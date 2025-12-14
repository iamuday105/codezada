const Section = require("../models/Section");
const Course = require ("../models/Course");

exports.createSection = async (req, res) => {
    try{
        // date fetch
        const {sectionName, courseId} = req.body;
        // data validation
        if(!sectionName || !courseId){
            return res.status(400).json({
                success:false,
                message:"Missing properies",
            })
        }
        // create section
        const newSection = await Section.create({sectionName})
        // update course with section objectID
        const updatedCourseDetails = await Course.findByIdAndUpdate(
                                                courseId,
                                     {
                                        $push:{
                                            courseContent:newSection._id,
                                        }
                                    },
                                    {new:true}
                                    )
        // HW: use populate to replace sections/sub-sections both in the updatedCourseDetails

        // return response
        return res.status(200).json({
            success:true,
            message:"Section created successfully"
        })

    }catch(error){
        console.log(error);
        return res.status(500).json({
            success:false,
            message:"Failed to create a section"
        })
    }   
}

exports.updateSection = async (req, res) => {
    try{
        // fetch data
        const {sectionName, sectionId} = req.body;

        // date validation 
        if(!sectionName || !sectionId){
            return res.status(400).json({
                success:false,
                message:"Missing properies",
            })
        }
        // udate data
        const section = await Section.findByIdAndUpdate(sectionId, {sectionName}, {new:true});
        // return response

        return res.status(200).json({
            success:true,
            message:"Section updated successfully"
        })



    }catch(error){
        console.log(error);
        return res.status(500).json({
            success:false,
            message:"Failed to update a section"
        })
    }   
    
}

exports.deleteSection = async (req, res) => {
    try{
        // fetch data 
        const {sectionId} = req.body;

        // delete data using findBYIdAndDelete
        const section = await Section.findByIdAndDelete(sectionId);

        // TODO(Testing): Do we need to delete the entry form course schema 
        // return response

        return res.status(200).json({
            success:true,
            message:"Section deleted successfully"
        })

    }catch(error){
        console.log(error);
        return res.status(500).json({
            success:false,
            message:"Failed to delete a section"
        })

    }
}