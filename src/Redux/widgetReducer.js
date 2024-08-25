import image1 from '../assets/image1.png';
import image2 from '../assets/image2.png';
import image3 from '../assets/image3.png';
import image4 from '../assets/image4.png';
import image5 from '../assets/image5.png';

const initialState = {
  categories: [
    {
      id: 1,
      name: 'CPSM Executive DashBoard',
      widgets: [
        { id: 1, name: 'Cloud', text: '', image: image1 },
        { id: 2, name: 'Risk Assessment', text: '', image: image2 },
      ],
    },
    {
      id: 2,
      name: 'CWPP DashBoard',
      widgets: [
        { id: 3, name: 'Specific Alerts', text: '', image: image3 },
        { id: 4, name: 'Workload Alerts', text: '', image: image3 },
      ],
    },
    {
      id: 3,
      name: 'Registry Scan',
      widgets: [
        { id: 5, name: 'Risk Assesment', text: '', image: image4 },
        { id: 6, name: 'Security issue', text: '', image: image5 },
      ],
    },
  ],
};

function widgetReducer(state = initialState, action) {
  switch (action.type) {
    case 'ADD_WIDGET':
      return {
        ...state,
        categories: state.categories.map((category) =>
          category.id === action.payload.categoryId
            ? {
                ...category,
                widgets: [...category.widgets, action.payload.widget],
              }
            : category
        ),
      };
    case 'REMOVE_WIDGET':
      return {
        ...state,
        categories: state.categories.map((category) =>
          category.id === action.payload.categoryId
            ? {
                ...category,
                widgets: category.widgets.filter(
                  (widget) => widget.id !== action.payload.widgetId
                ),
              }
            : category
        ),
      };
    default:
      return state;
  }
}

export default widgetReducer;
