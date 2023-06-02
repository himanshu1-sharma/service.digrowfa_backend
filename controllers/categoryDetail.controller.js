const CategoryDetail = require("../models/CategoryDetail.model");
const Category = require("../models/Category.model")

exports.createCategoryDetail = async (req, res) => {
    try {
        const {
            categoryId,
            theme,
            headerTitle,
            headerSubtitle,
            headerDescription,
            overviewTitleOne,
            overviewDescriptionOne,
            overviewTitleTwo,
            overviewDescriptionTwo,
            companyTitle,
            aboutTitle,
            aboutDescription,
            serviceTitle,
            serviceDescription,
            stepsTitle,
            setps,
            resultTitle,
            resultDescription,
            resultTagLine,
            created_ts
        } = req.body;

        let categoryDetail = new CategoryDetail({
            categoryId,
            theme,
            header: {
                video: req.files && req.files["video"] ? req.files["video"][0].location : null,
                title: headerTitle,
                subtitle: headerSubtitle,
                description: headerDescription,
            },
            overview: {
                titleOne: overviewTitleOne,
                descriptionOne: overviewDescriptionOne,
                titleTwo: overviewTitleTwo,
                descriptionTwo: overviewDescriptionTwo,
                overviewImage: req.files && req.files["overviewImage"] ? req.files["overviewImage"][0].location : null,
            },
            company: {
                companyTitle,
                aboutTitle,
                aboutDescription,
                serviceTitle,
                serviceDescription,
                companyImage: req.files && req.files["companyImage"] ? req.files["companyImage"][0].location : null,
            },
            workingprocess: {
                title: stepsTitle,
                setps: setps ? JSON.parse(setps) : [],
                workingprocessImage: req.files && req.files["workingprocessImage"] ? req.files["workingprocessImage"][0].location : null,
            },
            result: {
                title: resultTitle,
                description: resultDescription,
                tagLine: resultTagLine,
                resultImage: req.files && req.files["resultImage"] ? req.files["resultImage"][0].location : null,
            },
            created_ts

        })
        categoryDetail = await categoryDetail.save()
        console.log(categoryDetail)
        return res.status(201).json({
            errorcode: 0,
            status: true,
            message: "Category detail added successfully",
            data: categoryDetail
        })
    } catch (error) {
        console.log(error)
        return res.status(204).json({
            errorcode: 5,
            status: false,
            message: error.message,
            data: error,
        });
    }
};

exports.getCategoryDetailById = async (req, res) => {
    try {
        const { id } = req.params
        let categoryDetail = await CategoryDetail.find({ categoryId: id }).populate([
            {
                path: "categoryId",
                model: "Category",
                select: "name image",
            }
        ])

        // let category = await Category.findById(id)
        if (!categoryDetail) return res.status(404).json({
            errorcode: 2,
            status: true,
            message: "Category not found",
            data: null
        })
        return res.status(200).json({
            errorcode: 0,
            status: true,
            message: "Category Detail found",
            data: categoryDetail
        })
    } catch (error) {
        console.log(error)
        return res.status(204).json({
            errorcode: 5,
            status: false,
            message: error.message,
            data: error,
        });
    }
}

exports.updateCategoryDetailById = async (req, res) => {
    try {
        let {
            categoryId,
            theme,
            headerTitle,
            headerSubtitle,
            headerDescription,
            overviewTitleOne,
            overviewDescriptionOne,
            overviewTitleTwo,
            overviewDescriptionTwo,
            companyTitle,
            aboutTitle,
            aboutDescription,
            serviceTitle,
            serviceDescription,
            stepsTitle,
            setps,
            resultTitle,
            resultDescription,
            resultTagLine
        } = req.body;

        if (!categoryId) return res.status(403).json({
            errorcode: 1,
            status: false,
            message: "Category Id should be Present",
            data: null
        })
        console.log("categoryId", categoryId)
        let editCategoryDetail = await CategoryDetail.findOneAndUpdate({ categoryId })
        if (!editCategoryDetail) return res.status(404).json({
            errorcode: 2,
            status: false,
            msg: "Category not found",
            data: null,
        })
        editCategoryDetail.theme = theme ? theme : editCategoryDetail.theme
        editCategoryDetail.header.video = req.files && req.files["video"] ? req.files["video"][0].location : editCategoryDetail.header.video
        editCategoryDetail.header.title = headerTitle ? headerTitle : editCategoryDetail.header.headerTitle
        editCategoryDetail.header.subtitle = headerSubtitle ? headerSubtitle : editCategoryDetail.header.headerSubtitle
        editCategoryDetail.header.description = headerDescription ? headerDescription : editCategoryDetail.header.headerDescription

        editCategoryDetail.overview.titleOne = overviewTitleOne ? overviewTitleOne : editCategoryDetail.overview.overviewTitleOne
        editCategoryDetail.overview.descriptionOne = overviewDescriptionOne ? overviewDescriptionOne : editCategoryDetail.overview.overviewDescriptionOne
        editCategoryDetail.overview.titleTwo = overviewTitleTwo ? overviewTitleTwo : editCategoryDetail.overview.overviewTitleTwo
        editCategoryDetail.overview.descriptionTwo = overviewDescriptionTwo ? overviewDescriptionTwo : editCategoryDetail.overview.overviewDescriptionTwo
        editCategoryDetail.overview.overviewImage = req.files && req.files["overviewImage"] ? req.files["overviewImage"][0].location : editCategoryDetail.overview.overviewImage

        editCategoryDetail.company.companyTitle = companyTitle ? companyTitle : editCategoryDetail.company.companyTitle
        editCategoryDetail.company.aboutTitle = aboutTitle ? aboutTitle : editCategoryDetail.company.aboutTitle
        editCategoryDetail.company.aboutDescription = aboutDescription ? aboutDescription : editCategoryDetail.company.aboutDescription
        editCategoryDetail.company.serviceTitle = serviceTitle ? serviceTitle : editCategoryDetail.company.serviceTitle
        editCategoryDetail.company.serviceDescription = serviceDescription ? serviceDescription : editCategoryDetail.company.serviceDescription
        editCategoryDetail.company.companyImage = req.files && req.files["companyImage"] ? req.files["companyImage"][0].location : editCategoryDetail.company.companyImage

        editCategoryDetail.workingprocess.title = stepsTitle ? stepsTitle : editCategoryDetail.workingprocess.stepsTitle
        editCategoryDetail.workingprocess.setps = setps.length !== 0 ? JSON.parse(setps) : editCategoryDetail.workingprocess.setps
        editCategoryDetail.workingprocess.workingprocessImage = req.files && req.files["workingprocessImage"] ? req.files["workingprocessImage"][0].location : editCategoryDetail.workingprocess.workingprocessImage

        editCategoryDetail.result.title = resultTitle ? resultTitle : editCategoryDetail.result.resultTitle
        editCategoryDetail.result.description = resultDescription ? resultDescription : editCategoryDetail.result.resultDescription
        editCategoryDetail.result.tagLine = resultTagLine ? resultTagLine : editCategoryDetail.result.resultTagLine
        editCategoryDetail.result.resultImage = req.files && req.files["resultImage"] ? req.files["resultImage"][0].location : editCategoryDetail.result.resultImage
        // console.log("editCategoryDetail", editCategoryDetail)

        let data = await editCategoryDetail.save()

        console.log("data", data)

        return res.status(200).json({
            errorcode: 0,
            status: false,
            message: "Category Detail edit successfully",
            data: data
        })
    } catch (error) {
        console.log("error", error)
        return res.status(204).json({
            errorcode: 5,
            status: false,
            message: error.message,
            data: error
        })
    }
}

