
import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import './MainBody.css';
import testing from '../../assets/software-testing.png';
import Body from '../Body/Body'

function MainBody() {
  const data = useSelector((state) => state.widgets);
  const dispatch = useDispatch();

  const [selectedCategory, setSelectedCategory] = useState(1);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [newWidgetName, setNewWidgetName] = useState('');
  const [newWidgetText, setNewWidgetText] = useState('');
  const [newWidgetImage, setNewWidgetImage] = useState(testing);

  const openSidebar = (categoryId) => {
    setSelectedCategory(categoryId);
    setIsSidebarOpen(true);
  };

  const closeSidebar = () => {
    setIsSidebarOpen(false);
    setNewWidgetName('');
    setNewWidgetText('');
    setNewWidgetImage(testing);
  };

  const addWidget = () => {
    const newWidget = {
      id: Date.now(),
      name: newWidgetName,
      text: newWidgetText,
      image: newWidgetImage,
    };

    dispatch({
      type: 'ADD_WIDGET',
      payload: { widget: newWidget, categoryId: selectedCategory },
    });

    closeSidebar();
  };

  const removeWidget = (widgetId, categoryId) => {
    dispatch({
      type: 'REMOVE_WIDGET',
      payload: { widgetId, categoryId },
    });
  };

  return (
    <div className="fullcontainer">
      <Body openSidebar={openSidebar} /> {/* Pass the openSidebar function as a prop */}
      
      {data.categories.map((category) => (
        <div className="section" key={category.id}>
          <div className="heading">
            <p>{category.name}</p>
          </div>
          <div className="section-value-container">
            {category.widgets.map((widget) => (
              <div className="values" key={widget.id}>
                <div className="name">
                  {widget.name}
                  {widget.id > 6 && (
                    <button
                      className="delete-button"
                      onClick={() => removeWidget(widget.id, category.id)}
                    >
                      X
                    </button>
                  )}
                </div>
                <div className="subdivide">
                  <div className="pic">
                    <img className="img" src={widget.image} alt={widget.name} />
                  </div>
                  <div className="text">{widget.text}</div>
                </div>
              </div>
            ))}
            <div className="valuesbutton">
              <button
                className="add-widget"
                onClick={() => openSidebar(category.id)}
              >
                + Add Widget
              </button>
            </div>
          </div>
        </div>
      ))}
      {isSidebarOpen && (
        <div className="sidebar">
          <div className="category-selector">
            {data.categories.map((category) => (
              <div
                key={category.id}
                className={`category-option ${
                  selectedCategory === category.id ? 'selected' : ''
                }`}
                onClick={() => setSelectedCategory(category.id)}
              >
                {category.name}
              </div>
            ))}
          </div>
          <input
            type="text"
            placeholder="Widget Name"
            value={newWidgetName}
            onChange={(e) => setNewWidgetName(e.target.value)}
          />
          <textarea
            placeholder="Widget Text"
            value={newWidgetText}
            onChange={(e) => setNewWidgetText(e.target.value)}
          />
          <div className="sidebar-buttons">
            <button onClick={addWidget}>Add Widget</button>
            <button onClick={closeSidebar}>Cancel</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default MainBody;
