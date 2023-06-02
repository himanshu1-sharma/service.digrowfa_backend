const Category = require("../models/Category.model")

exports.createCategory = async (req, res) => {
    try {
        let { name, created_ts } = req.body;
        let categoryExist = await Category.findOne({ name: name })
        if (categoryExist) return res.status(403).json({
            errorcode: 2,
            status: false,
            message: "Category already exists",
            data: null
        })
        let category = new Category({
            image: req.file && req.file.location ? req.file.location : null,
            name,
            created_ts
        })
        category = await category.save();
        return res.status(201).json({
            errorcode: 0,
            status: true,
            message: "Category added successfully",
            data: category
        })
    } catch (error) {
        console.log("error", error.message)
        return res.status(204).json({
            errorcode: 5,
            status: false,
            message: error.message,
            data: error
        })

    }
}

exports.getAllCategory = async (req, res) => {
    try {
        let categoryList = await Category.find({}).sort({ created_ts: -1 })
        return res.status(200).json({
            errorcode: 0,
            status: true,
            message: "Get all category successfully",
            data: categoryList
        })
    } catch (error) {
        return res.status(204).json({
            errorcode: 5,
            status: false,
            message: error.message,
            data: error
        })
    }
}

exports.deleteCategory = async (req, res) => {
    try {
        let { categoryId } = req.params
        if (!categoryId) return res.status(403).json({
            errorcode: 1,
            status: false,
            message: "Category Id should be Present",
            data: null
        })
        let categories = await Category.findById({ _id: categoryId })
        if (!categories) return res.status(404).json({
            errorcode: 2,
            status: false,
            message: "Category not found",
            data: null
        })
        await Category.deleteOne({ _id: categoryId })
        return res.status(200).json({
            errorcode: 0,
            status: true,
            message: "Category deleted successfully",
            data: null
        })

    } catch (error) {
        return res.status(204).json({
            errorcode: 5,
            status: false,
            message: error.message,
            data: error
        })
    }
}

exports.editCategory = async (req, res) => {
    try {
        let { categoryId, name } = req.body
        if (!categoryId) return res.status(403).json({
            errorcode: 1,
            status: false,
            message: "Category Id should be Present",
            data: null
        })
        let editCategory = await Category.findById(categoryId)
        if (!editCategory) return res.status(404).json({
            errorcode: 2,
            status: false,
            message: "Category not found",
            data: null
        })
        editCategory.name = name ? name : editCategory.name
        editCategory.image = req.file && req.file.location ? req.file.location : editCategory.image
        await editCategory.save()
        return res.status(200).json({
            errorcode: 0,
            status: false,
            message: "Category edit successfully",
            data: editCategory
        })
    } catch (error) {
        return res.status(204).json({
            errorcode: 5,
            status: false,
            message: error.message,
            data: error
        })
    }
}