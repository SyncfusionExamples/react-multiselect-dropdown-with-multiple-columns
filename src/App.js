import './App.css';
import { MultiSelectComponent } from '@syncfusion/ej2-react-dropdowns';

function App() {
   // define the JSON of data
 const productsData = [
  {ProductID: 1, ProductName: 'Chai', UnitPrice: 18, UnitsInStock: 39},
  {ProductID: 2, ProductName: 'Chang', UnitPrice: 19, UnitsInStock: 45},
  {ProductID: 3, ProductName: 'Aniseed Syrup', UnitPrice: 23, UnitsInStock: 79},
  {ProductID: 4, ProductName: 'Chef Anton Cajun Seasoning', UnitPrice: 28, UnitsInStock: 28},
  {ProductID: 5, ProductName: 'Gumbo Mix', UnitPrice: 11, UnitsInStock: 50},
  {ProductID: 6, ProductName: 'Grandma Boysenberry', UnitPrice: 37, UnitsInStock: 49},
  {ProductID: 7, ProductName: 'Northwoods Cranberry Sauce', UnitPrice: 23, UnitsInStock: 91},
  {ProductID: 8, ProductName: 'Mishi Kobe Niku', UnitPrice: 32, UnitsInStock: 16},
  {ProductID: 9, ProductName: 'Ikura', UnitPrice: 80, UnitsInStock: 29},
  {ProductID: 10, ProductName: 'Uncle Bob Organic Dried Pears', UnitPrice: 26, UnitsInStock: 32},
  {ProductID: 11, ProductName: 'Organic Dried Pears', UnitPrice: 29, UnitsInStock: 19}
];
// maps the appropriate column to fields property
const fields = { text: 'ProductName', value: 'ProductID' };
 // set the value to header template
 function headerTemplate(data) {
  return (<table><tr><th className='e-text-center'>ProductID</th><th>Product Name</th><th className='e-text-center'>Unit Price</th><th className='e-text-center'>Units In Stock</th></tr></table>);
}
// set the value to item template
function itemTemplate(data) {
  return (<table><tbody><tr><td className='e-text-center'>{data.ProductID}</td><td>{data.ProductName}</td><td className='e-text-center'>{data.UnitPrice}</td><td className='e-text-center'>{data.UnitsInStock}</td></tr></tbody></table>);
}
return (
// specifies the tag for render the MultiSelect component
<div id="default" className='center' style={{ width: '500px'}}>
<MultiSelectComponent placeholder="Select the products" floatLabelType="auto" cssClass='e-multi-column' headerTemplate={headerTemplate} itemTemplate={itemTemplate} dataSource={productsData} fields={fields} />
</div>
);
}

export default App;
