import mongoose from 'mongoose'

const ProductSchema = new mongoose.Schema({
	name:{
		type: String,
		trim: true,
		required: 'Name is required'
	},
	price:{
		type:Number,
		min: 0
	},
	quantity:{
		type:Number,
		min:0
	}
})

export default mongoose.model('Product', ProductSchema)
