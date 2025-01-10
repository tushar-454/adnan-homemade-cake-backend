import { NextFunction, Request, Response } from 'express';
import { findCategoryByProperty } from '../../services/category/find_category_by_property';

const updateCategory = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
	try {
		const { categoryId } = req.params;
		const { name, photo } = req.body;
		const category = await findCategoryByProperty('_id', categoryId);
		if(!category) {
			res.status(400).json({
				success: false,
				error: 'Resource not found'
			})
			return;
		}
		category.name = name ?? category.name;
		category.photo = photo ?? category.photo;
		const result = await category.save();
		console.log(result);
	} catch(error) { 
		next(error);
	}

}

export {updateCategory}