import React, {useState} from 'react';
import {useParams} from 'react-router-dom';

const WidgetSettings = () => {
  const {widgetId} = useParams();
  const [settings, setSettings] = useState({
    title: '',
    showTitle: true,
    refreshInterval: 30,
  });

  const handleChange = (e) => {
    const {name, value, type, checked} = e.target;
    setSettings((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Settings saved for widget ${widgetId}: ${JSON.stringify(settings, null, 2)}`);
  };

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white shadow rounded-lg mt-8">
      <h1 className="text-2xl font-bold mb-6">settings <span className="text-blue-600">{widgetId}</span></h1>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium">title</label>
          <input
            type="text"
            name="title"
            value={settings.title}
            onChange={handleChange}
            className="mt-1 block w-full border rounded p-2"
            placeholder="Введите заголовок"
          />
        </div>

        <div className="flex items-center">
          <input
            type="checkbox"
            name="showTitle"
            checked={settings.showTitle}
            onChange={handleChange}
            className="mr-2"
          />
          <label htmlFor="showTitle">view title </label>
        </div>

        <div>
          <label className="block text-sm font-medium">Interval</label>
          <select
            name="refreshInterval"
            value={settings.refreshInterval}
            onChange={handleChange}
            className="mt-1 block w-full border rounded p-2"
          >
            <option value={15}>15 сек</option>
            <option value={30}>30 сек</option>
            <option value={60}>60 сек</option>
          </select>
        </div>

        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
        >
          save
        </button>
      </form>
    </div>
  );
};

export default WidgetSettings;
