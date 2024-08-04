export default function FormItem() {
    return (
        <form className="space-y-4">
            <div className="space-y-2">
                <label htmlFor="name" className="text-sm font-medium">Name</label>
                <input
                    type="text"
                    id="name"
                    placeholder="Item Name"
                    className="w-full px-3 py-2 border rounded-md"
                />
            </div>
            <div className="space-y-2">
                <label htmlFor="description" className="text-sm font-medium">Description</label>
                <textarea
                    id="description"
                    placeholder="Item Description"
                    rows={3}
                    className="w-full px-3 py-2 border rounded-md"
                ></textarea>
            </div>
            <div className="space-y-2">
                <label htmlFor="image" className="text-sm font-medium">Image URL</label>
                <input
                    type="text"
                    id="image"
                    placeholder="Item Image URL"
                    className="w-full px-3 py-2 border rounded-md"
                />
            </div>
            <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                    <label htmlFor="price" className="text-sm font-medium">Price (in cents)</label>
                    <input
                        type="number"
                        id="price"
                        placeholder="Item Price"
                        className="w-full px-3 py-2 border rounded-md"
                    />
                </div>
                <div className="space-y-2">
                    <label htmlFor="category" className="text-sm font-medium">Category</label>
                    <input
                        type="text"
                        id="category"
                        placeholder="Item Category"
                        className="w-full px-3 py-2 border rounded-md"
                    />
                </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                    <label htmlFor="quantity" className="text-sm font-medium">Quantity</label>
                    <input
                        type="number"
                        id="quantity"
                        placeholder="Item Quantity"
                        defaultValue={1}
                        min={1}
                        className="w-full px-3 py-2 border rounded-md"
                    />
                </div>
                <div className="flex items-center space-x-2">
                    <input
                        type="checkbox"
                        id="inStock"
                        defaultChecked={true}
                        className="h-4 w-4 text-blue-600 border-gray-300 rounded"
                    />
                    <label htmlFor="inStock" className="text-sm font-medium">In Stock</label>
                </div>
            </div>
            <button
                type="submit"
                className="w-full px-4 py-2 text-white bg-blue-600 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            >
                Add Item
            </button>
        </form>
    );
}