import React from 'react';
import {useParams} from "react-router-dom";

const WidgetSettings = () => {
  const {widgetId} = useParams();
  return <div>Settings for widget {widgetId}</div>;
};

export default WidgetSettings;